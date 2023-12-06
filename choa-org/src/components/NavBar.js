import React from 'react';
import Image from 'next/image';
import { DesktopNav, Logo, MobileNav, MobileNavToggle, NavItem, SNav, Menu1, SearchBox } from '@/styles/navStyles';
import Link from 'next/link';

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const [menu1Open, setMenu1Open] = React.useState(false);

  return (
    <>
    
    <SNav>
      <Logo>
        <Image src="/choa-logo-color-white.webp" alt="Logo" width={180} height={37} priority />
      </Logo>
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <title>Close Mobile menu</title>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            : 
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        }
      </MobileNavToggle>
      <DesktopNav>
        <NavItem><Link href="/">PATIENTS & FAMILIES</Link></NavItem>
        <NavItem>
          
            <Link 
              className='flex'
              onClick={()=>setMenu1Open(!menu1Open)}
              href="/">
                RESOURCES
              {
                menu1Open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>

                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                )
              }
            </Link>
          
            {menu1Open ? (
              <Menu1 >
                <li className="menu-item">
                  <button>Menu 1</button>
                </li>
                <li className="menu-item">
                  <button>Menu 2</button>
                </li>
                <li className="menu-item">
                  <button>Menu 3</button>
                </li>
              </Menu1>
            ) : null}
        </NavItem>
        <NavItem><Link href="/">HEALTHCARE PROFESSIONALS</Link></NavItem>
        <NavItem>
          <SearchBox>
            <input type="text" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute bottom-0 left-0 text-black ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </SearchBox>
        </NavItem>
      </DesktopNav>
    </SNav>
      <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
        <NavItem><Link href="/">PATIENTS & FAMILIES</Link></NavItem>
        <NavItem><Link href="/">RESOURCES</Link></NavItem>
        <NavItem><Link href="/">HEALTHCARE PROFESSIONALS</Link></NavItem>
      </MobileNav>
    </>
  );
};

export default NavBar;