import { Card, Select, Label, Input, useId, Checkbox, RadioGroup, Radio, Button } from "@fluentui/react-components";
import { faPaperPlane, faPrint, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Space, DatePicker } from "antd";
import type { CheckboxProps } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import './style.css'
import { Search12Regular } from "@fluentui/react-icons";
type modalProps = {
    showModal: () => void
}
export function Visualization({ showModal }: modalProps) {
    const selectId = useId("select");
    const selectId2 = useId("select");
    const [checked, setChecked] = useState<CheckboxProps["checked"]>(false);
    const [checked2, setChecked2] = useState<CheckboxProps["checked"]>(false);
    const [radioFontWeight, setRadioFontWeight] = useState<'normal' | '500'>('normal'); // Estado para controlar el fontWeight del radio seleccionado
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
    const fountain = useId("input");
    const copy = useId("input");
    return (

        <section className="fixed z-[50] top-0 h-screen flex items-center w-full left-0 justify-center  before:content-[''] before:bg-black before:absolute before:w-full before:h-screen before:top-0 before:left-0 before:opacity-20 before:z-0">
            <Card className="w-[45%] flex flex-col items-start">
                <div className="flex justify-between h-5 " style={{ color: 'var(--colorNeutralForegroundInverted)' }}>
                    <h3 className="px-[15px] py-[5px] top-0 absolute font-bold w-full left-0" style={{ backgroundColor: 'var(--colorNeutralForeground1)', }} >Visualización</h3>
                    <button className="absolute right-4 top-0 py-[5px]" onClick={handleCloset}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></button>
                </div>
                <div className="w-full">
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
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">Defina el rango que desea visualizar</h3>
                        <div className="flex justify-between w-full gap-x-[15px]">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="init" className="font-bold check" style={{ paddingInlineEnd: "5px" }}>
                                    Inicial
                                </Label>
                                <Input className="max-w-[100px] num" type="number" id="init" />
                            </div>
                            <div className="flex items-center">
                                <Label htmlFor="finish" className="font-bold check" style={{ paddingInlineEnd: "5px" }}>
                                    Final
                                </Label>
                                <Input className="max-w-[100px] num" type="number" id="finish" />
                            </div>
                            <div className="flex items-center">
                                <Label className="font-bold" htmlFor={fountain} style={{ paddingInlineEnd: "5px" }}>
                                    <span className="text-[12px]">Fuente</span>
                                </Label>
                                <div className="flex relative">
                                    <Input type="number" className="max-w-[47px] min-w-0 num2 num" id={fountain} />
                                    <Button className="absolute right-[-5px] h-6" appearance="transparent" icon={<Search12Regular />}></Button>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Label htmlFor="copy" className="font-bold check" style={{ paddingInlineEnd: "5px" }}>
                                    No. copias
                                </Label>
                                <Input className="max-w-[45px] num" type="number" id="copy" />
                            </div>
                        </div>
                        <div>
                            {/* <h3 className="font-semibold">Imprimir documento</h3> */}
                            <RadioGroup layout="horizontal" className="flex w-[20%] items-center justify-between" defaultValue={''}>
                                <Radio value="unico_anual" label="Local" style={{ fontWeight: radioFontWeight === 'unico_anual' ? '500' : 'normal' }} onChange={() => setRadioFontWeight('unico_anual')} />
                                <Radio value="mensual" label="NIIF" style={{ fontWeight: radioFontWeight === 'mensual' ? '500' : 'normal' }} onChange={() => setRadioFontWeight('mensual')} />
                            </RadioGroup>
                        </div>
                    </div>

                </Card>
                <div className="flex  w-full justify-between gap-[10px] mt-[10px]">
                    <div className="flex gap-[10px]">
                        <button className="flex gap-[5px] font-semibold items-center px-[15px] text-white butom rounded-[2px] py-[5px] text-[12px]">Visualizar en pantalla</button>
                        <button className="flex butom2 gap-[5px] font-semibold items-center px-[7px] text-white rounded-[2px] py-[2px] text-[12px]">Enviar a impresora <FontAwesomeIcon icon={faPrint} /> </button>
                    </div>
                    <button onClick={handleCloset} style={{ backgroundColor: 'var(--colorPaletteRedForeground1)' }} className="flex gap-[5px] font-semibold items-center px-[7px] text-white rounded-[2px] py-[2px] text-[12px]">Cancelar</button>
                </div>
            </Card>

        </section>
    )
}
