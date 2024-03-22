import { Card, Field } from "@fluentui/react-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBox } from "@fluentui/react-search-preview";
import { faPlus, faPrint } from "@fortawesome/free-solid-svg-icons";
// import { TableTerceros } from "./tableTercero";
import './style.css'
import { TableFountain } from "./tableFountain";
export function Fountain() {
    return (
        <section className="w-[43%]">
            <Card className="w-full flex flex-col items-start">
                <h3 className="font-semibold">Fuentes</h3>
                <div className="flex gap-[5px] px-[30px]">
                    <Field className="" >
                        <SearchBox className="w-[200px]" placeholder="Buscar fuente" appearance="underline" />
                    </Field>
                </div>
                <div className="px-[20px] w-[100%]">
                    <TableFountain></TableFountain>
                    {/* <TableTerceros></TableTerceros> */}
                </div>
                <div className="flex justify-end w-full gap-[10px]">
                    <button className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom rounded-[2px] py-[5px] text-[12px]">Nueva fuente<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                    <button className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom2 rounded-[2px] py-[2px] text-[12px]">Informes<FontAwesomeIcon icon={faPrint}></FontAwesomeIcon></button>

                </div>
            </Card>
        </section>
    )
}