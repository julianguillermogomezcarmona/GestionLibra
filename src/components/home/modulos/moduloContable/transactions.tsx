import { Button, Card, Field } from "@fluentui/react-components";
import { SearchBox } from "@fluentui/react-search-preview";
import { TableComponent } from "../../../table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPrint } from "@fortawesome/free-solid-svg-icons";
import { NewTransations } from "./newTransactions";
import './style.css'
import { useState } from "react";
import { Delete } from "../../../delete";
import { Visualization } from "../visualizacion";
type transactionProps = {
    newTransactions?: () => void;
}

export function Transactions({ newTransactions }: transactionProps) {
    const [showModal, setShowModal] = useState(false);
    const toggleComponente = () => {
        setShowModal(!showModal);
        document.body.style.overflow = 'hidden';
    };
    const handleCloseModal = () => {
        // console.log(showModal);
        setShowModal(!showModal);
        // console.log(showModal);
        document.body.style.overflow = 'auto';
    };
    const [showDelete, setShowDelete] = useState(false);
    const toggleComponenteDelete = () => {
        setShowDelete(!showDelete);
        document.body.style.overflow = 'hidden';
    };
    const handleCloseDelete = () => {
        // console.log(showModal);
        setShowDelete(!showDelete);
        // console.log(showModal);
        document.body.style.overflow = 'auto';
    };
    const [showVisualitation, setShowVisualitation] = useState(false);
    const toggleComponenteVisualitation = () => {
        setShowVisualitation(!showVisualitation);
        document.body.style.overflow = 'hidden';
    };
    const handleCloseVisualitation = () => {
        // console.log(showModal);
        setShowVisualitation(!showVisualitation);
        // console.log(showModal);
        document.body.style.overflow = 'auto';
    };
    return (
        <section className="w-full flex justify-center items-center">
            <Card className=" w-[80%] flex flex-col items-start">
                <h3 className="font-semibold absolute top-0 left-0 px-[15px] w-full py-[5px]" style={{ backgroundColor: 'var(--colorNeutralForeground1)', color: 'var(--colorNeutralForegroundInverted)' }}>Transacciones</h3>
                <div className="flex gap-[5px] mt-[30px] px-[10px]">
                    <Field className="" >
                        <SearchBox className="w-[240px]" placeholder="Buscar" appearance="underline" />
                    </Field>

                    {/* <button className="flex gap-[5px] items-center px-[7px] text-white bg-1 rounded-[2px] py-[2px] text-[12px]">Nueva transferencia<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button> */}
                </div>
                <div className="px-[14px] h-[100%] overflow-hidden w-[100%] ">
                    <TableComponent Delete={toggleComponenteDelete}></TableComponent>
                </div>
                <div className="w-full flex justify-end gap-[5px]">

                    <button onClick={toggleComponente} className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom rounded-[2px] py-[5px] text-[12px]">Nueva transacción<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                    <button onClick={toggleComponenteVisualitation} className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom2 rounded-[2px] py-[2px] text-[12px]">Visualización<FontAwesomeIcon icon={faPrint}></FontAwesomeIcon></button>
                </div>
            </Card>
            {showVisualitation ? <Visualization showModal={handleCloseVisualitation}></Visualization> : ""}
            {showModal ? <NewTransations showModal={handleCloseModal}></NewTransations> : ""}
            {showDelete ? <Delete showModal={handleCloseDelete}></Delete> : ""}
        </section>
    )
}