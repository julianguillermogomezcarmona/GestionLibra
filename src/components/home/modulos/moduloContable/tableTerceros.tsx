import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import {
    FolderRegular,
    EditRegular,
    OpenRegular,
    DocumentRegular,
    PeopleRegular,
    DocumentPdfRegular,
    VideoRegular,
    Eye12Filled,
    Delete12Filled,
    Edit12Filled,
} from "@fluentui/react-icons";
import './style.css'
import {
    PresenceBadgeStatus,
    Avatar,
    useScrollbarWidth,
    useFluent,
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCellLayout,
    TableSelectionCell,
    createTableColumn,
    useTableFeatures,
    useTableSelection,
    TableRowData as RowStateBase,
    Button,
} from "@fluentui/react-components";
import { useCallback } from "react";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
// import './component.css'

import { useState } from 'react';

export function TableTerceros() {
    // Array con más información para las filas
    const [data, setData] = useState([
        {
            id: 1,
            codigo: '01sd485',
            documento: '105475844',
            name: 'Luis Perez Sanches',
        },
        {
            id: 2,
            codigo: '01sd485',
            documento: '202134567',
            name: 'Alfredo Lopez Arco',
        },
        {
            id: 3,
            codigo: '01sd485',
            documento: '305678912',
            name: 'Juan Andrade Suares',
        },
        {
            id: 4,
            codigo: '01sd485',
            documento: '305678912',
            name: 'Felipe Cebolla Argumedo',
        },
        {
            id: 5,
            codigo: '01sd485',
            documento: '305678912',
            name: 'Pedro Diaz Mercado',
        },
        {
            id: 6,
            codigo: '01sd485',
            documento: '305678912',
            name: 'Jesús Toledo Arias',
        },
        {
            id: 7,
            codigo: '01sd485',
            documento: '305678912',
            name: 'Tomás Valle Rangel',
        },
        {
            id: 8,
            codigo: '01sd485',
            documento: '305678912',
            name: 'Carlos Castellón Castillo',
        },
        {
            id: 9,
            codigo: '01sd485',
            documento: '305678912',
            name: 'Sebastían Lopez Llanos',
        },
        {
            id: 9,
            codigo: '01sd485',
            documento: '305678912',
            name: 'Sofia Agamez Ramos',
        }
        // Puedes agregar más objetos al array con más datos de filas
    ]);

    return (
        <section className="px-[px]">
            <div style={{ overflowY: 'auto' }} className="px-[2px]">
                <table className="w-full divide-y-[1px] divide-first text-center text-first">
                    <thead className="" style={{ backgroundColor: 'var(--colorNeutralStencil1Alpha)' }}>
                        <tr style={{ color: 'var(--colorNeutralForeground1)' }} className="z-40 top-0 text-[14px] ">
                            <th className="py-[7px] font-semibold text-center" style={{ width: '8%' }}>Codigo</th>
                            <th className="font-semibold text-center" style={{ width: '9%' }}>Documento</th>
                            <th className="font-semibold text-center" style={{ width: '24%' }}>Nombre de tercero</th>
                            <th className="font-semibold text-center" style={{ width: '20%' }}>Acciones</th>
                        </tr>
                    </thead>
                </table>
                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <table style={{ borderTopColor: 'var(--colorNeutralStroke2)' }} className="border-t-[1px] w-full divide-y-[1px] divide-first text-center text-first">
                        <tbody>
                            {data.map(row => (
                                <tr key={row.id} style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[35px] text-[12px] font-semibold border-b-[0.5px] w-full">
                                    <td className="text-end" style={{ width: '10%' }}>{row.codigo}</td>
                                    <td className="text-center" style={{ width: '15%' }}>{row.documento}</td>
                                    <td className="text-start" style={{ width: '24%' }}>{row.name}</td>
                                    <td className="text-end" style={{ width: '12%' }}>
                                        <div className="flex justify-around w-full">
                                            <Button className="table1" icon={<Eye12Filled />}></Button>
                                            <Button className="table2" icon={<Delete12Filled />}></Button>
                                            <Button className="table3" icon={<Edit12Filled />}></Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );

    // Función para manejar el clic en los botones de acción
    // const handleButtonClick = (id, action) => {
    //     // Aquí puedes implementar la lógica para manejar el clic en los botones, por ejemplo, abrir un modal, eliminar la fila, etc.
    //     console.log(`Botón "${action}" clickeado para la fila con ID ${id}`);
    // };
}