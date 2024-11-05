import SettingBreadcrumb from '@/components/setting/SettingBreadcrumb';
import SettingSideMenu from '@/components/setting/SettingSideMenu';
import React from 'react';

const HomeLayout = (props: { children: React.ReactNode }) => {
  return <div className='grid gap-x-2 gap-y-8 p-8 lg:p-16'>{props.children}</div>;
};

export default function SettingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HomeLayout>
      <SettingBreadcrumb />
      <div className='flex gap-4'>
        <SettingSideMenu />
        {children}
      </div>
    </HomeLayout>
  );
}
