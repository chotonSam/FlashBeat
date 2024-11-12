import { MenuContext } from "../context/newsContext";

import { useState } from "react";

const MenuProvider = ({ children }) => {
  const [menuData, setMenuData] = useState("general");

  return (
    <MenuContext.Provider value={{ menuData, setMenuData }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
