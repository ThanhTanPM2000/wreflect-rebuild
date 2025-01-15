import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  createOpinion?: Maybe<Column>;
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
  boardId: Scalars['String']['input'];
  columnId: Scalars['String']['input'];
  isAction?: InputMaybe<Scalars['Boolean']['input']>;
  isCreateBottom?: InputMaybe<Scalars['Boolean']['input']>;
  teamId: Scalars['String']['input'];
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  ActionConvertColumn: ActionConvertColumn;
  AddMembersMutationResponse: ResolverTypeWrapper<AddMembersMutationResponse>;
  Answer: ResolverTypeWrapper<Answer>;
  AnswerOnCriteria: ResolverTypeWrapper<AnswerOnCriteria>;
  AnswerOnCriteriaInput: AnswerOnCriteriaInput;
  Assessment: ResolverTypeWrapper<Assessment>;
  AssessmentStatus: AssessmentStatus;
  Assessments: ResolverTypeWrapper<Assessments>;
  BanningUser: ResolverTypeWrapper<BanningUser>;
  BatchPayload: ResolverTypeWrapper<BatchPayload>;
  Board: ResolverTypeWrapper<Board>;
  BoardType: BoardType;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Column: ResolverTypeWrapper<Column>;
  Criteria: ResolverTypeWrapper<Criteria>;
  CriteriaList: ResolverTypeWrapper<CriteriaList>;
  Evaluation: ResolverTypeWrapper<Evaluation>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Gender: Gender;
  GetPresignedUrlResponse: ResolverTypeWrapper<GetPresignedUrlResponse>;
  HealthCheck: ResolverTypeWrapper<HealthCheck>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LoginTemplateResponse: ResolverTypeWrapper<LoginTemplateResponse>;
  Member: ResolverTypeWrapper<Member>;
  MemberAnswer: ResolverTypeWrapper<MemberAnswer>;
  MemberComment: ResolverTypeWrapper<MemberComment>;
  MemberOnHealthCheckOnQuestion: ResolverTypeWrapper<MemberOnHealthCheckOnQuestion>;
  Mutation: ResolverTypeWrapper<{}>;
  Notification: ResolverTypeWrapper<Notification>;
  Opinion: ResolverTypeWrapper<Opinion>;
  OpinionStatus: OpinionStatus;
  PhaseType: PhaseType;
  Profile: ResolverTypeWrapper<Profile>;
  Query: ResolverTypeWrapper<{}>;
  Remark: ResolverTypeWrapper<Remark>;
  RemiderNotification: ResolverTypeWrapper<RemiderNotification>;
  Result: ResolverTypeWrapper<Result>;
  ResultInput: ResultInput;
  Session: ResolverTypeWrapper<Session>;
  StatusHealthCheck: StatusHealthCheck;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Team: ResolverTypeWrapper<Team>;
  TeamStatus: TeamStatus;
  Teams: ResolverTypeWrapper<Teams>;
  Template: ResolverTypeWrapper<Template>;
  TemplateQuestion: ResolverTypeWrapper<TemplateQuestion>;
  Templates: ResolverTypeWrapper<Templates>;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  User: ResolverTypeWrapper<User>;
  UserOnCriteria: ResolverTypeWrapper<UserOnCriteria>;
  UserStatus: UserStatus;
  Users: ResolverTypeWrapper<Users>;
  analysisAssessmentData: ResolverTypeWrapper<AnalysisAssessmentData>;
  answerInput: AnswerInput;
  areaRadarChartData: ResolverTypeWrapper<AreaRadarChartData>;
  combineOpinion: CombineOpinion;
  commentInput: CommentInput;
  getEssential: ResolverTypeWrapper<GetEssential>;
  getHealthCheck: ResolverTypeWrapper<GetHealthCheck>;
  getNotificationData: ResolverTypeWrapper<GetNotificationData>;
  getTeamIds: ResolverTypeWrapper<GetTeamIds>;
  healthCheckAnswer: HealthCheckAnswer;
  inviteResponse: ResolverTypeWrapper<InviteResponse>;
  inviteStatus: InviteStatus;
  orderOpinion: OrderOpinion;
  orderWith: OrderWith;
  questionsInput: QuestionsInput;
  questionsWithIdInput: QuestionsWithIdInput;
  rosePlotChartData: ResolverTypeWrapper<RosePlotChartData>;
  sortBy: SortBy;
  statusRequest: ResolverTypeWrapper<StatusRequest>;
  statusResponse: ResolverTypeWrapper<StatusResponse>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddMembersMutationResponse: AddMembersMutationResponse;
  Answer: Answer;
  AnswerOnCriteria: AnswerOnCriteria;
  AnswerOnCriteriaInput: AnswerOnCriteriaInput;
  Assessment: Assessment;
  Assessments: Assessments;
  BanningUser: BanningUser;
  BatchPayload: BatchPayload;
  Board: Board;
  Boolean: Scalars['Boolean']['output'];
  Column: Column;
  Criteria: Criteria;
  CriteriaList: CriteriaList;
  Evaluation: Evaluation;
  Float: Scalars['Float']['output'];
  GetPresignedUrlResponse: GetPresignedUrlResponse;
  HealthCheck: HealthCheck;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  LoginTemplateResponse: LoginTemplateResponse;
  Member: Member;
  MemberAnswer: MemberAnswer;
  MemberComment: MemberComment;
  MemberOnHealthCheckOnQuestion: MemberOnHealthCheckOnQuestion;
  Mutation: {};
  Notification: Notification;
  Opinion: Opinion;
  Profile: Profile;
  Query: {};
  Remark: Remark;
  RemiderNotification: RemiderNotification;
  Result: Result;
  ResultInput: ResultInput;
  Session: Session;
  String: Scalars['String']['output'];
  Subscription: {};
  Team: Team;
  Teams: Teams;
  Template: Template;
  TemplateQuestion: TemplateQuestion;
  Templates: Templates;
  Upload: Scalars['Upload']['output'];
  User: User;
  UserOnCriteria: UserOnCriteria;
  Users: Users;
  analysisAssessmentData: AnalysisAssessmentData;
  answerInput: AnswerInput;
  areaRadarChartData: AreaRadarChartData;
  combineOpinion: CombineOpinion;
  commentInput: CommentInput;
  getEssential: GetEssential;
  getHealthCheck: GetHealthCheck;
  getNotificationData: GetNotificationData;
  getTeamIds: GetTeamIds;
  healthCheckAnswer: HealthCheckAnswer;
  inviteResponse: InviteResponse;
  orderOpinion: OrderOpinion;
  questionsInput: QuestionsInput;
  questionsWithIdInput: QuestionsWithIdInput;
  rosePlotChartData: RosePlotChartData;
  statusRequest: StatusRequest;
  statusResponse: StatusResponse;
}>;

