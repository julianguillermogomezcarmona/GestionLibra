import { Card, useId, Input, Label, Button } from "@fluentui/react-components";
import './style.css'
import { TableTercero } from "./tableTercero";
import { Search12Regular } from "@fluentui/react-icons";
export function ReclasificationThird() {
    const inputId = useId("input");
    return (
        <section className="w-[60%]  flex items-center h-screen">
            <Card className=" w-[100%] py-[35px] flex flex-col items-start">
                <h3 className="w-full    font-semibold absolute top-0 py-[5px] px-[15px] left-0" style={{ backgroundColor: 'var(--colorNeutralForeground1)', color: 'var(--colorNeutralForegroundInverted)' }}>Reclasificar terceros</h3>
                <div className="px-[20px] w-full mt-[20px] py-[10px] flex flex-col gap-[5px]">
                    <div className="flex gap-[10px] w-[90%]  items-center ">
                        <div className="w-[100%] justify-between flex items-center">
                            <Label className="font-bold" htmlFor={inputId} style={{ paddingInlineEnd: "12px" }}>
                                <span className="text-[11px]">Codigo del tercero</span>
                            </Label>
                            <div className="flex">
                                <div className="flex relative mr-[5px]">
                                    <Input className="w-[150px] num2 num" id={inputId} />
                                    <Button className="absolute right-0 h-6" appearance="transparent" icon={<Search12Regular />}></Button>
                                </div>
                                <Input disabled className=" w-[35px] num px-[2px]"></Input>
                                <Input disabled className="w-[270px] num px-[2px]"></Input>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[5px] w-[90%]  ">
                        <div className="flex items-center w-full justify-between ">
                            <Label className="font-bold" htmlFor={inputId} style={{ paddingInlineEnd: "12px" }}>
                                <span className="text-[11px]">Numero codigo</span>
                            </Label>
                            <div className="flex">
                                <div className="flex relative mr-[5px]">
                                    <Input className="w-[150px] num" id={inputId} />
                                    <Button className="absolute right-0 h-6" appearance="transparent" icon={<Search12Regular />}></Button>
                                </div>
                                <Input className=" w-[35px] num px-[2px]"></Input>
                                <Input className="w-[270px] num px-[2px]"></Input>
                            </div>
                        </div>
                        <div className="flex w-full justify-between items-center gap-[14px]">
                            <div className="flex items-center">
                                <Label className="" htmlFor={inputId} style={{ paddingInlineEnd: "6px" }}>
                                    <span className="text-[11px] font-bold">Dirección</span>
                                </Label>
                                <div>
                                    <Input className="w-[137px] num" id={inputId} />
                                </div>
                            </div>
                            <div className="flex items-center ">
                                <Label className="" htmlFor={inputId} style={{ paddingInlineEnd: "6px" }}>
                                    <span className="text-[11px] font-bold">Telefono</span>
                                </Label>
                                <div>
                                    <Input className="w-[137px] num" id={inputId} />
                                </div>
                            </div>
                            <div className="flex items-center ">
                                <Label className="" htmlFor={inputId} style={{ paddingInlineEnd: "6px" }}>
                                    <span className="font-bold text-[12px]">Ciudad</span>
                                </Label>
                                <div>
                                    <Input className="w-[137px] num" id={inputId} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col w-full">
                    <div className="w-[100%] px-[20px] flex flex-col">
                        <TableTercero></TableTercero>
                    </div>
                    <div className="flex mt-[15px] w-full justify-end gap-[10px]">
                        <button className="butom px-[10px] py-[5px] rounded-[2px]  text-white">Reclasificar Tercero</button>
                        <button className="bg-red-500 hover:bg-[#ff6060] px-[10px] py-[5px] rounded-[2px] text-white">Limpiar campos</button>
                    </div>
                </div>
            </Card>
        </section >
    )
}