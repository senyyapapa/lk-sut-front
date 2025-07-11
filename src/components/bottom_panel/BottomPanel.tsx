import React from "react";
import Home from "./svg/Home";
import Chats from "./svg/Chats";
import Search from "./svg/Search";
import Profile from "./svg/Profile";
import Add from "./svg/Add";

const Radio = () => {
  return (
    <div className="menu">
      <a href="#" className="link">
        <span className="link-icon">
          <Home />
        </span>
        <span className="link-title">Главная</span>
      </a>
      <a href="#" className="link">
        <span className="link-icon">
          <Chats />
        </span>
        <span className="link-title">Чаты</span>
      </a>
      <a href="#" className="link">
        <span className="link-icon">
          <Search />
        </span>
        <span className="link-title">Поиск</span>
      </a>
      <a href="#" className="link">
        <span className="link-icon">
          <Profile />
        </span>
        <span className="link-title">Профиль</span>
      </a>
      <a href="#" className="link">
        <span className="link-icon">
          <Add />
        </span>
        <span className="link-title">Добавить</span>
      </a>
    </div>
  );
};

export default Radio;
