'use client';
import { IProfile } from '@/interfaces/profile';
import { Button, Card, Form, Input } from 'antd';
import { FC, useState } from 'react';
import { PiPencilSimpleLine } from 'react-icons/pi';
import ImageCropper from '../ImageCroper';
import Image from 'next/image';

const SettingProfileCard: FC<IProfile> = (props) => {
  const [editable, setEditable] = useState(false);
  const [initValue, setInitValue] = useState<IProfile>(props);
  const [form] = Form.useForm();
  const onFinish = (values: IProfile) => {
    console.log('Received values:', values);
    setInitValue({ ...values, image: initValue.image });
  };

  const editButtonHandler = () => {
    setEditable(!editable);
    form.resetFields();
  };

  const setImageURL = (url: string) => {
    console.log(url);
    setInitValue({ ...initValue, image: url });
    return;
  };

  return (
    <Card
      className='span-4 w-full'
      style={{
        width: '100%',
      }}
      title={
        <div className='flex justify-between'>
          <span>Account Setting</span>
          <Button icon={editable ? '' : <PiPencilSimpleLine />} color='primary' variant='text' onClick={() => editButtonHandler()}>
            {editable ? 'Back' : 'Edit'}
          </Button>
        </div>
      }
    >
      <Form layout='vertical' initialValues={initValue} onFinish={onFinish} form={form}>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <div className='col-span-3 grid w-full content-center gap-4 p-2 lg:col-span-1'>
            <div className='relative mx-auto aspect-square w-full min-w-16 max-w-64'>
              <Image
                src={initValue.image}
                alt='preview-image'
                className='rounded-full'
                fill
                sizes='(max-width: 400px) 100vw, 400px'
                style={{ objectFit: 'cover' }}
              />
            </div>
            <ImageCropper ImageURL={initValue.image} setImageURL={setImageURL} />
          </div>
          <div className='col-span-3 w-full lg:col-span-2'>
            <div className='grid'>
              {/* Input for 4 item with form */}
              <Form.Item label='First Name' name='first_name'>
                <Input disabled={!editable} size='large' />
              </Form.Item>
              <Form.Item label='Last Name' name='last_name'>
                <Input disabled={!editable} size='large' />
              </Form.Item>
              <Form.Item label='Email' name='email'>
                <Input disabled={true} type='email' />
              </Form.Item>
              <Form.Item label='Phone' name='phone_num'>
                <Input disabled={!editable} size='large' />
              </Form.Item>
            </div>
          </div>
          {editable && (
            <Button htmlType='submit' color='primary' variant='solid' size='large' className={`col-span-3 mx-auto`}>
              Save Change
            </Button>
          )}
        </div>
      </Form>
    </Card>
  );
};

export default SettingProfileCard;
