import { Card, Select, Label, Input, useId, Checkbox, RadioGroup, Radio, Field } from "@fluentui/react-components";
import { faPaperPlane, faPlus, faPrint, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Space, DatePicker } from "antd";
import type { CheckboxProps } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import '../style.css'
import { SearchBox } from "@fluentui/react-search-preview";
import { TableDepartment } from "./tableDepartment";
import { TableCity } from "./tableCity";
type modalProps = {
    showModal: () => void
}
export function NewCity({ showModal }: modalProps) {
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
    const code = useId("code");
    const name = useId("name");
    return (

        <section className="fixed z-[50] top-0 h-screen flex items-center w-full left-0 justify-center before:content-[''] before:bg-black before:absolute before:w-full before:h-screen before:top-0 before:left-0 before:opacity-20 before:z-0">
            <Card className="w-[35%] flex flex-col items-start">
                <div className="flex justify-between h-5 " style={{ color: 'var(--colorNeutralForegroundInverted)' }}>
                    <h3 className="px-[15px] py-[5px] top-0 absolute font-bold w-full left-0" style={{ backgroundColor: 'var(--colorNeutralForeground1)', }}>Nueva ciudad</h3>
                    <button className="absolute right-4 top-0 py-[5px]" onClick={handleCloset}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></button>
                </div>
                <Card className="w-full">
                    <div className="flex justify-between w-full">
                        <div className="">
                            <Label htmlFor={code} className="font-semibold" style={{ paddingInlineEnd: "5px" }}>
                                Codigo
                            </Label>
                            <Input className="w-[40px]" id={code} />
                        </div>
                        <div className="">
                            <Label htmlFor={name} className="font-semibold" style={{ paddingInlineEnd: "10px" }}>
                                Nombre
                            </Label>
                            <Input className="w-[270px]" id={name} />
                        </div>
                    </div>
                </Card>
                <div className="w-full flex justify-end gap-[5px]">
                    <button className="flex gap-[5px] font-semibold items-center px-[7px] text-white butom rounded-[2px] py-[5px] text-[12px]">Aceptar</button>
                    <button onClick={handleCloset} style={{ backgroundColor: 'var(--colorPaletteRedForeground1)' }} className="flex gap-[5px] font-semibold items-center px-[7px] text-white rounded-[2px] py-[2px] text-[12px]">Cancelar</button>
                </div>
            </Card>

        </section>
    )
}
