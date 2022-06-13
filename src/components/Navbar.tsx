import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

interface Props {
  title: string;
  customFunc: () => void;
  color: string;
  dotColor: string;
  icon: React.ReactNode;
}

const NavButton = ({ title, customFunc, icon, color, dotColor }: Props) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      onClick={customFunc}
      style={{ color }}
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
        {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    // setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // handleResize();

    console.log(screenSize);

    return () => window.removeEventListener("revise", handleResize);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (screenSize !== undefined)
    {setActiveMenu(screenSize <= 900 ? false : true);}
    // eslint-disable-next-line
  }, [screenSize])

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title={"Menu"}
        customFunc={() => {
          setActiveMenu(!activeMenu);
        }}
        color={currentColor}
        icon={<AiOutlineMenu />}
        dotColor=""
      />

      <div className="flex">
        <NavButton
          title={"Cart"}
          customFunc={() => {
            handleClick("cart");
          }}
          color={currentColor}
          icon={<FiShoppingCart />}
          dotColor=""
        />

        <NavButton
          title={"Chat"}
          customFunc={() => {
            handleClick("chat");
          }}
          color={currentColor}
          icon={<BsChatLeft />}
          dotColor="#03C907"
        />

        <NavButton
          title={"Notifications"}
          customFunc={() => {
            handleClick("notification");
          }}
          color={currentColor}
          icon={<RiNotification3Line />}
          dotColor=""
        />

        <TooltipComponent content={"Profile"} position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => {
              handleClick("userProfile");
            }}
          >
            <img className="rounded-full w-8 h-8" src={avatar} alt="user" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>
              <span className="font-bold ml-1 text-14">Kenny</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
