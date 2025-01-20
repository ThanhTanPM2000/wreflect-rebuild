import React, { useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IconSearch } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { Button, Input } from '@mantine/core';
import { getCurrentUrlParams, getValidSearchParam } from '@/utils/validateParams';

type Props = {};

const SearchBar = (props: Props) => {
  const t = useTranslations();
  const ref = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchString = searchParams.get('search');
  const searchText = getValidSearchParam(searchString);

  const handleSearch = () => {
    const searchText = ref.current?.value || '';
    const currentSearchParams = getCurrentUrlParams(searchParams);
    currentSearchParams.set('search', searchText);
    router.push(`${pathname}?${currentSearchParams.toString()}`, {
      scroll: false,
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClearSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    if (value === '') {
      const currentSearchParams = getCurrentUrlParams(searchParams);
      currentSearchParams.delete('search');
      router.push(`${pathname}?${currentSearchParams.toString()}`, {
        scroll: false,
      });
    }
  };

  return (
    <>
      <Input
        ref={ref}
        defaultValue={searchText}
        onChange={handleClearSearch}
        className="min-w-fit"
        placeholder={t('common.search_text')}
        onKeyDown={handleKeyDown}
        leftSection={<IconSearch />}
      />
      <Button onClick={handleSearch} className="!min-w-fit">
        {t('common.search_label')}
      </Button>
    </>
  );
};

export default SearchBar;
