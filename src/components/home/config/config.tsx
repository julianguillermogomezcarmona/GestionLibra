import { Card, Button } from "@fluentui/react-components";
import { useThemeContext } from "../../../contex/themeContext";

export function config() {
  //   const { setTheme, theme } = useThemeContext();
//   function cambiar(){
//     if (theme == "light") {
//         setTheme("dark");
//       }
//       if (theme == "dark") {
//         setTheme("light");
//       }
//   }
  return (
    <Card className="h-[95%] w-full flex items-start justify-start">
      <h2 className="font-bold">Configuración</h2>
      <div>
        <Button >Cambiar Tema</Button>
      </div>
    </Card>
  );
}
