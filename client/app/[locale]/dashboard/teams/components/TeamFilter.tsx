import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Select } from '@mantine/core';
import { getValidTeamStatusParams } from '@/utils/validateParams';

type Props = {};

const TeamsFilter = (props: Props) => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const statusString = searchParams.get('status');
  const status = getValidTeamStatusParams(statusString);

  const handleStatusChange = (value: string | null) => {
    if (value) {
      const currentSearchParams = new URLSearchParams(searchParams.toString());
      console.log({ value });
      currentSearchParams.set('status', value || 'ALL');
      router.push(`${pathname}?${currentSearchParams.toString()}`, {
        scroll: false,
      });
    }
  };

  return (
    <Select
      defaultValue={status || 'all'}
      className="!min-w-fit"
      // onOptionSubmit={handleStatusChange}
      allowDeselect={false}
      onChange={handleStatusChange}
      data={[
        { value: 'ALL', label: t('common.all') }, // Use `value` as `en` and display `label` as English
        { value: 'DOING', label: t('common.doing') }, // Use `value` as `vi` and display `label` as Tiếng Việt
        { value: 'DONE', label: t('common.done') }, // Use `value` as `vi` and display `label` as Tiếng Việt
      ]}
    />
  );
};

export default TeamsFilter;
