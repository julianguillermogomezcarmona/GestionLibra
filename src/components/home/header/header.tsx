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
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBox } from "@fluentui/react-search-preview";
import {
  faCircleInfo,
  faQuestion,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { QuestionCircle48Regular } from "@fluentui/react-icons";
import "./Nav";
type toggleProps = {
  toggleSidebar?: () => void;
};
const useStyles = makeStyles({
  buton: {
    textWrap: "nowrap",
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
  // const { theme } = useThemeContext();
  // const { setTheme, theme } = useThemeContext();
  //
  // function handleCloset() {
  //   showModal();
  // }
  return (
    <Card>
      <header className="w-full h-[10%] flex justify-between items-center ">
        <div className="flex">
          <figure className="flex items-center gap-[10px] px-[15px] justify-between text-1">
            <Link to={"/home"}>
              <img className="h-[35px]" src="/public/logo.svg" alt="logo" />
            </Link>
          </figure>
          {/* <SearchBox
            appearance="filled-lighter"
            className="w-[200px] "
            placeholder="Buscador"
          /> */}
        </div>
        <div className="flex items-center gap-3">
          <h2 className="font-bold">Usuario02</h2>
          <h2 className="font-bold">ContableCosta</h2>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuButton
                appearance="transparent"
                // icon={<QuestionCircle48Regular />}
                menuIcon={null}
                className={styles.buton}
              >
                {" "}
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
                appearance="primary"
                // icon={<QuestionCircle48Regular />}
                menuIcon={null}
              >
                J
              </MenuButton>
            </MenuTrigger>

            <MenuPopover>
              <MenuList>
                <MenuItem>Documentación</MenuItem>
                <MenuItem>Soporte técnico</MenuItem>
                <Switch
                  onClick={showModal}
                  className="w-full switch"
                  // input={}
                  // indicator={`${className={}}`}
                  labelPosition="before"
                  // onChange={onChange}
                  // checked={checked}
                  style={{ maxWidth: "400px" }}
                  label="Tema oscuro"
                />

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
    </Card>
  );
}
