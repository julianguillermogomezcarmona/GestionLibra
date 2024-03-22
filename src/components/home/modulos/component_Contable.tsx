import React, { useEffect, useState } from "react";
import SideBar from "../sidebar";
import { Outlet } from "react-router-dom";
import { useThemeContext, ThemeProvider } from "../../../contex/themeContext";
// import { FluentProvider } from "@fluentui/react-components";
import { Transactions } from "./moduloContable/transactions";
import {
  Button,
  BrandVariants,
  FluentProvider,
  Theme,
  createDarkTheme,
  createLightTheme,
  webDarkTheme,
  webLightTheme,
  Switch,
} from "@fluentui/react-components";
import Header from "../header/header";
import { ReclasificationThird } from "./moduloContable/reclasificartionThird";
import { Terceros } from "./moduloContable/terceros";
import { Fountain } from "./moduloContable/fountain";
import { Extraction } from "./moduloContable/extraction";
import { NewTransations } from "./moduloContable/newTransactions";
import './style.css'
export default function home() {
  // const { setTheme, theme } = useThemeContext();
  const [isReduced, setIsReduced] = useState(false);

  // const { theme } = useThemeContext();
  const [currentTheme, setCurrentTheme] = useState<any>(webLightTheme);
  function cambiarTema() {
    console.log(currentTheme);
    setCurrentTheme((prevTexto: any) =>
      prevTexto === webLightTheme ? webDarkTheme : webLightTheme
    ),
      console.log(currentTheme);
    //  setCurrentTheme()
    // setTheme((prevTheme)=> (prevTheme === "dark" ? "light" : "dark"));
  }
  const [showModal, setShowModal] = useState(false);
  const toggleComponente = () => {
    setShowModal(!showModal);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseModal = () => {
    // console.log(showModal);
    setShowModal(!showModal);
    // console.log(showModal);
    document.body.style.overflow = 'auto';
  };
  return (
    <FluentProvider theme={currentTheme} className="">
      <section className="flex flex-col overflow-x-hidden overflow-y-scroll">
        <div>
          <Header showModal={cambiarTema}></Header>
        </div>
        <main className="mt-[35px] mb-[20px] flex flex-wrap w-full px-[40px] flex-col  gap-[15px]">
          <div className="flex w-full gap-[10px]">
            <Transactions newTransactions={toggleComponente}></Transactions>
            <Fountain></Fountain>
          </div>
          <div className="flex  pt-[20px] gap-[10px] w-full">
            <ReclasificationThird></ReclasificationThird>
            <Terceros></Terceros>
          </div>
          <Extraction></Extraction>
          {/* <SideBar></SideBar> */}
          {showModal ? <NewTransations showModal={handleCloseModal}></NewTransations> : ""}
        </main>
      </section>
    </FluentProvider>
  );
}

{
  /* <Switch></Switch> */
}
{
  /* <Button className="" onClick={toggleToDarkTheme}>
              Alternar Tema
            </Button>
             <Button className="" onClick={toggleToLightTheme}>
              Alternar Tema
           </Button> */
}