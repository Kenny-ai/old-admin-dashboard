import React, { createContext, ReactNode, useContext, useState } from "react";
import { ContextInterface, InitialStateTypes } from "../@types/model";

export const StateContext = createContext<ContextInterface | null>(null);

const initialState: InitialStateTypes = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

interface Props {
  children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState<InitialStateTypes>(initialState);

  const handleClick = (clicked: string) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const [screenSize, setScreenSize] = useState(undefined);

  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  // fix line below
  const setMode = (e: any) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const values = {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    currentMode,
    setMode,
    setColor,
    themeSettings,
    setThemeSettings,
  };

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(StateContext) as ContextInterface;
