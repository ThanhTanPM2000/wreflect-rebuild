'use client';

import { useEffect, useState } from 'react';
import { differenceInMilliseconds, intervalToDuration } from 'date-fns';
import { useTranslations } from 'next-intl';

type Props = {
  endTime: Date;
};

export default function Countdown({ endTime }: Props) {
  const [remainingTime, setRemainingTime] = useState(differenceInMilliseconds(endTime, Date.now()));
  const t = useTranslations();

  useEffect(() => {
    // Update the remaining time every second
    const intervalId = setInterval(() => {
      const diff = differenceInMilliseconds(endTime, new Date());
      if (diff > 0) {
        setRemainingTime(diff > 0 ? diff : 0);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endTime]);

  // if (remainingTime <= 0) return <div className="text-gray-500">00:00:00</div>;

  // Convert remaining milliseconds to a duration object
  const duration = intervalToDuration({ start: 0, end: remainingTime });

  const dayLabel = `${t('common.days').toLowerCase()} `;
  const days = duration.days ? `${duration.days} ` + dayLabel : '';
  const hours = duration.hours ? duration.hours.toString().padStart(2, '0') : '00';
  const minutes = duration.minutes ? duration.minutes.toString().padStart(2, '0') : '00';
  const seconds = duration.seconds ? duration.seconds.toString().padStart(2, '0') : '00';

  return (
    <div
      suppressHydrationWarning
      className="text-lg font-medium bg-gray-400 text-center min-w-fit w-48 rounded-full py-2 px-5 text-white"
    >{`${days}${hours}:${minutes}:${seconds}`}</div>
  );
}
