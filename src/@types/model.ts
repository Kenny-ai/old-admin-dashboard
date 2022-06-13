export interface InitialStateTypes {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}

export interface ContextInterface {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isClicked: InitialStateTypes;
  setIsClicked: React.Dispatch<React.SetStateAction<InitialStateTypes>>;
  handleClick: (clicked: string) => void;
  screenSize: undefined | number;
  setScreenSize: React.Dispatch<React.SetStateAction<any>>;
  currentColor: string;
  currentMode: string;
  themeSettings: boolean;
  setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setMode: (e: any) => void;
  setColor: (color: string) => void;
}
