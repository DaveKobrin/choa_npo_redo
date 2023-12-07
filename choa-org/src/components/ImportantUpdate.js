import React, { useState } from 'react';
import styled from 'styled-components';
import {DropdownContainer, DropdownButton, DropdownContent} from '../styles/indexherostyles';



// Component definition for the dropdown
const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleToggle}>IMPORTANT UPDATES</DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;


