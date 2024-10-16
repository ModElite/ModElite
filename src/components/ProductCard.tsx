'use server';
import Image from 'next/image';
import type { IProductCard } from '@/interfaces/product';
import Link from 'next/link';

export const ProductCard: React.FC<IProductCard> = ({ id, name, price, image }) => {
  return (
    <Link
      className='lg:min-w-120 flex w-full min-w-64 snap-center flex-col justify-center gap-y-4 rounded-3xl border border-gray-200 bg-white p-4'
      href={`/product/${id}`}
    >
      <div className='relative h-32 w-full lg:h-60'>
        <Image src={image} alt={name} className='rounded-3xl' layout='fill' objectFit='cover' />
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-md text-gray-500'>
          Price:
          <br />
          <span className='text-lg text-black'>{price.toFixed(0)} THB</span>
        </h5>
      </div>
    </Link>
  );
};
