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
export default function home() {
  const [isReduced, setIsReduced] = useState(false);
  // const { theme } = useThemeContext();
  // const [currentTheme, setCurrentTheme] = useState(theme);
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
  return (
    <FluentProvider theme={webDarkTheme}>
      <main className="h-screen flex w-full p-[15px] gap-[15px] overflow-hidden items-center">
        <section
          className={` transition-all duration-1000 ${
            isReduced ? "w-18" : "w-[270px]"
          } ${isReduced ? "h-[]" : "h-[100%] " && ""}`}
        >
          <SideBar
            isReduced={isReduced}
            toggleSidebarSize={() => setIsReduced(!isReduced)}
          />
          <div className="flex absolute top-0">
            {/* <Switch></Switch> */}
            {/* <Button className="" onClick={toggleToDarkTheme}>
              Alternar Tema
            </Button>
             <Button className="" onClick={toggleToLightTheme}>
              Alternar Tema
           </Button> */}
          </div>
        </section>

        <section className="w-full h-[100%] ">
          <Outlet />
        </section>
      </main>
    </FluentProvider>
  );
}
