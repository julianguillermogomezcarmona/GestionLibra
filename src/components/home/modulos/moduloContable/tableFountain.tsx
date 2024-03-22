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
    Code: {
        label: string;
    };
    Name: {
        label: string;
        // ]timestamp: number;
    };
    // Actions: {
    //     label: string;
    //     // icon: JSX.Element;
    // };
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
        Code: { label: "01", },
        Name: { label: "7h ago", },

    },
    {
        Code: { label: "02", },
        Name: { label: "Yesterday at 1:45 PM", },

    },
    {
        Code: { label: "11", },
        Name: { label: "Yesterday at 1:45 PM", },

    },
    {
        Code: { label: "15", },
        Name: { label: "Tue at 9:30 AM", },

    },
];

const items = new Array(15)
    .fill(0)
    .map((_, i) => baseItems[i % baseItems.length]);

const columns = [
    createTableColumn<Item>({
        columnId: "Codigo",
    }),

    createTableColumn<Item>({
        columnId: "Name",
    }),
    createTableColumn<Item>({
        columnId: "Actions",
    }),
];

const RenderRow = ({ index, style, data }: ReactWindowRenderFnProps) => {
    const { item, appearance, onKeyDown } = data[index];
    return (
        <TableRow
            aria-rowindex={index + 2}
            style={style}
            key={item.Code.label}
            onKeyDown={onKeyDown}
            // onClick={onClick}
            appearance={appearance}>
            <TableCell className="tab rows">
                {/* 07/12/2018 */}
                {item.Code.label}
            </TableCell>

            <TableCell className="tablet truncate">{item.Name.label}</TableCell>
            {/* <TableCell className="tablet truncate mr-[10px]">
                <TableCellLayout >
                    {item.lastUpdate.label}
                </TableCellLayout>
            </TableCell> */}
            {/* <TableCell className="tablet">
                <TableCellLayout >
                    <p>$255.000</p>
                   
                </TableCellLayout>
            </TableCell> */}
            <TableCell className="tablet">
                <div className="pl-[10px] flex justify-center w-full">
                    <Button className="table1" icon={<Eye12Filled />}></Button>
                    <Button className="table2" icon={<Delete12Filled />}></Button>
                    <Button className="table3" icon={<Edit12Filled />}></Button>
                </div>
            </TableCell>
        </TableRow>
    );
};

export function TableFountain() {
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
                <TableRow aria-rowindex={1} className="" >


                    <TableHeaderCell style={{ width: firstColumn }} ><span className="text-center w-full font-semibold">Codigo</span></TableHeaderCell>
                    <TableHeaderCell><span className="text-center w-full font-semibold">Nombre de fuente</span></TableHeaderCell>
                    <TableHeaderCell><span className="text-center w-full font-semibold">Acciones</span></TableHeaderCell>
                    {/** Scrollbar alignment for the header */}
                    <div role="presentation" style={{ width: scrollbarWidth }} />
                </TableRow>
            </TableHeader>
            <TableBody style={{ fontSize: '11px', fontWeight: '600' }}>
                <List
                    height={270}
                    itemCount={items.length}
                    itemSize={38}
                    // fontSize={'11px'}
                    width="100%"
                    itemData={rows}
                >
                    {RenderRow}
                </List>
            </TableBody>
        </Table>
    );
};