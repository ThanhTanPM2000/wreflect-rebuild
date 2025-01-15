'use client';

import { useTranslations } from 'next-intl';
import TeamNavItem from './TeamNavItem';

type Props = {};

const TeamNavigation = (props: Props) => {
  const t = useTranslations();

  return (
    <div className="flex gap-2">
      <TeamNavItem to="team-reflection" title={t('teams.teamReflection')} />
      <TeamNavItem to="self-reflection" title={t('teams.selfReflection')} />
      <TeamNavItem to="members" title={t('teams.members')} />
      <TeamNavItem to="action-tracker" title={t('teams.actionTracker')} />
      <TeamNavItem to="boards" title={t('teams.boards')} />
    </div>
  );
};

export default TeamNavigation;
