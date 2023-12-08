import styled from 'styled-components';
import { PageColors } from './globalstyles';

export const HeroContainer = styled.div`
    height: 500px;
    margin-top: 10px;
    position: relative; 
`;

export const HeroBox = styled.div`
    position: absolute;
    background-color: ${PageColors.WHITE_TRANS_75};
    max-width: 500px;
    padding: 50px;
    margin-left: 50px;
    margin-top: 100px;
`;

export const HeroHead = styled.h2`
    margin-bottom:5;
    color:#285844;
    font-size: 3rem;
    
`;

export const HeroText = styled.p`
    color: ${PageColors.TEXT_BLACK};
    margin-bottom: 1.5rem;
`;
