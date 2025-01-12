'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { useTranslations } from 'next-intl';
import { Divider, Pagination, Select } from '@mantine/core';
import SearchBar from '@/components/SearchBar';
import {
  getTeamsOfUser,
  getTeamsOfUserResult,
  getTeamsOfUserVars,
} from '@/lib/apollo-client/queries/TeamQueries';
import {
  getValidPageParams,
  getValidSizeParams,
  getValidTeamStatusParams,
} from '@/utils/validateParams';
import MyPagination from '../../../../components/MyPagination';
import TeamsBreadcrumbs from './components/Breadcrumbs';
import CreateTeamButton from './components/CreateTeamButton';
import TeamsFilter from './components/TeamFilter';
import TeamList from './components/TeamList';

type Props = {};

const TeamsPage = (props: Props) => {
  const t = useTranslations();
  const searchParams = useSearchParams();

  const { error, data, loading, refetch, networkStatus } = useQuery<
    getTeamsOfUserResult,
    getTeamsOfUserVars
  >(getTeamsOfUser, {
    variables: {
      isGettingAll: false,
      search: searchParams.get('search') || '',
      page: getValidPageParams(searchParams.get('page')),
      size: getValidSizeParams(searchParams.get('size'), 6),
      status: getValidTeamStatusParams(searchParams.get('status')),
    },
    notifyOnNetworkStatusChange: true,
  });

  const teams = data?.getTeamsOfUser?.data || [];
  const total = data?.getTeamsOfUser.total || null;

  return (
    <div className=" flex flex-col min-w-fit bg-white p-3 shadow-2xl rounded-xl min-h-full ">
      <div className="flex min-w-fit gap-6 justify-between p-3">
        <TeamsBreadcrumbs />
        <div className="flex flex-grow gap-2 justify-end">
          <MyPagination total={total || 0} />
          <TeamsFilter />
          <SearchBar />
          <CreateTeamButton
            onRefetch={() =>
              refetch({
                isGettingAll: false,
                search: searchParams.get('search') || '',
                page: getValidPageParams(searchParams.get('page')),
                size: getValidSizeParams(searchParams.get('size')),
                status: getValidTeamStatusParams(searchParams.get('status')),
              })
            }
          />
        </div>
      </div>
      <Divider />
      <div className="my-3 flex flex-grow flex-col justify-between gap-3">
        <TeamList teams={teams} />
      </div>
    </div>
  );
};

export default TeamsPage;
