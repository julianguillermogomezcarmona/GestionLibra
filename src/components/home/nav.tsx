import { ToggleButton } from "@fluentui/react-components"
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
export function NavContable() {
    const nav = [
        { text: 'Transacciones', route: 'transacciones' },
        { text: 'Extracción de movimientos', route: 'transacciones' },
        { text: 'Movimiento externo', route: 'transacciones' },
        { text: 'Contabilidad NIIF', route: 'transacciones' },
        { text: 'Reclasificar terceros', route: 'transacciones' },
        { text: 'Informes', route: 'transacciones' },
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
            </div>
        </nav>
    )
}