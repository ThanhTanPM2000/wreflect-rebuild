import { gql } from '@apollo/client';

export const ALL_FRAGMENTS = gql`
  fragment TeamFragment on Team {
    id
    name
    createdAt
    startDate
    endDate
    picture
    isPublic
    status
    description
    defaultBoardId
    boards {
      ...BoardFragment
    }
    members {
      ...MemberFragment
    }
  }

  fragment BoardFragment on Board {
    id
    teamId
    createdAt
    updatedAt
    createdBy
    isPublic
    isLocked
    disableDownVote
    disableUpVote
    isAnonymous
    votesLimit
    meetingNote
    title
    timerInProgress
    endTime
    type
    currentPhase
    columns {
      ...ColumnFragment
    }
  }

  fragment MemberFragment on Member {
    id
    userId
    teamId
    isOwner
    isSuperOwner
    isPendingInvitation
    isGuess
    invitedBy
    joinedAt
    user {
      ...UserFragment
    }
  }

  fragment AnswerCriteriaFragment on AnswerOnCriteria {
    id
    criteriaId
    resultId
    point
    comment
    updatedAt
  }

  fragment AssessmentFragment on Assessment {
    id
    name
    startDate
    endDate
    teamId
    creatorId
    status
  }

  fragment ColumnFragment on Column {
    id
    color
    title
    isActive
    boardId
  }

  fragment CriteriaFragment on Criteria {
    id
    name
    createdAt
    updatedAt
    description
  }

  fragment EvaluationFragment on Evaluation {
    id
    name
    assessorId
    isSubmit
    assessmentId
    createdAt
  }

  fragment HealthCheckFragment on HealthCheck {
    id
    teamId
    boardId
    templateId
    createdAt
    createdBy
    updatedAt
    updatedBy
    isAnonymous
  }

  fragment MemberOnHealthCheckOnQuestionFragment on MemberOnHealthCheckOnQuestion {
    id
    healthCheckId
    questionId
    memberId
    point
    comment
  }

  fragment NotificationFragment on Notification {
    id
    receiverId
    senderId
    title
    description
    isSeen
    createdAt
  }

  fragment OpinionFragment on Opinion {
    id
    columnId
    authorId
    createdAt
    updatedAt
    text
    upVote
    downVote
    updatedBy
    isAction
    isBookmarked
    responsible
    mergedAuthors
    color
    status
    position
  }

  fragment RemarkFragment on Remark {
    id
    authorId
    opinionId
    text
    createdAt
    updatedAt
  }

  fragment ResultFragment on Result {
    id
    concerningMemberId
    evaluationId
  }

  fragment TemplateFragment on Template {
    id
    title
    isDefault
    createdAt
    updatedAt
    teamId
  }

  fragment TemplateQuestionFragment on TemplateQuestion {
    id
    title
    templateId
    color
    description
  }

  fragment UserFragment on User {
    id
    email
    createdAt
    updatedAt
    isAdmin
    userStatus
    nickname
    picture
    workplace
    address
    school
    introduction
    talent
    interest
    gender
  }

  fragment UserOnCriteriaFragment on UserOnCriteria {
    id
    userId
    criteriaId
    value
  }

  fragment SessionFragment on Session {
    id
    userId
    token
    expiresAt
    data
    createdAt
    updatedAt
  }
`;
