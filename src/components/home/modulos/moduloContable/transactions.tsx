import { Button, Card, Field } from "@fluentui/react-components";
import { SearchBox } from "@fluentui/react-search-preview";
import { TableComponent } from "../../../table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPrint } from "@fortawesome/free-solid-svg-icons";
import './style.css'
type transactionProps = {
    newTransactions: () => void
}
export function Transactions({ newTransactions }: transactionProps) {
    return (
        <section className="w-[60%]  h-[100%] mt-[80px]">
            <Card className="h-[95%]  w-full py-[35px] flex flex-col items-start">
                <h3 className="font-semibold absolute top-0 left-0 px-[15px] w-full py-[5px]" style={{ backgroundColor: 'var(--colorNeutralForeground1)', color: 'var(--colorNeutralForegroundInverted)' }}>Transacciones</h3>
                <div className="flex gap-[5px] mt-[30px] px-[10px]">
                    <Field className="" >
                        <SearchBox className="w-[240px]" placeholder="Buscar por # de documento" appearance="underline" />
                    </Field>

                    {/* <button className="flex gap-[5px] items-center px-[7px] text-white bg-1 rounded-[2px] py-[2px] text-[12px]">Nueva transferencia<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button> */}
                </div>
                <div className="px-[14px] h-[100%] overflow-hidden w-[100%] ">
                    <TableComponent></TableComponent>
                </div>
                <div className="w-full flex justify-end gap-[5px]">
                    <button onClick={newTransactions} className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom rounded-[2px] py-[5px] text-[12px]">Nueva transacción<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                    <button className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom2 rounded-[2px] py-[2px] text-[12px]">Informes<FontAwesomeIcon icon={faPrint}></FontAwesomeIcon></button>
                </div>
            </Card>
        </section>
    )
}