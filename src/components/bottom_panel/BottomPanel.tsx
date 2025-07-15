import React from "react";
import Home from "@/images/BottomPanel/Home";
import Chats from "@/images/BottomPanel/Chats";
import Search from "@/images/BottomPanel/Search";
import Profile from "@/images/BottomPanel/Profile";
import Add from "@/images/BottomPanel/Add";

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
