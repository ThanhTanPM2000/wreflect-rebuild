import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@mantine/core';
import { usePathname } from '@/i18n/routing';

type Props = {
  to: string;
  title: string;
};

const TeamNavItem = ({ to, title }: Props) => {
  const params = useParams();
  const pathname = usePathname();

  return (
    <Button
      component={Link}
      href={`/dashboard/teams/${params.teamId}/${to}`}
      className="rounded-full"
      variant={pathname.includes(to) ? 'filled' : 'outline'}
    >
      {title}
    </Button>
  );
};

export default TeamNavItem;
