import {Menu} from '@/styles/navStyles';
import Image from 'next/image';

export default function DDMenu({  title, setMenuOpen,setMenu2Open,setMenu3Open, 
                                  main1linkList,
                                  titlesub1, sub1,
                                  titlesub2, sub2,
                                  titlesub3, sub3,}) {
    const closeMenu = () => {
            // Close the menu by setting menuOpen state to false
            setMenuOpen(false);
            setMenu2Open(false);
            setMenu3Open(false);
        };

    return (
        
        <Menu >
                <div className='flex justify-between'>
                  <div className='flex font-semibold'>
                    <h5 >{title}</h5>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3 h-3 ml-2 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  <div className='cursor-pointer' onClick={closeMenu}>
                    <Image src={'/close_icon.png'} alt="logo" width={20} height={20} />
                  </div>
                </div>
                <div className="grid grid-cols-3 mt-8">
                    <div>
                      {main1linkList}
                    </div>
                    <div className='border-l-2 border-[#00A94F]' >
                      <div className=' pl-6' >
                        <h6 className='text-base mt-5'>{titlesub1}</h6>
                        {sub1}
                        <h6 className='text-base mt-5'>{titlesub2}</h6>
                        {sub2}
                      
                      </div>
                    </div>
                    <div>
                      <h6 className='text-base mt-5'>{titlesub3}</h6>
                      {sub3}
                    </div>
                </div>
                
                
              </Menu>
    )
}