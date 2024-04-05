import { Button, Menu, MenuTrigger, MenuButton, ToggleButton, MenuItem, MenuList, MenuPopover, makeStyles } from "@fluentui/react-components"
import './lbby.css'
import { Link } from "react-router-dom"
import { useCallback, useState } from "react";

const useStyles = makeStyles({
    wrapper: {
        width: '3500px'
    },
});
type menuProps = {
    toggleMenu: any
}

export default function header({ toggleMenu }: menuProps) {
    const [checked1, setChecked1] = useState(false);
    const toggleChecked = useCallback(
        (buttonIndex: number) => {
            switch (buttonIndex) {
                case 1:
                    setChecked1(!checked1);
                    toggleMenu()
                    break;

            }
        },
        [checked1,]
    );

    const styles = useStyles();
    return (
        <section className="">
            <header className="fixed h-[10%] z-50  w-full  bg-[#2e1c3d] p-[10px] flex items-center justify-around">
                <img className="h-[100%]" src="/public/logo.svg" alt="" />
                <div className="flex ">
                    <ToggleButton className="menu px-4 py-2 rounded z-50 "
                        appearance="transparent"
                        checked={checked1}
                        // icon={checked1 ? <CalendarMonth /> : <CalendarMonthRegular />}
                        onClick={() => toggleChecked(1)}
                    >
                        Aplicativos
                    </ToggleButton>                  <Button appearance="transparent" className="h-[70%] text">Precios</Button>
                    <Button appearance="transparent" className="h-[70%] text">Contacto</Button>
                </div>
                <Link to="/home"> <Button appearance="secondary" className="h-[70%] butom">Pruebalo gratis</Button></Link>
            </header>

        </section>

    )
}