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

// const baseItems: Item[] = [
//     {
//         Fuente: { label: "Meeting notes", },
//         author: { label: "Max Mustermann", status: "available" },
//         lastUpdated: { label: "7h ago", timestamp: 1 },
//         lastUpdate: {
//             label: "You edited this",
//             icon: <EditRegular />,
//         },
//     },
//     {
//         Fuente: { label: "Thursday presentation", },
//         author: { label: "Erika Mustermann", status: "busy" },
//         lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
//         lastUpdate: {
//             label: "You recently opened this",
//             icon: <OpenRegular />,
//         },
//     },
//     {
//         Fuente: { label: "Training recording", },
//         author: { label: "John Doe", status: "away" },
//         lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
//         lastUpdate: {
//             label: "You recently opened this",
//             icon: <OpenRegular />,
//         },
//     },
//     {
//         Fuente: { label: "Purchase order", },
//         author: { label: "Jane Doe", status: "offline" },
//         lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
//         lastUpdate: {
//             label: "You shared this in a Teams chat",
//             icon: <PeopleRegular />,
//         },
//     },
// ];


import { useState } from 'react';

export function TableTercero() {
    // Array con más información para las filas
    const [data, setData] = useState([
        {
            id: 1,
            fuente: '01',
            Documento: '105475844',
            Detalle: 'Compra en almacenes',
            Debito: '$150.000',
            Credito: '$150.000',
            fecha: '01/02/2024',
        },
        {
            id: 2,
            fuente: '02',
            Documento: '202134567',
            Detalle: 'Compra en almacenes',
            Debito: '$150.000',
            Credito: '$150.000',
            fecha: '15/03/2024',
        },
        {
            id: 3,
            fuente: '03',
            Documento: '305678912',
            Detalle: 'Compra en almacenes',
            Debito: '$150.000',
            Credito: '$150.000',
            fecha: '28/04/2024',
        },
        {
            id: 4,
            fuente: '04',
            Documento: '305678912',
            Detalle: 'Compra en almacenes',
            Debito: '$150.000',
            Credito: '$150.000',
            fecha: '28/04/2024',
        },
        {
            id: 5,
            fuente: '05',
            Documento: '305678912',
            Detalle: 'Compra en almacenes',
            Debito: '$150.000',
            Credito: '$150.000',
            fecha: '28/04/2024',
        },
        {
            id: 6,
            fuente: '06',
            Documento: '305678912',
            Detalle: 'Compra en almacenes',
            Debito: '$150.000',
            Credito: '$150.000',
            fecha: '28/04/2024',
        },
        {
            id: 7,
            fuente: '07',
            Documento: '305678912',
            Detalle: 'Compra en almacenes',
            Debito: '$150.000',
            Credito: '$150.000',
            fecha: '28/04/2024',
        },
        {
            id: 8,
            fuente: '08',
            Documento: '305678912',
            Detalle: 'Compra en almacenes',
            Debito: '$150.000',
            Credito: '$150.000',
            fecha: '28/04/2024',
        },
        {
            id: 9,
            fuente: '09',
            Documento: '305678912',
            Detalle: 'Compra en almacenes',
            Debito: '$150.000',
            Credito: '$150.000',
            fecha: '28/04/2024',
        }
        // Puedes agregar más objetos al array con más datos de filas
    ]);

    return (
        <section className="">
            <div style={{ overflowY: 'auto' }} className="px-[2px]">
                <table className="w-full divide-y-[1px] divide-first text-center text-first">
                    <thead className="" style={{ backgroundColor: 'var(--colorNeutralStencil1Alpha)' }}>
                        <tr style={{ color: 'var(--colorNeutralForeground1)' }} className="z-40 top-0 text-[14px] ">
                            <th className="py-[7px] font-semibold text-center" style={{ width: '10%' }}>Fecha</th>
                            <th className="font-semibold text-center" style={{ width: '8%' }}>Fuente</th>
                            <th className="font-semibold text-center" style={{ width: '12%' }}>Documento</th>
                            <th className="font-semibold text-center" style={{ width: '25%' }}>Detalle del movimiento</th>
                            <th className="font-semibold text-center" style={{ width: '17%' }}>Movimiento Débito</th>
                            <th className="font-semibold text-center" style={{ width: '17%' }}>Movimiento Crédito</th>

                        </tr>
                    </thead>
                </table>
                <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
                    <table style={{ borderTopColor: 'var(--colorNeutralStroke2)' }} className="border-t-[1px] w-full divide-y-[1px] divide-first text-center text-first">
                        <tbody>
                            {data.map(row => (
                                <tr key={row.id} style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[35px] text-[12px] font-semibold border-b-[0.5px] w-full">
                                    <td className="text-end" style={{ width: '10%' }}>{row.fecha}</td>
                                    <td className="text-center" style={{ width: '8%' }}>{row.fuente}</td>
                                    <td className="text-start" style={{ width: '12%' }}>{row.Documento}</td>
                                    <td className="text-start" style={{ width: '25%' }}>{row.Detalle}</td>
                                    <td className="text-end" style={{ width: '17%' }}>{row.Debito}</td>
                                    <td className="text-end pr-[5px]" style={{ width: '17%' }}>{row.Credito}</td>

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