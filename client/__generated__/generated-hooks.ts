import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export enum ActionConvertColumn {
  Actions = 'ACTIONS',
  Opinions = 'OPINIONS'
}

export type AddMembersMutationResponse = {
  __typename?: 'AddMembersMutationResponse';
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  success?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  team?: Maybe<Team>;
  warnings?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Answer = {
  __typename?: 'Answer';
  id?: Maybe<Scalars['ID']['output']>;
  memberAnswer?: Maybe<MemberAnswer>;
  memberAnswersId?: Maybe<Scalars['String']['output']>;
  questionId?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type AnswerOnCriteria = {
  __typename?: 'AnswerOnCriteria';
  comment?: Maybe<Scalars['String']['output']>;
  criteria?: Maybe<Criteria>;
  criteriaId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  point?: Maybe<Scalars['Int']['output']>;
  resultId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AnswerOnCriteriaInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  criteriaId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  point?: InputMaybe<Scalars['Int']['input']>;
};

export type Assessment = {
  __typename?: 'Assessment';
  createdAt?: Maybe<Scalars['String']['output']>;
  creator?: Maybe<Member>;
  creatorId?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  evaluations?: Maybe<Array<Maybe<Evaluation>>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  status?: Maybe<AssessmentStatus>;
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['String']['output']>;
};

export enum AssessmentStatus {
  Complete = 'Complete',
  Doing = 'Doing',
  Planned = 'Planned',
  Reopened = 'Reopened'
}

export type Assessments = {
  __typename?: 'Assessments';
  data?: Maybe<Array<Maybe<Assessment>>>;
  page?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type BanningUser = {
  __typename?: 'BanningUser';
  description?: Maybe<Scalars['String']['output']>;
  endBanned?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isBannedForever?: Maybe<Scalars['Boolean']['output']>;
  startBanned?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int']['output'];
};

export type Board = {
  __typename?: 'Board';
  columns?: Maybe<Array<Maybe<Column>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  currentPhase?: Maybe<PhaseType>;
  disableDownVote?: Maybe<Scalars['Boolean']['output']>;
  disableUpVote?: Maybe<Scalars['Boolean']['output']>;
  endTime?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isAnonymous?: Maybe<Scalars['Boolean']['output']>;
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  meetingNote?: Maybe<Scalars['String']['output']>;
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['String']['output']>;
  timerInProgress?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<BoardType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  votesLimit?: Maybe<Scalars['Int']['output']>;
};


export type BoardColumnsArgs = {
  meId?: InputMaybe<Scalars['ID']['input']>;
};


export type BoardTeamArgs = {
  meId?: InputMaybe<Scalars['ID']['input']>;
};

export enum BoardType {
  Default = 'DEFAULT',
  Phase = 'PHASE'
}

export type Column = {
  __typename?: 'Column';
  board?: Maybe<Board>;
  boardId?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  opinions?: Maybe<Array<Maybe<Opinion>>>;
  position?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ColumnBoardArgs = {
  meId?: InputMaybe<Scalars['ID']['input']>;
};


export type ColumnOpinionsArgs = {
  meId?: InputMaybe<Scalars['ID']['input']>;
};

export type Criteria = {
  __typename?: 'Criteria';
  answerOnCriteriaList?: Maybe<Array<Maybe<AnswerOnCriteria>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CriteriaList = {
  __typename?: 'CriteriaList';
  data?: Maybe<Array<Maybe<Criteria>>>;
  page?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Evaluation = {
  __typename?: 'Evaluation';
  assessmentId?: Maybe<Scalars['String']['output']>;
  assessor?: Maybe<Member>;
  assessorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isSubmit?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Maybe<Result>>>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Unspecified = 'UNSPECIFIED'
}

export type GetPresignedUrlResponse = {
  __typename?: 'GetPresignedUrlResponse';
  url?: Maybe<Scalars['String']['output']>;
};

export type HealthCheck = {
  __typename?: 'HealthCheck';
  boardId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isAnonymous?: Maybe<Scalars['Boolean']['output']>;
  memberOnHealthCheck?: Maybe<Array<Maybe<MemberOnHealthCheckOnQuestion>>>;
  teamId?: Maybe<Scalars['String']['output']>;
  templateId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type LoginTemplateResponse = {
  __typename?: 'LoginTemplateResponse';
  email?: Maybe<Scalars['String']['output']>;
  requiresEmailVerification?: Maybe<Scalars['String']['output']>;
  sub?: Maybe<Scalars['String']['output']>;
};

export type Member = {
  __typename?: 'Member';
  assessments?: Maybe<Array<Maybe<Assessment>>>;
  evaluations?: Maybe<Array<Maybe<Evaluation>>>;
  id: Scalars['ID']['output'];
  invitedBy?: Maybe<Scalars['String']['output']>;
  isGuess: Scalars['Boolean']['output'];
  isOwner: Scalars['Boolean']['output'];
  isPendingInvitation: Scalars['Boolean']['output'];
  isSuperOwner: Scalars['Boolean']['output'];
  joinedAt: Scalars['String']['output'];
  memberAnswers?: Maybe<Array<Maybe<MemberAnswer>>>;
  memberComments?: Maybe<Array<Maybe<MemberComment>>>;
  opinions?: Maybe<Array<Maybe<Opinion>>>;
  remarks?: Maybe<Array<Maybe<Remark>>>;
  results?: Maybe<Array<Maybe<Result>>>;
  team?: Maybe<Team>;
  teamId: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type MemberAnswer = {
  __typename?: 'MemberAnswer';
  answers?: Maybe<Array<Maybe<Answer>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  healthCheck?: Maybe<HealthCheck>;
  healthCheckId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['String']['output']>;
  templateId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type MemberComment = {
  __typename?: 'MemberComment';
  createdAt?: Maybe<Scalars['String']['output']>;
  healthCheck?: Maybe<HealthCheck>;
  healthCheckId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['String']['output']>;
  questionId?: Maybe<Scalars['String']['output']>;
  templateId?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type MemberOnHealthCheckOnQuestion = {
  __typename?: 'MemberOnHealthCheckOnQuestion';
  comment?: Maybe<Scalars['String']['output']>;
  healthCheckId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['String']['output']>;
  point?: Maybe<Scalars['Int']['output']>;
  question?: Maybe<TemplateQuestion>;
  questionId?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMembers?: Maybe<AddMembersMutationResponse>;
  answerHealthCheck?: Maybe<GetHealthCheck>;
  banUser?: Maybe<User>;
  changeRoleMember?: Maybe<Team>;
  changeTeamAccess?: Maybe<Team>;
  combineOpinion?: Maybe<Board>;
  convertOpinion?: Maybe<Opinion>;
  convertOpinionsInColumn?: Maybe<Column>;
  createAssessment?: Maybe<Assessment>;
  createBoard?: Maybe<Team>;
  createCriteria?: Maybe<Criteria>;
  createCustomTemplate?: Maybe<Template>;
  createHealthCheck?: Maybe<HealthCheck>;
  createHealthCheckTemplate?: Maybe<Template>;
  createOpinion?: Maybe<Opinion>;
  createRemark?: Maybe<Opinion>;
  createTeam?: Maybe<Team>;
  deleteAssessment?: Maybe<Assessment>;
  deleteBoard?: Maybe<Team>;
  deleteCriteria?: Maybe<Criteria>;
  deleteCustomTemplate?: Maybe<Template>;
  deleteHealthCheckTemplate?: Maybe<Template>;
  deleteTeam?: Maybe<Team>;
  doPersonalReflection?: Maybe<Assessment>;
  emptyColumn?: Maybe<Column>;
  getPresignedUrl?: Maybe<GetPresignedUrlResponse>;
  getSkillsAnalytic?: Maybe<User>;
  joinTeamWithLink?: Maybe<Team>;
  loginTemplate?: Maybe<LoginTemplateResponse>;
  orderOpinion?: Maybe<Board>;
  removeMember?: Maybe<Team>;
  removeNotification?: Maybe<Notification>;
  removeOpinion?: Maybe<Column>;
  removeRemark?: Maybe<Opinion>;
  reopenHealthCheck?: Maybe<HealthCheck>;
  seenNotification?: Maybe<Notification>;
  startSurveyHealthCheck?: Maybe<GetHealthCheck>;
  submitHealthCheckAnswer?: Maybe<HealthCheck>;
  updateAction?: Maybe<Team>;
  updateActionTracker?: Maybe<Team>;
  updateAssessment?: Maybe<Assessment>;
  updateBoard?: Maybe<Board>;
  updateCriteria?: Maybe<Criteria>;
  updateCustomTemplate?: Maybe<Template>;
  updateHealthCheckTemplate?: Maybe<Template>;
  updateMeetingNote?: Maybe<Board>;
  updateOpinion?: Maybe<Opinion>;
  updateTeam?: Maybe<Team>;
  updateUser?: Maybe<User>;
};


export type MutationAddMembersArgs = {
  emailUsers?: InputMaybe<Array<Scalars['String']['input']>>;
  teamId: Scalars['String']['input'];
};


export type MutationAnswerHealthCheckArgs = {
  answers: Array<AnswerInput>;
  boardId: Scalars['String']['input'];
  comments: Array<CommentInput>;
  teamId: Scalars['String']['input'];
  templateId: Scalars['String']['input'];
};


export type MutationBanUserArgs = {
  description: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['String']['input']>;
  isBannedForever?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationChangeRoleMemberArgs = {
  isOwner: Scalars['Boolean']['input'];
  memberId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationChangeTeamAccessArgs = {
  isPublic: Scalars['Boolean']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationCombineOpinionArgs = {
  boardId: Scalars['String']['input'];
  combine?: InputMaybe<CombineOpinion>;
  draggableId?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<OrderOpinion>;
  teamId: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};


export type MutationConvertOpinionArgs = {
  boardId: Scalars['String']['input'];
  columnId: Scalars['String']['input'];
  isAction: Scalars['Boolean']['input'];
  opinionId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationConvertOpinionsInColumnArgs = {
  action: ActionConvertColumn;
  boardId: Scalars['String']['input'];
  columnId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationCreateAssessmentArgs = {
  assessmentId?: InputMaybe<Scalars['String']['input']>;
  criteriaList: Array<Scalars['String']['input']>;
  endDate: Scalars['String']['input'];
  memberIds: Array<InputMaybe<Scalars['String']['input']>>;
  nameAssessment: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationCreateBoardArgs = {
  column1?: InputMaybe<Scalars['String']['input']>;
  column2?: InputMaybe<Scalars['String']['input']>;
  column3?: InputMaybe<Scalars['String']['input']>;
  column4?: InputMaybe<Scalars['String']['input']>;
  column5?: InputMaybe<Scalars['String']['input']>;
  currentPhase?: InputMaybe<PhaseType>;
  disableDownVote?: InputMaybe<Scalars['Boolean']['input']>;
  disableUpVote?: InputMaybe<Scalars['Boolean']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  isActiveCol1?: InputMaybe<Scalars['Boolean']['input']>;
  isActiveCol2?: InputMaybe<Scalars['Boolean']['input']>;
  isActiveCol3?: InputMaybe<Scalars['Boolean']['input']>;
  isActiveCol4?: InputMaybe<Scalars['Boolean']['input']>;
  isActiveCol5?: InputMaybe<Scalars['Boolean']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  isLocked?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  teamId: Scalars['ID']['input'];
  timerInProgress?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<BoardType>;
  votesLimit?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateCriteriaArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateCustomTemplateArgs = {
  name: Scalars['String']['input'];
  questions: Array<QuestionsInput>;
  teamId: Scalars['String']['input'];
};


export type MutationCreateHealthCheckArgs = {
  boardId?: InputMaybe<Scalars['String']['input']>;
  isAnonymous: Scalars['Boolean']['input'];
  teamId: Scalars['String']['input'];
  templateId: Scalars['String']['input'];
};


export type MutationCreateHealthCheckTemplateArgs = {
  name: Scalars['String']['input'];
  questions: Array<QuestionsInput>;
};


export type MutationCreateOpinionArgs = {
  columnId: Scalars['String']['input'];
  isAction?: InputMaybe<Scalars['Boolean']['input']>;
  isCreateBottom?: InputMaybe<Scalars['Boolean']['input']>;
  memberId: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateRemarkArgs = {
  boardId: Scalars['String']['input'];
  columnId: Scalars['String']['input'];
  opinionId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type MutationCreateTeamArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['String']['input'];
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteAssessmentArgs = {
  assessmentId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationDeleteBoardArgs = {
  boardId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};


export type MutationDeleteCriteriaArgs = {
  criteriaId: Scalars['String']['input'];
};


export type MutationDeleteCustomTemplateArgs = {
  teamId: Scalars['String']['input'];
  templateId: Scalars['String']['input'];
};


export type MutationDeleteHealthCheckTemplateArgs = {
  templateId: Scalars['String']['input'];
};


export type MutationDeleteTeamArgs = {
  teamId: Scalars['ID']['input'];
};


export type MutationDoPersonalReflectionArgs = {
  assessmentId: Scalars['String']['input'];
  assessorId: Scalars['String']['input'];
  results?: InputMaybe<Array<InputMaybe<ResultInput>>>;
  teamId: Scalars['String']['input'];
};


export type MutationEmptyColumnArgs = {
  boardId: Scalars['String']['input'];
  columnId?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['String']['input'];
};


export type MutationGetPresignedUrlArgs = {
  fileName: Scalars['String']['input'];
  fileType: Scalars['String']['input'];
};


export type MutationJoinTeamWithLinkArgs = {
  teamId: Scalars['String']['input'];
};


export type MutationLoginTemplateArgs = {
  code: Scalars['String']['input'];
  state: Scalars['String']['input'];
};


export type MutationOrderOpinionArgs = {
  boardId: Scalars['String']['input'];
  destination?: InputMaybe<OrderOpinion>;
  draggableId?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<OrderOpinion>;
  teamId: Scalars['String']['input'];
};


export type MutationRemoveMemberArgs = {
  memberId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationRemoveNotificationArgs = {
  notificationId: Scalars['String']['input'];
};


export type MutationRemoveOpinionArgs = {
  boardId: Scalars['String']['input'];
  columnId: Scalars['String']['input'];
  opinionId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationRemoveRemarkArgs = {
  boardId: Scalars['String']['input'];
  columnId: Scalars['String']['input'];
  opinionId: Scalars['String']['input'];
  remarkId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationReopenHealthCheckArgs = {
  boardId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationSeenNotificationArgs = {
  notificationId: Scalars['String']['input'];
};


export type MutationStartSurveyHealthCheckArgs = {
  boardId: Scalars['String']['input'];
  isAnonymous: Scalars['Boolean']['input'];
  isCustom: Scalars['Boolean']['input'];
  status: StatusHealthCheck;
  teamId: Scalars['String']['input'];
  templateId: Scalars['String']['input'];
};


export type MutationSubmitHealthCheckAnswerArgs = {
  answers: Array<InputMaybe<HealthCheckAnswer>>;
  boardId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationUpdateActionArgs = {
  boardId: Scalars['String']['input'];
  columnId: Scalars['String']['input'];
  opinion: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationUpdateActionTrackerArgs = {
  destinationBoardId: Scalars['String']['input'];
  destinationColumnId: Scalars['String']['input'];
  opinionId: Scalars['String']['input'];
  responsible: Scalars['String']['input'];
  sourceBoardId: Scalars['String']['input'];
  sourceColumnId: Scalars['String']['input'];
  status: OpinionStatus;
  teamId: Scalars['String']['input'];
};


export type MutationUpdateAssessmentArgs = {
  assessmentId: Scalars['String']['input'];
  assessmentName: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type MutationUpdateBoardArgs = {
  boardId: Scalars['ID']['input'];
  column1?: InputMaybe<Scalars['String']['input']>;
  column2?: InputMaybe<Scalars['String']['input']>;
  column3?: InputMaybe<Scalars['String']['input']>;
  column4?: InputMaybe<Scalars['String']['input']>;
  column5?: InputMaybe<Scalars['String']['input']>;
  currentPhase?: InputMaybe<PhaseType>;
  disableDownVote?: InputMaybe<Scalars['Boolean']['input']>;
  disableUpVote?: InputMaybe<Scalars['Boolean']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  isActiveCol1?: InputMaybe<Scalars['Boolean']['input']>;
  isActiveCol2?: InputMaybe<Scalars['Boolean']['input']>;
  isActiveCol3?: InputMaybe<Scalars['Boolean']['input']>;
  isActiveCol4?: InputMaybe<Scalars['Boolean']['input']>;
  isActiveCol5?: InputMaybe<Scalars['Boolean']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  isLocked?: InputMaybe<Scalars['Boolean']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  teamId: Scalars['ID']['input'];
  timerInProgress?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<BoardType>;
  votesLimit?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateCriteriaArgs = {
  criteriaId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateCustomTemplateArgs = {
  name: Scalars['String']['input'];
  questions: Array<QuestionsWithIdInput>;
  teamId: Scalars['String']['input'];
  templateId: Scalars['String']['input'];
};


export type MutationUpdateHealthCheckTemplateArgs = {
  name: Scalars['String']['input'];
  questions: Array<QuestionsInput>;
  templateId: Scalars['String']['input'];
};


export type MutationUpdateMeetingNoteArgs = {
  boardId: Scalars['ID']['input'];
  meetingNote: Scalars['String']['input'];
  teamId: Scalars['ID']['input'];
};


export type MutationUpdateOpinionArgs = {
  color?: InputMaybe<Scalars['String']['input']>;
  downVote?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isAction?: InputMaybe<Scalars['Boolean']['input']>;
  isBookmarked?: InputMaybe<Scalars['Boolean']['input']>;
  newColumnId?: InputMaybe<Scalars['String']['input']>;
  opinionId: Scalars['String']['input'];
  responsible?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OpinionStatus>;
  teamId: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  upVote?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdateTeamArgs = {
  description: Scalars['String']['input'];
  endDate: Scalars['String']['input'];
  isPublic: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
  teamId: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  interests?: InputMaybe<Scalars['String']['input']>;
  introduction?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  school?: InputMaybe<Scalars['String']['input']>;
  talents?: InputMaybe<Scalars['String']['input']>;
  workplace?: InputMaybe<Scalars['String']['input']>;
};

export type Notification = {
  __typename?: 'Notification';
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isSeen?: Maybe<Scalars['Boolean']['output']>;
  receiver?: Maybe<User>;
  receiverId?: Maybe<Scalars['String']['output']>;
  senderId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Opinion = {
  __typename?: 'Opinion';
  author?: Maybe<Member>;
  authorId?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  column?: Maybe<Column>;
  columnId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  downVote?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  isAction?: Maybe<Scalars['Boolean']['output']>;
  isBookmarked?: Maybe<Scalars['Boolean']['output']>;
  mergedAuthors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  position?: Maybe<Scalars['Int']['output']>;
  remarks?: Maybe<Array<Maybe<Remark>>>;
  responsible?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OpinionStatus>;
  text?: Maybe<Scalars['String']['output']>;
  upVote?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};


export type OpinionColumnArgs = {
  meId?: InputMaybe<Scalars['ID']['input']>;
};

export enum OpinionStatus {
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  New = 'NEW',
  Reject = 'REJECT',
  Rejected = 'REJECTED'
}

export enum PhaseType {
  Default = 'DEFAULT',
  Discuss = 'DISCUSS',
  Group = 'GROUP',
  Phase = 'PHASE',
  Reflect = 'REFLECT',
  Votes = 'VOTES'
}

export type Profile = {
  __typename?: 'Profile';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<User>;
  board?: Maybe<Board>;
  boards?: Maybe<Array<Maybe<Board>>>;
  getAnalysisAssessment?: Maybe<AnalysisAssessmentData>;
  getAssessment?: Maybe<Assessment>;
  getAssessments?: Maybe<Assessments>;
  getCriteriaList?: Maybe<CriteriaList>;
  getEssential?: Maybe<GetEssential>;
  getHealthCheck?: Maybe<HealthCheck>;
  getNotifications?: Maybe<Array<Maybe<Notification>>>;
  getNumOfUnSeenNoti?: Maybe<Scalars['Int']['output']>;
  getTeamIds?: Maybe<Array<Maybe<GetTeamIds>>>;
  getTeams?: Maybe<Teams>;
  getTeamsOfUser?: Maybe<Teams>;
  getTemplates?: Maybe<Templates>;
  getTemplatesOfTeam?: Maybe<Array<Maybe<Template>>>;
  getUser?: Maybe<User>;
  getUsers?: Maybe<Users>;
  inviteLink?: Maybe<InviteResponse>;
  members?: Maybe<Array<Maybe<Member>>>;
  team?: Maybe<Team>;
};


export type QueryBoardArgs = {
  boardId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBoardsArgs = {
  teamId: Scalars['String']['input'];
};


export type QueryGetAnalysisAssessmentArgs = {
  assessmentId: Scalars['String']['input'];
  memberId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};


export type QueryGetAssessmentArgs = {
  assessmentId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};


export type QueryGetAssessmentsArgs = {
  isGettingAll?: InputMaybe<Scalars['Boolean']['input']>;
  orderWith?: InputMaybe<OrderWith>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<SortBy>;
  teamId: Scalars['String']['input'];
};


export type QueryGetCriteriaListArgs = {
  isGettingAll?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetHealthCheckArgs = {
  boardId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetNotificationsArgs = {
  page: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
};


export type QueryGetTeamsArgs = {
  isGettingAll?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTeamsOfUserArgs = {
  isGettingAll?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTemplatesArgs = {
  isGettingAll?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTemplatesOfTeamArgs = {
  teamId: Scalars['String']['input'];
};


export type QueryGetUserArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetUsersArgs = {
  isGettingAll?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInviteLinkArgs = {
  teamId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMembersArgs = {
  teamId: Scalars['String']['input'];
};


export type QueryTeamArgs = {
  teamId: Scalars['String']['input'];
};

export type Remark = {
  __typename?: 'Remark';
  author?: Maybe<Member>;
  authorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  opinion?: Maybe<Opinion>;
  opinionId?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type RemiderNotification = {
  __typename?: 'RemiderNotification';
  dateSent?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sentBy?: Maybe<Scalars['String']['output']>;
  sentTo?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Result = {
  __typename?: 'Result';
  answerOnCriteriaList?: Maybe<Array<Maybe<AnswerOnCriteria>>>;
  concerningMember?: Maybe<Member>;
  concerningMemberId?: Maybe<Scalars['String']['output']>;
  evaluationId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ResultInput = {
  answerOnCriteriaList?: InputMaybe<Array<InputMaybe<AnswerOnCriteriaInput>>>;
  concerningMemberId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Session = {
  __typename?: 'Session';
  createdAt?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export enum StatusHealthCheck {
  Closed = 'CLOSED',
  Open = 'OPEN'
}

export type Subscription = {
  __typename?: 'Subscription';
  subOnUpdateColumn?: Maybe<Column>;
  subOnUpdateHealthCheck?: Maybe<HealthCheck>;
  subOnUpdateMeetingNote?: Maybe<Board>;
  subOnUpdateTeam?: Maybe<Team>;
  subOnUpdateTeams?: Maybe<StatusRequest>;
  updateBoard?: Maybe<Board>;
  updateOpinion?: Maybe<Opinion>;
};


export type SubscriptionSubOnUpdateColumnArgs = {
  meId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};


export type SubscriptionSubOnUpdateHealthCheckArgs = {
  meId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};


export type SubscriptionSubOnUpdateMeetingNoteArgs = {
  boardId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};


export type SubscriptionSubOnUpdateTeamArgs = {
  meId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};


export type SubscriptionSubOnUpdateTeamsArgs = {
  meId: Scalars['ID']['input'];
};


export type SubscriptionUpdateBoardArgs = {
  meId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};


export type SubscriptionUpdateOpinionArgs = {
  meId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

export type Team = {
  __typename?: 'Team';
  assessments?: Maybe<Array<Maybe<Assessment>>>;
  boards?: Maybe<Array<Maybe<Board>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  defaultBoardId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  healthCheck?: Maybe<Array<Maybe<HealthCheck>>>;
  id?: Maybe<Scalars['ID']['output']>;
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  members?: Maybe<Array<Maybe<Member>>>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  status?: Maybe<TeamStatus>;
};


export type TeamAssessmentsArgs = {
  isGettingAll?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offSet?: InputMaybe<Scalars['Int']['input']>;
};


export type TeamBoardsArgs = {
  isGettingAll?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offSet?: InputMaybe<Scalars['Int']['input']>;
};

export enum TeamStatus {
  Doing = 'DOING',
  Done = 'DONE'
}

export type Teams = {
  __typename?: 'Teams';
  data?: Maybe<Array<Maybe<Team>>>;
  page?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Template = {
  __typename?: 'Template';
  createdAt?: Maybe<Scalars['String']['output']>;
  healthCheckQuestions?: Maybe<Array<Maybe<TemplateQuestion>>>;
  id?: Maybe<Scalars['String']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  teamId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type TemplateQuestion = {
  __typename?: 'TemplateQuestion';
  color?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  templateId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Templates = {
  __typename?: 'Templates';
  data?: Maybe<Array<Maybe<Template>>>;
  page?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']['output']>;
  banningUser?: Maybe<Array<Maybe<BanningUser>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  interest?: Maybe<Scalars['String']['output']>;
  introduction?: Maybe<Scalars['String']['output']>;
  isAdmin?: Maybe<Scalars['String']['output']>;
  members?: Maybe<Array<Maybe<Member>>>;
  nickname?: Maybe<Scalars['String']['output']>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  picture: Scalars['String']['output'];
  school?: Maybe<Scalars['String']['output']>;
  sessions?: Maybe<Array<Maybe<Session>>>;
  skillValues?: Maybe<Array<Maybe<UserOnCriteria>>>;
  talent?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userStatus?: Maybe<UserStatus>;
  workplace?: Maybe<Scalars['String']['output']>;
};

export type UserOnCriteria = {
  __typename?: 'UserOnCriteria';
  criteria?: Maybe<Criteria>;
  criteriaId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export enum UserStatus {
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export type Users = {
  __typename?: 'Users';
  data?: Maybe<Array<Maybe<User>>>;
  page?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AnalysisAssessmentData = {
  __typename?: 'analysisAssessmentData';
  areaRadarChartData?: Maybe<Array<Maybe<AreaRadarChartData>>>;
  rosePlotChartData?: Maybe<Array<Maybe<RosePlotChartData>>>;
};

export type AnswerInput = {
  questionId: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AreaRadarChartData = {
  __typename?: 'areaRadarChartData';
  assessor?: Maybe<Member>;
  criteria?: Maybe<Criteria>;
  isSubmit?: Maybe<Scalars['Boolean']['output']>;
  point?: Maybe<Scalars['Int']['output']>;
};

export type CombineOpinion = {
  draggableId: Scalars['String']['input'];
  droppableId: Scalars['String']['input'];
};

export type CommentInput = {
  questionId: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type GetEssential = {
  __typename?: 'getEssential';
  criteriaList?: Maybe<Array<Maybe<Criteria>>>;
};

export type GetHealthCheck = {
  __typename?: 'getHealthCheck';
  healthCheck?: Maybe<HealthCheck>;
  memberAnswers?: Maybe<Array<Maybe<MemberAnswer>>>;
  memberComments?: Maybe<Array<Maybe<MemberComment>>>;
};

export type GetNotificationData = {
  __typename?: 'getNotificationData';
  data?: Maybe<Array<Maybe<Notification>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type GetTeamIds = {
  __typename?: 'getTeamIds';
  boards?: Maybe<Array<Maybe<Board>>>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
};

export type HealthCheckAnswer = {
  comment: Scalars['String']['input'];
  point: Scalars['Int']['input'];
  questionId: Scalars['String']['input'];
};

export type InviteResponse = {
  __typename?: 'inviteResponse';
  status?: Maybe<InviteStatus>;
};

export enum InviteStatus {
  Joined = 'JOINED',
  Unjoined = 'UNJOINED',
  Unlogin = 'UNLOGIN'
}

export type OrderOpinion = {
  droppableId: Scalars['String']['input'];
  index: Scalars['Int']['input'];
};

export enum OrderWith {
  Asc = 'asc',
  Desc = 'desc'
}

export type QuestionsInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionsWithIdInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RosePlotChartData = {
  __typename?: 'rosePlotChartData';
  avg?: Maybe<Scalars['Float']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  criteria?: Maybe<Criteria>;
  sum?: Maybe<Scalars['Int']['output']>;
};

export enum SortBy {
  CreatedAt = 'createdAt',
  Name = 'name',
  Status = 'status'
}

export type StatusRequest = {
  __typename?: 'statusRequest';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type StatusResponse = {
  __typename?: 'statusResponse';
  success: Scalars['Boolean']['output'];
};

export type GetTeamQueryVariables = Exact<{
  teamId: Scalars['String']['input'];
}>;


export type GetTeamQuery = { __typename?: 'Query', team?: { __typename?: 'Team', name?: string | null, members?: Array<(
      { __typename?: 'Member', id: string, user?: { __typename?: 'User', id: string, picture: string } | null }
      & { ' $fragmentRefs'?: { 'MemberAvatarFragmentFragment': MemberAvatarFragmentFragment } }
    ) | null> | null, boards?: Array<(
      { __typename?: 'Board', id?: string | null }
      & { ' $fragmentRefs'?: { 'BoardDetailFragmentFragment': BoardDetailFragmentFragment } }
    ) | null> | null } | null };

export type BoardDetailFragmentFragment = { __typename?: 'Board', id?: string | null, teamId?: string | null, createdAt?: string | null, updatedAt?: string | null, createdBy?: string | null, isPublic?: boolean | null, isLocked?: boolean | null, disableDownVote?: boolean | null, disableUpVote?: boolean | null, isAnonymous?: boolean | null, votesLimit?: number | null, meetingNote?: string | null, title?: string | null, timerInProgress?: number | null, endTime?: string | null, type?: BoardType | null, currentPhase?: PhaseType | null, columns?: Array<(
    { __typename?: 'Column', id?: string | null, isActive?: boolean | null }
    & { ' $fragmentRefs'?: { 'ColumnDetailFragmentFragment': ColumnDetailFragmentFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'BoardDetailFragmentFragment' };

export type ColumnDetailFragmentFragment = { __typename?: 'Column', id?: string | null, color?: string | null, title?: string | null, isActive?: boolean | null, boardId?: string | null, opinions?: Array<(
    { __typename?: 'Opinion', id?: string | null, text?: string | null }
    & { ' $fragmentRefs'?: { 'OpinionDetailFragmentFragment': OpinionDetailFragmentFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'ColumnDetailFragmentFragment' };

export type MemberAvatarFragmentFragment = { __typename?: 'Member', id: string, user?: { __typename?: 'User', id: string, picture: string } | null } & { ' $fragmentName'?: 'MemberAvatarFragmentFragment' };

export type CreateOpinionMutationMutationVariables = Exact<{
  memberId: Scalars['String']['input'];
  columnId: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  isAction?: InputMaybe<Scalars['Boolean']['input']>;
  isCreateBottom?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CreateOpinionMutationMutation = { __typename?: 'Mutation', createOpinion?: (
    { __typename?: 'Opinion' }
    & { ' $fragmentRefs'?: { 'OpinionDetailFragmentFragment': OpinionDetailFragmentFragment } }
  ) | null };

export type OpinionDetailFragmentFragment = { __typename?: 'Opinion', id?: string | null, columnId?: string | null, authorId?: string | null, createdAt?: string | null, updatedAt?: string | null, text?: string | null, upVote?: Array<string | null> | null, downVote?: Array<string | null> | null, updatedBy?: string | null, isAction?: boolean | null, isBookmarked?: boolean | null, responsible?: string | null, mergedAuthors?: Array<string | null> | null, color?: string | null, status?: OpinionStatus | null, position?: number | null } & { ' $fragmentName'?: 'OpinionDetailFragmentFragment' };

export type TeamDetailFragmentFragment = { __typename?: 'Team', id?: string | null, name?: string | null, createdAt?: string | null, startDate?: string | null, endDate?: string | null, picture?: string | null, isPublic?: boolean | null, status?: TeamStatus | null, description?: string | null, defaultBoardId?: string | null } & { ' $fragmentName'?: 'TeamDetailFragmentFragment' };

export type GetTeamsOfUserQueryVariables = Exact<{
  isGettingAll?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTeamsOfUserQuery = { __typename?: 'Query', getTeamsOfUser?: { __typename?: 'Teams', total?: number | null, data?: Array<(
      { __typename?: 'Team', id?: string | null }
      & { ' $fragmentRefs'?: { 'TeamDetailFragmentFragment': TeamDetailFragmentFragment } }
    ) | null> | null } | null };

export const OpinionDetailFragmentFragmentDoc = gql`
    fragment OpinionDetailFragment on Opinion {
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
export const ColumnDetailFragmentFragmentDoc = gql`
    fragment ColumnDetailFragment on Column {
  id
  color
  title
  isActive
  boardId
  opinions {
    id
    text
    ...OpinionDetailFragment
  }
}
    ${OpinionDetailFragmentFragmentDoc}`;
export const BoardDetailFragmentFragmentDoc = gql`
    fragment BoardDetailFragment on Board {
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
    id
    isActive
    ...ColumnDetailFragment
  }
}
    ${ColumnDetailFragmentFragmentDoc}`;
export const MemberAvatarFragmentFragmentDoc = gql`
    fragment MemberAvatarFragment on Member {
  id
  user {
    id
    picture
  }
}
    `;
export const TeamDetailFragmentFragmentDoc = gql`
    fragment TeamDetailFragment on Team {
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
export const GetTeamDocument = gql`
    query getTeam($teamId: String!) {
  team(teamId: $teamId) {
    name
    members {
      id
      user {
        id
        picture
      }
      ...MemberAvatarFragment
    }
    boards {
      id
      ...BoardDetailFragment
    }
  }
}
    ${MemberAvatarFragmentFragmentDoc}
${BoardDetailFragmentFragmentDoc}`;

/**
 * __useGetTeamQuery__
 *
 * To run a query within a React component, call `useGetTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamQuery({
 *   variables: {
 *      teamId: // value for 'teamId'
 *   },
 * });
 */
export function useGetTeamQuery(baseOptions: Apollo.QueryHookOptions<GetTeamQuery, GetTeamQueryVariables> & ({ variables: GetTeamQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamQuery, GetTeamQueryVariables>(GetTeamDocument, options);
      }
export function useGetTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamQuery, GetTeamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamQuery, GetTeamQueryVariables>(GetTeamDocument, options);
        }
export function useGetTeamSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTeamQuery, GetTeamQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTeamQuery, GetTeamQueryVariables>(GetTeamDocument, options);
        }
export type GetTeamQueryHookResult = ReturnType<typeof useGetTeamQuery>;
export type GetTeamLazyQueryHookResult = ReturnType<typeof useGetTeamLazyQuery>;
export type GetTeamSuspenseQueryHookResult = ReturnType<typeof useGetTeamSuspenseQuery>;
export type GetTeamQueryResult = Apollo.QueryResult<GetTeamQuery, GetTeamQueryVariables>;
export const CreateOpinionMutationDocument = gql`
    mutation createOpinionMutation($memberId: String!, $columnId: String!, $text: String, $isAction: Boolean, $isCreateBottom: Boolean) {
  createOpinion(
    memberId: $memberId
    columnId: $columnId
    text: $text
    isAction: $isAction
    isCreateBottom: $isCreateBottom
  ) {
    ...OpinionDetailFragment
  }
}
    ${OpinionDetailFragmentFragmentDoc}`;
export type CreateOpinionMutationMutationFn = Apollo.MutationFunction<CreateOpinionMutationMutation, CreateOpinionMutationMutationVariables>;

/**
 * __useCreateOpinionMutationMutation__
 *
 * To run a mutation, you first call `useCreateOpinionMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOpinionMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOpinionMutationMutation, { data, loading, error }] = useCreateOpinionMutationMutation({
 *   variables: {
 *      memberId: // value for 'memberId'
 *      columnId: // value for 'columnId'
 *      text: // value for 'text'
 *      isAction: // value for 'isAction'
 *      isCreateBottom: // value for 'isCreateBottom'
 *   },
 * });
 */
export function useCreateOpinionMutationMutation(baseOptions?: Apollo.MutationHookOptions<CreateOpinionMutationMutation, CreateOpinionMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOpinionMutationMutation, CreateOpinionMutationMutationVariables>(CreateOpinionMutationDocument, options);
      }
export type CreateOpinionMutationMutationHookResult = ReturnType<typeof useCreateOpinionMutationMutation>;
export type CreateOpinionMutationMutationResult = Apollo.MutationResult<CreateOpinionMutationMutation>;
export type CreateOpinionMutationMutationOptions = Apollo.BaseMutationOptions<CreateOpinionMutationMutation, CreateOpinionMutationMutationVariables>;
export const GetTeamsOfUserDocument = gql`
    query getTeamsOfUser($isGettingAll: Boolean, $search: String, $page: Int, $size: Int, $status: String) {
  getTeamsOfUser(
    isGettingAll: $isGettingAll
    search: $search
    page: $page
    size: $size
    status: $status
  ) {
    data {
      id
      ...TeamDetailFragment
    }
    total
  }
}
    ${TeamDetailFragmentFragmentDoc}`;

/**
 * __useGetTeamsOfUserQuery__
 *
 * To run a query within a React component, call `useGetTeamsOfUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamsOfUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamsOfUserQuery({
 *   variables: {
 *      isGettingAll: // value for 'isGettingAll'
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetTeamsOfUserQuery(baseOptions?: Apollo.QueryHookOptions<GetTeamsOfUserQuery, GetTeamsOfUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamsOfUserQuery, GetTeamsOfUserQueryVariables>(GetTeamsOfUserDocument, options);
      }
export function useGetTeamsOfUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamsOfUserQuery, GetTeamsOfUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamsOfUserQuery, GetTeamsOfUserQueryVariables>(GetTeamsOfUserDocument, options);
        }
export function useGetTeamsOfUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTeamsOfUserQuery, GetTeamsOfUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTeamsOfUserQuery, GetTeamsOfUserQueryVariables>(GetTeamsOfUserDocument, options);
        }
export type GetTeamsOfUserQueryHookResult = ReturnType<typeof useGetTeamsOfUserQuery>;
export type GetTeamsOfUserLazyQueryHookResult = ReturnType<typeof useGetTeamsOfUserLazyQuery>;
export type GetTeamsOfUserSuspenseQueryHookResult = ReturnType<typeof useGetTeamsOfUserSuspenseQuery>;
export type GetTeamsOfUserQueryResult = Apollo.QueryResult<GetTeamsOfUserQuery, GetTeamsOfUserQueryVariables>;