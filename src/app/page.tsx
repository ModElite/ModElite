import { ProductCard } from '@/components/ProductCard';

export default async function Home() {
  return (
    <div className='flex w-full snap-x gap-6 overflow-x-auto'>
      {Array(10)
        .fill(1)
        .map((id) => (
          <ProductCard key={id} id={id} name='Shoe' price={100} image='/shoe1.jpg' />
        ))}
      {/* <ProductCard id={1} name='Shoe' price={100} image='/shoe1.png' /> */}
    </div>
  );
}
