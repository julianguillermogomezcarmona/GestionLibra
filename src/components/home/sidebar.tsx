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
  isReduced: true;
  toggleSidebarSize: any;
};
export default function sideBar({ isReduced, toggleSidebarSize }: prop) {
  return (
    <Card
      className={`flex flex-col  relative h-[100%] sidebar-container  reduced ${isReduced ? "original" : " reduced"
        } ${isReduced ? "reduced-size" : ""}`}
    >
      {isReduced ? (
        <div className="flex items-center h-[100%]">
          <button onClick={toggleSidebarSize}>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>{" "}
          </button>
        </div>
      ) : (
          <section className="flex flex-col items-center  w-full h-[100%] overflow-hidden">
            <div className=" flex flex-col h-[440px] w-full">
            <Acordeon />
          </div>
          <span className="absolute bottom-4 text-center text-[10px] w-[90%]">
            © MicroExpress 2024
          </span>
        </section>
      )}
      {!isReduced && (
        <div className="absolute bottom-14 flex  items-center justify-center w-[90%]">
          <button onClick={toggleSidebarSize}>
            <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>{" "}
          </button>
        </div>
      )}
    </Card>
  );
}
