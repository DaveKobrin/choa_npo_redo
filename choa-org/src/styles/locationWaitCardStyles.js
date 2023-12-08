import styled from "styled-components"
import { PageColors } from "./globalstyles";


export const CardDiv = styled.div`
    width: 100%;
    /* margin: 1rem auto; */
    padding: 1rem 0.5rem;
    color: ${PageColors.TEXT_BLACK};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.5rem;
    border: 1px solid ${PageColors.TRUE_BLACK};
`;

export const LocSubDiv = styled.div`
    width: 48%;
    border: 1px solid red;
`;

export const TimeSubDiv = styled.div`
    width: 17%;
    display: flex;
    flex-direction: column;
    /* margin: 0.5rem 0.15rem; */
    align-items: center;
    border: 1px solid red;
`;

export const HoursSubDiv = styled.div`
    width: 32%;
    border: 1px solid red;
`;

export const TimeP = styled.p`
    font-size: 1.25rem;
`;

export const TimeSpan = styled.span`
    font-size: 2.5rem;
    /* margin-right: 0.75rem; */
    color: ${PageColors.WINE};
    display: block;
`;

export const LocNameP = styled.p`
    /* font-size: 1.125rem; */
    font-weight: 600;
    color: ${PageColors.TEXT_BLACK};
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
