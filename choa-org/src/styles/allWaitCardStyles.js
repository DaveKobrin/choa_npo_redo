import styled from "styled-components"
import { DeviceSize, PageColors } from "./globalstyles";


export const CardDiv = styled.div`
    width: 95%;
    margin: 1rem auto;
    padding: 1rem 1rem;
    color: ${PageColors.TEXT_BLACK};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.5rem;
    border: 1px solid ${PageColors.BLACK_TRANS_25};

    @media (max-width: ${DeviceSize.laptopS}) {
        flex-direction: column;
    }
`;

export const TimeSubDiv = styled.div`
    max-width: 250px;
    min-width: 200px;
`;

export const NameSubDiv = styled.div`
    width: 28%;

    @media (max-width: ${DeviceSize.laptopS}) {
        width: 90%;
        display: flex;
        justify-content: center;
    }
`;

export const AddSubDiv = styled.div`
    width: 28%;

    @media (max-width: ${DeviceSize.laptopS}) {
        width: 90%;
    }
`;

export const HoursSubDiv = styled.div`
    width: 242px;
    min-width: 242px;
`;

export const LocSubDiv = styled.div`
    /* width: 100%; */
    display: flex;
    margin: 0.5rem auto;
    align-items: center;
    /* justify-content: center; */
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
