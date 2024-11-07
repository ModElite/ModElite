//test URL /product/2?color=0&label=red
import HeartBtn from '@/components/HeartBtn';
import { ProductCard } from '@/components/ProductCard';
import ProductPicSlideShow from '@/components/ProductPicSlideShow';
import SizeSelection from '@/components/SizeSelection';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import axios from 'axios';

async function FetchProduct(pid: string) {
  try {
    const res = await axios.get(`https://671136fc4eca2acdb5f41fa5.mockapi.io/api/productInfo/product/${pid}`);
    const data = res.data;
    return {
      data,
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return {
      data: null,
    };
  }
}

export default async function ViewProduct({ params: { pid = '' } }: { params: { pid: string } }) {
  const { data } = await FetchProduct(pid);
  if (data === null) return <div>Product not found</div>;
  const product = data;
  return (
    <div className='flex w-full flex-col content-center items-center justify-center gap-y-8 bg-white py-12'>
      <div className='w-9/12'>
        <div className='text-3xl'>
          <Breadcrumb
            separator='>'
            items={[
              {
                href: '/home',
                title: <HomeOutlined />,
              },
              {
                href: '/product',
                title: (
                  <>
                    <span>All Product</span>
                  </>
                ),
              },
              {
                title: <div className='text-blue-500'>{product.NAME}</div>,
              },
            ]}
          />
        </div>

        {/* Product Section */}
        <div className='my-5 grid justify-between gap-12 lg:grid-cols-2'>
          <div className='eounded-xl w-full'>
            <ProductPicSlideShow pic={product.PRODUCT_PIC} />
          </div>
          <div className='flex w-full flex-col gap-2 rounded-xl bg-white'>
            <div className='flex items-start justify-between'>
              <div className='flex flex-col gap-2'>
                <div className='text-xl font-extrabold'>{product.NAME}</div>
                <div className='text-xl'>{product.PRICE} THB</div>
              </div>
              <div className=''>
                <HeartBtn />
              </div>
            </div>

            <div className='mb-1'>
              <SizeSelection pid={product.ID} sizes={product.SIZE} maxqty={product.QUANTITY} products={product.PRODUCT_PIC} />
            </div>
            <hr className='my-3' />
            <div className=''>
              <div className='text-base font-bold'>Feature</div>
              {product.FEATURE.map((items: string, index: number) => (
                <div key={index} className='mt-2'>
                  &nbsp; - {items}
                </div>
              ))}
            </div>
            <hr className='my-3' />
            <div>
              <div className='font-bold'>Description</div>
              <div className='mt-2'>{product.DESCRIPTION}</div>
            </div>
          </div>
        </div>

        {/* Other Section */}
        <div className='mt-12 space-y-8'>
          <h1 className='text-xl font-bold'>You may also like</h1>
          <div className='flex snap-x gap-6 overflow-x-auto'>
            {Array(10)
              .fill(1)
              .map((id) => (
                <ProductCard key={id} id={id} name='Shoe' price={100} image='/shoe1.jpg' />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
