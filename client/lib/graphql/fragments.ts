import { gql } from '@apollo/client';

export const TEAM_FRAGMENT = gql`
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
  }
`;

export const BOARD_FRAGMENT = gql`
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
  }
`;

export const MEMBER_FRAGMENT = gql`
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
  }
`;

export const ANSWER_ON_CRITERIA_FRAGMENT = gql`
  fragment AnswerCriteriaFragment on AnswerOnCriteria {
    id
    criteriaId
    resultId
    point
    comment
    updatedAt
  }
`;

export const ASSESSMENT_FRAGMENT = gql`
  fragment AssessmentFragment on Assessment {
    id
    name
    startDate
    endDate
    teamId
    creatorId
    status
  }
`;

export const COLUMN_FRAGMENT = gql`
  fragment ColumnFragment on Column {
    id
    color
    title
    isActive
    boardId
  }
`;

export const CRITERIA_FRAGMENT = gql`
  fragment CriteriaFragment on Criteria {
    id
    name
    createdAt
    updatedAt
    description
  }
`;

export const EVALUATION_FRAGMENT = gql`
  fragment EvaluationFragment on Evaluation {
    id
    name
    assessorId
    isSubmit
    assessmentId
    createdAt
  }
`;

export const HEALTHCHECK_FRAGMENT = gql`
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
`;

export const MEMBER_ON_HEALTH_CHECK_ON_QUESTION_FRAGMENT = gql`
  fragment MemberOnHealthCheckOnQuestionFragment on MemberOnHealthCheckOnQuestion {
    id
    healthCheckId
    questionId
    memberId
    point
    comment
  }
`;

export const NOTIFICATION_FRAGMENT = gql`
  fragment NotificationFragment on Notification {
    id
    receiverId
    senderId
    title
    description
    isSeen
    createdAt
  }
`;

export const OPINION_FRAGMENT = gql`
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
`;

export const REMARK_FRAGMENT = gql`
  fragment RemarkFragment on Remark {
    id
    authorId
    opinionId
    text
    createdAt
    updatedAt
  }
`;

export const RESULT_FRAGMENT = gql`
  fragment ResultFragment on Result {
    id
    concerningMemberId
    evaluationId
  }
`;

export const TEMPLATE_FRAGMENT = gql`
  fragment TemplateFragment on Template {
    id
    title
    isDefault
    createdAt
    updatedAt
    teamId
  }
`;

export const TEMPLATE_QUESTION_FRAGMENT = gql`
  fragment TemplateQuestionFragment on TemplateQuestion {
    id
    title
    templateId
    color
    description
  }
`;

export const USER_FRAGMENT = gql`
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
`;

export const USER_ON_CRITERIA_FRAGMENT = gql`
  fragment UserOnCriteriaFragment on UserOnCriteria {
    id
    userId
    criteriaId
    value
  }
`;

export const SESSION_FRAGMENT = gql`
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
