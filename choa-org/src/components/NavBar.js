import React, { useEffect } from 'react';
import Image from 'next/image';
import { DesktopNav, Logo, MobileNav, MobileNavToggle, NavItem, SNav, SearchBox, SearchInput, SearchIcon } from '@/styles/navStyles';
import Link from 'next/link';
import DropDownLink from './DropDownLink';
import {calendar, location, findDoc, portal, nurse, medic, sick, hosp, cases} from '/src/data/icons.js';


const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const [menu1Open, setMenu1Open] = React.useState(false);
  const [menu2Open, setMenu2Open] = React.useState(false);
  const [menu3Open, setMenu3Open] = React.useState(false);

  const  main1 = [
    {icon:calendar,title:'Request an appointment',href:'#'},
    {icon:location,title:'Find a location',href:'#'},
    {icon:findDoc,title:'Find a doctor',href:'#'},
    {icon:portal,title:'Patient portal',href:'#'},
  ]
  const  main2 = [
    {icon:hosp,title:'About CHOA',href:'#'},
    {icon:cases,title:'Research & Trials ',href:'#'},
  ]
  const  main3 = [
    {icon:nurse,title:'Nursing Resources',href:'#'},
    {icon:medic,title:'Physician Resources',href:'#'},
    {icon:sick,title:'Refer a patient',href:'#'},
  ]

  


  return (
    <>
    
    <SNav>
      <Logo>
        <Link href="/">
          <Image src="/choa-logo-color-white.webp" alt="Logo" width={200} height={37} priority />
        </Link>
      </Logo>
      <MobileNavToggle onClick={() => {setIsMobileNavOpen(!isMobileNavOpen)}}>
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
        <DropDownLink menuOpen={menu1Open} setMenuOpen={setMenu1Open} title={'PATIENTS & FAMILIES'} main={main1} />
        <DropDownLink menuOpen={menu2Open} setMenuOpen={setMenu2Open} title={'RESOURCES'} main={main2}  />
        <DropDownLink menuOpen={menu3Open} setMenuOpen={setMenu3Open} title={'HEALTHCARE PROFESSIONALS'} main={main3} />
        
        <NavItem>
          <SearchBox>
            <SearchInput />
            <SearchIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </SearchIcon>
          </SearchBox>
        </NavItem>
      </DesktopNav>
    </SNav>
      <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
        <NavItem><Link href="/">PATIENTS & FAMILIES</Link></NavItem>
        <NavItem><Link href="/">RESOURCES</Link></NavItem>
        <NavItem><Link href="/">HEALTHCARE PROFESSIONALS</Link></NavItem>
        <NavItem>
          <SearchBox>
            <SearchInput />
            <SearchIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </SearchIcon>
          </SearchBox>
        </NavItem>
      </MobileNav>
    </>
  );
};

export default NavBar;