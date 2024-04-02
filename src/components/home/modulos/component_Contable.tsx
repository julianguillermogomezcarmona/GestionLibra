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
import { NewFountain } from "./moduloContable/newFountain";
import { NewTerceros } from "./moduloContable/terceros/newTercero";
import { Delete } from "../../delete";
import { ProcessedMovement } from "./moduloContable/processedMovement";
import { DiaryBook } from "./moduloContable/diaryBook";
import { DiaryBox } from "./moduloContable/diaryBox";
import { JournalVouchers } from "./journalVouchers";
import { Ledger } from "./moduloContable/ledger";
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

  // Movimiento procesado
  const [showProcessedMovement, setShowProcessedMovement] = useState(false);
  const toggleComponenteProcessed = () => {
    setShowProcessedMovement(!showProcessedMovement);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseProcessed = () => {
    // console.log(showModal);
    setShowProcessedMovement(!showProcessedMovement);
    // console.log(showModal);
    document.body.style.overflow = 'auto';
  };
  //Libro diario
  const [showDiaryBook, setShowDiaryBook] = useState(false);
  const toggleComponenteDiary = () => {
    setShowDiaryBook(!showDiaryBook);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseDiary = () => {
    // console.log(showModal);
    setShowDiaryBook(!showDiaryBook);
    // console.log(showModal);
    document.body.style.overflow = 'auto';
  };
  //Diario caja
  const [showDiaryBox, setShowDiaryBox] = useState(false);
  const toggleComponenteDiaryBox = () => {
    setShowDiaryBox(!showDiaryBox);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseDiaryBox = () => {
    // console.log(showModal);
    setShowDiaryBox(!showDiaryBox);
    // console.log(showModal);
    document.body.style.overflow = 'auto';
  };
  //Comprobantes de diario
  const [showJournalVouchers, setShowJournalVouchers] = useState(false);
  const toggleComponenteJournalVouchers = () => {
    setShowJournalVouchers(!showJournalVouchers);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseJournalVouchers = () => {
    // console.log(showModal);
    setShowJournalVouchers(!showJournalVouchers);
    // console.log(showModal);
    document.body.style.overflow = 'auto';
  };
  //Diario mayor
  const [showLedger, setShowLedger] = useState(false);
  const toggleComponenteLedger = () => {
    setShowLedger(!showLedger);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseLedger = () => {
    // console.log(showModal);
    setShowLedger(!showLedger);
    // console.log(showModal);
    document.body.style.overflow = 'auto';
  };
  return (
    <FluentProvider theme={currentTheme} className="">
      <section className="relative h-screen flex flex-col gap-[15px] overflow-x-hidden overflow-y-scroll">
        <div id="header" className="w-full">
          <Header showLedger={toggleComponenteLedger} showJournalVouchers={toggleComponenteJournalVouchers} showDiaryBox={toggleComponenteDiaryBox} showDiaryBook={toggleComponenteDiary} showProcessed={toggleComponenteProcessed} showModal={cambiarTema} ></Header>
        </div>
        <main className="w-full px-[40px]">
          <Outlet></Outlet>
        </main>
        {showLedger ? <Ledger showModal={handleCloseLedger}></Ledger> : ""}
        {showJournalVouchers ? <JournalVouchers showModal={handleCloseJournalVouchers}></JournalVouchers> : ""}
        {showDiaryBox ? <DiaryBox showModal={handleCloseDiaryBox}></DiaryBox> : ""}
        {showProcessedMovement ? <ProcessedMovement showModal={handleCloseProcessed}></ProcessedMovement> : ""}
        {showDiaryBook ? <DiaryBook showModal={handleCloseDiary}></DiaryBook> : ""}
      </section>
    </FluentProvider>
  );
}

