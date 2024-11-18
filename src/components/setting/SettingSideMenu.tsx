'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHomeOutline } from 'react-icons/io5';

const SettingSideMenu = () => {
  const menuItems = [
    { name: 'Home', icon: IoHomeOutline, route: '/' },
    { name: 'Profile', icon: IoHomeOutline, route: '/setting' },
    { name: 'Address', icon: IoHomeOutline, route: '/setting/address' },
    { name: 'Order History', icon: IoHomeOutline, route: '/setting/order-history' },
    { name: 'Wishlist', icon: IoHomeOutline, route: '/setting/wishlist' },
    { name: 'Log-out', icon: IoHomeOutline, route: '/logout' },
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
