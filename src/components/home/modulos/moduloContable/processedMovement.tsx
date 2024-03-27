import { Card, Select, Label, Input, useId, Checkbox, RadioGroup, Radio } from "@fluentui/react-components";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Space, DatePicker } from "antd";
import type { CheckboxProps } from "@fluentui/react-components";
import { useState } from "react";
import './style.css'
export function ProcessedMovement() {
    const selectId = useId("select");
    const selectId2 = useId("select");
    const [checked, setChecked] = useState<CheckboxProps["checked"]>(false);
    const [checked2, setChecked2] = useState<CheckboxProps["checked2"]>(false);
    return (

        <section className="flex h-screen items-center justify-center gap-[15px]">
            <Card className="w-[50%] flex flex-col items-start">
                <h3 className="font-semibold absolute top-0 left-0 px-[15px] py-[5px] w-full" style={{ backgroundColor: 'var(--colorNeutralForeground1)', color: 'var(--colorNeutralForegroundInverted)' }}>Movimiento procesado</h3>

                <div className="mt-[35px] w-full">
                    <div className="flex items-center gap-[5px] w-full">
                        <label className="font-semibold" htmlFor={selectId}>Impresora</label>
                        <Select className="w-full" id={selectId}>
                            <option>Natural</option>
                            <option>Juridico</option>
                        </Select>
                        <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>
                    </div>

                </div>
                <Card className="w-full">
                    <div className="w-full flex flex-col gap-[3px]">
                        <h3 className="font-semibold">Definir fechas a visualizar</h3>
                        <div className="flex gap-[15px]">
                            <div className="w-[37%] flex justify-between text-[12px] items-center ">
                                <label htmlFor="init_date" className="font-bold">Fecha inicial</label>
                                <DatePicker style={{ backgroundColor: 'var(--colorNeutralForegroundInverted)' }} className="date" id="init_date" />
                            </div>
                            <div className="w-[37%] flex justify-between text-[12px] items-center ">
                                <label htmlFor="finish_date" className="font-bold">Fecha final</label>
                                <DatePicker style={{ backgroundColor: 'var(--colorNeutralForegroundInverted)' }} className="date" id="finish_date" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-[5px] w-full">
                        <label className="font-semibold" htmlFor={selectId2}>Fuente a filtrar</label>
                        <div className="flex w-full justify-between">
                            <Select className="w-[48%]" id={selectId2}>
                                <option>Natural</option>
                                <option>Juridico</option>
                            </Select>
                            <Checkbox
                                checked={checked}
                                onChange={(ev, data) => setChecked(data.checked)}
                                label="Fuente es NIIF"
                                className="label font-bold"
                            />
                            <div className="flex items-center justify-between w-[27%]">
                                <Label htmlFor="copias" className="font-bold check" style={{ paddingInlineEnd: "5px" }}>
                                    Numero de copias
                                </Label>
                                <Input className="w-[25%] num" type="number" id="copias" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <RadioGroup layout="horizontal" className="flex w-[38%] items-center justify-between" defaultValue={'unico_anual'}>
                            <Radio value="unico_anual" label="Unico Anual" />
                            <Radio value="mensual" label="Mensual" />
                        </RadioGroup>
                        <Checkbox
                            checked2={checked2}
                            onChange={(ev, data) => setChecked2(data.checked2)}
                            label="Editar reporte"
                            className="label font-bold"
                        />
                    </div>
                </Card>
                <div className="flex  w-full justify-between gap-[10px] mt-[10px]">
                    <div className="flex gap-[10px]">
                        <button className="flex gap-[5px] font-semibold items-center px-[15px] text-white butom rounded-[2px] py-[5px] text-[12px]">Visualizar en pantalla</button>
                        <button className="flex butom2 gap-[5px] font-semibold items-center px-[7px] text-white rounded-[2px] py-[2px] text-[12px]">Enviar a impresora <FontAwesomeIcon icon={faPrint} /> </button>
                        <button className="flex gap-[5px] font-semibold items-center px-[15px] text-white butom3 rounded-[2px] py-[5px] text-[12px]">Enviar a excel</button>
                    </div>
                    <button style={{ backgroundColor: 'var(--colorPaletteRedForeground1)' }} className="flex gap-[5px] font-semibold items-center px-[7px] text-white rounded-[2px] py-[2px] text-[12px]">Cancelar</button>
                </div>
            </Card>

        </section>
    )
}
