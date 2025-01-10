import React from 'react';
import { useTranslations } from 'next-intl';
import { Progress } from '@mantine/core';

type OverlayProps = {
  progress: number;
};

const Overlay = ({ progress }: OverlayProps) => {
  const t = useTranslations();
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <p className="mb-4">{t('common.upload_warning')}</p>
        <Progress value={progress} />
      </div>
    </div>
  );
};

export default Overlay;
