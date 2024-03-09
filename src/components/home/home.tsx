import React, { useState } from "react";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";

export default function home() {
  const [isReduced, setIsReduced] = useState(false);

  return (
    <main className="h-screen flex w-full p-[15px] gap-[15px] overflow-hidden items-center">
      <section
        className={`transition-all duration-1000 ${
          isReduced ? "w-18" : "w-[270px]"
        } ${isReduced ? "h-[]" : " " && " "}`}
      >
        <SideBar
          isReduced={isReduced}
          toggleSidebarSize={() => setIsReduced(!isReduced)}
        />
      </section>

      <section className="w-full h-[100%]">
        <Outlet />
      </section>
    </main>
  );
}
