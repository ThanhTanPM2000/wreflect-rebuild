import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { HiCog, HiOutlineLogin, HiUserGroup } from 'react-icons/hi';
import { ActionIcon, Badge, Button, Card, Group, Popover, Text } from '@mantine/core';
import { Link } from '@/i18n/routing';
import { Team } from '@/types';

type Props = {
  team: Team;
};

const TeamItem = ({ team }: Props) => {
  const t = useTranslations();

  return (
    <Card className="h-full" shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section className="aspect-video">
        <Image
          src={team.picture}
          priority
          height={400}
          width={400}
          className="h-full w-auto object-cover"
          alt="Team Image"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{team.name}</Text>
        <Badge color="pink">{team.status === 'DONE' ? t('common.done') : t('common.doing')}</Badge>
      </Group>

      <Text className="flex-grow text-center !mb-2" size="sm" c="dimmed">
        {team.description}
      </Text>

      <div className="flex items-center justify-around gap-3">
        <Button
          component={Link}
          href={`teams/${team.id}/team-reflection`}
          className="!flex-1 min-w-fit"
          leftSection={<HiOutlineLogin />}
        >
          {t('teams.teamReflection')}
        </Button>
        <Button
          component={Link}
          href={`teams/${team.id}/members`}
          className="!flex-1 min-w-fit"
          leftSection={<HiUserGroup />}
        >
          {t('teams.members')}
        </Button>
        <Button
          component={Link}
          href={`${team.id}/setting`}
          className="!flex-1 min-w-fit"
          leftSection={<HiCog />}
        >
          {t('teams.settings')}
        </Button>
      </div>
    </Card>
  );
};

export default TeamItem;
