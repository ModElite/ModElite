'use server';
import type { IProductCard } from '@/interfaces/product';
import Image from 'next/image';
import Link from 'next/link';

export const ProductCard: React.FC<IProductCard> = ({ id, name, price, image, tags }) => {
  return (
    <Link
      className='flex w-full min-w-64 snap-center flex-col justify-center gap-y-4 rounded-3xl border border-gray-200 bg-white p-4 lg:min-w-110'
      href={`/product/${id}`}
    >
      <div className='relative h-32 w-full lg:h-60'>
        <Image src={image} alt={name} className='rounded-3xl' fill sizes='(max-width: 1000px) 100vw, 1000px' style={{ objectFit: 'cover' }} />
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-wrap space-x-2'>
          <h1 className='flew text-xl font-semibold'>{name}</h1>
          <p className='flew flex-wrap content-center space-x-2'>
            {tags &&
              tags.map((tag) => (
                <span key={tag} className='rounded-2xl bg-blue3 px-2 py-1 text-sm text-blue1'>
                  {tag}
                </span>
              ))}
          </p>
        </div>
        <h1 className='text-md text-gray-500'>
          Price:
          <br />
          <span className='text-lg text-black'>{price.toFixed(0)} THB</span>
        </h1>
      </div>
    </Link>
  );
};
