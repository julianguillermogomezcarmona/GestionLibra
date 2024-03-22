import {
  Card,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  makeStyles,
  Switch,
} from "@fluentui/react-components";
import { Link, } from "react-router-dom";
import { unstable_HistoryRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBox } from "@fluentui/react-search-preview";
import {
  faCircleInfo,
  faQuestion,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { QuestionCircle48Regular } from "@fluentui/react-icons";
import "./Nav";
import { NavContable } from "./Nav";
import { useState } from "react";
type toggleProps = {
  toggleSidebar?: () => void;
};
const useStyles = makeStyles({
  buton: {
    minWidth: "0",
  },
  switch: {
    //  ":root":
  },
  ".&width": {
    textWrap: "nowrap",
  },
});
type modalProp = {
  showModal?: () => void;

};
export default function Header({ showModal }: modalProp) {
  const styles = useStyles();
  const [darkMode, setDarkMode] = useState(false); // Estado del modo oscuro

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode); // Cambiar el estado del modo oscuro
  };
  // const { theme } = useThemeContext();
  // const { setTheme, theme } = useThemeContext();
  //
  // function handleCloset() {
  //   showModal();
  // }
  return (
    <div className="header p-[12px]">
      <header className="w-full h-[8%] flex justify-between items-center ">
        <div className="flex font-bold items-center px-[10px]">
          <Link to={'/moduls'}>Modulos</Link>
          {/* <button onClick={handleClick}>h</button> */}
        </div>
        <div className="font-bold flex items-center gap-2">
          <h2 className="">Usuario02</h2>
          <h2 className="">ContableCosta</h2>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuButton
                appearance="transparent"
                menuIcon={null}
                className={styles.buton}>
                <FontAwesomeIcon
                  className="text-[20px]"
                  icon={faCircleInfo}
                ></FontAwesomeIcon>
              </MenuButton>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>Contrato de Licencia</MenuItem>
                <MenuItem>Acerca de</MenuItem>
                {/* <MenuItem>Información del sistema</MenuItem> */}
              </MenuList>
            </MenuPopover>
          </Menu>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuButton
                className={styles.buton}
                size="small"
                appearance="primary"
                // icon={<QuestionCircle48Regular />}
                menuIcon={null}
              >
                J
              </MenuButton>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem className="text-[15px]">Documentación</MenuItem>
                <MenuItem>Soporte técnico</MenuItem>
                {/* <Switch
                  checked={darkMode} // Estado del modo oscuro
                  onChange={handleDarkModeToggle} // Manejador del cambio de estado del modo oscuro
                  onClick={showModal}
                  className="w-full switch"
                  labelPosition="before"
                  style={{ maxWidth: "400px" }}
                  label="Tema oscuro"
                /> */}
                <MenuItem>Preferencias</MenuItem>
                <MenuItem>
                  <Link to={"/"}>
                    Cerar sesión
                    {/* <FontAwesomeIcon icon={faRightFromBracket} /> */}
                  </Link>
                </MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
      </header>
    </div>
  );
}
