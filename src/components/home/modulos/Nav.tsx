import { ToggleButton, Button, MenuButton, MenuTrigger, MenuItem, Menu, MenuPopover, MenuList } from "@fluentui/react-components"
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
export function NavContable() {
  const nav = [
    { text: 'Transacciones', route: 'transacciones' },
    { text: 'Extracción de movimientos', route: 'transacciones' },
    { text: 'Movimiento externo', route: 'transacciones' },
  ]
  const nav2 = [
    {
      id: '1', text: 'Contabilidad NIIF', option: [{ name: 'Generar movimiento contable', route: 'ruta' }, { name: 'Leer movimiento externo', route: 'ruta' }]
    },
    { id: '2', text: 'Reclasificar terceros', option: [{ name: 'Transacciones NIIIF', route: 'ruta' }, { name: 'Transacciones ESFA', route: 'ruta' }] },
    { id: '3', text: 'Informes', option: [{ name: 'Movimiento procesado', route: 'ruta' }, { name: 'Anexos', route: 'ruta' }, { name: 'Auxiliares', route: 'ruta' }, { name: 'Libro diario legal', route: 'ruta' }, { name: 'Libro mayor legal', route: 'ruta' }, { name: 'Comprobantes de diario', route: 'ruta' }, { name: 'Caja diario', route: 'ruta' }, { name: 'Libro de inventario y balance', route: 'ruta' }, { name: 'Estados financiero', route: 'ruta' }, { name: 'Foliadores de libro', route: 'ruta' }, { name: 'Impresión certificador', route: 'ruta' },] }
  ]
  return (
    <nav>
      <div className="flex items-center">
        {nav.map((item, index) => (
          <ToggleButton appearance="subtle" size="small" className=" flex gap-1">
            {/* <FontAwesomeIcon icon={faMoneyBill} className="text-1"></FontAwesomeIcon> */}
            <Link key={index} to={`/${item.route}`} className="truncate font-semibold text-start">
              {item.text}
            </Link>
          </ToggleButton>
        ))}
        {nav2.map((item, index) => (
          <Menu key={index}>
            <MenuTrigger>
              <MenuButton key={item.id} appearance="subtle" size="small" className="flex gap-1 font-bold text-start">
                <p className="font-semibold">
                  {item.text}
                </p>
              </MenuButton>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                {item.option.map((option, i) => (
                  <Button size="small" appearance="subtle" key={i}>
                    <Link to={`/${option.route}`} className="w-full text-start truncate font-semibold ">
                      {option.name}
                    </Link>
                  </Button>
                ))}
              </MenuList>
            </MenuPopover>
          </Menu>
          //    <Menu>
          //    <MenuTrigger disableButtonEnhancement>
          //      <MenuButton
          //        appearance="transparent"
          //        menuIcon={null}
          //        className={styles.buton}>
          //        <FontAwesomeIcon
          //          className="text-[20px]"
          //          icon={faCircleInfo}
          //        ></FontAwesomeIcon>
          //      </MenuButton>
          //    </MenuTrigger>
          //    <MenuPopover>
          //      <MenuList>
          //        <MenuItem>Contrato de Licencia</MenuItem>
          //        <MenuItem>Acerca de</MenuItem>
          //        {/* <MenuItem>Información del sistema</MenuItem> */}
          //      </MenuList>
          //    </MenuPopover>
          //  </Menu>
        ))}
      </div>
    </nav>
  )
}