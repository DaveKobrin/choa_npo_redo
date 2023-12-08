import styled from 'styled-components';
import { PageColors } from './globalstyles';


export const FooterContainerWrapper = styled.footer`
    width: 100vw;
    padding: 3rem 1rem 2rem 1rem;
    background-color: ${PageColors.MEDIUM_GRAY};
    color: ${PageColors.TEXT_WHITE};
`;

export const FooterContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1rem;
`;

export const LogoWrapper = styled.div`
    padding: 1.5rem 0;
`;

export const FootUpperNav = styled.div`

`;

export const LeftDiv = styled.div`
    float: left;
`;

export const RightDiv = styled.div`
    float: right;
`;

export const UpperUList = styled.ul`
    margin-right: 6rem;
`;

export const UpperListItem = styled.li`
    font-size: 0.8rem;
    padding-bottom: 0.625rem;
    line-height: 1.5;
    font-weight: 600;
    text-transform: uppercase;
`;

export const FootLowerNav = styled.div`
    clear: both;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.8rem;
    padding: 1rem 0;
`;

export const NoticesDiv = styled.div`
    padding-top: 1.5rem;
    padding-right: 2rem;
`;

export const NoticesUL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const NoticesLI = styled.li`
    text-decoration    :underline;
    margin-right: 2rem;
`;

export const BoilerPlateDiv = styled.div`
    padding-top: 1.5rem;
    padding-right: 2rem;
`;

export const SocialDiv = styled.div`
    display: flex;
`;

export const SocialUL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const SocialLI = styled.li`
    padding: 0.5rem 1rem;
`;


export const VertLine = styled.div`
    width: 1px;
    height: 100%;
    background-color: ${PageColors.BACKGROUND_WHITE};
`;
