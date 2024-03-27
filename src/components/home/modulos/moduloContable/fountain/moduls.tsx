import { Card, Checkbox } from "@fluentui/react-components";
import { useState } from "react";
import type { CheckboxProps } from "@fluentui/react-components";

export function Moduls() {
    // Estado inicial con un objeto donde cada clave es el nombre del módulo y su valor es el estado del checkbox
    const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>({});
    const moduls = [
        { name: 'Entradas de compras' }, { name: 'Devolución de consumos' }, { name: 'Devolución de comprás' }, { name: 'Mercancia en consignación' },
        { name: 'Remisión a sucursales' }, { name: 'Remisión a clientes' }, { name: 'Entrada de sucursal' }, { name: 'Facturación a clientes' },
        { name: 'Ajustes de inventario' }, { name: 'Devolución en ventas' }, { name: 'Traslados' }, { name: 'Recibos de caja' },
        { name: 'Consumos internos' }, { name: 'Notas de clientes' }, { name: 'Contabilidad' }, { name: 'Proveedores' }
    ]
    // Manejador de cambios para un checkbox específico
    const handleCheckboxChange = (moduleName: string, isChecked: boolean) => {
        setCheckedState(prevState => ({
            ...prevState,
            [moduleName]: isChecked // Actualizar el estado solo para el módulo seleccionado
        }));
    };
    return (
        <Card>
            <div>
                <h3 className="font-semibold">Modulos a los que pertenece</h3>
                <div className="grid grid-cols-2 py-[19px]">
                    {moduls.map(item => (
                        <Checkbox
                            key={item.name}
                            checked={checkedState[item.name] || false} // Estado del checkbox para el módulo actual
                            onChange={(ev, data) => handleCheckboxChange(item.name, !!data?.checked)} // Manejador de cambios
                            label={item.name}
                            className="label font-bold"
                        />
                    ))}
                </div>
            </div>
        </Card>
    )
}