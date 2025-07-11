"use client";
import React, { useEffect } from "react";
import "./BurgerBtn.scss";

interface BurgerBtnProps {
  onClick: () => void;
  isOpen: boolean;
}

const BurgerBtn = ({ onClick, isOpen }: BurgerBtnProps) => {
  useEffect(() => {
    if (!isOpen) {
      const burgerInput = document.getElementById("burger") as HTMLInputElement;
      if (burgerInput) {
        burgerInput.checked = false;
      }
    }
  }, [isOpen]);
  return (
    <label className="burger" htmlFor="burger">
      <input type="checkbox" id="burger" onClick={onClick} />
      <span />
      <span />
      <span />
    </label>
  );
};

export default BurgerBtn;
