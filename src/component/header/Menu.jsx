import { useContext } from "react";
import { MenuContext, SearchContext } from "../../context/newsContext";

export default function Menu() {
  const { menuData, setMenuData } = useContext(MenuContext);
  const { setSearchTerm, setInputModal, setInputValue } =
    useContext(SearchContext);

  function MenuHandler(value) {
    setMenuData(value);
    setSearchTerm("");
    setInputModal(false);
    setInputValue("");
  }
  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li onClick={() => MenuHandler("general")}>
          <a href="#">General</a>
        </li>
        <li onClick={() => MenuHandler("business")}>
          <a href="#">Business</a>
        </li>
        <li onClick={() => MenuHandler("entertainment")}>
          <a href="#">Entertainment</a>
        </li>
        <li onClick={() => MenuHandler("health")}>
          <a href="#">Health</a>
        </li>
        <li onClick={() => MenuHandler("science")}>
          <a href="#">Science</a>
        </li>
        <li onClick={() => MenuHandler("sports")}>
          <a href="#">Sports</a>
        </li>
        <li onClick={() => MenuHandler("technology")}>
          <a href="#">Technology</a>
        </li>
      </ul>
    </div>
  );
}
