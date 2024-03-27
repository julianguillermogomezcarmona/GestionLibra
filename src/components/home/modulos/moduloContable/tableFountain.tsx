// import { FixedSizeList as List, ListChildComponentProps } from "react-window";
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
import { useCallback, useState } from "react";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
// import './component.css'
export function TableFountain() {
    // Array con más información para las filas
    const [data, setData] = useState([
        {
            id: 1,
            codigo: '04',
            numeroDocumento: '105475844',
            fecha: '01/02/2024',
            nombreFuente: 'Organización sin fines de lucro'
        },
        {
            id: 2,
            codigo: '02',
            numeroDocumento: '202134567',
            fecha: '15/03/2024',
            nombreFuente: 'Empresa XYZ'
        },
        {
            id: 3,
            codigo: '03',
            numeroDocumento: '305678912',
            fecha: '28/04/2024',
            nombreFuente: 'Asociación de Voluntarios'
        },
        {
            id: 4,
            codigo: '04',
            numeroDocumento: '305678912',
            fecha: '28/04/2024',
            nombreFuente: 'Asociación de Voluntarios'
        },
        {
            id: 5,
            codigo: '05',
            numeroDocumento: '305678912',
            fecha: '28/04/2024',
            nombreFuente: 'Asociación de Voluntarios'
        },
        {
            id: 6,
            codigo: '04',
            numeroDocumento: '305678912',
            fecha: '28/04/2024',
            nombreFuente: 'Asociación de Voluntarios'
        },
        {
            id: 7,
            codigo: '08',
            numeroDocumento: '305678912',
            fecha: '28/04/2024',
            nombreFuente: 'Asociación de Voluntarios'
        },
        {
            id: 8,
            codigo: '06',
            numeroDocumento: '305678912',
            fecha: '28/04/2024',
            nombreFuente: 'Asociación de Voluntarios'
        },
        {
            id: 9,
            codigo: '09',
            numeroDocumento: '305678912',
            fecha: '28/04/2024',
            nombreFuente: 'Asociación de Voluntarios'
        }
        // Puedes agregar más objetos al array con más datos de filas
    ]);
    const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'ascending' | 'descending' }>({ key: '', direction: 'ascending' });

    const handleSort = (key: string) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = [...data].sort((a, b) => {
        if (sortConfig.direction === 'ascending') {
            return a.codigo.localeCompare(b.codigo);
        } else {
            return b.codigo.localeCompare(a.codigo);
        }
    });


    return (
        <section className="px-[px]">
            <div style={{ overflowY: 'auto' }} className="px-[2px]">
                <table className="w-full divide-y-[1px] divide-first text-center text-first">
                    <thead className="px-[10px]" style={{ backgroundColor: 'var(--colorNeutralStencil1Alpha)' }}>
                        <tr style={{ color: 'var(--colorNeutralForeground1)' }} className="z-40 top-0 text-[14px] ">
                            <th className="py-[7px] font-semibold text-center cursor-pointer" style={{ width: '4%' }} onClick={() => handleSort('codigo')}>Codigo</th>
                            <th className="font-semibold text-center" style={{ width: '25%' }}>Nombre de la fuente</th>
                            <th className="font-semibold text-center" style={{ width: '15%' }}>Acciones</th>
                        </tr>
                    </thead>
                </table>
                <div style={{ maxHeight: '270px', overflowY: 'auto' }}>
                    <table style={{ borderTopColor: 'var(--colorNeutralStroke2)' }} className="border-t-[1px] w-full divide-y-[1px] divide-first text-center text-first">
                        <tbody>
                            {sortedData.map(row => (
                                <tr key={row.id} style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[35px] text-[12px] font-semibold border-b-[0.5px]">
                                    <td className="text-center" style={{ width: '7%', maxWidth: '67px' }}>{row.codigo}</td>
                                    <td className="text-start" style={{ width: '25%' }}>{row.nombreFuente}</td>
                                    <td className="text-end" style={{ width: '8%' }}>
                                        <div className="  flex justify-evenly w-full">
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