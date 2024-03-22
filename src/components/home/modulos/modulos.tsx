import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import { useThemeContext, ThemeProvider } from "../../contex/themeContext";
// import { FluentProvider } from "@fluentui/react-components";
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
import Header from "./header";
import Lobby from "./lobby";
export default function contableModul() {
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


  return (
    <FluentProvider theme={webDarkTheme} className="">
      <section className="flex flex-col h-screen bg-login">
        <div>
          <Header showModal={cambiarTema}></Header>
        </div>
        <main className="h-screen px-[30px] py-[55px] flex w-full flex-col  gap-[50px] overflow-hidden">
          {/* <h2 className="font-bold text-[40px]">Mis modulos</h2> */}
          {/* <h2 className="font-bold text-[25px] text-center">Mis modulos</h2> */}
          <Lobby></Lobby>
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