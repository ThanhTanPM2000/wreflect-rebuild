'use client';

import dynamic from 'next/dynamic';
import { IconMoodSmile } from '@tabler/icons-react';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { EmojiClickData } from 'emoji-picker-react';
import { ActionIcon, Menu } from '@mantine/core';
import { RichTextEditor } from '@mantine/tiptap';

const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);

type Props = {
  placeholder?: string;
  onCreateAction: (text: String) => void;
};

export default function TextEditor({ placeholder, onCreateAction }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight,
      Placeholder.configure({ placeholder: placeholder || '' }),
    ],
    immediatelyRender: false,
    content: '',
  });

  const handleEmojiClick = (object: EmojiClickData) => {
    if (editor) {
      editor.chain().focus().insertContent(object.emoji).run();
    }
  };

  const handlePressEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onCreateAction(editor?.getHTML() || '');
      editor?.commands.clearContent();
    }
  };

  return (
    <RichTextEditor editor={editor} variant="subtle">
      <div>
        <RichTextEditor.Toolbar className="flex justify-between" sticky stickyOffset={60}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>
          <div className="relative">
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <ActionIcon color="gray-600" variant="transparent">
                  <IconMoodSmile />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Picker
                  height="20rem"
                  lazyLoadEmojis
                  reactionsDefaultOpen={true}
                  onEmojiClick={handleEmojiClick}
                />
              </Menu.Dropdown>
            </Menu>
          </div>
        </RichTextEditor.Toolbar>
      </div>

      <RichTextEditor.Content onKeyDown={handlePressEnter} />
    </RichTextEditor>
  );
}
