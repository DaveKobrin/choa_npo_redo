import styled from 'styled-components';
import GlobalStyle from './globalstyles';

export const SNav = styled.nav`
  font-size: 14px;
  display: flex;
  padding-right: 72px;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #00A94F 0%, rgba(100, 188, 109, 0.80) 93.11%);
  color: #fff;
  padding: 1rem;
`;


export const NavItem = styled.li`
  list-style: none;
  margin: 0 1.5rem 0.5rem;
  font-style: normal;


  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: black;
    }
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  margin-left: 10px;
`;

export const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: black;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background: linear-gradient(90deg, #00A94F 0%, rgba(100, 188, 109, 0.80) 93.11%);

  @media (max-width: 767px) {
    display: flex;
  }
`;

export const Menu1 = styled.ul`
  position: absolute;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  z-index: 100;
  
`;

export const SearchBox = styled.div`
  background-color: #fff;
  height: 30px;
  opacity: 0.5;
  display: flex;
  position: relative;
  alignText: right;
  border-radius: 25px;
  padding: 0 5px;
  justify-content: center;
  align-items: center;
  
`;

export const SearchInput = styled.input`
  
  width: 80%;
  height: 20px;
  font-size: 16px;
  color: black;
  padding-left: 3px
  border-radius: 25px;

  &:focus{
    outline: none;
  }
  
`;

export const SearchIcon = styled.div`
  position: absolute;
  color: black;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 30px;
  padding: 5px;
  
`;