import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react';
import { HeroSection, HeroCard, HeroContent, CardImage} from '../styles/herostyles';
import Dropdown from '../components/ImportantUpdate';



const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <div className='m-5'>
      <h1>HOME PAGE</h1>
  </div>
  
  <div>
  
    <HeroSection>

        <HeroContent>
          <h1>Nothing Matters More Than Kids</h1>
          <p>Every day we provide nationally-ranked 
          pediatric care to Georgia’s kids and teens,
          so they can get back to just being kids.</p>
        </HeroContent>

         <HeroCard>
           <CardImage src="/indexHeroBanner.png" alt="Baby Girl" />
        </HeroCard>
        
    </HeroSection>
      </div>
    </>
  )
}

