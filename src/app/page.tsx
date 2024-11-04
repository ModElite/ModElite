import { LandingCarousel } from '@/components/landing/LandingCarousel';
import React from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Button } from 'antd';
import Image from 'next/image';

export default async function Landing() {
  const listItem = [
    { id: 1, name: 'Adidas', img: 'brand.svg' },
    { id: 2, name: 'Nike', img: 'brand.svg' },
    { id: 3, name: 'Puma', img: 'brand.svg' },
    { id: 4, name: 'Reebok', img: 'brand.svg' },
    { id: 5, name: 'Under Armour', img: 'brand.svg' },
    { id: 6, name: 'New Balance', img: 'brand.svg' },
    { id: 7, name: 'Asics', img: 'brand.svg' },
    { id: 8, name: 'Converse', img: 'brand.svg' },
    { id: 9, name: 'Vans', img: 'brand.svg' },
    { id: 10, name: 'Skechers', img: 'brand.svg' },
    { id: 11, name: 'Fila', img: 'brand.svg' },
    { id: 12, name: 'Brooks', img: 'brand.svg' },
    { id: 13, name: 'Saucony', img: 'brand.svg' },
    { id: 14, name: 'Mizuno', img: 'brand.svg' },
    { id: 15, name: 'Hoka One One', img: 'brand.svg' },
  ];

  return (
    <HomeLayout>
      <LandingCarousel />
      <div className='py-6'>
        <div className='flex w-full snap-x gap-6 overflow-x-auto'>
          {listItem.map((brand) => (
            <div key={brand.id} className='flex h-full w-32 min-w-32 flex-col items-center gap-y-4'>
              <Image src={`/${brand.img}`} alt={brand.name} width={100} height={100} className='aspect-square' />
              <span className='text-center lg:text-lg'>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='py-6'>
        <div className='flex w-full justify-between pb-6'>
          <span>Recommended Product</span>
          <span>View All</span>
        </div>
        <div className='flex w-full snap-x gap-6 overflow-x-auto'>
          <ProductCard id={1} name='Nike Air Jordan' price={500} image='/shoe1.jpg' tags={['Best Seller', 'Summer sale']} />
          {Array(10)
            .fill(1)
            .map((id) => (
              <ProductCard key={`1${id}`} id={id} name='Shoe' price={100} image='/shoe1.jpg' />
            ))}
        </div>
      </div>
      <div className='py-6'>
        <div className='flex w-full justify-between pb-6'>
          <span>Best Seller</span>
          <span>View All</span>
        </div>
        <div className='flex w-full snap-x gap-6 overflow-x-auto'>
          <ProductCard id={1} name='Nike Air Jordan' price={500} image='/shoe1.jpg' tags={['Best Seller', 'Summer sale']} />
          {Array(10)
            .fill(1)
            .map((id) => (
              <ProductCard key={`2${id}`} id={id} name='Shoe' price={100} image='/shoe1.jpg' />
            ))}
        </div>
      </div>
      <div className='flex h-fit w-full content-center justify-center gap-16 rounded-3xl bg-blue1 text-center lg:hidden'>
        <div className='mx-auto'>
          <div className='relative flex content-center justify-center'>
            <Image src='./shopbag.svg' alt='' layout='fill' className='z-0 opacity-30' style={{ objectFit: 'cover' }} />
            <div className='relative z-10 flex w-4/5 flex-col justify-center gap-12 py-16 text-left text-white lg:w-1/2'>
              <h1 className='text-center text-lg font-bold lg:text-start lg:text-3xl'>Explore Our Newest Product Arrivals!</h1>
              <p className='text-md lg:tex-normal text-center lg:text-start'>
                Ant Design Landing platform has a variety of templates, download template package, you can use it quickly, you can also use the editor to
                quickly build a dedicated page for you.
              </p>
              <Button type='primary' className='mx-auto w-fit'>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden h-full w-full content-center justify-center gap-16 rounded-3xl bg-blue1 text-center lg:flex'>
        <div className='mx-auto h-full'>
          <div className='flex content-center justify-center'>
            <div className='content-st flex w-4/5 flex-col justify-center gap-12 py-16 text-left text-white lg:w-1/2'>
              <h1 className='text-3xl font-bold'>Explore Our Newest Product Arrivals!</h1>
              <p>
                Ant Design Landing platform has a variety of templates, download template package, you can use it quickly, you can also use the editor to
                quickly build a dedicated page for you.
              </p>
              <Button type='primary' className='mx-auto w-fit'>
                Learn More
              </Button>
            </div>
            <Image src='./shopbag.svg' alt='' width={394} height={348} className='mt-auto' />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

const HomeLayout = (props: { children: React.ReactNode }) => {
  return <div className='p-8 lg:p-16'>{props.children}</div>;
};
