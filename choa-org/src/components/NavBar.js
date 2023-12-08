import React, { useEffect } from 'react';
import Image from 'next/image';
import { DesktopNav, Logo, MobileNav, MobileNavToggle, NavItem, SNav, SearchBox, SearchInput, SearchIcon, Menu } from '@/styles/navStyles';
import Link from 'next/link';
import DropDownLink from './DropDownLink';
import {calendar, location, findDoc, portal, nurse, medic, sick, hosp, cases} from '/src/data/icons.js';
import MainLink from './MainLink';
import DDMenu from './DDMenu';

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

  const closeMenu = () => {
    // Close the menu by setting menuOpen state to false
    setMenu1Open(false);
    setMenu2Open(false);
    setMenu3Open(false);
  };

  

  const main1linkList = main1.map((link,index) => {
    return (
      <table key={index} className='m-3'>
        <tr >
          <td className='w-9'>{link.icon}</td>
          <td className='pl-4 pb-2 pt-2'>
            <Link  href={link.href} onClick={closeMenu}>
              <span className='text-black'>{link.title}</span>
            </Link>
          </td>
        </tr>
      </table>
    )
  })

  const main2linkList = main2.map((link,index) => {
    return (
      <table key={index} className='m-3'>
        <tr >
          <td className='w-9'>{link.icon}</td>
          <td className='pl-4 pb-2 pt-2'>
            <Link  href={link.href} onClick={closeMenu}>
              <span className='text-black'>{link.title}</span>
            </Link>
          </td>
        </tr>
      </table>
    )
  })

  const main3linkList = main3.map((link,index) => {
    return (
      <table key={index} className='m-3'>
        <tr >
          <td className='w-9'>{link.icon}</td>
          <td className='pl-4 pb-2 pt-2'>
            <Link  href={link.href} onClick={closeMenu}>
              <span className='text-black'>{link.title}</span>
            </Link>
          </td>
        </tr>
      </table>
    )
  })
  
  const titlesub1 = 'Services'
  const  linkssub1=[
        {title:'Medical Services',href:'#'},
        {title:'Departments',href:'#'},
        {title:'Conditions & Treatments',href:'#'},
        {title:'Programs',href:'#'},
      ]
  const sub1 = linkssub1.map((link,index) => {
    return (

      <div key={index}  className='flex-col'>
        <Link className='text-xs' href={link.href} onClick={closeMenu}>
          <span className='text-black'>{link.title}</span>
        </Link>
    </div>
    )
  })
  const titlesub2 = 'Visit Types'
  const  linkssub2= [
        {title:'Emergency',href:'/emergencycare'},
        {title:'Urgent Care',href:'/urgentcare'},
        {title:'Primary Care',href:'/primarycare'},
        {title:'Telemed',href:'/telemed'},
      ]
  const sub2 = linkssub2.map((link,index) => {
    return (
      <div key={index}  className='flex-col'>
      <Link className='text-xs' href={link.href} onClick={closeMenu}>
        <span className='text-black'>{link.title}</span>
      </Link>
    </div>
    )
  }) 
  const titlesub3 = 'Resources'
  const linkssub3 = [
        {title:'Health Education',href:'#'},
        {title:'What to Expect',href:'#'},
        {title:'Medical Records',href:'#'},
        {title:'Finance & Billing',href:'#'},
        {title:'Visitor info',href:'#'},
        {title:'Volunteering & Fundraising',href:'#'},
      ]

  const sub3 = linkssub3.map((link,index) => {
    return (
      <div key={index}  className='flex-col'>
        <Link className='text-xs' href={link.href} onClick={closeMenu}>
          <span className='text-black'>{link.title}</span>
        </Link>
      </div>
        
    )
  })

  


  return (
    <>
    
    <SNav >
      <Logo>
        <Link onClick={closeMenu} href="/">
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
        <MainLink 
          pos={10}
          title='PATIENTS & FAMILIES'
          menuOpen = {menu1Open}
          setMenuOpen = {setMenu1Open}
          setMenu2Open = {setMenu2Open}
          setMenu3Open = {setMenu3Open}
        />
        <MainLink 
          pos={3}
          title='RESOURCES'
          menuOpen = {menu2Open}
          setMenuOpen = {setMenu2Open}
          setMenu2Open = {setMenu1Open}
          setMenu3Open = {setMenu3Open}
        />
        <MainLink 
          pos={20}
          title='HEALTHCARE PROFESSIONALS'
          menuOpen = {menu3Open}
          setMenuOpen = {setMenu3Open}
          setMenu2Open = {setMenu1Open}
          setMenu3Open = {setMenu2Open}
        />
      
        {menu1Open ? (
              
              <DDMenu 
                title='PATIENTS & FAMILIES'
                menuOpen = {menu1Open}
                setMenuOpen = {setMenu1Open}
                setMenu2Open = {setMenu2Open}
                setMenu3Open = {setMenu3Open}
                main1linkList={main1linkList}
                titlesub1 = {titlesub1}
                sub1 = {sub1}
                titlesub2 = {titlesub2}
                sub2 = {sub2}
                titlesub3 = {titlesub3}
                sub3 = {sub3}
              />
              
            ) : null}
        {menu2Open ? (
              
              <DDMenu 
                title='RESOURCES'
                menuOpen = {menu2Open}
                setMenuOpen = {setMenu2Open}
                setMenu2Open = {setMenu1Open}
                setMenu3Open = {setMenu3Open}
                main1linkList={main2linkList}
                titlesub1 = {titlesub1}
                sub1 = {sub1}
                titlesub2 = {titlesub2}
                sub2 = {sub2}
                titlesub3 = {titlesub3}
                sub3 = {sub3}
              />
              
            ) : null}
        {menu3Open ? (
             
              <DDMenu 
                title='HEALTHCARE PROFESSIONALS'
                menuOpen = {menu3Open}
                setMenuOpen = {setMenu3Open}
                setMenu2Open = {setMenu1Open}
                setMenu3Open = {setMenu2Open}
                main1linkList={main3linkList}
                titlesub1 = {titlesub1}
                sub1 = {sub1}
                titlesub2 = {titlesub2}
                sub2 = {sub2}
                titlesub3 = {titlesub3}
                sub3 = {sub3}
              />
              
            ) : null}
        
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