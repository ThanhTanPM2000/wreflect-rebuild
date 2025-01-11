import { ReadonlyURLSearchParams } from 'next/navigation';
import { isNull } from 'util';
import { TeamStatus } from '@/types';

export const getCurrentUrlParams = (searchParams: ReadonlyURLSearchParams) => {
  const currentSearchParams = new URLSearchParams(searchParams.toString());
  return currentSearchParams;
};

export const getValidTeamStatusParams = (status: string | null): TeamStatus => {
  if (status === 'ALL' || status === 'DONE' || status === 'DOING') {
    return status;
  }
  return 'ALL';
};

export const getValidPageParams = (page: string | null): number => {
  let parsedPage = null;
  if (page) {
    parsedPage = parseInt(page, 10);
  }
  return isNull(parsedPage) || isNaN(parsedPage) || parsedPage < 1 ? 1 : parsedPage;
};

export const getValidSizeParams = (size: string | null): number => {
  let parsedSize = null;
  if (size) {
    parsedSize = parseInt(size, 10);
  }
  return isNull(parsedSize) || isNaN(parsedSize) || parsedSize < 1 ? 10 : parsedSize;
};

export const getValidSearchParam = (search: string | null): string => {
  if (!search) {
    return '';
  }
  return search;
};
