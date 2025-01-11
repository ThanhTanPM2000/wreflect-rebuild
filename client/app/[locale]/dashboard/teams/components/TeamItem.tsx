import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Badge, Button, Card, Group, Popover, Text } from '@mantine/core';
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

      <Text className="flex-grow" size="sm" c="dimmed">
        {team.description}
      </Text>

      <Button fullWidth mt="md" radius="md">
        Go into team
      </Button>
    </Card>
  );
};

export default TeamItem;
