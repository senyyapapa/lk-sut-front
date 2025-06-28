'use client'
import React, { useEffect } from 'react';
import styled from 'styled-components';

interface BurgerBtnProps {
    onClick: () => void;
    isOpen: boolean;
}

const BurgerBtn = ({onClick, isOpen} : BurgerBtnProps) => {
    useEffect(() => {
        if (!isOpen){
            const burgerInput = document.getElementById('burger') as HTMLInputElement;
            if (burgerInput) {
                burgerInput.checked = false;
            }
        }
    }, [isOpen]);
  return (
    <StyledWrapper>
      <label className="burger" htmlFor="burger">
        <input type="checkbox" id="burger" onClick={onClick} />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 33px; /* уменьшено с 40 */
    height: 23px; /* уменьшено с 30 */
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 3px; /* пропорционально уменьшено */
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 4px; /* немного меньше */
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 23px;
    left: 4px;
  }
`;

export default BurgerBtn;
