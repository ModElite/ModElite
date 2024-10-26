'use client';
import { Button } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

interface product {
  images: Array<string>;
}

interface ColorPickerProps {
  products: product[];
}

const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  const [currentColor, setCurrentColor] = useState(0);
  const handleClick = (index: number) => {
    setCurrentColor(index);
    const newUrl = `${window.location.pathname}?color=${index}`;
    window.history.pushState(null, '', newUrl);
  };

  return (
    <div className='flex gap-4'>
      {props.products.map((color: product, index: number) => (
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
          color={currentColor === index ? 'primary' : 'default'}
          key={index}
          onClick={() => handleClick(index)}
        >
          <Image src={color.images[0]} alt='color' width={1000} height={1000} className='aspect-square object-cover' />
        </Button>
      ))}
    </div>
  );
};

export default ColorPicker;
