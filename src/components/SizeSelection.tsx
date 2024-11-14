// use searchparam instead of child component useState passing method for easier maintaining.

'use client';
import ColorPicker from '@/components/ColorPicker';
import { IProduct, IProductSize } from '@/interfaces/product';
import { Button, InputNumber } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SizeSelection = (props : IProduct) => {
  const searchParams = useSearchParams();
  const colorlabel = searchParams.get('color') || props.productOption[0].label;
  const selectedColor = props.productOption.find((item) => item.label === colorlabel) || props.productOption[0];

  const [selectSize, setSelectSize] = useState<number>();
  const [size, setSize] = useState<string>();
  const [maxQty, setMaxQty] = useState<number>(1);

  const router = useRouter();

  const handleSendSize = (index: number, item: string, qty: number) => {
    setSelectSize(index);
    setSize(item);
    setMaxQty(qty);
  };

  const [hover, setHover] = useState(false);
  const [qty, setQty] = useState<number>(1);

  const onChange = (newQty: number | null) => {
    setQty(newQty ?? qty);
  };

  useEffect(() => {
    setQty(1);
  }, [colorlabel,selectSize]);

  return (
    <div>
      <ColorPicker productOption={props.productOption} selectedColor={colorlabel}/>
      <hr className='mb-4 mt-5' />
      <div className='mb-2 text-base'>Size (US)</div>
      <div className='mb-5 flex flex-wrap gap-3'>
        {selectedColor.productSize.map((item: IProductSize, index: number) => (
          <Button
            key={index}
            className='w-fit rounded-xl border px-4 py-2'
            style={{
              background: selectSize === index ? '#6E62E5' : (!item.quantity ? '#f5f5f5' : 'white'),
              color: selectSize === index ? 'white' : (!item.quantity ? '#c8c8c8' : 'black'),
              fontSize: '16px',
            }}
            disabled={!item.quantity}
            size='large'
            onClick={() => handleSendSize(index, item.size.id, item.quantity)}
          >
            {item.size.size}
          </Button>
        ))}
      </div>
      <hr className='my-3' />
      <div className=''>
        <div className='mb-2 text-base'>Quantity</div>
        <div className=''>
          <div className='flex h-full w-full justify-between gap-4'>
            <div className='h-full w-1/5'>
              <InputNumber
                size='large'
                min={1}
                max={maxQty}
                defaultValue={qty}
                onChange={onChange}
                changeOnWheel
                style={{
                  display: 'flex',
                  width: '100%',
                  fontSize: '16px',
                }}
              />
            </div>
            <div className='h-full w-2/5'>
              <Button
                size='large'
                type='primary'
                style={{
                  width: '100%',
                  color: 'white',
                  borderRadius: '10px',
                  fontSize: '16px',
                }}
                // sending product size id + quantity
                onClick={() => router.push(`/cart/${size}/${qty}`)}
              >
                Buy
              </Button>
            </div>
            <div className='h-full w-2/5'>
              <Button
                size='large'
                type='primary'
                style={{
                  width: '100%',
                  backgroundColor: hover ? '#AEA8F1' : '#8E85EB',
                  color: 'white',
                  borderRadius: '10px',
                  fontSize: '16px',
                }}
                onClick={() => router.push('/cart')}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeSelection;
