"use client";
import { useState, useEffect } from "react";
import BurgerBtn from "../burger_button/BurgerBtn";
import "./sidebar.scss";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  return (
    <div>
      <div className="fixed p-4 z-1000">
        <BurgerBtn
          onClick={() => {
            if (isOpen) {
              handleClose();
            } else {
              setIsOpen(true); //
            }
          }}
          isOpen={isOpen}
        />
      </div>
      {isOpen ? (
        <>
          <div className={`sidebar ${isClosing ? "sidebarClose" : ""}`}>
            <div className="h-[8vh] shadow-lg w-full"></div>
            <div></div>
          </div>
          <div
            className={`shadow ${isClosing ? "shadowClose" : ""}`}
            onClick={handleClose}
          ></div>
        </>
      ) : null}
    </div>
  );
}
