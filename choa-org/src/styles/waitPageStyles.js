import styled from 'styled-components';


export const EmergencySearch = styled.div`
  background-color: #fff;
  border: 1px solid gray; 
  width: 20vw;
  height: 30px;
  opacity: 0.5;
  display: flex;
  position: relative;
  alignText: right;
  padding: 0 15px;
  align-items: center;
`;

export const EmergencyInput = styled.input`
  font-size: 1rem;
  width: 80%;
  color: black;
  padding-left: 3px

  &:focus{
    outline: none;
  }
  
`;