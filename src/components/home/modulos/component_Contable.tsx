import  { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import Header from "../header/header";
import './style.css'
import { ProcessedMovement } from "./moduloContable/processedMovement";
import { DiaryBook } from "./moduloContable/diaryBook";
import { DiaryBox } from "./moduloContable/diaryBox";
import { JournalVouchers } from "./journalVouchers";
import { Ledger } from "./moduloContable/ledger";
export default function home() {
  const [currentTheme, setCurrentTheme] = useState<any>(webLightTheme);
  function cambiarTema() {
    console.log(currentTheme);
    setCurrentTheme((prevTexto: any) =>
      prevTexto === webLightTheme ? webDarkTheme : webLightTheme
    ),
      console.log(currentTheme);
  }
  // Movimiento procesado
  const [showProcessedMovement, setShowProcessedMovement] = useState(false);
  const toggleComponenteProcessed = () => {
    setShowProcessedMovement(!showProcessedMovement);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseProcessed = () => {
    setShowProcessedMovement(!showProcessedMovement);
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
    setShowDiaryBox(!showDiaryBox);
    document.body.style.overflow = 'auto';
  };
  //Comprobantes de diario
  const [showJournalVouchers, setShowJournalVouchers] = useState(false);
  const toggleComponenteJournalVouchers = () => {
    setShowJournalVouchers(!showJournalVouchers);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseJournalVouchers = () => {
    setShowJournalVouchers(!showJournalVouchers);
    document.body.style.overflow = 'auto';
  };
  //Diario mayor
  const [showLedger, setShowLedger] = useState(false);
  const toggleComponenteLedger = () => {
    setShowLedger(!showLedger);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseLedger = () => {
    setShowLedger(!showLedger);
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