import Map from '../components/Maps'
import { locationAndWaitTimes } from '@/data/locationAndWaitTimes'
import Button from '../components/Button'
import { PageColors } from '@/styles/globalstyles';
import Link from 'next/link';


const LowerNavBar = () => {
    
    const handleClick = () => {
        console.log("click click")
    }

    return (
      <>
        <div className="min-w-screen bg-[#F5F5F5] h-[3.5rem] justify-center">
            <div className="flex flex-row justify-around items-center h-full">
                <h2 className="text-[1.3rem]">I WANT TO...</h2>
                <Link href="/wait_times"><h3 className="text-sm inline-block border-b-2 border-transparent hover:border-black">VIEW  WAIT TIMES</h3></Link>
                <Link href="/"><h3 className="text-sm inline-block border-b-2 border-transparent hover:border-black">MAKE AN APPOINTMENT</h3></Link>
                <Link href="/"><h3 className="text-sm inline-block border-b-2 border-transparent hover:border-black">FIND A DOCTOR</h3></Link>
                <Link href="/"><h3 className="text-sm inline-block border-b-2 border-transparent hover:border-black">FIND A LOCATION</h3></Link>
                <button className={`bg-[#27935A] text-white rounded-[2.8125rem] py-[0.625rem] px-[1.25rem] text-xs`} onClick={handleClick} >MYCHART LOG IN</button>
            </div>
        </div>
      </>
    );
}

export default LowerNavBar;