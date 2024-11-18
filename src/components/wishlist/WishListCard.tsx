'use client';
import { Button, Image, List } from 'antd';
import { FaHeart } from 'react-icons/fa';
import { numberFormat } from '@/utils/format';

//set usestate or set var
//const [MyWishList, setMyWishList] = useState<WishList[]>([]);
const items = [
  { namestore: 'Nike Thailand Store', liked: true, productname: 'Nike Dunk Low', price: 3700, Qty: 1, ofs: false },
  { namestore: 'Nike Thailand Store', liked: true, productname: 'Nike Dunk Low', price: 3700, Qty: 1, ofs: true },
];

//start

const Wishlistcard: React.FC = () => {
  return (
    <div className='flex-1'>
      <List
        header={
          <div className='my-1 flex space-x-[15px]'>
            <p className='text-[16px] font-semibold'>Select all</p>
          </div>
        }
        bordered
        dataSource={items}
        renderItem={(item) => (
          <List.Item className='my-3 border-b border-gray-300'>
            <div className='mb-6 w-full space-y-4'>
              <div className='flex items-center justify-between'>
                <p className='text-base font-normal'>{item.namestore}</p>
                <Button>
                  <FaHeart className='text-purple1' />
                </Button>
              </div>
              <div className='flex'>
                <div className='flex flex-1 space-x-4'>
                  <Image width={150} height={128} className='rounded-[15px] object-fill md:h-32' src='/shoe1.jpg' alt='' />
                  <div className='space-y-1'>
                    <p className='font-semibold'>{item.productname}</p>
                    <div className='space-x-3'>
                      <span className='text-base font-normal'>Price</span>
                      <span className='text-base font-normal'>{numberFormat(item.price)} THB</span>
                    </div>
                    <div className='space-x-3'>
                      <span className='text-base font-normal'>Qty</span>
                      <span className='text-base font-normal'>{item.Qty}</span>
                    </div>
                  </div>
                </div>
                <div className='place-self-center'>
                  <Button type='primary' size='large' disabled={item.ofs}>
                    add Cart
                  </Button>
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
export default Wishlistcard;
