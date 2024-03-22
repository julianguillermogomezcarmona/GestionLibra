import { Button, Card, useId, Label, Input } from "@fluentui/react-components";
import { Search12Regular } from "@fluentui/react-icons";
import { Space, DatePicker } from "antd";
import './style.css'
import { TableExtraction } from "./tableExtraction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPrint } from "@fortawesome/free-solid-svg-icons";

export function Extraction() {
    const inputId = useId("input");
    return (
        <section className="w-full">
            <Card className="w-full">
                <h3 className="font-semibold">Extracción de movimientos</h3>
                <div className="flex flex-col gap-[5px] px-[20px] w-[100%]">
                    <div className="grid grid-cols-3 justify-between w-[100%]">
                        <div className="flex items-center justify-between w-[62%]">
                            <Label className="font-bold" htmlFor={inputId} style={{ paddingInlineEnd: "12px" }}>
                                <span className="text-[12px]">Cuenta inicial</span>
                            </Label>
                            <div className="flex relative mr-[5px]">
                                <Input className="w-[150px] num2 num" id={inputId} />
                                <Button className="absolute right-0 h-6" appearance="transparent" icon={<Search12Regular />}></Button>
                            </div>
                        </div>
                        <div className="w-[60%] flex justify-between text-[12px] items-center ">
                            <label htmlFor="init_date" className="font-bold">Fecha inicial</label>
                            <DatePicker style={{ backgroundColor: 'var(--colorNeutralForegroundInverted)' }} className="date" id="init_date" />
                            {/* <Button type="primary">Primary Button</Button> */}
                        </div>
                        <div className="flex items-center justify-between w-[57%]">
                            <Label className="font-bold" htmlFor='tercero' style={{ paddingInlineEnd: "12px" }}>
                                <span className="text-[12px]">Tercero</span>
                            </Label>
                            <div className="flex relative mr-[5px]">
                                <Input className="w-[150px] num2 num" id='tercero' />
                                <Button className="absolute right-0 h-6" appearance="transparent" icon={<Search12Regular />}></Button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex items-center justify-between w-[62%]">
                            <Label className="font-bold" htmlFor={inputId} style={{ paddingInlineEnd: "12px" }}>
                                <span className="text-[12px]">Cuenta final</span>
                            </Label>
                            <div className="flex relative mr-[5px]">
                                <Input className="w-[150px] num2 num" id={inputId} />
                                <Button className="absolute right-0 h-6" appearance="transparent" icon={<Search12Regular />}></Button>
                            </div>
                        </div>

                        <div className="w-[60%] flex justify-between items-center text-[12px]">
                            <label htmlFor="finish_date" className=" font-bold">Fecha final</label>
                            <DatePicker style={{ backgroundColor: 'var(--colorNeutralForegroundInverted)' }} className="date" id="finish_date" />
                            {/* <Button type="primary">Primary Button</Button> */}
                        </div>
                        <div className="flex items-center justify-between w-[57%]">
                            <Label className="font-bold" htmlFor='tercero' style={{ paddingInlineEnd: "12px" }}>
                                <span className="text-[12px]">Ctro costo</span>
                            </Label>
                            <div className="flex relative mr-[5px] ">
                                <Input className="w-[150px] num2 num" id='tercero' />
                                <Button className="absolute right-0 h-6" appearance="transparent" icon={<Search12Regular />}></Button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="overflow-x-scroll">
                    <TableExtraction></TableExtraction>
                </div>
                <div className="flex w-full justify-end gap-[10px]">
                    <button className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom rounded-[2px] py-[2px] text-[12px]">Leer Movimiento</button>
                    <button className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom2 rounded-[2px] py-[2px] text-[12px]">Enviar a Excel<FontAwesomeIcon icon={faPrint}></FontAwesomeIcon></button>
                    <button className=" bg-red-500 hover:bg-[#ff6060]flex gap-[5px] font-semibold items-center px-[7px] text-white  rounded-[2px] py-[2px] text-[12px]">Limpiar campos</button>
                </div>
            </Card>
        </section>
    )
}