"use client";

import React, { createContext, useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

// Menus.js component is a compound component, will be used to create Menus.

// Menus Context
const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider value={{ openId, close, open }}>
      {children}
    </MenusContext.Provider>
  );
}

// define Menus.functions
function Menu({ children }) {
  return <div className="flex items-center justify-center">{children}</div>;
}

function Toggle({ id }) {
  const { openId, close, open } = useContext(MenusContext);

  function handleClick() {
    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button
      onClick={handleClick}
      className="bg-none border-none p-1 rounded-sm transform translate-x-2 transition-all duration-200 hover:bg-gray-100"
    >
      <FontAwesomeIcon
        className="size-4 text-gray-700"
        icon={faEllipsisVertical}
      />
    </button>
  );
}

function List({ id, position, children }) {
  const style = {
    right: `${position.x}px`,
    top: `${position.y}px`,
  };

  const { openId } = useContext(MenusContext);

  if (openId !== id) return null;

  return (
    <ul className="fixed bg-gray-50 shadow-md rounded-md" style={style}>
      {children}
    </ul>
  );
}

function Button({ children }) {
  return (
    <li>
      <button className="w-full text-left bg-none border-none p-5 text-lg transition-all duration-200 flex items-center gap-4 hover:bg-gray-50">
        {children}
      </button>
    </li>
  );
}

// connecting
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
