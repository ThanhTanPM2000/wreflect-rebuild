import logger from '../logger';
import {
  sortAssessmentsByEnum,
  getAssessmentArgs,
  getAssessmentsArg,
  orderWithEnum,
  createAssessmentType,
  submitDoPersonalReflection,
} from '../apollo/TypeDefs/Assessment/assessmentTypes';
import error from './../errorsManagement';
import prisma from './../prisma';
import { checkIsMemberOfTeam, checkIsMemberOwningTeam } from './essential';
import _, { result } from 'lodash';
import fs from 'fs';
import moment from 'moment';

export const createAssessment = async (meId: string, args: createAssessmentType) => {
  const memberOwnedTeam = await checkIsMemberOwningTeam(args?.teamId, meId);
  const evaluations = args?.memberIds?.map((memberId) => ({
    assessorId: memberId,
    isSubmit: false,
    results: {
      create: args?.memberIds?.map((y) => ({
        concerningMemberId: y,
        answerOnCriteriaList: {
          create: args?.criteriaList?.map((criteriaId) => ({
            criteriaId: criteriaId,
          })),
        },
      })),
    },
  }));

  const assessment = await prisma.assessment?.create({
    data: {
      teamId: args?.teamId,
      creatorId: memberOwnedTeam?.id,
      status:
        moment() < moment(args?.startDate).startOf('day')
          ? 'Planned'
          : // : moment() > moment(args?.endDate).endOf('days')
            // ? 'Complete'
            'Doing',
      name: args?.nameAssessment,
      startDate: new Date(new Date(args?.startDate).setHours(0, 0, 0, 0)),
      endDate: new Date(new Date(args?.endDate).setHours(23, 59, 59, 999)),
      evaluations: {
        create: [...evaluations],
      },
    },
    include: {
      evaluations: true,
    },
  });

  const userIdList = await prisma?.member?.findMany({
    where: {
      id: {
        in: args?.memberIds,
      },
    },
    select: {
      userId: true,
    },
  });

  const team = await prisma?.team?.findUnique({
    where: {
      id: args?.teamId,
    },
  });

  const creatingRemiderNoti = await prisma.remiderNotification?.create({
    data: {
      sentBy: meId,
      sendTo: [...userIdList?.map((x) => x?.userId)],
      dateSent: new Date(assessment?.startDate?.setHours(0, 0, 0, 0)),
      title: `${assessment?.name} of ${team?.name} is starting now`,
      description: `${moment(assessment?.startDate).format('DD/MM/YYYY')}`,
    },
  });

  if (creatingRemiderNoti) logger?.info('System Create Remider Noti Successfully');

  return assessment;
};

export const updatingAssessment = async (
  meId: string,
  args: { teamId: string; assessmentId: string; assessmentName: string },
) => {
  await checkIsMemberOwningTeam(args?.teamId, meId);

  const updatingAssessment = await prisma?.assessment?.update({
    where: {
      id: args?.assessmentId,
    },
    data: {
      name: args?.assessmentName,
    },
  });

  return updatingAssessment;
};

export const deleteAssessment = async (meId: string, args: { teamId: string; assessmentId: string }) => {
  await checkIsMemberOwningTeam(args?.teamId, meId);

  const deletingAssessment = await prisma.assessment.delete({
    where: {
      id: args?.assessmentId,
    },
  });

  return deletingAssessment;
};

