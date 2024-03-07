// import { Button } from "@fluentui/react-components";
// import { Menu } from "./acordeon";
// import { Inventarios, Sistema } from "./header/Nav";
import { SearchBox } from "@fluentui/react-search-preview";
import { Acordeon } from "./acordeon";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "@fluentui/react-components";
import { Link } from "react-router-dom";
export default function sideBar() {
  const [sidebarWidth, setSidebarWidth] = useState("w-[270px]"); // Estado para controlar el ancho del sidebar
  const toggleSidebarWidth = () => {
    setSidebarWidth(sidebarWidth === "w-[300px]" ? "w-[100px]" : "w-[300px]"); // Cambia entre dos tamaños de ancho
  };
  return (
    <Card
      className={`flex flex-col relative h-[100%] ${sidebarWidth} rounded-[5px]`}
    >
      <section className=" w-full overflow-hidden">
        <figure className="flex items-center px-[15px] justify-between text-1">
          <Link to={"/home"}>
            <img className="w-[80%]" src="/public/logo.svg" alt="logo" />
          </Link>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>
          </Link>
        </figure>
        <button onClick={toggleSidebarWidth}>Toggle Width</button>
        <SearchBox className="w-full" placeholder="Inventario"></SearchBox>
        <div className="mt-[20px] flex flex-col h-[500px] ">
          <Acordeon></Acordeon>
        </div>
        <span className="absolute bottom-4 text-center text-[10px] w-[90%]">
          © MicroExpress 2024
        </span>
      </section>
    </Card>
  );
}
