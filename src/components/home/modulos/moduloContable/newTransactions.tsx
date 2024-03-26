import { Card, Field, Textarea, Input, Button, Checkbox, Label, useId } from "@fluentui/react-components";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'
import { useState, useEffect } from "react";
import { Search12Regular } from "@fluentui/react-icons";
import { DatePicker, Space } from "antd";
import { TableNewTransation } from "./tableNewTransation";
// import { } from "antd";
type modalProps = {
    showModal: () => void
}
export function NewTransations({ showModal }: modalProps) {
    const [checked, setChecked] = useState<CheckboxProps["checked"]>(true);
    const [checked2, setChecked2] = useState<CheckboxProps["checked2"]>(true);
    // const [checked2, setChecked2] = useState<CheckboxProps2["checked2"]>(true);
    function handleCloset() {
        showModal();
    }
    useEffect(() => {
        // Disable scroll on body when component mounts
        document.body.style.overflow = 'hidden';

        // Enable scroll on body when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    const inputId = useId("input");
    return (
        <section className="fixed z-50 top-0 h-screen flex items-center w-full left-0 justify-center px-[220px] before:content-[''] before:bg-black before:absolute before:w-full before:h-screen before:top-0 before:left-0 before:opacity-20 before:z-0">
            <Card className="p-[10px] w-[90%]">
                <div className="flex justify-between h-5 " style={{ color: 'var(--colorNeutralForegroundInverted)' }}>
                    <h3 className="px-[15px] py-[5px] top-0 absolute font-bold w-full left-0" style={{ backgroundColor: 'var(--colorNeutralForeground1)', }} >Nueva transacción</h3>
                    <button className="absolute right-4 top-0 py-[5px]" onClick={handleCloset}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></button>
                </div>
                <div className="flex flex-col">

                    <Card className="flex h-[70%] w-full ">
                        <h3 className="font-semibold">Comprobantes</h3>
                        <div className="flex gap-[5px]">
                            <Checkbox
                                checked={checked}
                                onChange={(ev, data) => setChecked(data.checked)}
                                label="Automatico"
                                className="label font-bold"
                            />
                            <Checkbox
                                checked={checked2}
                                onChange={(ev, data) => setChecked2(data.checked)}
                                label="Manual"
                                className="label font-bold"
                            />
                            <div className="flex gap-[3px] items-center">
                                <label htmlFor="" className="text-[12px] font-bold">Numero</label>
                                <input disabled type="text" className="input border-[1px] w-[100px] rounded-[2px] px-[5px] py-[4px] hover:outline-none outline-none " />
                            </div>
                            <div className="flex items-center ml-[10px]">
                                <Label className="font-bold" htmlFor={inputId} style={{ paddingInlineEnd: "5px" }}>
                                    <span className="text-[12px]">Fuente</span>
                                </Label>
                                <div className="flex relative mr-[5px]">
                                    <Input className="w-[120px] num2 num" id={inputId} />
                                    <Button className="absolute right-0 h-6" appearance="transparent" icon={<Search12Regular />}></Button>
                                </div>
                            </div>
                            <div className="">
                                <div className="w-[100%] flex   text-[12px]  items-center gap-[5px]">
                                    <label htmlFor="finish_date" className="font-bold">Fecha</label>
                                    <DatePicker style={{ backgroundColor: 'var(--colorNeutralForegroundInverted)' }} className="date h-[30px]" id="finish_date" />
                                    {/* <Button type="primary">Primary Button</Button> */}
                                </div>
                            </div>
                        </div>
                    </Card>
                    {/* <div className="w-full flex gap-4">
                        <Card className="flex w-[50%]">
                            <h3 className="font-semibold">Comprobantes</h3>
                            <div className="flex">
                                <Checkbox
                                    checked={checked}
                                    onChange={(ev, data) => setChecked(data.checked)}
                                    label="Automatico"
                                    className="label font-bold"
                                />
                                <Checkbox
                                    checked={checked2}
                                    onChange={(ev, data) => setChecked2(data.checked)}
                                    label="Manual"
                                    className="label font-bold"
                                />
                                <div className="flex gap-[3px] ml-[25px] items-center">
                                    <label htmlFor="" className="text-[12px] font-bold">Numero</label>
                                    <input disabled type="text" className="input border-[1px] w-[100px] rounded-[2px] px-[5px] py-[4px] hover:outline-none outline-none " />
                                </div>

                            </div>

                        </Card>
                        <Card className="w-[50%] ">
                            <Space className="w-[60%] flex justify-between  text-[12px] date">
                                <label htmlFor="finish_date" className="font-bold">Fecha final</label>
                                <DatePicker style={{ backgroundColor: 'var(--colorNeutralForegroundInverted)' }} className="date" id="finish_date" />
                            </Space> <div className="flex items-center">
                                <Label className="font-bold" htmlFor={inputId} style={{ paddingInlineEnd: "3px" }}>
                                    <span className="text-[12px]">Fuente</span>
                                </Label>
                                <div className="flex relative mr-[5px]">
                                    <Input className="w-[120px] num2 num" id={inputId} />
                                    <Button className="absolute right-0 " appearance="transparent" icon={<Search12Regular />}></Button>
                                </div>
                            </div>
                        </Card>
                    </div> */}
                    {/* <div className="w-[40%]">
                        <Field className="font-semibold" label='Concepto:'>
                            <Textarea className="h-[100px]" resize="none" />
                        </Field>
                    </div> */}
                </div>
                <div className="flex px-[15px] w-full gap-[10px]">
                    <button className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom rounded-[2px] py-[5px] text-[12px]">Trasacción Local</button>
                    <button className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom2 rounded-[2px] py-[2px] text-[12px]">Transacción NIIIF</button>
                </div>
                <TableNewTransation></TableNewTransation>
                <div className="flex w-full">
                    <div className="w-[100%] px-[20px] flex flex-col gap-[5px]">
                        <div className="flex items-center w-full justify-between">
                            <div className="flex">
                                <Label className="font-bold" htmlFor={inputId} style={{ paddingInlineEnd: "5px" }}>
                                    <span className="text-[12px]">Revelación</span>
                                </Label>
                                <div className="flex relative mr-[5px] ">
                                    <Input className="w-[115px] num2 num" id={inputId} />
                                    <Button className="absolute right-0 h-6" appearance="transparent" icon={<Search12Regular />}></Button>
                                </div>
                            </div>
                            <div className="flex gap-[30px]">
                                <div className="flex gap-[3px] items-center justify-between">
                                    <label htmlFor="" className="text-[12px] font-bold">Total Débito</label>
                                    <input disabled type="text" className="input border-[1px] w-[115px] rounded-[2px] px-[5px] py-[2px] hover:outline-none outline-none " />
                                </div>
                                <div className="flex  items-center gap-[5px]">
                                    <label htmlFor="" className="text-[12px] font-bold">Total Crédito</label>
                                    <input type="text" className="input border-[1px] w-[115px] rounded-[2px] px-[5px] py-[2px] hover:outline-none outline-none " />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[5px] w-full">
                            <div className="flex gap-[5px] w-full justify-between">
                                <div className="flex justify-between  w-[46%]">
                                    <div className="flex gap-[25px] items-center justify-between">
                                        <label htmlFor="" className="text-[12px] font-bold">Cuenta</label>
                                        <input style={{ backgroundColor: 'var(--colorNeutralBackground1)' }} type="text" className=" border-[1px] w-[115px] rounded-[2px] px-[5px] py-[2px] hover:outline-none outline-none " />
                                    </div>
                                    <div className="flex gap-[15px] items-center">
                                        <label htmlFor="" className="text-[12px] font-bold">Tercero</label>
                                        <input style={{ backgroundColor: 'var(--colorNeutralBackground1)' }} type="text" className=" border-[1px] w-[115px] rounded-[2px] px-[5px] py-[2px] hover:outline-none outline-none " />
                                    </div>
                                </div>
                                <div className="flex justify-between w-[49%]">
                                    <div className="flex gap-[10px] items-center">
                                        <label htmlFor="" className="text-[12px] font-bold">Item</label>
                                        <input style={{ backgroundColor: 'var(--colorNeutralBackground1)' }} type="text" className=" border-[1px] w-[115px] rounded-[2px] px-[5px] py-[2px] hover:outline-none outline-none " />
                                    </div>
                                    <div className="flex gap-[3px] items-center justify-between">
                                        <label htmlFor="" className="text-[12px] font-bold">Centro de costo</label>
                                        <input style={{ backgroundColor: 'var(--colorNeutralBackground1)' }} type="text" className=" border-[1px] w-[115px] rounded-[2px] px-[5px] py-[2px] hover:outline-none outline-none " />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="flex justify-end mt-[20px] w-full gap-[10px]">
                            <button className="flex gap-[5px] font-semibold items-center px-[15px] text-white butom rounded-[2px] py-[5px] text-[12px]">Grabar</button>
                            <button style={{ backgroundColor: 'var(--colorPaletteRedForeground1)' }} className="flex gap-[5px] font-semibold items-center px-[7px] text-white rounded-[2px] py-[2px] text-[12px]">Cancelar</button>
                        </div>
                    </div>

                </div>
            </Card>
        </section>
    )
}