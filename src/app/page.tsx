import { LandingCarousel } from '@/components/landing/LandingCarousel';
import { ProductCard } from '@/components/ProductCard';
import { TAG_GROUP_ID } from '@/configs/constant';
import { getProduct } from '@/routes/product';
import { getTags } from '@/routes/tag';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function Landing() {
  const brandTags = await getTags(TAG_GROUP_ID.BRAND);
  const listItem = brandTags.map((tag) => ({ id: tag.id, name: tag.label, imageUrl: tag.imageUrl }));
  const product_list = (await getProduct()) ?? [];
  return (
    <HomeLayout>
      <LandingCarousel />
      <div className='mx-auto w-fit max-w-full py-6'>
        <div className='flex w-full snap-x gap-6 overflow-x-auto'>
          {listItem.map((brand) => (
            <Link href={`/product?Brand=${brand.name}`} key={brand.id} className='flex h-full w-32 min-w-32 flex-col items-center gap-y-4'>
              <Image src={`${brand.imageUrl}`} alt={brand.name} width={100} height={100} className='aspect-square rounded-full' />
              <span className='text-center lg:text-lg'>{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className='py-6'>
        <div className='flex w-full justify-between pb-6'>
          <span>Recommended Product</span>
          <Link href={'/product'}>View All</Link>
        </div>
        <div className='flex w-full snap-x gap-6 overflow-x-auto'>
          {product_list.map((product) => (
            <div className='min-w-64 lg:min-w-110' key={`1${product.id}`}>
              <ProductCard id={product.id} name={product.name} price={product.price} image={product.imageUrl} />
            </div>
          ))}
        </div>
      </div>
      <div className='py-6'>
        <div className='flex w-full justify-between pb-6'>
          <span>Best Seller</span>
          <Link href={'/product'}>View All</Link>
        </div>
        <div className='flex w-full snap-x gap-6 overflow-x-auto'>
          {product_list.map((product) => (
            <div className='min-w-64 lg:min-w-110' key={`2${product.id}`}>
              <ProductCard id={product.id} name={product.name} price={product.price} image={product.imageUrl} />
            </div>
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
