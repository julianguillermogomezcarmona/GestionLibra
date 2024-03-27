import { Card, Field } from "@fluentui/react-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBox } from "@fluentui/react-search-preview";
import { faPlus, faPrint } from "@fortawesome/free-solid-svg-icons";
// import { TableTerceros } from "./tableTercero";
import './style.css'
import { NewFountain } from "./newFountain";
import { useState } from "react";
import { TableFountain } from "./tableFountain";
type fountainProps = {
    newFountain: () => void
}
export function Fountain({ newFountain }: fountainProps) {
    const [showModal3, setShowModal3] = useState(false);
    const toggleComponente3 = () => {
      setShowModal3(!showModal3);
      document.body.style.overflow = 'hidden';
    };
    const handleCloseModal3 = () => {
      // console.log(showModal);
      setShowModal3(!showModal3);
      // console.log(showModal);
      document.body.style.overflow = 'auto';
    };
    return (
        <section className="w-[40%] mt-[80px]">
            <Card className="w-full flex flex-col items-start">
                <h3 className="font-semibold absolute top-0 py-[5px] px-[15px] left-0 w-full" style={{ backgroundColor: 'var(--colorNeutralForeground1)', color: 'var(--colorNeutralForegroundInverted)' }}>Fuentes</h3>
                <div className="flex gap-[5px] mt-[30px] px-[5px]">
                    <Field className="" >
                        <SearchBox className="w-[200px]" placeholder="Buscar fuente" appearance="underline" />
                    </Field>
                </div>
                <div className="px-[10px] w-[100%]">
                    <TableFountain></TableFountain>
                    {/* <TableTerceros></TableTerceros> */}
                </div>
                <div className="flex justify-end w-full gap-[10px]">
                    <button onClick={toggleComponente3} className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom rounded-[2px] py-[5px] text-[12px]">Nueva fuente<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                    <button className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom2 rounded-[2px] py-[2px] text-[12px]">Informes<FontAwesomeIcon icon={faPrint}></FontAwesomeIcon></button>
                </div>
            </Card>
            {showModal3 ? <NewFountain showModal={handleCloseModal3}></NewFountain> : ""}
        </section>
    )
}