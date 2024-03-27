import { useEffect } from "react";
import './component.css'
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
        <section className="flex fixed top-0 left-0 z-50 items-center justify-center h-screen w-full">
            <div
                id="modal"
                className="z-[1000] w-[50%] h-screen flex justify-center items-center flex-col after:content-[''] after:bg-slate-900 after:w-full after:h-screen after:absolute after:block after:opacity-70">
                <div className="z-10 flex justify-center gap-[25px] items-center fixed flex-col w-[25%] p-[10px] bg-white rounded-[10px]">
                    {/* <!--modal header--> */}
                    <div className="w-full flex justify-center">
                        {/* <!-- <fa className="text-red-500 text-[90px] text-center w-full animate-pulse-slow" icon="triangle-exclamation"></fa> --> */}
                        <img className="h-[130px]" src="./warning.gif" alt="warning" />
                    </div>

                    {/* <!--modal body--> */}
                    <div className="text-[13px] flex flex-col gap-2 w-full">
                        <h4 className="text-[25px] font-bold text-center">¿Estás seguro?</h4>
                        <p className="z-10 text-gray-600 text-center px-[20px]">
                            ¿Estás seguro de que deseas eliminarlo? Esta acción es
                            irreversible y se perderán todos los datos asociados".
                        </p>
                    </div>

                    {/* <!--modal footer--> */}
                    <div className="text-[17px] font-[semibol] w-full flex gap-5 justify-center">
                        <button onClick={handleClosetDelete} className="butom px-5 py-[5px] text-white rounded-[2px] focus:ring-2">
                            Cancelar
                        </button>
                        <button style={{ backgroundColor: 'var(--colorPaletteRedForeground1)' }} className="px-5 py-[5px] text-white rounded-[2px] focus:ring-2">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div >
        </section >
    )
}