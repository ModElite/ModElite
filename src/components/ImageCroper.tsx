import { Button, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { UploadProps } from 'antd';
import { BiUpload } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
  ImageURL: string;
  setImageURL: React.Dispatch<React.SetStateAction<string>> | ((url: string) => void);
};

const ImageCropper = (props: Props) => {
  const [uploadImages, setUploadImages] = useState<File>();
  const uploadProps: UploadProps = {
    multiple: true,
    maxCount: 5,
    action: '',
    showUploadList: false,
    beforeUpload(file) {
      setUploadImages(file);
      return false;
    },
  };

  useEffect(() => {
    uploadImageFn();
  }, [uploadImages]);

  const uploadImageFn = async () => {
    if (uploadImages) {
      const formData = new FormData();
      formData.append('file', uploadImages);
      await axios
        .post('https://wangchan.dev.wirabyte.com/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          props.setImageURL(`https://wangchan.dev.wirabyte.com/images/${res.data.filename}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className='mx-auto'>
      <ImgCrop aspect={600 / 600} rotationSlider>
        <Upload {...uploadProps}>
          {props.ImageURL ? (
            <>
              <Button icon={<BiUpload />} type='primary'>
                Edit Image
              </Button>
            </>
          ) : (
            <Button icon={<BiUpload />}>Upload</Button>
          )}
        </Upload>
      </ImgCrop>
    </div>
  );
};

export default ImageCropper;
