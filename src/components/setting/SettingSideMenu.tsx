'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiUser } from 'react-icons/ci';
import { IoHomeOutline } from 'react-icons/io5';
import { GrMap } from 'react-icons/gr';
import { AiOutlineHeart, AiOutlineSync } from 'react-icons/ai';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';

const SettingSideMenu = () => {
  const menuItems = [
    { name: 'Home', icon: IoHomeOutline, route: '/' },
    { name: 'Profile', icon: CiUser, route: '/setting' },
    { name: 'Address', icon: GrMap, route: '/setting/address' },
    { name: 'Order History', icon: AiOutlineSync, route: '/setting/order-history' },
    { name: 'Wishlist', icon: AiOutlineHeart, route: '/setting/wishlist' },
    { name: 'Log-out', icon: HiArrowRightOnRectangle, route: '/logout' },
  ];
  const pathname = usePathname();

  return (
    <div className='hidden h-fit w-92 rounded-xl border border-gray-400 bg-white lg:block'>
      <h2 className='mb-4 px-6 pt-4 text-2xl font-semibold'>Navigation</h2>
      <div>
        {menuItems.map((item) => (
          <Link
            href={item.route}
            key={item.name}
            className={`flex h-16 cursor-pointer items-center border-l-8 py-2 pl-4 text-lg hover:border-purple1 hover:bg-purple4 ${pathname === item.route ? 'border-l-8 border-purple1 bg-purple4' : 'border-transparent text-gray-500'}`}
          >
            <item.icon className='mr-3 h-5 w-5' />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingSideMenu;
