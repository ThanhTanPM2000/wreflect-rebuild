import React, { useState } from 'react';
import Image from 'next/image';
import { useMutation } from '@apollo/client';
import { useTranslations } from 'next-intl';
import {
  Button,
  FileButton,
  Group,
  Modal,
  Progress,
  Select,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { hasLength, useForm } from '@mantine/form';
import { getPresignedUrl } from '@/lib/apollo-client/mutations/PreSignedUrlMutations';
import { createTeam } from '@/lib/apollo-client/mutations/TeamMutations';
import { resizeFile } from '@/utils/resizeFile';
import Overlay from './OverlayProgress';

type Props = {
  isVisible: boolean;
  setIsVisible: (val: boolean) => void;
};

const NewTeamModal = ({ isVisible, setIsVisible }: Props) => {
  const t = useTranslations();
  const [createTeamFunc] = useMutation(createTeam);
  const [getPresignedUrlFunc] = useMutation(getPresignedUrl);
  const [uploadedImage, setUploadedImage] = useState<{ imageName: string; url: string } | null>(
    null
  );
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isCreating, setIsCreating] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      teamName: '',
      teamDescription: '',
      upload: null as File | null,
      rangePicker: [null, null] as [Date | null, Date | null],
      select: 'public',
    },
    validate: {
      teamName: hasLength({ min: 5 }, t('modal.new_team.team_name_validation.min_length')),
      rangePicker: (value) =>
        value[0] && value[1] ? null : t('modal.new_team.validation.date_range'),
    },
  });

  const onFinish = async () => {
    if (form.validate().hasErrors) return;

    const { teamName, teamDescription, rangePicker, select, upload } = form.getValues();

    if (upload) {
      setIsCreating(true);
      const resizedFile = await resizeFile(upload);
      const { data } = await getPresignedUrlFunc({
        variables: { fileName: resizedFile?.name, fileType: resizedFile?.type },
      });

      const presignedUrl = data.getPresignedUrl.url;

      const xhr = new XMLHttpRequest();
      xhr.open('PUT', presignedUrl, true);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          setUploadProgress(percentComplete);
        }
      };

      xhr.onload = async () => {
        if (xhr.status === 200) {
          await createTeamFunc({
            variables: {
              name: teamName,
              startDate: rangePicker[0],
              endDate: rangePicker[1],
              description: teamDescription,
              isPublic: select === 'public',
              picture: presignedUrl.split('?')[0], // URL without query params
            },
          });

          form.reset();
          setUploadedImage(null);
          setUploadProgress(0);
          setIsVisible(false);
        } else {
          console.error('Upload failed');
        }
        setIsCreating(false);
      };

      xhr.onerror = () => {
        console.error('Upload error');
      };

      xhr.send(resizedFile);
    }
  };

  return (
    <Modal
      centered
      opened={isVisible}
      onClose={() => !isCreating && setIsVisible(false)}
      title={<p className="font-bold text-xl">{t('modal.new_team.title')}</p>}
      size="xl"
      withCloseButton
    >
      <form onSubmit={form.onSubmit(onFinish)} className="flex flex-col gap-4">
        <TextInput
          label={t('modal.new_team.team_name')}
          placeholder={t('modal.new_team.team_name_placeholder')}
          {...form.getInputProps('teamName')}
          withAsterisk
        />

        <Textarea
          label={t('modal.new_team.description')}
          placeholder={t('modal.new_team.description_placeholder')}
          {...form.getInputProps('teamDescription')}
        />

        <div>
          <label className="text-sm font-medium mb-2 block">
            {t('modal.new_team.upload_label')}
          </label>
          <FileButton
            accept="image/png,image/jpeg"
            onChange={async (file) => {
              if (file) {
                const resizedFile = (await resizeFile(file)) || file;
                const fileName = resizedFile.name;
                const fileLink = URL.createObjectURL(resizedFile);
                setUploadedImage({ imageName: fileName, url: fileLink });
                form.setFieldValue('upload', resizedFile as File);
              } else {
                form.setFieldValue('upload', file);
              }
            }}
          >
            {(props) => (
              <Button {...props} className="w-full">
                {t('modal.new_team.upload_button')}
              </Button>
            )}
          </FileButton>
          {uploadedImage && (
            <Image
              className="mt-4"
              height={180}
              width={320}
              src={uploadedImage.url}
              alt={uploadedImage.imageName}
            />
          )}
          {/* {uploadProgress > 0 && <Progress value={uploadProgress} className="mt-4" />} */}
        </div>

        <DatePickerInput
          label={t('modal.new_team.date_picker_label')}
          type="range"
          numberOfColumns={2}
          withAsterisk
          {...form.getInputProps('rangePicker')}
        />

        <Select
          label={t('modal.new_team.select_label')}
          placeholder={t('modal.new_team.select_label')}
          data={[
            { value: 'private', label: t('modal.new_team.select_options.private') },
            { value: 'public', label: t('modal.new_team.select_options.public') },
          ]}
          {...form.getInputProps('select')}
        />

        <Group mt="lg">
          <Button type="button" variant="outline" color="red" onClick={() => setIsVisible(false)}>
            {t('modal.new_team.buttons.cancel')}
          </Button>
          <Button loading={isCreating} type="submit">
            {t('modal.new_team.buttons.create')}
          </Button>
        </Group>
      </form>
      {isCreating && <Overlay progress={uploadProgress} />}
    </Modal>
  );
};

export default NewTeamModal;
