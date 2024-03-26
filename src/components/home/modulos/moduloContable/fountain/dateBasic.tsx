import { Card, Field, Textarea, TabList, makeStyles, Tab, Input, Button, Checkbox, RadioGroup, Radio, Label, useId, ToggleButton } from "@fluentui/react-components";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../style.css'
import { useState, useEffect } from "react";
import { Search12Regular } from "@fluentui/react-icons";
import { DatePicker, Space } from "antd";

export function DateBasic() {
    const [checked, setChecked] = useState<CheckboxProps["checked"]>(false);
    const [checked2, setChecked2] = useState<CheckboxProps2["checked2"]>(false);
    const inputId = useId("input");
    const name = useId("name");
    const only = useId("only");
    // const styles = useStyles();
    const mouths = [
        { name: 'Enero', id: 'enero' }, { name: 'Febrero', id: 'febrero' }, { name: 'Marzo', id: 'marzo' },
        { name: 'Abril', id: 'abril' }, { name: 'Mayo', id: 'mayo' }, { name: 'Julio', id: 'julio' },
        { name: 'Junio', id: 'junio' }, { name: 'Agosto', id: 'agosto' }, { name: 'Septiembre', id: 'septiembre' },
        { name: 'Octubre', id: 'octubre' }, { name: 'Noviembre', id: 'noviembre' }, { name: 'Diciembre', id: 'diciembre' }
    ]
    return (
        <Card>
            <div className="flex gap-[10px]">
                <div>
                    <Label htmlFor={inputId} className="font-semibold" style={{ paddingInlineEnd: "5px" }}>Fuente</Label>
                    <Input className="w-[40px]" id={inputId} />
                </div>
                <div>
                    <Label htmlFor={name} className="font-semibold" style={{ paddingInlineEnd: "5px" }}>
                        Nombre
                    </Label>
                    <Input className="w-[200px]" id={name} />
                </div>
                <Checkbox
                    checked={checked}
                    onChange={(ev, data) => setChecked(data.checked)}
                    label="Fuente es NIIF"
                    className="label font-bold"
                />
            </div>
            <Card className="">
                {/* <h3 className="font-semibold ">Consecutivos</h3> */}
                <Field className="font-semibold radio" label="Consecutivos">
                    <RadioGroup layout="horizontal" className="flex w-full items-center justify-between" defaultValue={'unico_anual'}>
                        <Radio value="unico_anual" label="Unico Anual" />
                        <Radio value="mensual" label="Mensual" />
                        <div className="flex items-center justify-end">
                            <Label htmlFor={only} style={{ paddingInlineEnd: "5px" }}>
                                Consecutivo unico
                            </Label>
                            <Input className="w-[50%]" type="number" id={only} />
                        </div>
                    </RadioGroup>
                </Field>
            </Card>
            <Card className="flex flex-col card2">
                <h3 className="font-semibold">Consecutivos Mensuales</h3>
                <Checkbox
                    checked={checked2}
                    onChange={(ev, data) => setChecked2(data.checked)}
                    label="Incluye numero del mes en el consecutivo"
                    className="label font-bold" />
                <div className="flex flex-wrap gap-x-[10px] justify-between gap-y-[2px]">
                    {mouths.map(item => (
                        <div className="flex  items-center justify-between w-[30%]">
                            <Label htmlFor={item.id} style={{ paddingInlineEnd: "5px" }}>
                                {item.name}
                            </Label>
                            <Input className="w-[50%] num"  type="number" id={item.id} />
                        </div>
                    ))}
                </div>
            </Card>
        </Card>
    )
}