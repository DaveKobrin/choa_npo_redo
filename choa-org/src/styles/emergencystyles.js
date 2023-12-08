import styled from "styled-components";
import { Heading3Title } from "./textStyles";

export const Treatment = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 19px;
margin-right: 725px

@media(max-width: 1000px){
    margin-right: 0px;
    
}

`
export const EmergencyUrgent = styled.div`
flex-direction: column;
justify-content: center;
margin-right: 844px;
align-items: space-evenly;
padding-top: 87px;
@media(max-width: 1000px){
    margin-right: 0px;
    
}
`
export const Transport = styled.div`
margin-right: 623px;
padding-top: 87px;
padding-bottom: 87px;
@media(max-width: 1000px){
    margin-right: 0px;
    
}
`

export const ChildEmergency = styled.div`
flex-direction: column;
justify-content: center;
align-items: space-evenly;
margin-right: 625px;
padding-top: 87px;
@media(max-width: 1000px){
    margin-right: 0px;
    
}

`
export const Advanced = styled.div`
margin-right: 667px;
padding-top: 87px;

@media(max-width: 1000px){
    margin-right: 0px;
    
}
`

export const EverythingText = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// width: 60vw;
// margin: 1rem auto;
margin-left: 64px;


`


export const About = styled.div`
// display: flex;
margin-top: 104px;
@media(max-width: 1000px){
display: flex;
flex-direction: column;    
}
`
export const Photowrap = styled.div`
float: right;
padding: 170px 275px 0 0;

@media(max-width: 1000px){
    padding: 0px 0px 0px 0px;
    
}
`
export const HeaderLinks = styled.h2`
display: flex;
flex-direction: row;
`

export const MoreButton = styled.button`
display: inline-flex;
padding: 10px 20px;
justify-content: center;
align-items: center;
gap: 20px;
border-radius: 45px;
background: #27935A;
margin: 24px 0px 0px 0px; 
`
export const BtnTxt = styled.p`
color: #FFF;
text-align: center;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const SvgWrapper = styled.div`
display: flex;
flex-direction: row;
border: 1px solid black;
align-items: center;
gap:5px;
`


export const SvgWrapper2 = styled(SvgWrapper)`
border-style: none
`

export const TreatmentHeader = styled(Heading3Title)`
    margin-right: 400px;
`

export const SeeMoreTxt = styled.span`
display: flex;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
`

export const TreatDropDown = styled(SeeMoreTxt)`
`