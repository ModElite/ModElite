'use client';
import { useState } from 'react';
import { Button } from 'antd';

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
      <div className='aspect-square'>{clicked ? <img src='/WhiteHeart.svg' alt='favorite' /> : <img src='/BlackHeart.svg' alt='favorite' />}</div>
    </Button>
  );
};

export default HeartBtn;
