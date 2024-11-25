import React, { FC, useEffect, useState } from 'react';
import HistoryCard from '@/components/seller/history/HistoryCard';
import { Button, Input, Modal, Select } from 'antd';
import { ISellerOrder } from '@/interfaces/seller';

interface IProps {
  filter: string;
  orders: ISellerOrder[];
}

const HistoryList: FC<IProps> = (props) => {
  const [deliveryModal, setDeliveryModal] = useState<boolean>(false);

  const openDeliveryModal = () => {
    setDeliveryModal(true);
  };

  const cancelDeliveryModal = () => {
    setDeliveryModal(false);
  };

  useEffect(() => {
    console.log(props.filter);
  }, [props.filter]);

  return (
    <>
      <div className='w-full'>
        {props.orders
          .filter((item) => item.status === props.filter || props.filter === '')
          .map((item) => {
            return <HistoryCard key={item.id} viewDeliveryDetail={openDeliveryModal} status={item.status} orders={item} />;
          })}
      </div>

      <Modal open={deliveryModal} closable={false} footer={null} centered onCancel={cancelDeliveryModal} width={592} height={260}>
        <div className='flex flex-col gap-4'>
          <span className='border-b pb-6 text-xl font-bold'>Express</span>
          <div className='grid grid-rows-2 gap-3 pb-6 lg:grid-cols-2'>
            <div className='flex flex-col'>
              <span>Express</span>
              <Select size='large' placeholder='Thailang Post' options={[]} />
            </div>
            <div className='flex flex-col'>
              <span>Code</span>
              <Input size='large' placeholder='TH2407313KFEX1NV' style={{ padding: '0px 11px' }} className='h-full w-full' />
            </div>
          </div>
          <div className='flex flex-row justify-center gap-4'>
            <Button type='default' size='large' onClick={() => setDeliveryModal(false)} style={{ backgroundColor: '#BFBFBF', color: '#FFFFFF' }}>
              Cancel
            </Button>
            <Button type='primary' size='large' onClick={() => setDeliveryModal(false)}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HistoryList;