export type ConstraintDirectiveArgs = {
  contains?: Maybe<Scalars['String']['input']>;
  endsWith?: Maybe<Scalars['String']['input']>;
  exclusiveMax?: Maybe<Scalars['Float']['input']>;
  exclusiveMin?: Maybe<Scalars['Float']['input']>;
  format?: Maybe<Scalars['String']['input']>;
  max?: Maybe<Scalars['Float']['input']>;
  maxLength?: Maybe<Scalars['Int']['input']>;
  min?: Maybe<Scalars['Float']['input']>;
  minLength?: Maybe<Scalars['Int']['input']>;
  multipleOf?: Maybe<Scalars['Float']['input']>;
  notContains?: Maybe<Scalars['String']['input']>;
  pattern?: Maybe<Scalars['String']['input']>;
  startsWith?: Maybe<Scalars['String']['input']>;
  uniqueTypeName?: Maybe<Scalars['String']['input']>;
};

export type ConstraintDirectiveResolver<Result, Parent, ContextType = any, Args = ConstraintDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddMembersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddMembersMutationResponse'] = ResolversParentTypes['AddMembersMutationResponse']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  success?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  warnings?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  memberAnswer?: Resolver<Maybe<ResolversTypes['MemberAnswer']>, ParentType, ContextType>;
  memberAnswersId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  questionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnswerOnCriteriaResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnswerOnCriteria'] = ResolversParentTypes['AnswerOnCriteria']> = ResolversObject<{
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  criteria?: Resolver<Maybe<ResolversTypes['Criteria']>, ParentType, ContextType>;
  criteriaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  point?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  resultId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssessmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Assessment'] = ResolversParentTypes['Assessment']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creator?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evaluations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Evaluation']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['AssessmentStatus']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssessmentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Assessments'] = ResolversParentTypes['Assessments']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Assessment']>>>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BanningUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['BanningUser'] = ResolversParentTypes['BanningUser']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endBanned?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isBannedForever?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startBanned?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BatchPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchPayload'] = ResolversParentTypes['BatchPayload']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BoardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Board'] = ResolversParentTypes['Board']> = ResolversObject<{
  columns?: Resolver<Maybe<Array<Maybe<ResolversTypes['Column']>>>, ParentType, ContextType, Partial<BoardColumnsArgs>>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentPhase?: Resolver<Maybe<ResolversTypes['PhaseType']>, ParentType, ContextType>;
  disableDownVote?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  disableUpVote?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isAnonymous?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPublic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  meetingNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, Partial<BoardTeamArgs>>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timerInProgress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['BoardType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  votesLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ColumnResolvers<ContextType = any, ParentType extends ResolversParentTypes['Column'] = ResolversParentTypes['Column']> = ResolversObject<{
  board?: Resolver<Maybe<ResolversTypes['Board']>, ParentType, ContextType, Partial<ColumnBoardArgs>>;
  boardId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  opinions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opinion']>>>, ParentType, ContextType, Partial<ColumnOpinionsArgs>>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CriteriaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Criteria'] = ResolversParentTypes['Criteria']> = ResolversObject<{
  answerOnCriteriaList?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnswerOnCriteria']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CriteriaListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CriteriaList'] = ResolversParentTypes['CriteriaList']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Criteria']>>>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EvaluationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Evaluation'] = ResolversParentTypes['Evaluation']> = ResolversObject<{
  assessmentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assessor?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  assessorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isSubmit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Result']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetPresignedUrlResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetPresignedUrlResponse'] = ResolversParentTypes['GetPresignedUrlResponse']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HealthCheckResolvers<ContextType = any, ParentType extends ResolversParentTypes['HealthCheck'] = ResolversParentTypes['HealthCheck']> = ResolversObject<{
  boardId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isAnonymous?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  memberOnHealthCheck?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemberOnHealthCheckOnQuestion']>>>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginTemplateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginTemplateResponse'] = ResolversParentTypes['LoginTemplateResponse']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requiresEmailVerification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sub?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = ResolversObject<{
  assessments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Assessment']>>>, ParentType, ContextType>;
  evaluations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Evaluation']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isGuess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isOwner?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPendingInvitation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSuperOwner?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  joinedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  memberAnswers?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemberAnswer']>>>, ParentType, ContextType>;
  memberComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemberComment']>>>, ParentType, ContextType>;
  opinions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opinion']>>>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Remark']>>>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Result']>>>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberAnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberAnswer'] = ResolversParentTypes['MemberAnswer']> = ResolversObject<{
  answers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  healthCheck?: Resolver<Maybe<ResolversTypes['HealthCheck']>, ParentType, ContextType>;
  healthCheckId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  memberId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberComment'] = ResolversParentTypes['MemberComment']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  healthCheck?: Resolver<Maybe<ResolversTypes['HealthCheck']>, ParentType, ContextType>;
  healthCheckId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  memberId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  questionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberOnHealthCheckOnQuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberOnHealthCheckOnQuestion'] = ResolversParentTypes['MemberOnHealthCheckOnQuestion']> = ResolversObject<{
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  healthCheckId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  memberId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  point?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['TemplateQuestion']>, ParentType, ContextType>;
  questionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addMembers?: Resolver<Maybe<ResolversTypes['AddMembersMutationResponse']>, ParentType, ContextType, RequireFields<MutationAddMembersArgs, 'teamId'>>;
  answerHealthCheck?: Resolver<Maybe<ResolversTypes['getHealthCheck']>, ParentType, ContextType, RequireFields<MutationAnswerHealthCheckArgs, 'answers' | 'boardId' | 'comments' | 'teamId' | 'templateId'>>;
  banUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationBanUserArgs, 'description' | 'title' | 'userId'>>;
  changeRoleMember?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationChangeRoleMemberArgs, 'isOwner' | 'memberId' | 'teamId'>>;
  changeTeamAccess?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationChangeTeamAccessArgs, 'isPublic' | 'teamId'>>;
  combineOpinion?: Resolver<Maybe<ResolversTypes['Board']>, ParentType, ContextType, RequireFields<MutationCombineOpinionArgs, 'boardId' | 'teamId'>>;
  convertOpinion?: Resolver<Maybe<ResolversTypes['Opinion']>, ParentType, ContextType, RequireFields<MutationConvertOpinionArgs, 'boardId' | 'columnId' | 'isAction' | 'opinionId' | 'teamId'>>;
  convertOpinionsInColumn?: Resolver<Maybe<ResolversTypes['Column']>, ParentType, ContextType, RequireFields<MutationConvertOpinionsInColumnArgs, 'action' | 'boardId' | 'columnId' | 'teamId'>>;
  createAssessment?: Resolver<Maybe<ResolversTypes['Assessment']>, ParentType, ContextType, RequireFields<MutationCreateAssessmentArgs, 'criteriaList' | 'endDate' | 'memberIds' | 'nameAssessment' | 'startDate' | 'teamId'>>;
  createBoard?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationCreateBoardArgs, 'teamId'>>;
  createCriteria?: Resolver<Maybe<ResolversTypes['Criteria']>, ParentType, ContextType, RequireFields<MutationCreateCriteriaArgs, 'description' | 'name'>>;
  createCustomTemplate?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType, RequireFields<MutationCreateCustomTemplateArgs, 'name' | 'questions' | 'teamId'>>;
  createHealthCheck?: Resolver<Maybe<ResolversTypes['HealthCheck']>, ParentType, ContextType, RequireFields<MutationCreateHealthCheckArgs, 'isAnonymous' | 'teamId' | 'templateId'>>;
  createHealthCheckTemplate?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType, RequireFields<MutationCreateHealthCheckTemplateArgs, 'name' | 'questions'>>;
  createOpinion?: Resolver<Maybe<ResolversTypes['Column']>, ParentType, ContextType, RequireFields<MutationCreateOpinionArgs, 'boardId' | 'columnId' | 'teamId'>>;
  createRemark?: Resolver<Maybe<ResolversTypes['Opinion']>, ParentType, ContextType, RequireFields<MutationCreateRemarkArgs, 'boardId' | 'columnId' | 'opinionId' | 'teamId' | 'text'>>;
  createTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationCreateTeamArgs, 'endDate' | 'name' | 'picture' | 'startDate'>>;
  deleteAssessment?: Resolver<Maybe<ResolversTypes['Assessment']>, ParentType, ContextType, RequireFields<MutationDeleteAssessmentArgs, 'assessmentId' | 'teamId'>>;
  deleteBoard?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationDeleteBoardArgs, 'boardId' | 'teamId'>>;
  deleteCriteria?: Resolver<Maybe<ResolversTypes['Criteria']>, ParentType, ContextType, RequireFields<MutationDeleteCriteriaArgs, 'criteriaId'>>;
  deleteCustomTemplate?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType, RequireFields<MutationDeleteCustomTemplateArgs, 'teamId' | 'templateId'>>;
  deleteHealthCheckTemplate?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType, RequireFields<MutationDeleteHealthCheckTemplateArgs, 'templateId'>>;
  deleteTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationDeleteTeamArgs, 'teamId'>>;
  doPersonalReflection?: Resolver<Maybe<ResolversTypes['Assessment']>, ParentType, ContextType, RequireFields<MutationDoPersonalReflectionArgs, 'assessmentId' | 'assessorId' | 'teamId'>>;
  emptyColumn?: Resolver<Maybe<ResolversTypes['Column']>, ParentType, ContextType, RequireFields<MutationEmptyColumnArgs, 'boardId' | 'teamId'>>;
  getPresignedUrl?: Resolver<Maybe<ResolversTypes['GetPresignedUrlResponse']>, ParentType, ContextType, RequireFields<MutationGetPresignedUrlArgs, 'fileName' | 'fileType'>>;
  getSkillsAnalytic?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  joinTeamWithLink?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationJoinTeamWithLinkArgs, 'teamId'>>;
  loginTemplate?: Resolver<Maybe<ResolversTypes['LoginTemplateResponse']>, ParentType, ContextType, RequireFields<MutationLoginTemplateArgs, 'code' | 'state'>>;
  orderOpinion?: Resolver<Maybe<ResolversTypes['Board']>, ParentType, ContextType, RequireFields<MutationOrderOpinionArgs, 'boardId' | 'teamId'>>;
  removeMember?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationRemoveMemberArgs, 'memberId' | 'teamId'>>;
  removeNotification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<MutationRemoveNotificationArgs, 'notificationId'>>;
  removeOpinion?: Resolver<Maybe<ResolversTypes['Column']>, ParentType, ContextType, RequireFields<MutationRemoveOpinionArgs, 'boardId' | 'columnId' | 'opinionId' | 'teamId'>>;
  removeRemark?: Resolver<Maybe<ResolversTypes['Opinion']>, ParentType, ContextType, RequireFields<MutationRemoveRemarkArgs, 'boardId' | 'columnId' | 'opinionId' | 'remarkId' | 'teamId'>>;
  reopenHealthCheck?: Resolver<Maybe<ResolversTypes['HealthCheck']>, ParentType, ContextType, RequireFields<MutationReopenHealthCheckArgs, 'boardId' | 'teamId'>>;
  seenNotification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<MutationSeenNotificationArgs, 'notificationId'>>;
  startSurveyHealthCheck?: Resolver<Maybe<ResolversTypes['getHealthCheck']>, ParentType, ContextType, RequireFields<MutationStartSurveyHealthCheckArgs, 'boardId' | 'isAnonymous' | 'isCustom' | 'status' | 'teamId' | 'templateId'>>;
  submitHealthCheckAnswer?: Resolver<Maybe<ResolversTypes['HealthCheck']>, ParentType, ContextType, RequireFields<MutationSubmitHealthCheckAnswerArgs, 'answers' | 'boardId' | 'teamId'>>;
  updateAction?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationUpdateActionArgs, 'boardId' | 'columnId' | 'opinion' | 'teamId'>>;
  updateActionTracker?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationUpdateActionTrackerArgs, 'destinationBoardId' | 'destinationColumnId' | 'opinionId' | 'responsible' | 'sourceBoardId' | 'sourceColumnId' | 'status' | 'teamId'>>;
  updateAssessment?: Resolver<Maybe<ResolversTypes['Assessment']>, ParentType, ContextType, RequireFields<MutationUpdateAssessmentArgs, 'assessmentId' | 'assessmentName' | 'teamId'>>;
  updateBoard?: Resolver<Maybe<ResolversTypes['Board']>, ParentType, ContextType, RequireFields<MutationUpdateBoardArgs, 'boardId' | 'teamId'>>;
  updateCriteria?: Resolver<Maybe<ResolversTypes['Criteria']>, ParentType, ContextType, RequireFields<MutationUpdateCriteriaArgs, 'criteriaId' | 'description' | 'name'>>;
  updateCustomTemplate?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType, RequireFields<MutationUpdateCustomTemplateArgs, 'name' | 'questions' | 'teamId' | 'templateId'>>;
  updateHealthCheckTemplate?: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType, RequireFields<MutationUpdateHealthCheckTemplateArgs, 'name' | 'questions' | 'templateId'>>;
  updateMeetingNote?: Resolver<Maybe<ResolversTypes['Board']>, ParentType, ContextType, RequireFields<MutationUpdateMeetingNoteArgs, 'boardId' | 'meetingNote' | 'teamId'>>;
  updateOpinion?: Resolver<Maybe<ResolversTypes['Opinion']>, ParentType, ContextType, RequireFields<MutationUpdateOpinionArgs, 'opinionId' | 'teamId'>>;
  updateTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<MutationUpdateTeamArgs, 'description' | 'endDate' | 'isPublic' | 'name' | 'picture' | 'startDate' | 'teamId'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationUpdateUserArgs>>;
}>;

