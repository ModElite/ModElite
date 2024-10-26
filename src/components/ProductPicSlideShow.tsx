'use client';
import { Button } from 'antd';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface products {
  label: string;
  images: Array<string>;
}

interface ProductPicSlideShowProps {
  pic: products[];
}

const ProductPicSlideShow: React.FC<ProductPicSlideShowProps> = (props) => {
  const searchParams = useSearchParams();
  const colorIndex = parseInt(searchParams.get('color') || '0');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
  }, [colorIndex]);

  const nextImage = () => {
    setCurrentSlide(Math.abs(currentSlide + 1) % props.pic[colorIndex].images.length);
  };

  const prevImage = () => {
    setCurrentSlide(currentSlide <= 0 ? props.pic[colorIndex].images.length - 1 : currentSlide - 1);
  };

  const handleMiniPicClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className='reletive flex w-full flex-col items-center justify-between gap-5'>
      <div className='relative h-fit w-full overflow-hidden'>
        <div className='mb-2 w-full snap-x snap-mandatory overflow-x-scroll'>
          <div className='flex'>
            <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {props.pic[colorIndex].images.map((pic: string, index: number) => (
                <div key={index} className='w-full flex-shrink-0'>
                  <Image src={pic} alt={`Slide ${index + 1}`} width={1000} height={1000} className='aspect-square h-full w-full snap-center object-cover' />
                </div>
              ))}
            </div>
          </div>
        </div>
        {props.pic[colorIndex].images.length > 0 && (
          <>
            <button
              key={'next-button'}
              className={`absolute left-4 top-1/2 z-[15] block min-h-8 min-w-8 rounded-full bg-white opacity-75 hover:opacity-90`}
              onClick={prevImage}
              aria-label='image-slider-previous'
            >
              {'<'}
            </button>
            <button
              key={'prev-button'}
              className={`absolute right-4 top-1/2 z-[15] block min-h-8 min-w-8 rounded-full bg-white opacity-75 hover:opacity-90`}
              onClick={nextImage}
              aria-label='image-slider-next'
            >
              {'>'}
            </button>
          </>
        )}
      </div>
      <div className='flex w-full gap-5 overflow-x-scroll'>
        {props.pic[colorIndex].images.map((pic: string, index: number) => (
          <Button
            size='large'
            style={{
              width: '20%',
              objectFit: 'cover',
              height: '100%',
              padding: '0px',
              borderRadius: '8px',
              overflow: 'hidden',
              aspectRatio: '1/1',
            }}
            variant='outlined'
            color={currentSlide === index ? 'primary' : 'default'}
            key={index}
            onClick={() => handleMiniPicClick(index)}
          >
            <Image src={pic} alt={`Thumbnail ${index + 1}`} layout='responsive' width={1000} height={1000} className='rounded-lg object-cover' />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductPicSlideShow;
