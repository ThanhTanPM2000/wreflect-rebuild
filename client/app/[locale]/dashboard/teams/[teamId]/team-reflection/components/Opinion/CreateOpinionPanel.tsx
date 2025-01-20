'use client';

import React, { useRef } from 'react';
import { useParams } from 'next/navigation';
import { gql, useMutation } from '@apollo/client';
import { IconMessageCircle, IconPhoto } from '@tabler/icons-react';
import { Tabs } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  ColumnDetailFragmentFragment,
  MutationCreateOpinionArgs,
  OpinionDetailFragmentFragment,
} from '@/__generated__/generated-hooks';
import TextEditor from '@/components/TextEditor';
import useGetUserMember from '../../../hooks/useGetUserMember';
import { COLUMN_DETAIL_FRAGMENT } from '../Column';
import { OPINION_DETAIL_FRAGMENT } from './';

const CREATE_TICKET_MUTATION = gql`
  mutation createOpinionMutation(
    $memberId: String!
    $columnId: String!
    $text: String
    $isAction: Boolean
    $isCreateBottom: Boolean
  ) {
    createOpinion(
      memberId: $memberId
      columnId: $columnId
      text: $text
      isAction: $isAction
      isCreateBottom: $isCreateBottom
    ) {
      ...OpinionDetailFragment
    }
  }
  ${OPINION_DETAIL_FRAGMENT}
`;

type Props = {
  columnId: String;
  isAction?: Boolean;
  isCreatingBottom?: Boolean;
};

const CreateOpnionPanel = ({ columnId, isAction = false, isCreatingBottom = false }: Props) => {
  const tabValueRef = useRef<string>(`${isAction}` || `false`);
  const params = useParams();
  const member = useGetUserMember();
  console.log({ member });

  const [mutate, { loading }] = useMutation<{
    createOpinion: OpinionDetailFragmentFragment | null;
  }>(CREATE_TICKET_MUTATION, {
    // Result type of the mutation
    onError: (error) => {
      notifications.show({
        color: 'red',
        message: 'Failed to create opinion',
      });
    },
    update(cache, { data }) {
      try {
        const newOpinion = data?.createOpinion || null;
        if (!newOpinion) return;

        const columnId = newOpinion.columnId;
        const columnFragmentId = `Column:${columnId}`;

        const columnData = cache.readFragment<ColumnDetailFragmentFragment>({
          id: columnFragmentId,
          fragment: COLUMN_DETAIL_FRAGMENT,
          fragmentName: 'ColumnDetailFragment',
        });

        if (columnData) {
          cache.writeFragment({
            id: columnFragmentId,
            fragment: COLUMN_DETAIL_FRAGMENT,
            fragmentName: 'ColumnDetailFragment',
            data: {
              ...columnData,
              opinions: isCreatingBottom
                ? [...(columnData?.opinions || []), newOpinion]
                : [newOpinion, ...(columnData?.opinions || [])],
            },
          });
        }
      } catch (error) {
        console.log({ error });
      }
    },
  });

  const handleCreateOpinion = (text: String) => {
    const isAction = tabValueRef.current === 'true' ? true : false;
    mutate({
      variables: {
        columnId,
        memberId: member?.id,
        text,
        isAction,
        isCreateBottom: isCreatingBottom,
      },
    });
  };

  return (
    <div>
      <Tabs
        defaultValue={tabValueRef.current}
        onChange={(value) => (tabValueRef.current = value || 'false')}
      >
        <Tabs.List>
          <Tabs.Tab value="false" leftSection={<IconPhoto size={12} />}>
            Opinion
          </Tabs.Tab>
          <Tabs.Tab value="true" leftSection={<IconMessageCircle size={12} />}>
            Action
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel className="text-gray-400" value="false" pt="xs">
          <TextEditor placeholder="This is opinion" onCreateAction={handleCreateOpinion} />
        </Tabs.Panel>

        <Tabs.Panel className="text-gray-400" value="true" pt="xs">
          <TextEditor placeholder="This is action" onCreateAction={handleCreateOpinion} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default CreateOpnionPanel;
