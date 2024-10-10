import { axiosInstance } from '@/utils/axios'
import { redirect } from 'next/navigation'

export default async function Home() {
  const data = await getData()
  return (
    <div className="grid h-screen content-center">
      {data}
      <form action={handleLogin}>
        <button className="underline" type="submit">
          Login with Google
        </button>
      </form>
    </div>
  )
}

async function getData() {
  const response = await axiosInstance.get('/api')
  return response.data
}

async function handleLogin() {
  'use server'
  const response = await axiosInstance.get('/api/auth/google')
  console.log(response.data.url)

  return redirect(response.data.url)
}
