import { useEffect, useState } from "react";
import { locationAndWaitTimes } from "@/data/locationAndWaitTimes";
import styled from 'styled-components';
import { PageColors } from '@/styles/globalstyles';

// TODO: Props need to be:
// - handleClick?
// - where to navigate
// - text
// - 

const Button = ({ text, bgColor, textColor}) => {

const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
`;

  return <StyledButton bgColor={bgColor} textColor={textColor}>{text}</StyledButton>;
};

export default Button;