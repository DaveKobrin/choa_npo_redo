import React from 'react';
import Image from 'next/image';
import { DesktopNav, Logo, MobileNav, MobileNavToggle, NavItem, SNav } from '@/styles/navStyles';

import Link from 'next/link';

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

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
        <NavItem><Link href="/">Home</Link></NavItem>
        <NavItem><Link href="/">About</Link></NavItem>
        <NavItem><Link href="/">Services</Link></NavItem>
        <NavItem><Link href="/">Contact</Link></NavItem>
      </DesktopNav>
    </SNav>
      <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
        <NavItem><Link href="/">Home</Link></NavItem>
        <NavItem><Link href="/">About</Link></NavItem>
        <NavItem><Link href="/">Services</Link></NavItem>
        <NavItem><Link href="/">Contact</Link></NavItem>
      </MobileNav>
    </>
  );
};

export default NavBar;