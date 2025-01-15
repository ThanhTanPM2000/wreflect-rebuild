import { useState } from 'react';
import {
  IconChevronLeft,
  IconChevronRight,
  IconCircleCheck,
  IconMailOpened,
  IconShieldCheck,
  IconUserCheck,
} from '@tabler/icons-react';
import { ActionIcon, Button, Group, Stepper } from '@mantine/core';

export default function TeamStepper() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className="flex justify-center items-center !bg-white shadow-lg rounded-lg p-4 h-fit gap-3">
      <ActionIcon variant="subtle" onClick={prevStep}>
        <IconChevronLeft />
      </ActionIcon>
      <Stepper
        className="min-w-fit  flex flex-col items-center justify-center"
        size="xs"
        active={active}
        completedIcon={<IconCircleCheck size={18} />}
        wrap={false}
      >
        <Stepper.Step
          icon={<IconUserCheck size={18} />}
          label="Collect"
          description="Create an account"
        />
        <Stepper.Step
          icon={<IconMailOpened size={18} />}
          label="Group"
          description="Verify email"
        />
        <Stepper.Step
          icon={<IconShieldCheck size={18} />}
          label="Votes"
          description="Get full access"
        />
        <Stepper.Step
          icon={<IconShieldCheck size={18} />}
          label="Discuss"
          description="Get full access"
        />
      </Stepper>
      <ActionIcon variant="subtle" onClick={nextStep}>
        <IconChevronRight />
      </ActionIcon>
      <Button>Start Timer</Button>
    </div>
  );
}
