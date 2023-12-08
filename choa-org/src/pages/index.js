import Image from 'next/image'
import { Inter } from 'next/font/google'
import VisitType from '@/components/visitType'
import React from 'react';
import { HeroSection, HeroCard, HeroContent, CardImage, MiddleDiv, ImageContainer} from '../styles/indexherostyles';
import Dropdown from '../components/ImportantUpdate';



const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const options = ['Update 1', 'Update 2', 'Update 3'];
  return (
    <>
   
  
  <div>
    <Dropdown options={options} />
    <HeroSection>

        <HeroContent>
          <h2 className="mb-5 text-#285844 text-4xl">Nothing Matters More Than Kids</h2>
          <p className="text-#5A5A5A">Every day we provide nationally-ranked 
          pediatric care to Georgia&apos;s kids and teens,
          so they can get back to just being kids.</p>
        </HeroContent>
         <MiddleDiv>
            <ImageContainer>
              <Image src="/usnews_top_ranking.png" width="145" height="203" />
             </ImageContainer>
        </MiddleDiv>

         <HeroCard>
           <CardImage src="/indexHeroBanner.png" alt="Baby Girl" />
        </HeroCard>

    </HeroSection>
      <div className='mx-auto max-w-[1500px] my-32 px-10'>
          <VisitType/>
      </div>
    </div>
    </>
  )
}

