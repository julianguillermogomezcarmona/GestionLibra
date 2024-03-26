import { Card, Field, Textarea, TabList, makeStyles, Tab, Input, Button, Checkbox, RadioGroup, Radio, Label, useId, ToggleButton } from "@fluentui/react-components";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'
import { useState, useEffect } from "react";
import { Search12Regular } from "@fluentui/react-icons";
import { DatePicker, Space } from "antd";
import { TableNewTransation } from "./tableNewTransation";
import { DateBasic } from "./fountain/dateBasic";
// import { mount } from "sortablejs";
// import { } from "antd";
type modalProps = {
    showModal: () => void
}
const useStyles = makeStyles({
    root: {
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        // ...shorthands.padding("50px", "20px"),
        rowGap: "5px",
    },
});
export function NewFountain({ showModal }: modalProps) {
    const [activeTab, setActiveTab] = useState("Datos_basicos");
    // const [checked, setChecked] = useState<CheckboxProps["checked"]>(false);
    // const [checked2, setChecked2] = useState<CheckboxProps2["checked2"]>(false);
    // const [checked2, setChecked2] = useState<CheckboxProps2["checked2"]>(true);
    function handleCloset2() {
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
    // const inputId = useId("input");
    // const name = useId("name");
    // const only = useId("only");
    const styles = useStyles();
    // const mouths = [
    //     { name: 'Enero', id: 'enero' }, { name: 'Febrero', id: 'febrero' }, { name: 'Marzo', id: 'marzo' },
    //     { name: 'Abril', id: 'abril' }, { name: 'Mayo', id: 'mayo' }, { name: 'Julio', id: 'julio' },
    //     { name: 'Junio', id: 'junio' }, { name: 'Agosto', id: 'agosto' }, { name: 'Septiembre', id: 'septiembre' },
    //     { name: 'Octubre', id: 'octubre' }, { name: 'Noviembre', id: 'noviembre' }, { name: 'Diciembre', id: 'diciembre' }
    // ]
    return (
        <section className="fixed z-50 top-0 h-screen flex items-center w-full left-0 justify-center px-[220px] before:content-[''] before:bg-black before:absolute before:w-full before:h-screen before:top-0 before:left-0 before:opacity-20 before:z-0">
            <Card className="w-[65%]">
                <div className="flex justify-between h-5 " style={{ color: 'var(--colorNeutralForegroundInverted)' }}>
                    <h3 className="px-[15px] py-[5px] top-0 absolute font-bold w-full left-0" style={{ backgroundColor: 'var(--colorNeutralForeground1)', }} >Nueva fuente</h3>
                    <button className="absolute right-4 top-0 py-[5px]" onClick={handleCloset2}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></button>
                </div>
                <div className="w-full">
                    <div className={styles.root}>
                        <TabList defaultSelectedValue="Datos_basicos">
                            <Tab onClick={() => setActiveTab("Datos_basicos")} className="font-simbold tab" value="Datos_basicos">Datos Básicos</Tab>
                            <Tab onClick={() => setActiveTab("Modulos")} className="font-simbold tab" value="Modulos">Módulos</Tab>
                        </TabList>
                    </div>
                    {activeTab === "Datos_basicos" && <DateBasic />}
                    <div className="flex justify-end w-full gap-[10px] mt-[10px]">
                        <button className="flex gap-[5px] font-semibold items-center px-[15px] text-white butom rounded-[2px] py-[5px] text-[12px]">Aceptar</button>
                        <button onClick={handleCloset2} style={{ backgroundColor: 'var(--colorPaletteRedForeground1)' }} className="flex gap-[5px] font-semibold items-center px-[7px] text-white rounded-[2px] py-[2px] text-[12px]">Cancelar</button>
                    </div>
                </div>
            </Card>
        </section>
    )
}