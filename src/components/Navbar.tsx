'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoBagOutline, IoClose, IoHeartOutline, IoPersonOutline, IoReorderThreeOutline } from 'react-icons/io5';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleNavbar = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='sticky top-0 z-50 border-gray-200 bg-white shadow-md'>
      <div className='min-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-6 py-2 sm:px-12'>
        <Link href='/' className='pl-4 text-2xl font-bold'>
          <div className='flex flex-row items-center'>
            <div className='relative h-12 w-12 lg:h-12 lg:w-12 xl:mx-2 xl:h-16 xl:w-16'>
              <Image src='/logo.png' fill alt='logo' className='inline h-4 object-cover' />
            </div>
          </div>
        </Link>

        <div className='hidden w-1/4 items-center lg:flex'>
          <Input
            placeholder='Search...'
            prefix={<SearchOutlined className='px-2' />}
            className='w-full rounded-md'
            size='large'
            onPressEnter={() => console.log('Search initiated')}
          />
        </div>

        {/* Navbar Buttons */}
        <button
          type='button'
          onClick={toggleNavbar}
          className='focus:ring-lightblue inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 p-2 text-sm focus:outline-none focus:ring-2 lg:hidden'
        >
          {showMenu ? <IoClose className='h-5 w-5' /> : <IoReorderThreeOutline className='h-5 w-5' />}
        </button>

        {/* NavList */}
        <div className={showMenu ? 'w-full lg:block lg:w-auto' : 'hidden w-full lg:block lg:w-auto'}>
          <div className='mt-4 flex flex-col items-center rounded-lg p-4 font-bold md:p-0 lg:mt-0 lg:flex-row lg:border-0 xl:space-x-4 rtl:space-x-reverse'>
            <Link href={'/favorite'} className='flex content-center justify-center gap-2 rounded-md px-3 py-2 hover:text-foreground'>
              <IoHeartOutline className='h-5 w-5' /> <span className='lg:hidden'>Favorites</span>
            </Link>
            <Link href={'/login'} className='flex content-center justify-center gap-2 rounded-md px-3 py-2 hover:text-foreground'>
              <IoPersonOutline className='h-5 w-5' /> <span className='lg:hidden'>Account</span>
            </Link>
            <Link href={'/cart'} className='flex content-center justify-center gap-2 rounded-md px-3 py-2 hover:text-foreground'>
              <IoBagOutline className='h-5 w-5' /> <span className='lg:hidden'>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
