import { IOrderList } from '@/interfaces/order';
import { FC } from 'react';
import OrderHistoryCard from './OrderHistoryCard';

interface IProps {
  filter: string;
  orders: IOrderList[];
}

const OrderHistoryList: FC<IProps> = (props) => {
  return (
    <>
      <div className='w-full'>
        {props.orders
          .filter((item) => item.status === props.filter || props.filter === '')
          .map((item) => {
            return <OrderHistoryCard key={item.id} status={item.status} orders={item} />;
          })}
      </div>
    </>
  );
};

export default OrderHistoryList;
