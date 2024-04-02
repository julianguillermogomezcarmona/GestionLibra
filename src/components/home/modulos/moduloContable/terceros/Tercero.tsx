import { useState } from "react";
import { ReclasificationThird } from "../reclasificartionThird";
import { Terceros } from "../terceros";
import { NewTerceros } from "./newTercero";
import { Visualization } from "../../visualizacion";

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
    const [showVisualitation, setShowVisualitation] = useState(false);
    const toggleComponenteVisualitation = () => {
        setShowVisualitation(!showVisualitation);
        document.body.style.overflow = 'hidden';
    };
    const handleCloseVisualitation = () => {
        // console.log(showModal);
        setShowVisualitation(!showVisualitation);
        // console.log(showModal);
        document.body.style.overflow = 'auto';
    };
    return (
        <section className="flex items-center gap-[15px]">
            <ReclasificationThird></ReclasificationThird>
            <Terceros visualization={toggleComponenteVisualitation} newTercero={toggleComponente3}></Terceros>
            {showVisualitation ? <Visualization showModal={handleCloseVisualitation}></Visualization> : ""}
            {showModal3 ? <NewTerceros showModal={handleCloseModal3}></NewTerceros> : ""}
        </section>
    )
}