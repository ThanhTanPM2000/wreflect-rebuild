import React from 'react';
import Link from 'next/link';
import { usePathname } from '@/i18n/routing';

type Props = {
  icon: React.FC<any>;
  label: string;
  isOpen: boolean;
  href: string;
};

const SidebarItem = ({ icon: Icon, label, isOpen, href }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      className={`${isActive && 'bg-violet-500'} mb-1 p-3 hover:cursor-pointer hover:bg-violet-400 rounded-md flex font-medium items-center gap-4 ${!isOpen && 'justify-center'}`}
      href={href}
    >
      <Icon size={20} />
      {isOpen && <span className="text-sm">{label}</span>}
    </Link>
  );
};

export default SidebarItem;
