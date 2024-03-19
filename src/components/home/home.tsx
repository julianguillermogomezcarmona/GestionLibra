import React, { useEffect, useState } from "react";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";
import { useThemeContext, ThemeProvider } from "../../contex/themeContext";
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
import Header from "./header/header";
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
  // const currentWebTheme =
  //   currentTheme === "light" ? webLightTheme : webDarkTheme;
  // useEffect(() => {
  //   // Actualizar el estado del tema cuando cambie el tema del contexto
  //   setCurrentTheme(theme);
  // }, [theme]);
  // const { theme, setTheme } = useThemeContext();
  // const toggleTheme = () => {
  //   // Toggle between "light" and "dark" themes
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };
  // const currentTheme = theme === "dark" ? webDarkTheme : webLightTheme;
  // const toggleComponente = () => {
  //   cambiarTema()
  //   setCurrentTheme(!currentTheme);
  // };

  return (
    <FluentProvider theme={currentTheme} className="">
      <section className="flex flex-col h-screen">
        <div>
          <Header showModal={cambiarTema}></Header>
        </div>
        <main className="h-screen my-[15px] flex w-full  gap-[15px] overflow-hidden">
          <section
            className={` transition-all duration-1000 ${
              isReduced ? "w-18" : "w-[270px]"
            } ${isReduced ? "h-[]" : "h-[100%] " && ""}`}
          >
            <SideBar
              isReduced={isReduced}
              toggleSidebarSize={() => setIsReduced(!isReduced)}
            />
            <div className="flex absolute top-0"></div>
          </section>

          <section className="w-full h-[100%] ">
            <Outlet />
          </section>
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