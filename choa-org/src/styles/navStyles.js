import styled from 'styled-components';

export const SNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(83,170,83,1);
  color: #fff;
  padding: 1rem;
`;

export const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem 0.5rem;

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
  margin: 0;
`;

export const MobileNavToggle = styled.button`
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

export const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background-color: rgba(83,170,83,1);

  @media (max-width: 767px) {
    display: flex;
  }
`;
