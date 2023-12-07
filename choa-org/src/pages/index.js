import Image from 'next/image'
import { Inter } from 'next/font/google'
import VisitType from '@/components/visitType'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='m-5'>
      <h1>HOME PAGE</h1>
      <VisitType/>
    </div>
  )
}
