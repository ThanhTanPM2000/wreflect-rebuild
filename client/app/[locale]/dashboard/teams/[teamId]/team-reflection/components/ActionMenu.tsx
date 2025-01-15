import React from 'react';
import {
  IconArrowsLeftRight,
  IconMenu,
  IconMenu2,
  IconMenu3,
  IconMenu4,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';
import { Button, Menu, Text } from '@mantine/core';

type Props = {};

const ActionMenu = (props: Props) => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button leftSection={<IconMenu2 />} className="rounded-full !bg-primary">
          Action Menu
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>Gallery</Menu.Item>
        <Menu.Item
          leftSection={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
        <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ActionMenu;
