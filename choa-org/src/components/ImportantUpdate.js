import React, { useState } from "react";
import styled from "styled-components";
import {
  DropdownContainer,
  DropdownButton,
  DropdownContent,
} from "../styles/indexherostyles";

// Component definition for the dropdown
const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleToggle}>
        <h3 className="flex flex-row items-center text-sm">
          IMPORTANT UPDATES{" "}
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-3 h-3 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </h3>
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
