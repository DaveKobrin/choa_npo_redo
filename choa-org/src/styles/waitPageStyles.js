import styled from 'styled-components';


export const EmergencySearch = styled.div`
  background-color: #fff;
  border: 1px solid gray; 
  width: 22vw;
  height: 30px;
  opacity: 0.5;
  display: flex;
  position: relative;
  alignText: right;
  padding: 0 10px;
  align-items: center;
`;

export const EmergencyInput = styled.input`
  font-size: 0.8rem;
  width: 90%;
  color: black;
  &:focus{
    outline: none;
  }
  
`;