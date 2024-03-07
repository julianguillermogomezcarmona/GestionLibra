import SideBar from "./sidebar";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
// import Tema from "../thema";
export default function home() {
  return (
    <main className="h-screen flex w-full p-[15px] gap-[15px] overflow-hidden ">
      <section className="w-[300px]">
        <SideBar></SideBar>
      </section>
      <section className="w-full">
        <Outlet></Outlet>
      </section>
    </main>
  );
}
