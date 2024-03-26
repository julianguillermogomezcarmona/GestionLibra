import { Card, Field, Textarea, Select, TabList, makeStyles, Tab, Input, Button, Checkbox, RadioGroup, Radio, Label, useId, ToggleButton } from "@fluentui/react-components";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../style.css'
import { useState, useEffect } from "react";
import { Search12Regular } from "@fluentui/react-icons";
import { DatePicker, Space } from "antd";

import type { SelectProps } from "@fluentui/react-components";
type modalProps = {
    showModal: () => void
}
export function NewTerceros({ showModal }: modalProps) {
    function handleCloset3() {
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
    const departament = useId("input");
    const direction = useId("direction");
    const code = useId("code");
    const phone = useId("phone");
    const city = useId("city");
    const nationality = useId("nationality");
    const name = useId("name");
    const selectId = useId("");

    return (
        <section className="fixed z-50 top-0 h-screen flex items-center w-full left-0 justify-center px-[220px] before:content-[''] before:bg-black before:absolute before:w-full before:h-screen before:top-0 before:left-0 before:opacity-20 before:z-0">
            <Card className="w-[53%]">
                <div className="flex justify-between h-5 " style={{ color: 'var(--colorNeutralForegroundInverted)' }}>
                    <h3 className="px-[15px] py-[5px] top-0 absolute font-bold w-full left-0" style={{ backgroundColor: 'var(--colorNeutralForeground1)', }} >Nuevo Tercero</h3>
                    <button className="absolute right-4 top-0 py-[5px]" onClick={handleCloset3}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></button>
                </div>
                <Card style={{ rowGap: '10px' }}>
                    <div className="flex w-full items-center justify-between">
                        <Label htmlFor={name} className="font-semibold" style={{ paddingInlineEnd: "5px" }}>
                            Nombre
                        </Label>
                        <Input className="w-[345px]" id={name} />
                    </div>
                    <div className="w-full flex  justify-between items-center">
                        <Label htmlFor={direction} className="font-semibold" style={{ paddingInlineEnd: "5px" }}>
                            Dirección
                        </Label>
                        <Input className="w-[345px]" id={direction} />
                    </div>
                    <div className="flex justify-between">
                        <div className="">
                            <Label htmlFor={code} className="font-semibold" style={{ paddingInlineEnd: "51px" }}>
                                Codigo
                            </Label>
                            <Input className="w-[200px]" id={code} />
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <label htmlFor={selectId}>Tipo</label>
                            <Select className="w-[100%]" id={selectId}>
                                <option>Natural</option>
                                <option>Juridico</option>
                            </Select>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">
                            <Label htmlFor={phone} className="font-semibold" style={{ paddingInlineEnd: "43px" }}>
                                Telefono
                            </Label>
                            <Input className="w-[120px]" id={phone} />
                        </div>
                        <div className="">
                            <Label htmlFor={nationality} className="font-semibold" style={{ paddingInlineEnd: "10px" }}>
                                Nacionalidad
                            </Label>
                            <Input className="w-[120px]" id={nationality} />
                        </div>
                    </div>
                    <div className="w-[100%] justify-between flex items-center">
                        <Label className="font-semibold" htmlFor={departament} style={{ paddingInlineEnd: "" }}>
                            <span className="">Departamento</span>
                        </Label>
                        <div className="flex">
                            <div className="flex relative mr-[5px]">
                                <Input className="w-[70px] " id={departament} />
                                <Button className="absolute right-0 h-8" appearance="transparent" icon={<Search12Regular />}></Button>
                            </div>
                            <Input disabled className="w-[270px] px-[2px]"></Input>
                        </div>
                    </div>
                    <div className="w-[100%] justify-between flex items-center">
                        <Label className="font-semibold" htmlFor={city} style={{ paddingInlineEnd: "" }}>
                            <span className="">Ciudad</span>
                        </Label>
                        <div className="flex">
                            <div className="flex relative mr-[5px]">
                                <Input className="w-[70px] " id={city} />
                                <Button className="absolute right-0 h-8" appearance="transparent" icon={<Search12Regular />}></Button>
                            </div>
                            <Input disabled className="w-[270px] px-[2px]"></Input>
                        </div>
                    </div>
                </Card>
                <div className="flex mt-[5px] justify-end w-full gap-[10px]">
                    <button className="flex gap-[5px] font-semibold items-center px-[15px] text-white butom rounded-[2px] py-[5px] text-[12px]">Aceptar</button>
                    <button onClick={handleCloset3} style={{ backgroundColor: 'var(--colorPaletteRedForeground1)' }} className="flex gap-[5px] font-semibold items-center px-[7px] text-white rounded-[2px] py-[2px] text-[12px]">Cancelar</button>
                </div>
            </Card>
        </section>
    )
}