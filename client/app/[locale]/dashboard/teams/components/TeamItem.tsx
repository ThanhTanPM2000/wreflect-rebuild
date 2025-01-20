import React from 'react';
import Image from 'next/image';
import { FragmentType, gql, useFragment } from '@apollo/client';
import { IconDoorEnter, IconSettings, IconUsersGroup } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { ActionIcon, Badge, Button, Card, Grid, Group, Popover, Text } from '@mantine/core';
import { TeamDetailFragmentFragment } from '@/__generated__/generated-hooks';
import { Link } from '@/i18n/routing';
import { Team } from '@/types';

export const TEAM_DETAIL_FRAGMENT = gql`
  fragment TeamDetailFragment on Team {
    id
    name
    createdAt
    startDate
    endDate
    picture
    isPublic
    status
    description
    defaultBoardId
  }
`;

type Props = {
  team: TeamDetailFragmentFragment;
};

const TeamItem = ({ team }: Props) => {
  const t = useTranslations();
  const { data } = useFragment({
    fragment: TEAM_DETAIL_FRAGMENT,
    from: team,
  });

  return (
    <Grid.Col className="min-w-fit" span={2} key={data.id}>
      <Card className="h-full" shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section className="aspect-video">
          <Image
            src={data.picture}
            priority
            height={400}
            width={400}
            className="h-full w-auto object-cover"
            alt="Team Image"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{data.name}</Text>
          <Badge color="pink">
            {data.status === 'DONE' ? t('common.done') : t('common.doing')}
          </Badge>
        </Group>

        <Text className="flex-grow text-center !mb-2" size="sm" c="dimmed">
          {data.description}
        </Text>

        <div className="flex items-center justify-around gap-3">
          <Button
            component={Link}
            href={`teams/${data.id}/team-reflection`}
            className="!flex-1 min-w-fit"
            leftSection={<IconDoorEnter />}
          >
            {t('teams.teamReflection')}
          </Button>
          <Button
            component={Link}
            href={`teams/${data.id}/members`}
            className="!flex-1 min-w-fit"
            leftSection={<IconUsersGroup />}
          >
            {t('teams.members')}
          </Button>
          <Button
            component={Link}
            href={`${data.id}/setting`}
            className="!flex-1 min-w-fit"
            leftSection={<IconSettings />}
          >
            {t('teams.settings')}
          </Button>
        </div>
      </Card>
    </Grid.Col>
  );
};

export default TeamItem;
