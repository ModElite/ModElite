'use client';
import { useState } from 'react';
import { Button } from 'antd';
import Image from 'next/image';

const HeartBtn: React.FC = () => {
  const [clicked, setClick] = useState(false);
  const handleClick = () => {
    setClick(!clicked);
  };
  return (
    <Button
      size='small'
      style={{
        background: clicked ? '#6E62E5' : 'white',
        aspectRatio: '1/1',
        width: '45px',
        height: '45px',
        borderRadius: '10px',
      }}
      onClick={handleClick}
    >
      <div className='aspect-square'>
        {clicked ? <Image src='/WhiteHeart.svg' alt='favorite' className='p-3' fill /> : <Image src='/BlackHeart.svg' alt='favorite' className='p-3' fill />}
      </div>
    </Button>
  );
};

export default HeartBtn;
