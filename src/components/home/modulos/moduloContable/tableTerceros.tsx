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
type Item = {
    Fuente: {
        label: string;
    };
    author: {
        label: string;
        status: PresenceBadgeStatus;
    };
    lastUpdated: {
        label: string;
        timestamp: number;
    };
    lastUpdate: {
        label: string;
        icon: JSX.Element;
    };
};

interface TableRowData extends RowStateBase<Item> {
    onClick: (e: React.MouseEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    selected: boolean;
    appearance: "brand" | "none";
}

interface ReactWindowRenderFnProps extends ListChildComponentProps {
    data: TableRowData[];
}

const baseItems: Item[] = [
    {
        Fuente: { label: "Meeting notes", },
        author: { label: "Max Mustermann", status: "available" },
        lastUpdated: { label: "7h ago", timestamp: 1 },
        lastUpdate: {
            label: "You edited this",
            icon: <EditRegular />,
        },
    },
    {
        Fuente: { label: "Thursday presentation", },
        author: { label: "Erika Mustermann", status: "busy" },
        lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
        lastUpdate: {
            label: "You recently opened this",
            icon: <OpenRegular />,
        },
    },
    {
        Fuente: { label: "Training recording", },
        author: { label: "John Doe", status: "away" },
        lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
        lastUpdate: {
            label: "You recently opened this",
            icon: <OpenRegular />,
        },
    },
    {
        Fuente: { label: "Purchase order", },
        author: { label: "Jane Doe", status: "offline" },
        lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
        lastUpdate: {
            label: "You shared this in a Teams chat",
            icon: <PeopleRegular />,
        },
    },
];

const items = new Array(15)
    .fill(0)
    .map((_, i) => baseItems[i % baseItems.length]);

const columns = [
    createTableColumn<Item>({
        columnId: "Fuente",
    }),
    createTableColumn<Item>({
        columnId: "author",
    }),
    createTableColumn<Item>({
        columnId: "lastUpdated",
    }),
    createTableColumn<Item>({
        columnId: "lastUpdate",
    }),
];

const RenderRow = ({ index, style, data }: ReactWindowRenderFnProps) => {
    const { item, appearance, onKeyDown } = data[index];
    return (
        <TableRow
            aria-rowindex={index + 2}
            style={style}
            key={item.Fuente.label}
            onKeyDown={onKeyDown}
            // onClick={onClick}
            appearance={appearance}>
            <TableCell className="tab rows">
                07/12/2018
                {/* {index + 1} */}
            </TableCell>
            <TableCell className="tablet truncate mr-[5px]">
                <TableCellLayout>
                    {item.author.label}
                </TableCellLayout>
            </TableCell>
            <TableCell className="tablet truncate">{item.lastUpdated.label}</TableCell>
            <TableCell className="tablet truncate mr-[10px]">
                <TableCellLayout >
                    {item.lastUpdate.label}
                </TableCellLayout>
            </TableCell>
            <TableCell className="tablet">
                <TableCellLayout >
                    <p>$255.000</p>
                    {/* <div className="flex gap-[5px]">
                       
                    </div> */}
                </TableCellLayout>
            </TableCell>
            <TableCell className="tablet">
                <TableCellLayout >
                    <p>$255.000</p>
                    {/* <div className="flex gap-[5px]">
                       
                    </div> */}
                </TableCellLayout>
            </TableCell>
        </TableRow>
    );
};

export function TableTercero() {
    const { targetDocument } = useFluent();
    const scrollbarWidth = useScrollbarWidth({ targetDocument });

    const {
        getRows,
        selection: {
            allRowsSelected,
            someRowsSelected,
            toggleAllRows,
            toggleRow,
            // isRowSelected,
        },
    } = useTableFeatures(
        {
            columns,
            items,
        },
        [
            useTableSelection({
                selectionMode: "multiselect",
                defaultSelectedItems: new Set([0, 1]),
            }),
        ]
    );

    const rows: TableRowData[] = getRows((row) => {
        // const selected = isRowSelected(row.rowId);
        return {
            ...row,
            onClick: (e: React.MouseEvent) => toggleRow(e, row.rowId),
            onKeyDown: (e: React.KeyboardEvent) => {
                if (e.key === " ") {
                    e.preventDefault();
                    toggleRow(e, row.rowId);
                }
            },
            // selected,
            // appearance: selected ? ("brand" as const) : ("none" as const),
        };
    });

    const toggleAllKeydown = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === " ") {
                toggleAllRows(e);
                e.preventDefault();
            }
        },
        [toggleAllRows]
    );
    const firstColumn = 50;
    return (
        <Table
            noNativeElements
            aria-label="Table with selection"
            aria-rowcount={rows.length}
        >
            <TableHeader style={{ backgroundColor: 'var(--colorNeutralStencil1Alpha)' }}>
                <TableRow aria-rowindex={1} className="gird" >


                    <TableHeaderCell style={{ width: firstColumn }} ><span className="text-center w-full font-semibold">Fecha</span></TableHeaderCell>
                    <TableHeaderCell><span className="text-center w-full font-semibold">Fuente</span></TableHeaderCell>
                    <TableHeaderCell><span className="text-center w-full font-semibold">Documento</span></TableHeaderCell>
                    <TableHeaderCell><span className="text-center w-full font-semibold">Detalle del movimiento</span></TableHeaderCell>
                    <TableHeaderCell><span className="text-center w-full font-semibold">Movimiento Debito</span></TableHeaderCell>
                    <TableHeaderCell><span className="text-center w-full font-semibold">Movimiento Credito</span></TableHeaderCell>
                    {/** Scrollbar alignment for the header */}
                    <div role="presentation" style={{ width: scrollbarWidth }} />
                </TableRow>
            </TableHeader>
            <TableBody style={{ fontSize: '11px', fontWeight: '600' }}>
                <List
                    height={200}
                    itemCount={items.length}
                    itemSize={38}
                    // fontSize={'20px'}
                    width="100%"
                    itemData={rows}
                >
                    {RenderRow}
                </List>
            </TableBody>
        </Table>
    );
};