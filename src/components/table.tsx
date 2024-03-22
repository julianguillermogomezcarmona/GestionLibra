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
import './component.css'
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

const items = new Array(12)
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
            <TableCell className="tab   ">
                {index + 1}
            </TableCell>
            <TableCell className="tablet">
                <TableCellLayout>
                    {item.author.label}
                </TableCellLayout>
            </TableCell>
            <TableCell className="tablet truncate mr-[7px]">{item.lastUpdated.label}</TableCell>
            <TableCell className="tablet ">
                <TableCellLayout className="truncate">
                    <span className="">
                        {item.lastUpdate.label}
                    </span>
                </TableCellLayout>
            </TableCell>
            <TableCell className="tablet">
                <TableCellLayout >
                    <div className="flex ml-[10px] gap-[5px]">
                        <Button className="table1" icon={<Eye12Filled />}></Button>
                        <Button className="table2" icon={<Delete12Filled />}></Button>
                        <Button className="table3" icon={<Edit12Filled />}></Button>
                    </div>
                </TableCellLayout>
            </TableCell>
        </TableRow>
    );
};

export function TableComponent() {
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

    return (
        <Table
            noNativeElements
            aria-label="Table with selection"
            aria-rowcount={rows.length}
        >
            <TableHeader style={{ backgroundColor: 'var(--colorNeutralStencil1Alpha)' }}>
                <TableRow aria-rowindex={1} >


                    <TableHeaderCell ><span className="text-center w-full font-semibold">Fuente</span></TableHeaderCell>
                    <TableHeaderCell><span className="text-center w-full font-semibold">Numero de documento</span></TableHeaderCell>
                    <TableHeaderCell><span className="text-center w-full font-semibold">Fecha</span></TableHeaderCell>
                    <TableHeaderCell><span className="text-center w-full font-semibold">Nombre de la fuente</span></TableHeaderCell>
                    <TableHeaderCell><span className="text-center w-full font-semibold">Acciones</span></TableHeaderCell>
                    {/** Scrollbar alignment for the header */}
                    <div role="presentation" style={{ width: scrollbarWidth }} />
                </TableRow>
            </TableHeader>
            <TableBody style={{ fontSize: '11px', fontWeight: '600' }}>
                <List
                    height={360}
                    itemCount={items.length}
                    itemSize={40}
                    width="100%"
                    itemData={rows}
                >
                    {RenderRow}
                </List>
            </TableBody>
        </Table>
    );
};