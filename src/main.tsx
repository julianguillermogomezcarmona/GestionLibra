import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  FluentProvider,
  teamsLightTheme,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FluentProvider>
    <App />
  </FluentProvider>
);
// import React, { useState } from "react";
// import SideBar from "./sidebar";
// import { Outlet } from "react-router-dom";
// import {
//   Button,
//   BrandVariants,
//   FluentProvider,
//   Theme,
//   createDarkTheme,
//   createLightTheme,
//   webDarkTheme,
//   webLightTheme,
// } from "@fluentui/react-components";

// export default function home() {
//   const [isReduced, setIsReduced] = useState(false);

//   const colors: BrandVariants = {
//       10: "#020304",
//   20: "#13191B",
//   30: "#1D292D",
//   40: "#25363B",
//   50: "#2C4349",
//   60: "#345058",
//   70: "#3C5E68",
//   80: "#436D77",
//   90: "#4B7B88",
//   100: "#548A98",
//   110: "#6498A6",
//   120: "#79A6B2",
//   130: "#8EB3BE",
//   140: "#A3C1C9",
//   150: "#B8CFD6",
//   160: "#CDDDE2"
//   };

//   const lightTheme: Theme = {
//     ...createLightTheme(colors),
//     colorBrandForeground1: colors[60],
//     colorBrandForeground2: colors[70],
//   };

//   const darkTheme: Theme = {
//     ...createDarkTheme(colors),
//     colorBrandForeground1: colors[60],
//     colorBrandForeground2: colors[70],
//   };
//   const [currentTheme, setCurrentTheme] = useState(lightTheme);

//   const toggleToDarkTheme = () => {
//     setCurrentTheme(darkTheme);
//   };

//   const toggleToLightTheme = () => {
//     setCurrentTheme(lightTheme);
//   };

//   return (
//     <FluentProvider theme={currentTheme}>
//       <main className="h-screen flex w-full p-[15px] gap-[15px] overflow-hidden items-center">
//         <section
//           className={`transition-all duration-1000 relative${
//             isReduced ? "w-18" : "w-[270px]"
//           } ${isReduced ? "h-[]" : " " && " "}`}
//         >
//           <SideBar
//             isReduced={isReduced}
//             toggleSidebarSize={() => setIsReduced(!isReduced)}
//           />
//           <div className="flex absolute top-0">
//             <Button className="" onClick={toggleToDarkTheme}>
//               Alternar Tema
//             </Button>
//             <Button className="" onClick={toggleToLightTheme}>
//               Alternar Tema
//             </Button>
//           </div>
//         </section>

//         <section className="w-full h-[100%]">
//           <Outlet />
//         </section>
//       </main>
//     </FluentProvider>
//   );
// }
