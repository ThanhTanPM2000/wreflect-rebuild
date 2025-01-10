import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@mantine/core';
import Header from './components/Header';

type Props = {
  params: Promise<{ locale: string }>;
};

const HomePage = ({ params }: Props) => {
  const t = useTranslations();
  return (
    <div>
      <Header />
      <div className="home-page p-6">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-20">
          <div>
            <h1 className="text-4xl font-bold">{t('homepage.titles.what_is_reflect')}</h1>
            <p className="text-gray-600 mt-4">
              {t('homepage.content.retrospective.0')} <b>{t('homepage.content.retrospective.1')}</b>
            </p>
          </div>
          <Image
            className="w-auto h-auto aspect-video"
            width={0}
            height={0}
            src="/images/teamwork-gif1.gif"
            alt="Teamwork GIF 1"
          />
        </div>

        {/* Section 2 */}
        <div className="mt-16 text-center">
          <h1 className="text-4xl font-bold">{t('homepage.titles.what_role')}</h1>
          <p className="text-gray-600 mt-4">
            {t('homepage.content.retrospective.0')} <b>{t('homepage.content.retrospective.1')}</b>
          </p>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-16">
          <Image
            className="w-auto h-auto aspect-video"
            width={0}
            height={0}
            src="/images/teamwork-gif2.gif"
            alt="Teamwork GIF 2"
          />
          <div>
            <h1 className="text-4xl font-bold">{t('homepage.titles.why_have_reflect')}</h1>
            <p className="text-gray-600 mt-4">
              {t('homepage.content.why.0')} <b>{t('homepage.content.retrospective.0')}</b>{' '}
              {t('homepage.content.why.1')}
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-16">
          <div>
            <h1 className="text-4xl font-bold">{t('homepage.titles.in_short')}</h1>
            <p className="text-gray-600 mt-4">
              {t('homepage.content.evaluate.1')} <b>{t('homepage.content.retrospective.1')}</b>
            </p>
            <div className="mt-6">
              <Button variant="filled" className="mr-4" radius="lg">
                {t('common.authentication.signup')}
              </Button>
              <Button variant="outline" color="gray" radius="lg">
                {t('homepage.content.tutorial')}
              </Button>
            </div>
          </div>
          <Image
            src="/images/teamwork-gif3.gif"
            alt="Teamwork GIF 3"
            className="w-auto h-auto aspect-video"
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
