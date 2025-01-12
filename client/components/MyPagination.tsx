import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from '@mantine/core';
import { usePathname } from '@/i18n/routing';
import {
  getCurrentUrlParams,
  getValidPageParams,
  getValidSizeParams,
} from '@/utils/validateParams';

type Props = {
  total: number;
};

const MyPagination = ({ total }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const pageString = searchParams.get('page');
  const currentPage = getValidPageParams(pageString);
  const sizeString = searchParams.get('size');
  const currentSize = getValidSizeParams(sizeString, 6);
  const router = useRouter();

  const handlePageChange = (value: number) => {
    const currentSearchParams = getCurrentUrlParams(searchParams);
    currentSearchParams.set('page', `${value}`);

    router.push(`${pathname}?${currentSearchParams.toString()}`, {
      scroll: false,
    });
  };

  return (
    <Pagination
      value={currentPage}
      hideWithOnePage
      onChange={handlePageChange}
      total={currentSize ? Math.ceil(total / currentSize) : 1}
    />
  );
};

export default MyPagination;
