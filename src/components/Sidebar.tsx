import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize && screenSize <= 900) setActiveMenu(false);
  }

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 hover:bg-light-gray dark:hover:text-black m-2";

  return (
    <div className="ml-3 h-screen overflow:auto md:overflow-hidden md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              onClick={handleCloseSidebar}
              className="flex items-center text-xl gap-3 ml-3 mt-4 font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              <SiShopware /> <span className="">Pinto</span>
            </Link>

            <TooltipComponent content={"Close"} position="BottomCenter">
              <button
                type="button"
                className="text-xl rounded-full p-3 mt-4 block hover:bg-light-gray md:hidden"
                onClick={() => setActiveMenu(!activeMenu)}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p> 
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}

                    className={({ isActive }) => isActive ? activeLink : normalLink}
                    
                    style={
                      ({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : ""
                      })}
                  >
                    {link.icon}
                    <span className="capitalize">
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;