'use client';
import ColorPicker from '@/components/ColorPicker';
import { Button, InputNumber } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface product {
  label: string;
  images: Array<string>;
}

interface SizeSelectionProps {
  pid: string;
  sizes: number[];
  maxqty: number;
  products: product[];
}

const SizeSelection: React.FC<SizeSelectionProps> = (props) => {
  const searchParams = useSearchParams();
  const colorlabel = parseInt(searchParams.get('color') ?? '') ?? 0;
  const [selectSize, setSelectSize] = useState<number>();
  const [setSize, setSetSize] = useState<number>();

  const router = useRouter();

  const handleSendSize = (index: number, items: number) => {
    setSelectSize(index);
    setSetSize(items);
  };

  const [hover, setHover] = useState(false);
  const [qty, setQty] = useState<number>(1);

  const onChange = (newQty: number | null) => {
    setQty(newQty ?? qty);
  };

  return (
    <div>
      <ColorPicker products={props.products} />
      <hr className='mb-4 mt-5' />
      <div className='mb-2 text-base'>Size (US)</div>
      <div className='mb-5 flex flex-wrap gap-3'>
        {props.sizes.map((items: number, index: number) => (
          <Button
            key={index}
            className='w-fit rounded-xl border px-4 py-2'
            style={{
              background: selectSize === index ? '#6E62E5' : 'white',
              color: selectSize === index ? 'white' : 'black',
              fontSize: '16px',
            }}
            size='large'
            onClick={() => handleSendSize(index, items)}
          >
            {items}
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
                max={props.maxqty}
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
                onClick={() => router.push(`/cart/${props.pid}/${props.products[colorlabel].label}/${setSize}/${qty}`)}
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
