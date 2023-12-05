import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Nav = styled.nav`
  display: flex;                      
  justify-content: space-between;
  align-items: center;
  background-color: rgba(83,170,83,1);
  color: #fff;
  padding: 1rem;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: black;
    }
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: black;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <Nav>
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
      <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
      <NavItem><Link href="/">Home</Link></NavItem>
        <NavItem><Link href="/">About</Link></NavItem>
        <NavItem><Link href="/">Services</Link></NavItem>
        <NavItem><Link href="/">Contact</Link></NavItem>
      </MobileNav>
    </Nav>
  );
};

export default NavBar;