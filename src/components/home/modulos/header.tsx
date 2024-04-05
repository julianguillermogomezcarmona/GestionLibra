import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  makeStyles,
} from "@fluentui/react-components";
import { Link, } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav";
const useStyles = makeStyles({
  buton: {
    minWidth: "0",
  },
  switch: {
  },
  ".&width": {
    textWrap: "nowrap",
  },
});

export default function Header() {
  const styles = useStyles();
  return (
    <div className="header p-[12px]">
      <header className="w-full h-[8%] flex justify-between items-center ">
        <div className="flex font-bold items-center px-[10px]">
          <Link to={'/moduls'}>Modulos</Link>
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
              </MenuList>
            </MenuPopover>
          </Menu>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuButton
                className={styles.buton}
                size="small"
                appearance="primary"
                menuIcon={null}
              >
                J
              </MenuButton>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem className="text-[15px]">Documentación</MenuItem>
                <MenuItem>Soporte técnico</MenuItem>
                <MenuItem>Preferencias</MenuItem>
                <MenuItem>
                  <Link to={"/"}>
                    Cerar sesión
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
