'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { gql } from '@apollo/client';
import { useTranslations } from 'next-intl';
import { Divider } from '@mantine/core';
import {
  TeamDetailFragmentFragment,
  useGetTeamsOfUserQuery,
} from '@/__generated__/generated-hooks';
import SearchBar from '@/components/SearchBar';
import {
  getValidPageParams,
  getValidSizeParams,
  getValidTeamStatusParams,
} from '@/utils/validateParams';
import MyPagination from '../../../../components/MyPagination';
import TeamsBreadcrumbs from './components/Breadcrumbs';
import CreateTeamButton from './components/CreateTeamButton';
import TeamsFilter from './components/TeamFilter';
import { TEAM_DETAIL_FRAGMENT } from './components/TeamItem';
import TeamList from './components/TeamList';

type Props = {};

const teamsQueryDocument = gql`
  query getTeamsOfUser(
    $isGettingAll: Boolean
    $search: String
    $page: Int
    $size: Int
    $status: String
  ) {
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
  ${TEAM_DETAIL_FRAGMENT}
`;

const TeamsPage = (props: Props) => {
  const t = useTranslations();
  const searchParams = useSearchParams();

  const { error, data, loading, refetch, networkStatus } = useGetTeamsOfUserQuery({
    variables: {
      isGettingAll: false,
      search: searchParams.get('search') || '',
      page: getValidPageParams(searchParams.get('page')),
      size: getValidSizeParams(searchParams.get('size'), 6),
      status: getValidTeamStatusParams(searchParams.get('status')),
    },
    notifyOnNetworkStatusChange: true,
  });

  if (!data?.getTeamsOfUser) return '';

  const teams = (data?.getTeamsOfUser?.data || []) as Array<TeamDetailFragmentFragment>;
  const total = data?.getTeamsOfUser.total || null;

  const handleRefetchTeams = () => {
    refetch({
      isGettingAll: false,
      search: searchParams.get('search') || '',
      page: getValidPageParams(searchParams.get('page')),
      size: getValidSizeParams(searchParams.get('size')),
      status: getValidTeamStatusParams(searchParams.get('status')),
    });
  };

  return (
    <div className=" flex flex-col min-w-fit bg-white p-3 shadow-2xl rounded-xl min-h-full ">
      <div className="flex min-w-fit gap-6 justify-between p-3">
        <TeamsBreadcrumbs />
        <div className="flex flex-grow gap-2 justify-end">
          <MyPagination total={total || 0} />
          <TeamsFilter />
          <SearchBar />
          <CreateTeamButton onRefetch={handleRefetchTeams} />
        </div>
      </div>
      <Divider />
      <div className="my-3 flex flex-grow flex-col justify-between gap-3">
        {teams && teams?.length > 0 && <TeamList teams={teams} />}
      </div>
    </div>
  );
};

export default TeamsPage;
