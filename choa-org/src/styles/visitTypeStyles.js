import styled from "styled-components";

export const VisitHead = styled.h3`
color: #000;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;

`;





export const Options = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

@media (max-width: 990px){
    flex-direction: column;
    align-items: center;
}
`;

export const Option = styled.div`
min-width: 275px;
min-height: 219px;
border-radius: 24;  
@media (max-width: 990px){
    padding: 10px 0px;    
}
`