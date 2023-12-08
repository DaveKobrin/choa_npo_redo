import styled from "styled-components"
import { PageColors } from "./globalstyles";


export const CardDiv = styled.div`
    width: 60vw;
    margin: 1rem auto;
    padding: 1rem 2rem;
    color: ${PageColors.TEXT_BLACK};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${PageColors.TRUE_BLACK};
`;

export const SubDiv = styled.div`
    width: 30%;
`;

export const LocSubDiv = styled.div`
    width: 100%;
    display: flex;
    margin: 0.5rem auto;
    align-items: center;
`;

export const TimeP = styled.p`
    font-size: 1.35rem;
`;

export const TimeSpan = styled.span`
    font-size: 2.5rem;
    margin-right: 0.75rem;
    color: ${PageColors.WINE};
`;

export const LocNameP = styled.p`
    font-size: 1.125rem;
    font-weight: 500;
    color: ${PageColors.BUTTON_DK_GREEN};
`;

export const CardText = styled.p`

`;

export const GreenSpan = styled.span`
    color: ${PageColors.BRIGHT_GREEN};
`;

export const SvgWrapper = styled.div`
    display: inline;
    margin-right: 0.75rem;
`;
