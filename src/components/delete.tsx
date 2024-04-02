import { useEffect } from "react";
import './component.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@fluentui/react-components";
type modalProps = {
    showModal: () => void
}
export function Delete({ showModal }: modalProps) {
    function handleClosetDelete() {
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
        <section className=" flex fixed top-0 left-0 z-50 items-center justify-center h-screen w-full">
            <div
                id="modal"
                className="z-[1000] w-[50%] h-screen flex justify-center items-center flex-col after:content-[''] after:bg-black after:w-full after:h-screen after:absolute after:block after:opacity-20">
                <div className="z-10 flex justify-center gap-[10px] items-center fixed flex-col w-[23%] rounded-[5px]">
                    <Card>
                        {/* <!--modal header--> */}
                        <div className="w-full pt-[20px] flex justify-center">
                            <FontAwesomeIcon className="text-red-500 animate-bounce-slow text-[80px] text-center w-full " icon={faCircleExclamation}></FontAwesomeIcon>
                            {/* <img className="h-[130px]" src="/public/warning.gif" alt="warning" /> */}
                        </div>

                        {/* <!--modal body--> */}
                        <div className="text-[13px] flex flex-col gap-2 w-full">
                            <h4 className="text-[25px] font-bold text-center">¿Estás seguro?</h4>
                            <p className="z-10 text-gray-600 text-center px-[20px]">
                                Estás a punto de eliminar esta información, si lo haces ya no podrás recuperarla
                            </p>
                        </div>

                        {/* <!--modal footer--> */}
                        <div className="text-[17px] font-[semibol] w-full flex gap-5 justify-center">
                            <button onClick={handleClosetDelete} className="flex gap-[5px] font-semibold items-center px-[15px] text-white butom rounded-[2px] py-[5px] text-[12px]">Cancelar</button>
                            <button style={{ backgroundColor: 'var(--colorPaletteRedForeground1)' }} className="flex gap-[5px] font-semibold items-center px-[7px] text-white rounded-[2px] py-[2px] text-[12px]">Eliminar</button>
                        </div>
                    </Card>
                </div>
            </div >
        </section >
    )
}