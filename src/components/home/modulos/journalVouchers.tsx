import { Card, Select, Label, Input, useId, Checkbox, RadioGroup, Radio } from "@fluentui/react-components";
import { faPaperPlane, faPrint, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { CheckboxProps } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import './style.css'
type modalProps = {
    showModal: () => void
}
export function JournalVouchers({ showModal }: modalProps) {
    const selectId = useId("select");
    const selectId2 = useId("select");
    const [checked, setChecked] = useState<CheckboxProps["checked"]>(false);
    const [checked2, setChecked2] = useState<CheckboxProps["checked"]>(false);
    const [Weight, setFontWeight] = useState<'normal' | '500'>('normal');
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
    return (
        <section className="fixed z-[50] top-0 h-screen flex items-center w-full left-0 justify-center  before:content-[''] before:bg-black before:absolute before:w-full before:h-screen before:top-0 before:left-0 before:opacity-20 before:z-0">
            <Card className="w-[50%] flex flex-col items-start">
                <div className="flex justify-between h-5 " style={{ color: 'var(--colorNeutralForegroundInverted)' }}>
                    <h3 className="px-[15px] py-[5px] top-0 absolute font-bold w-full left-0" style={{ backgroundColor: 'var(--colorNeutralForeground1)', }} >Comprobantes de diario</h3>
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
                    <div>
                        <h3 className="font-semibold">Escoga un periodo</h3>
                        <RadioGroup layout="horizontal" className="grid grid-cols-3" defaultValue={''}>
                            <div className="grid grid-cols-4 w-full">
                                <Radio className="radio" value="enero" label="Enero" style={{ fontWeight: Weight === 'enero' ? '500' : 'normal' }} onChange={() => setFontWeight('enero')} />
                                <Radio className="radio" value="febrero" label="Febrero" style={{ fontWeight: Weight === 'febrero' ? '500' : 'normal' }} onChange={() => setFontWeight('febrero')} />
                                <Radio className="radio" value="marzo" label="Marzo" style={{ fontWeight: Weight === 'marzo' ? '500' : 'normal' }} onChange={() => setFontWeight('marzo')} />
                                <Radio className="radio" value="abril" label="Abril" style={{ fontWeight: Weight === 'abril' ? '500' : 'normal' }} onChange={() => setFontWeight('abril')} />
                                <Radio className="radio" value="mayo" label="Mayo" style={{ fontWeight: Weight === 'mayo' ? '500' : 'normal' }} onChange={() => setFontWeight('mayo')} />
                                <Radio className="radio" value="junio" label="Junio" style={{ fontWeight: Weight === 'junio' ? '500' : 'normal' }} onChange={() => setFontWeight('junio')} />
                                <Radio className="radio" value="julio" label="Julio" style={{ fontWeight: Weight === 'julio' ? '500' : 'normal' }} onChange={() => setFontWeight('julio')} />
                                <Radio className="radio" value="agosto" label="Agosto" style={{ fontWeight: Weight === 'agosto' ? '500' : 'normal' }} onChange={() => setFontWeight('agosto')} />
                                <Radio className="radio" value="septiembre" label="Septiembre" style={{ fontWeight: Weight === 'septiembre' ? '500' : 'normal' }} onChange={() => setFontWeight('septiembre')} />
                                <Radio className="radio" value="octubre" label="Octubre" style={{ fontWeight: Weight === 'octubre' ? '500' : 'normal' }} onChange={() => setFontWeight('octubre')} />
                                <Radio className="radio" value="noviembre" label="Noviembre" style={{ fontWeight: Weight === 'noviembre' ? '500' : 'normal' }} onChange={() => setFontWeight('noviembre')} />
                                <Radio className="radio" value="diciembre" label="Diciembre" style={{ fontWeight: Weight === 'diciembre' ? '500' : 'normal' }} onChange={() => setFontWeight('diciembre')} />
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="flex flex-col items-start gap-[5px] w-full">
                        <label className="font-semibold" htmlFor={selectId2}>Fuente a filtrar</label>
                        <div className="flex w-full gap-[10px]">
                            <Select className="w-[48%]" id={selectId2}>
                                <option>Natural</option>
                                <option>Juridico</option>
                            </Select>
                            <div className="flex items-center ">
                                <Label htmlFor="copias" className="font-bold check" style={{ paddingInlineEnd: "5px" }}>
                                    Numero de copias
                                </Label>
                                <Input className="max-w-[40px] num" type="number" id="copias" />
                            </div>
                        </div>
                    </div>

                </Card>
                <div className="flex  w-full justify-between gap-[10px] mt-[10px]">
                    <div className="flex gap-[10px]">
                        <button className="flex gap-[5px] font-semibold items-center px-[15px] text-white butom rounded-[2px] py-[5px] text-[12px]">Visualizar en pantalla</button>
                        <button className="flex butom2 gap-[5px] font-semibold items-center px-[7px] text-white rounded-[2px] py-[2px] text-[12px]">Enviar a impresora <FontAwesomeIcon icon={faPrint} /> </button>
                        <button className="flex gap-[5px] font-semibold items-center px-[15px] text-white butom3 rounded-[2px] py-[5px] text-[12px]">Enviar a excel <FontAwesomeIcon icon={faPaperPlane} /> </button>
                    </div>
                    <button onClick={handleCloset} style={{ backgroundColor: 'var(--colorPaletteRedForeground1)' }} className="flex gap-[5px] font-semibold items-center px-[7px] text-white rounded-[2px] py-[2px] text-[12px]">Cancelar</button>
                </div>
            </Card>

        </section>
    )
}
