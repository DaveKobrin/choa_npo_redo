import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='m-5'>
      <h1>HOME PAGE</h1>
    </div>
  )
}