export const getAssessments = async (
  meId: string,
  teamId: string,
  isGettingAll = false,
  search = '',
  sortBy: sortAssessmentsByEnum = sortAssessmentsByEnum.DATE,
  orderWith: orderWithEnum = orderWithEnum.DESC,
  page = 1,
  size = 10,
) => {
  const memberOfTeam = await checkIsMemberOfTeam(teamId, meId);

  const where =
    memberOfTeam?.isSuperOwner || memberOfTeam?.isOwner
      ? undefined
      : {
          evaluations: {
            some: {
              assessorId: memberOfTeam?.id,
            },
          },
        };

  const assessments = await prisma.assessment.findMany({
    where: {
      teamId: teamId,
      ...where,
      name: {
        contains: search,
        mode: 'insensitive',
      },
    },
    ...(!isGettingAll && { skip: (page - 1) * size }),
    ...(!isGettingAll && { take: size }),
    orderBy: {
      [sortBy]: orderWith,
    },
    include: {
      creator: true,
      evaluations: {
        include: {
          assessor: true,
          results: {
            include: {
              concerningMember: true,
              answerOnCriteriaList: {
                include: {
                  criteria: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const total = await prisma.assessment.count({
    where: {
      teamId: teamId,
      ...where,
      name: {
        contains: search || undefined,
      },
    },
  });

  return {
    data: assessments,
    total,
    page: page,
    size: size,
  };
};

export const getAssessment = async (meId: string, args: getAssessmentArgs) => {
  const memberOfTeam = await checkIsMemberOfTeam(args?.teamId, meId);

  const where =
    memberOfTeam?.isSuperOwner || memberOfTeam?.isOwner
      ? undefined
      : {
          assessmentId: args?.assessmentId,
          assessorId: memberOfTeam?.id,
        };

  const assessment = await prisma.assessment.findUnique({
    where: {
      id: args?.assessmentId,
    },
    include: {
      evaluations: {
        where: { ...where },
        include: {
          assessor: true,
          results: {
            include: {
              concerningMember: true,
              answerOnCriteriaList: {
                include: {
                  criteria: true,
                },
                orderBy: {
                  criteriaId: 'asc',
                },
              },
            },
            orderBy: {
              concerningMemberId: 'asc',
            },
          },
        },
      },
    },
  });

  if (!assessment) return error.NotFound('Assessment Not Found!');

  return assessment;
};

// export const getListAssessmentOnCriteriaList = async (assessmentId: string) => {
//   const assessmentOnCriteriaList = await prisma.assessmentOnCriteria.findMany({
//     where: {
//       assessmentId,
//     },
//   });

//   return assessmentOnCriteriaList;
// };

// type test = {
//   where: {
//     id: string;
//   };
//   data: {
//     assessorOnAssessments: {
//       upsert: {
//         where: {
//           id: string;
//         };
//         update: {
//           point: number;
//           comment: string;
//         };
//         create: {
//           assessorId: string;
//           concerningMemberId: string;
//           point: number;
//           comment: string;
//         };
//       };
//     };
//   };
// }[];

export const submitDoPersonal = async (meId: string, args: submitDoPersonalReflection) => {
  const memberOfTeam = await checkIsMemberOfTeam(args?.teamId, meId);

  const where =
    memberOfTeam?.isSuperOwner || memberOfTeam?.isOwner
      ? undefined
      : {
          assessmentId: args?.assessmentId,
          assessorId: memberOfTeam?.id,
        };

  const updateResult = args?.results?.map((result) => ({
    where: {
      id: result?.id,
    },
    data: {
      concerningMemberId: result?.concerningMemberId,
      answerOnCriteriaList: {
        update: result?.answerOnCriteriaList?.map((answer) => ({
          where: {
            id: answer?.id,
          },
          data: {
            ...answer,
          },
        })),
      },
    },
  }));

  const assessment = await prisma?.assessment?.update({
    where: {
      id: args?.assessmentId,
    },
    data: {
      evaluations: {
        update: {
          where: {
            assessmentId_assessorId: {
              assessmentId: args?.assessmentId,
              assessorId: memberOfTeam?.id,
            },
          },
          data: {
            isSubmit: true,
            results: {
              update: updateResult,
            },
          },
        },
      },
    },
    include: {
      creator: true,
      evaluations: {
        where: { ...where },
        include: {
          assessor: true,
          results: {
            include: {
              concerningMember: true,
              answerOnCriteriaList: {
                include: {
                  criteria: true,
                },
                orderBy: {
                  criteriaId: 'asc',
                },
              },
            },
            orderBy: {
              concerningMemberId: 'asc',
            },
          },
        },
      },
    },
  });

  return assessment;
};
