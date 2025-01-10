import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { Button, Divider, Select } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import TeamsBreadcrumbs from './components/Breadcrumbs';
import CreateTeamButton from './components/CreateTeamButton';

type Props = {};

const TeamsPage = (props: Props) => {
  const t = useTranslations();
  return (
    <div className="h-full bg-white p-3 shadow-2xl rounded-xl">
      <div className="flex justify-between p-3">
        <TeamsBreadcrumbs />
        <div className="flex gap-2 justify-end">
          <Select
            defaultValue="all"
            data={[
              { value: 'all', label: t('common.all') }, // Use `value` as `en` and display `label` as English
              { value: 'doing', label: t('common.doing') }, // Use `value` as `vi` and display `label` as Tiếng Việt
              { value: 'done', label: t('common.done') }, // Use `value` as `vi` and display `label` as Tiếng Việt
            ]}
          />
          <CreateTeamButton />
        </div>
      </div>
      <Divider />
      <div>
        <Image
          src="https://wreflect.s3.ap-southeast-2.amazonaws.com/teams/Javascript.png"
          alt="Teams"
          height={900}
          width={900}
        />
      </div>
    </div>
  );
};

export default TeamsPage;
