import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
  makeStyles,
} from "@fluentui/react-components";
import { useState } from "react";
import {
  faCalculator,
  faCircleQuestion,
  faComputer,
  faFileInvoice,
  faFileInvoiceDollar,
  faMoneyBillTrendUp,
  faReceipt,
  faCartFlatbed,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./acordeon.css";
import { Link } from "react-router-dom";
import { LineHorizontal120Regular } from "@fluentui/react-icons";
const useStyles = makeStyles({
  wrapper: {
    // columnGap: "15px",
    // display: "flex",
    // flexDirection: "column",
  },
  buton: {
    display: "flex",
    flexDirection: "column",
    // '&.buton': { padding:'7px 5px'},
    margingLeft: "0px",
    margingRight: "0px",
  },
  opcion: {
    paddingTop: "7px",
  },
  menu: {
    display: "flex",
    alignContent: "start",
    height: "25px",
    alignItems: "center",
    width: "100%",
  },
});

export function Acordeon() {
  // const [menuAbierto, setMenuAbierto] = useState(false);
  // const onToggle = () => {
  //   setMenuAbierto(!menuAbierto);
  // };
  const titulosMenus = [
    "Sistema",
    "Inventario",
    "Cuenta x Cobrar",
    "Cuenta x Pagar",
    "Contabilidad",
    "Informes",
    "Ventas",
    "Ayuda",
  ];
  const rutasMenus = [
    [
      "general_tables",
      "article",
      "system_branch_offices",
      "customers",
      "suppliers",
      "account_plan",
      "accounting_policies",
      "revelations",
    ],
    [
      "orderandimport",
      "commodity",
      "branch_office",
      "store",
      "physica_inventory",
      "motion_panel",
      "inventory_deterioration",
    ],
    [
      "receipts",
      "notes_wallet",
      "checks",
      "interest_settlement",
      "folido_deterioration",
    ],

    ["transations", "check_issuance"],

    [
      "transations_accounting",
      "check_issuance_accounting",
      "reclassify",
      "conciliationt",
      "accounting_extraction",
      "external_movement_accounting",
      "accounting_niif",
    ],
    [
      "inventory_reports",
      "sales_reports",
      "receivable_reports",
      "account_x_pay_reports",
      "accounting_reports",
    ],
    [
      "orders_and_Price",
      "consignament",
      "ferrals_to_Clients",
      "billing",
      "consolidate",
      "automatic_invoices",
      "extractions",
      "external_movement",
    ],
    [
      "license_agreement",
      "help_topics",
      "about",
      "system_information",
      "register_software",
    ],
  ];
  const iconos = [
    faComputer,
    faCartFlatbed,
    faFileInvoice,
    faFileInvoiceDollar,
    faCalculator,
    faReceipt,
    faMoneyBillTrendUp,
    faCircleQuestion,
  ];
  const opcionesMenus = [
    [
      "Tablas generales",
      "Articulos",
      "Sucursales",
      "Clientes",
      "Proveedores",
      "Plan de cuentas",
      "Politicas contables",
      "Revelaciones",
    ],
    [
      "Orden de compra e importaciones",
      "Manejo de mercancias",
      " Inventarios de sucursales",
      "Ajustes y movimientos en bodegas",
      "Toma fisica de inventario",
      "Panel de movimiento de productos",
      " Deterioro de inventarios",
    ],
    [
      "Recibos de caja",
      "Notas de cartera",
      "Cheques posfechados",
      "Liquidación de intereses",
      "Deterioro de cartera",
    ],
    ["Transacciones", "Emisiones de cheques"],
    [
      "Transacciones",
      "Emisiones de cheques",
      "Reclasificar terceros",
      "Consiliación",
      "Extracción de movimientos a excel",
      "Movimiento externo",
      "Contabilidad NIIF",
    ],
    [
      "Informes de Inventarios",
      "Informes de Ventas",
      "Informes de cuentas x cobrar",
      "Informes de cuentas x pagar",
      "Informes de contabilidad",
    ],
    [
      "Cotizaciones y pedidos de clientes",
      " Mercancia en consignación",
      "Devolución y Remisiones clientes",
      "Facturación",
      "Devoluciones",
      "Generaciónn de facturas automaticas",
      "Extracción de movimiento de ventas",
      "Movimiento externo",
    ],
    [
      "Contrato de licencia",
      "Temas de ayuda",
      " Acerca de",
      "Información del sistema",
      "Registrar Serial del Software",
    ],
  ];
  const [menusAbiertos, setMenusAbiertos] = useState(
    Array(titulosMenus.length).fill(false)
  );
  const toggleMenu = (index: number) => {
    const nuevosMenusAbiertos = menusAbiertos.map((estado, i) =>
      i === index ? !estado : false
    );
    setMenusAbiertos(nuevosMenusAbiertos);
  };
  const styles = useStyles();
  return (
    <Accordion
      className={`snap-y h-[80%] w-full overflow-y-scroll custom-scrollbar  ${styles.wrapper}`}
      collapsible
      navigation="circular"
    >
      {titulosMenus.map((titulo, index) => (
        <AccordionItem
        key={index}
          className="mi-accordion-item"
          value={index}
          onClick={() => toggleMenu(index)}
        >
          <Button appearance="subtle" className="h-[50%]" size="small">
            <AccordionHeader
              // expanded={menuAbierto}
              className={styles.menu}
              // className="hover:bg-[#f0f0f0] rounded-[15px] hover:font-semibold"
              expandIconPosition="end"
              size="small"
            >
              <FontAwesomeIcon
                className="text-1 text-[16px] pr-[5px]"
                icon={iconos[index]}
              ></FontAwesomeIcon>
              <p
                className={`${
                  menusAbiertos[index] ? "font-bold" : "font-semibold"
                } w-full text-start py-[5px]  text-[13px]`}
                // className=""
              >
                {titulo}
              </p>
            </AccordionHeader>
          </Button>
          <AccordionPanel className="buton">
            {opcionesMenus[index].map((opcion, opcionIndex) => {
              // const rutaBase = rutasMenus[index];
              return (
                <Link
                  className=""
                  key={opcionIndex}
                  to={`${rutasMenus[index][opcionIndex]}`}
                >
                  <Button size="medium" className="buton" appearance="subtle">
                    {opcion}
                  </Button>
                </Link>
                //    <Link to={`/${titulosMenus[index]}/${opcion}`}>
                //    {opcion.replace(/_/g, ' ')}
                //  </Link>
              );
            })}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
