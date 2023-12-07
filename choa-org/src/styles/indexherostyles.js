import styled from "styled-components";


export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  color: white; 
  font-size: 1rem;
  background-color: #011626;
  @media (max-width: 768px) {
    font-size: 0.8rem};
  `;

export const HeroContent = styled.div`
  flex: 1;
  padding: 80px;
  max-width: 50%; 
  /* overflow: hidden; */
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  @media (max-width: 768px) {
    padding: 40px};
  `;

export const MiddleDiv = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: absolute;
`;

export const HeroCard = styled.div`
  display: flex;
  align-items: center; 
  height: 100%; 
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

// -----------------------Styled components for IMPORTANT UPDATE DROP DOWN content----------------------- //


export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

export const StyledLi = styled.li`
  float: left;
`;

export const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: red;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: red;
  }
`;

export const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;


export const DropdownContainer = styled.div`
  position: absolute;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: #D0961F;
  color: #FFFFFF;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
`;


export const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;



