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
  // Función para hacer scroll automático al componente Transactions
  const scrollToTransactions = () => {
    const transactionsComponent = document.getElementById('transactions');
    if (transactionsComponent) {
      transactionsComponent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Función para hacer scroll automático al componente ReclasificationThird
  // const scrollToReclasificationThird = () => {
  //   const reclasificationThirdComponent = document.getElementById('terceros');
  //   if (reclasificationThirdComponent) {
  //     const offset = 60; // Puedes ajustar este valor según tus necesidades
  //     const topPosition = reclasificationThirdComponent.getBoundingClientRect().top + window.pageYOffset - offset;
  //     reclasificationThirdComponent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };
  const scrollToReclasificationThird = () => {
    const reclasificationThirdComponent = document.getElementById('terceros');
    const headerHeight = document.getElementById('header').offsetHeight; // Obtener la altura del encabezado
    if (reclasificationThirdComponent && headerHeight) {
      const offset = -10; // Puedes ajustar este valor según tus necesidades
      const topPosition = reclasificationThirdComponent.getBoundingClientRect().top + window.pageYOffset - offset - headerHeight;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  // Función para hacer scroll automático al componente Extraction
  // const scrollToExtraction = () => {
  //   const extractionComponent = document.getElementById('extraction');
  //   if (extractionComponent) {
  //     extractionComponent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };
  const scrollToExtraction = () => {
    const scrollToExtraction = document.getElementById('extraction');
    const headerHeight = document.getElementById('header').offsetHeight; // Obtener la altura del encabezado
    if (scrollToExtraction && headerHeight) {
      const offset = -10; // Puedes ajustar este valor según tus necesidades
      const topPosition = scrollToExtraction.getBoundingClientRect().top + window.pageYOffset - offset - headerHeight;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  return (
    <FluentProvider theme={currentTheme} className="">
      <section className="relative flex flex-col overflow-x-hidden overflow-y-scroll">
        <div id="header" className="fixed z-50 w-full">
          <Header scrollTransaction={scrollToTransactions} scrollTercero={scrollToReclasificationThird} scrollExtraction={scrollToExtraction} showModal={cambiarTema}></Header>
        </div>
        <main className=" mb-[20px] flex flex-wrap w-full px-[40px] flex-col ">
          <div id="transactions" className="flex w-full gap-[10px]">
            <Transactions newTransactions={toggleComponente}></Transactions>
            <Fountain></Fountain>
          </div>
          <div id="terceros" className="flex  gap-[10px] w-full">
            <ReclasificationThird></ReclasificationThird>
            <Terceros></Terceros>
          </div>
          <div id="extraction" className="w-full">
            <Extraction></Extraction>

          </div>
          {/* <SideBar></SideBar> */}
          {showModal ? <NewTransations showModal={handleCloseModal}></NewTransations> : ""}
        </main>
      </section>
    </FluentProvider>
  );
}

