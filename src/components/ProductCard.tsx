'use server';
import Image from 'next/image';
import type { IProductCard } from '@/interfaces/product';
import Link from 'next/link';

export const ProductCard: React.FC<IProductCard> = ({ id, name, price, image, tags }) => {
  return (
    <Link
      className='flex w-full min-w-64 snap-center flex-col justify-center gap-y-4 rounded-3xl border border-gray-200 bg-white p-4 lg:min-w-110'
      href={`/product/${id}`}
    >
      <div className='relative h-32 w-full lg:h-60'>
        <Image src={image} alt={name} className='rounded-3xl' layout='fill' objectFit='cover' />
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-wrap space-x-2'>
          <h3 className='flew text-xl font-semibold'>{name}</h3>
          <p className='flew flex-wrap content-center space-x-2'>
            {tags &&
              tags.map((tag) => (
                <span key={tag} className='text-blue1 bg-blue3 rounded-2xl px-2 py-1 text-sm'>
                  {tag}
                </span>
              ))}
          </p>
        </div>
        <h5 className='text-md text-gray-500'>
          Price:
          <br />
          <span className='text-lg text-black'>{price.toFixed(0)} THB</span>
        </h5>
      </div>
    </Link>
  );
};