export type NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isSeen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiver?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  receiverId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  senderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpinionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opinion'] = ResolversParentTypes['Opinion']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  column?: Resolver<Maybe<ResolversTypes['Column']>, ParentType, ContextType, Partial<OpinionColumnArgs>>;
  columnId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  downVote?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isAction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isBookmarked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mergedAuthors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  remarks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Remark']>>>, ParentType, ContextType>;
  responsible?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OpinionStatus']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upVote?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  board?: Resolver<Maybe<ResolversTypes['Board']>, ParentType, ContextType, Partial<QueryBoardArgs>>;
  boards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Board']>>>, ParentType, ContextType, RequireFields<QueryBoardsArgs, 'teamId'>>;
  getAnalysisAssessment?: Resolver<Maybe<ResolversTypes['analysisAssessmentData']>, ParentType, ContextType, RequireFields<QueryGetAnalysisAssessmentArgs, 'assessmentId' | 'memberId' | 'teamId'>>;
  getAssessment?: Resolver<Maybe<ResolversTypes['Assessment']>, ParentType, ContextType, RequireFields<QueryGetAssessmentArgs, 'assessmentId' | 'teamId'>>;
  getAssessments?: Resolver<Maybe<ResolversTypes['Assessments']>, ParentType, ContextType, RequireFields<QueryGetAssessmentsArgs, 'teamId'>>;
  getCriteriaList?: Resolver<Maybe<ResolversTypes['CriteriaList']>, ParentType, ContextType, Partial<QueryGetCriteriaListArgs>>;
  getEssential?: Resolver<Maybe<ResolversTypes['getEssential']>, ParentType, ContextType>;
  getHealthCheck?: Resolver<Maybe<ResolversTypes['HealthCheck']>, ParentType, ContextType, Partial<QueryGetHealthCheckArgs>>;
  getNotifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Notification']>>>, ParentType, ContextType, RequireFields<QueryGetNotificationsArgs, 'page' | 'size'>>;
  getNumOfUnSeenNoti?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  getTeamIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['getTeamIds']>>>, ParentType, ContextType>;
  getTeams?: Resolver<Maybe<ResolversTypes['Teams']>, ParentType, ContextType, Partial<QueryGetTeamsArgs>>;
  getTeamsOfUser?: Resolver<Maybe<ResolversTypes['Teams']>, ParentType, ContextType, Partial<QueryGetTeamsOfUserArgs>>;
  getTemplates?: Resolver<Maybe<ResolversTypes['Templates']>, ParentType, ContextType, Partial<QueryGetTemplatesArgs>>;
  getTemplatesOfTeam?: Resolver<Maybe<Array<Maybe<ResolversTypes['Template']>>>, ParentType, ContextType, RequireFields<QueryGetTemplatesOfTeamArgs, 'teamId'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryGetUserArgs>>;
  getUsers?: Resolver<Maybe<ResolversTypes['Users']>, ParentType, ContextType, Partial<QueryGetUsersArgs>>;
  inviteLink?: Resolver<Maybe<ResolversTypes['inviteResponse']>, ParentType, ContextType, Partial<QueryInviteLinkArgs>>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['Member']>>>, ParentType, ContextType, RequireFields<QueryMembersArgs, 'teamId'>>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<QueryTeamArgs, 'teamId'>>;
}>;

