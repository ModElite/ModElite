'use client';
import { IProductOption } from '@/interfaces/product';
import { Button } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

const ColorPicker = (props: { productOption: IProductOption[]; selectedColor: string }) => {
  const [currentColor, setCurrentColor] = useState(props.productOption[0].label);
  const handleClick = (label: string) => {
    setCurrentColor(label);
    const newUrl = `${window.location.pathname}?color=${label}`;
    window.history.pushState(null, '', newUrl);
  };

  return (
    <div className='flex gap-4'>
      {props.productOption.map((color: IProductOption, index: number) => {
        const firstIndex = JSON.parse(color.imageUrl)[0];
        return (
          <Button
            size='large'
            style={{
              width: '15%',
              objectFit: 'cover',
              height: '100%',
              padding: '0px',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
            variant='outlined'
            color={props.selectedColor === color.label ? 'primary' : 'default'}
            key={index}
            onClick={() => handleClick(color.label)}
          >
            <Image src={firstIndex} alt='color' width={1000} height={1000} className='aspect-square object-cover' />
          </Button>
        );
      })}
    </div>
  );
};

export default ColorPicker;
