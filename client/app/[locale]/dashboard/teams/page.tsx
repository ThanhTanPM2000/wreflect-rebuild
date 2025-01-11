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
      size: getValidSizeParams(searchParams.get('size')),
      status: getValidTeamStatusParams(searchParams.get('status')),
    },
    fetchPolicy: 'network-only', // Used for first execution
    notifyOnNetworkStatusChange: true,
  });

  const teams = data?.getTeamsOfUser?.data || [];
  const total = data?.getTeamsOfUser.total || null;

  return (
    <div className=" flex flex-col min-w-fit bg-white p-3 shadow-2xl rounded-xl min-h-full overflow-y-auto ">
      <div className="flex min-w-fit gap-6 justify-between p-3">
        <TeamsBreadcrumbs />
        <div className="flex flex-grow gap-2 justify-end">
          <Select
            defaultValue="all"
            className="!min-w-fit"
            data={[
              { value: 'all', label: t('common.all') }, // Use `value` as `en` and display `label` as English
              { value: 'doing', label: t('common.doing') }, // Use `value` as `vi` and display `label` as Tiếng Việt
              { value: 'done', label: t('common.done') }, // Use `value` as `vi` and display `label` as Tiếng Việt
            ]}
          />
          <SearchBar />
          <CreateTeamButton />
        </div>
      </div>
      <Divider />
      <div className="my-3 flex flex-grow flex-col justify-between gap-3">
        <TeamList teams={teams} />
        <MyPagination total={total || 0} />
      </div>
    </div>
  );
};

export default TeamsPage;
