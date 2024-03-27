import { useState } from "react";
import { ReclasificationThird } from "../reclasificartionThird";
import { Terceros } from "../terceros";
import { NewTerceros } from "./newTercero";

export function GruopTercero() {
    const [showModal3, setShowModal3] = useState(false);
    const toggleComponente3 = () => {
      setShowModal3(!showModal3);
      document.body.style.overflow = 'hidden';
    };
    const handleCloseModal3 = () => {
      // console.log(showModal);
      setShowModal3(!showModal3);
      // console.log(showModal);
      document.body.style.overflow = 'auto';
    };
    return (
        <section className="flex h-screen items-center gap-[15px]">
            <ReclasificationThird></ReclasificationThird>
            <Terceros newTercero={toggleComponente3}></Terceros>
            {showModal3 ? <NewTerceros showModal={handleCloseModal3}></NewTerceros> : ""}
        </section>
    )
}