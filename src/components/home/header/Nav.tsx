import {
  Menu,
  MenuButton,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  makeStyles,
} from "@fluentui/react-components";

import { faCartFlatbed, faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.css";
import { CalendarMonth20Filled } from "@fluentui/react-icons";

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
  },
});

export function Sistema() {
  const styles = useStyles();
  return (
    <section className="w-full h-[100%] justify-center flex ">
      <div className={styles.wrapper}>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuButton
              className="px-[10px]"
              appearance="transparent"
              icon={<CalendarMonth20Filled />}
            >
              Sistema
            </MenuButton>
          </MenuTrigger>

          <MenuPopover className="">
            <MenuList className="text-[11px]">
              <MenuItem className="text-[11px]">Tablas Generales </MenuItem>
              <MenuItem>Articulos</MenuItem>
              <MenuItem>Tablas generales</MenuItem>
              <MenuItem>Sucursales</MenuItem>
              <MenuItem className="">Clientes</MenuItem>
              <MenuItem className="">Proveedores</MenuItem>
              <MenuItem className="">Plan de cuentas</MenuItem>
              <MenuItem className="">Politicas contables</MenuItem>
              <MenuItem className="">Revelaciones</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>

        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuButton
              className="px-[10px]"
              appearance="transparent"
              icon={<CalendarMonth20Filled />}
            >
              Subtle
            </MenuButton>
          </MenuTrigger>

          <MenuPopover className="">
            <MenuList className="text-[11px]">
              <MenuItem className="text-[11px]">Tablas Generales </MenuItem>
              <MenuItem>Articulos</MenuItem>
              <MenuItem>Tablas generales</MenuItem>
              <MenuItem>Sucursales</MenuItem>
              <MenuItem className="">Clientes</MenuItem>
              <MenuItem className="">Proveedores</MenuItem>
              <MenuItem className="">Plan de cuentas</MenuItem>
              <MenuItem className="">Politicas contables</MenuItem>
              <MenuItem className="">Revelaciones</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>
    </section>
  );
}

export function Inventarios() {
  return (
    <section className="w-full h-[100%] justify-center flex items-center">
      <div className="w-full">
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuButton appearance="primary" className="w-[90%] menu">
              <FontAwesomeIcon
                className="text-1"
                icon={faCartFlatbed}
              ></FontAwesomeIcon>
              Inventarios
            </MenuButton>
          </MenuTrigger>

          <MenuPopover className="">
            <MenuList className="">
              <MenuItem className="boton">
                Orden de compra e importaciones{" "}
              </MenuItem>
              <MenuItem className="boton">Manejo de mercancias</MenuItem>
              <MenuItem className="boton">Inventarios de sucursales</MenuItem>
              <MenuItem className="boton">
                Ajustes y movimientos entre bodegas
              </MenuItem>
              <MenuItem className="boton">Toma física de inventari</MenuItem>
              <MenuItem className="boton">
                Panel de movimiento de productos
              </MenuItem>
              <MenuItem className="boton">Deterioro de inventarios</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>
    </section>
  );
}

// <Menu title="Sistema" opcion="Tablas Generales"></Menu>
//         <Menu title="Inventarios" opcion="Tablas Generales"></Menu>
//         <Menu title="Ventas" opcion="Tablas Generales"></Menu>
//         <Menu title="Cuentas x Cobrar" opcion="Tablas Generales"></Menu>
//         <Menu title="Cuentas x Pagar" opcion="Tablas Generales"></Menu>
//         <Menu title="Contabilidad" opcion="Tablas Generales"></Menu>
//         <Menu title="Informes" opcion="Tablas Generales"></Menu>
//         <Menu title="Utilidades" opcion="Tablas Generales"></Menu>
//         <Menu title="Ayuda" opcion="Tablas Generales"></Menu> }
