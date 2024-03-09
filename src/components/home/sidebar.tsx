// import { Button } from "@fluentui/react-components";
// import { Menu } from "./acordeon";
// import { Inventarios, Sistema } from "./header/Nav";
import { SearchBox } from "@fluentui/react-search-preview";
import { Acordeon } from "./acordeon";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faEye,
  faEyeSlash,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import "./acordeon.css";
type prop = {
  isReduced: boolean;
  toggleSidebarSize: any;
};
export default function sideBar({ isReduced, toggleSidebarSize }: prop) {
  return (
    <Card
      className={`flex flex-col relative h-[100%] rounded-[5px] relative reduced${
        isReduced ? "reduced" : "original"
      } ${isReduced ? "reduced-size" : ""}`}
    >
      {isReduced ? (
        <button onClick={toggleSidebarSize}>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>{" "}
        </button>
      ) : (
        <section className="flex flex-col items-center w-full overflow-hidden">
          <figure className="flex items-center px-[15px] justify-between text-1">
            <Link to={"/home"}>
              <img className="w-[80%]" src="/public/logo.svg" alt="logo" />
            </Link>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </Link>
          </figure>
          <SearchBox
            appearance="underline"
            className="w-[170px] "
            placeholder="Inventario"
          />
          <div className="mt-[20px] flex flex-col h-[500px] w-full">
            <Acordeon />
          </div>
          <span className="absolute bottom-4 text-center text-[10px] w-[90%]">
            © MicroExpress 2024
          </span>
        </section>
      )}
      {!isReduced && (
        <div className="absolute bottom-14 flex justify-center w-[90%]">
          <button onClick={toggleSidebarSize}>
            <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>{" "}
          </button>
        </div>
      )}
    </Card>
  );
}
