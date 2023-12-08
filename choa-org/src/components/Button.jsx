import { useEffect, useState } from "react";
import { locationAndWaitTimes } from "@/data/locationAndWaitTimes";
import styled from 'styled-components';
import { PageColors } from '@/styles/globalstyles';

// EXAMPLE:
    // <Button
        // text={"DONATE"}
        // bgColor={PageColors.BUTTON_YELLOW}
        // textColor={PageColors.TEXT_BLACK}
        // borderRadius={"1.5rem"}
        // fontSize={"1.25rem"}
        // padding={"1rem 2rem"}
        // hoverBgColor={"PageColors.BUTTON_GREEN"}
        // hoverTextColor={"PageColors.TEXT_WHITE"}
        // handleClick={handleClick}
    //     />

// FIXME: Padding does not currently work, but all other props seem to work fine

const Button = ({ text, bgColor, textColor, borderRadius, fontSize, padding, handleClick, hoverBgColor, hoverTextColor}) => {

const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding} !important;
  font-size: ${(props) => props.fontSize};
  &:hover {
    background-color: ${(props) => props.hoverBgColor};
    color: ${(props) => props.hoverTextColor}
  }
`;

  return <StyledButton bgColor={bgColor} textColor={textColor} borderRadius={borderRadius} fontSize={fontSize} padding={padding} onClick={handleClick} hoverBgColor={hoverBgColor} hoverTextColor={hoverTextColor}>{text}</StyledButton>;
};

export default Button;