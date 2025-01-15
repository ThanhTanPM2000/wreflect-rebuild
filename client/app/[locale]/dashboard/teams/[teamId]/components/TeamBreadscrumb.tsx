'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Breadcrumbs } from '@mantine/core';
import { usePathname } from '@/i18n/routing';

type Props = {};

function TeamsBreadcrumbs(prosp: Props) {
  const t = useTranslations();
  const pathname = usePathname();

  let currentTitle;
  if (pathname.includes('team-reflection')) {
    currentTitle = t('teams.teamReflection');
  } else if (pathname.includes('self-reflection')) {
    currentTitle = t('teams.selfReflection');
  } else if (pathname.includes('members')) {
    currentTitle = t('teams.members');
  } else if (pathname.includes('action-tracker')) {
    currentTitle = t('teams.actionTracker');
  } else if (pathname.includes('boards')) {
    currentTitle = t('teams.boards');
  }

  const items = [
    { title: t('sidebar.teams'), href: `/dashboard/teams` },
    {
      href: pathname,
      title: currentTitle,
    },
  ].map((item, index) => (
    <Link className="font-extrabold text-xl text-primary" href={item.href} key={index}>
      {item.title}
    </Link>
  ));

  return (
    <>
      <Breadcrumbs className="text-primary" ml="xs" separatorMargin="md">
        {items}
      </Breadcrumbs>
    </>
  );
}

export default TeamsBreadcrumbs;
