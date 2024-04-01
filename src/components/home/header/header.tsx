import {
  Card,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  makeStyles,
  Button,
  TabList,
  Tab,
  ToggleButton,
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
  root: {
    // alignItems: "flex-start",
    display: "flex",
    // justifyContent: "flex-start",
    // ...shorthands.padding("50px", "20px"),
    rowGap: "5px",
  },
});
type modalProp = {
  showProcessed?: () => void;
  showModal?: () => void;
  showDiaryBook?: () => void;
  showDiaryBox?: () => void;
  showJournalVouchers?: () => void;
  showLedger?: () => void;
};
export default function Header({ showLedger, showProcessed, showDiaryBox, showModal, showDiaryBook, showJournalVouchers }: modalProp) {
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
  const nav = [
    { text: 'Transacciones', route: 'transation', },
    { text: 'Fuentes', route: 'fountain' },
    { text: 'Reclasificar terceros', route: 'third_party_reclassification', },
    { text: 'Extracción de movimientos', route: 'extraction', },
  ]
  const nav2 = [
    {
      id: '1', text: 'Movimiento externo', option: [{ name: 'Generar movimiento contable', route: 'ruta' }, { name: 'Leer movimiento externo', route: 'ruta' }]
    },
    { id: '2', text: 'Contabilidad NIIF', option: [{ name: 'Transacciones NIIIF', route: 'ruta' }, { name: 'Transacciones ESFA', route: 'ruta' }] },
  ]
  const nav3 = [
    { id: '1', text: 'Informes', option: [{ name: 'Movimiento procesado', route: 'processed_movement', funtion: showProcessed }, { name: 'Anexos', route: 'ruta', funtion: showProcessed }, { name: 'Auxiliares', route: 'ruta', funtion: showProcessed }, { name: 'Libro diario legal', route: 'ruta', funtion: showDiaryBook }, { name: 'Libro mayor legal', route: 'ruta', funtion: showLedger }, { name: 'Comprobantes de diario', route: 'ruta', funtion: showJournalVouchers }, { name: 'Caja diario', route: 'ruta', funtion: showDiaryBox }, { name: 'Libro de inventario y balance', route: 'ruta', funtion: showProcessed }, { name: 'Estados financiero', route: 'ruta', funtion: showProcessed }, { name: 'Foliadores de libro', route: 'ruta', funtion: showProcessed }, { name: 'Impresión certificador', route: 'ruta', funtion: showProcessed },] }
  ]
  return (
    <Card className="header top-0 w-full">
      <header className="w-full h-[8%] flex  items-center ">
        <div className="flex items-center w-full">
          <figure className="flex h-[100%] items-center gap-[10px] px-[15px] justify-between ">
            <Link to={"/moduls"} className="relative font-semibold flex  text text-[19px]">
              {/* <img className="h-[35px]" src="/public/logo.svg" alt="logo" /> */}
              <img className="h-6" src="/public/escribiendo.svg" alt="icono" />

              Contabilidad
            </Link>
          </figure>
          {/* <NavContable></NavContable> */}
          <nav className="flex items-center">
            <div className={`  ${styles.root}`}>

              <TabList defaultSelectedValue="">
                {nav.map((item, index) => (
                  <Link to={item.route} key={index} className=" flex  text-[11px]">
                    <Tab className="font-simbold tab" value={item.text}>

                      {/* <FontAwesomeIcon icon={faMoneyBill} className="text-1"></FontAwesomeIcon> */}

                      <span key={index} className="truncate font-semibold text-start text-[12px]">
                        {item.text}
                      </span>
                    </Tab>
                  </Link>

                ))}
                {/* <Tab onClick={() => setActiveTab("Datos_basicos")} className="font-simbold tab" value="Datos_basicos">Datos Básicos</Tab>
                  <Tab onClick={() => setActiveTab("Modulos")} className="font-simbold tab" value="Modulos">Módulos</Tab> */}
              </TabList>


              {nav2.map((item, index) => (
                <Menu key={index}>
                  <MenuTrigger>
                    <MenuButton key={item.id} appearance="subtle" style={{ fontSize: '12px', fontWeight: '600' }} className="flex gap-1  text-start">
                      <p className="font-semibold">
                        {item.text}
                      </p>
                    </MenuButton>
                  </MenuTrigger>
                  <MenuPopover>
                    <MenuList>
                      {item.option.map((option, i) => (
                        <Button size="small" appearance="subtle" key={i}>
                          <Link to={`${option.route}`} className="w-full text-start truncate font-semibold ">
                            {option.name}
                          </Link>
                        </Button>
                      ))}
                    </MenuList>
                  </MenuPopover>
                </Menu>

              ))}
              {/* nav3 */}
              {nav3.map((item, index) => (
                <Menu key={index}>
                  <MenuTrigger>
                    <MenuButton key={item.id} appearance="subtle" style={{ fontSize: '12px', fontWeight: '600' }} className="flex gap-1  text-start">
                      <p className="font-semibold">
                        {item.text}
                      </p>
                    </MenuButton>
                  </MenuTrigger>
                  <MenuPopover>
                    <MenuList>
                      {item.option.map((option, i) => (
                        <Button onClick={option.funtion} size="small" appearance="subtle" key={i}>
                          <span className="w-full text-start truncate font-semibold  ">
                            {option.name}
                          </span>
                        </Button>
                      ))}
                    </MenuList>
                  </MenuPopover>
                </Menu>

              ))}
            </div>
          </nav>
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
                <Switch
                  checked={darkMode} // Estado del modo oscuro
                  onChange={handleDarkModeToggle} // Manejador del cambio de estado del modo oscuro
                  onClick={showModal}
                  className="w-full switch"
                  labelPosition="before"
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
