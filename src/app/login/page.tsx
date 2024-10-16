import { Button } from 'antd';

export default async function Home() {
  return (
    <div className='grid h-screen content-center justify-center'>
      <Button type='primary'>Login with Google</Button>
    </div>
  );
}
