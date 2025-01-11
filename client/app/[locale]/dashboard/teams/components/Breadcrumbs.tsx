import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Breadcrumbs } from '@mantine/core';

function TeamsBreadcrumbs() {
  const t = useTranslations();

  const items = [{ title: t('sidebar.teams'), href: `/dashboard/teams` }].map((item, index) => (
    <Link className="font-extrabold text-xl text-primary" href={item.href} key={index}>
      {item.title}
    </Link>
  ));

  return (
    <>
      <Breadcrumbs ml="xs" separatorMargin="md">
        {items}
      </Breadcrumbs>
    </>
  );
}

export default TeamsBreadcrumbs;