export type RemarkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Remark'] = ResolversParentTypes['Remark']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  opinion?: Resolver<Maybe<ResolversTypes['Opinion']>, ParentType, ContextType>;
  opinionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RemiderNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemiderNotification'] = ResolversParentTypes['RemiderNotification']> = ResolversObject<{
  dateSent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  sentBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = ResolversObject<{
  answerOnCriteriaList?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnswerOnCriteria']>>>, ParentType, ContextType>;
  concerningMember?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  concerningMemberId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evaluationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  subOnUpdateColumn?: SubscriptionResolver<Maybe<ResolversTypes['Column']>, "subOnUpdateColumn", ParentType, ContextType, RequireFields<SubscriptionSubOnUpdateColumnArgs, 'meId' | 'teamId'>>;
  subOnUpdateHealthCheck?: SubscriptionResolver<Maybe<ResolversTypes['HealthCheck']>, "subOnUpdateHealthCheck", ParentType, ContextType, RequireFields<SubscriptionSubOnUpdateHealthCheckArgs, 'meId' | 'teamId'>>;
  subOnUpdateMeetingNote?: SubscriptionResolver<Maybe<ResolversTypes['Board']>, "subOnUpdateMeetingNote", ParentType, ContextType, RequireFields<SubscriptionSubOnUpdateMeetingNoteArgs, 'boardId' | 'teamId'>>;
  subOnUpdateTeam?: SubscriptionResolver<Maybe<ResolversTypes['Team']>, "subOnUpdateTeam", ParentType, ContextType, RequireFields<SubscriptionSubOnUpdateTeamArgs, 'meId' | 'teamId'>>;
  subOnUpdateTeams?: SubscriptionResolver<Maybe<ResolversTypes['statusRequest']>, "subOnUpdateTeams", ParentType, ContextType, RequireFields<SubscriptionSubOnUpdateTeamsArgs, 'meId'>>;
  updateBoard?: SubscriptionResolver<Maybe<ResolversTypes['Board']>, "updateBoard", ParentType, ContextType, RequireFields<SubscriptionUpdateBoardArgs, 'meId' | 'teamId'>>;
  updateOpinion?: SubscriptionResolver<Maybe<ResolversTypes['Opinion']>, "updateOpinion", ParentType, ContextType, RequireFields<SubscriptionUpdateOpinionArgs, 'meId' | 'teamId'>>;
}>;

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = ResolversObject<{
  assessments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Assessment']>>>, ParentType, ContextType, Partial<TeamAssessmentsArgs>>;
  boards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Board']>>>, ParentType, ContextType, Partial<TeamBoardsArgs>>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultBoardId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  healthCheck?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthCheck']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isPublic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['Member']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['TeamStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Teams'] = ResolversParentTypes['Teams']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Team']>>>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Template'] = ResolversParentTypes['Template']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  healthCheckQuestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['TemplateQuestion']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TemplateQuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TemplateQuestion'] = ResolversParentTypes['TemplateQuestion']> = ResolversObject<{
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TemplatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Templates'] = ResolversParentTypes['Templates']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Template']>>>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  banningUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['BanningUser']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  interest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  introduction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAdmin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['Member']>>>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Notification']>>>, ParentType, ContextType>;
  picture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  school?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Session']>>>, ParentType, ContextType>;
  skillValues?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserOnCriteria']>>>, ParentType, ContextType>;
  talent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userStatus?: Resolver<Maybe<ResolversTypes['UserStatus']>, ParentType, ContextType>;
  workplace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserOnCriteriaResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOnCriteria'] = ResolversParentTypes['UserOnCriteria']> = ResolversObject<{
  criteria?: Resolver<Maybe<ResolversTypes['Criteria']>, ParentType, ContextType>;
  criteriaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Users'] = ResolversParentTypes['Users']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnalysisAssessmentDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['analysisAssessmentData'] = ResolversParentTypes['analysisAssessmentData']> = ResolversObject<{
  areaRadarChartData?: Resolver<Maybe<Array<Maybe<ResolversTypes['areaRadarChartData']>>>, ParentType, ContextType>;
  rosePlotChartData?: Resolver<Maybe<Array<Maybe<ResolversTypes['rosePlotChartData']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AreaRadarChartDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['areaRadarChartData'] = ResolversParentTypes['areaRadarChartData']> = ResolversObject<{
  assessor?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  criteria?: Resolver<Maybe<ResolversTypes['Criteria']>, ParentType, ContextType>;
  isSubmit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  point?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetEssentialResolvers<ContextType = any, ParentType extends ResolversParentTypes['getEssential'] = ResolversParentTypes['getEssential']> = ResolversObject<{
  criteriaList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Criteria']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetHealthCheckResolvers<ContextType = any, ParentType extends ResolversParentTypes['getHealthCheck'] = ResolversParentTypes['getHealthCheck']> = ResolversObject<{
  healthCheck?: Resolver<Maybe<ResolversTypes['HealthCheck']>, ParentType, ContextType>;
  memberAnswers?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemberAnswer']>>>, ParentType, ContextType>;
  memberComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemberComment']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetNotificationDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['getNotificationData'] = ResolversParentTypes['getNotificationData']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Notification']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetTeamIdsResolvers<ContextType = any, ParentType extends ResolversParentTypes['getTeamIds'] = ResolversParentTypes['getTeamIds']> = ResolversObject<{
  boards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Board']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InviteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['inviteResponse'] = ResolversParentTypes['inviteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<ResolversTypes['inviteStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RosePlotChartDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['rosePlotChartData'] = ResolversParentTypes['rosePlotChartData']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  criteria?: Resolver<Maybe<ResolversTypes['Criteria']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['statusRequest'] = ResolversParentTypes['statusRequest']> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['statusResponse'] = ResolversParentTypes['statusResponse']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AddMembersMutationResponse?: AddMembersMutationResponseResolvers<ContextType>;
  Answer?: AnswerResolvers<ContextType>;
  AnswerOnCriteria?: AnswerOnCriteriaResolvers<ContextType>;
  Assessment?: AssessmentResolvers<ContextType>;
  Assessments?: AssessmentsResolvers<ContextType>;
  BanningUser?: BanningUserResolvers<ContextType>;
  BatchPayload?: BatchPayloadResolvers<ContextType>;
  Board?: BoardResolvers<ContextType>;
  Column?: ColumnResolvers<ContextType>;
  Criteria?: CriteriaResolvers<ContextType>;
  CriteriaList?: CriteriaListResolvers<ContextType>;
  Evaluation?: EvaluationResolvers<ContextType>;
  GetPresignedUrlResponse?: GetPresignedUrlResponseResolvers<ContextType>;
  HealthCheck?: HealthCheckResolvers<ContextType>;
  LoginTemplateResponse?: LoginTemplateResponseResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  MemberAnswer?: MemberAnswerResolvers<ContextType>;
  MemberComment?: MemberCommentResolvers<ContextType>;
  MemberOnHealthCheckOnQuestion?: MemberOnHealthCheckOnQuestionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  Opinion?: OpinionResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Remark?: RemarkResolvers<ContextType>;
  RemiderNotification?: RemiderNotificationResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  Teams?: TeamsResolvers<ContextType>;
  Template?: TemplateResolvers<ContextType>;
  TemplateQuestion?: TemplateQuestionResolvers<ContextType>;
  Templates?: TemplatesResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserOnCriteria?: UserOnCriteriaResolvers<ContextType>;
  Users?: UsersResolvers<ContextType>;
  analysisAssessmentData?: AnalysisAssessmentDataResolvers<ContextType>;
  areaRadarChartData?: AreaRadarChartDataResolvers<ContextType>;
  getEssential?: GetEssentialResolvers<ContextType>;
  getHealthCheck?: GetHealthCheckResolvers<ContextType>;
  getNotificationData?: GetNotificationDataResolvers<ContextType>;
  getTeamIds?: GetTeamIdsResolvers<ContextType>;
  inviteResponse?: InviteResponseResolvers<ContextType>;
  rosePlotChartData?: RosePlotChartDataResolvers<ContextType>;
  statusRequest?: StatusRequestResolvers<ContextType>;
  statusResponse?: StatusResponseResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  constraint?: ConstraintDirectiveResolver<any, any, ContextType>;
}>;
