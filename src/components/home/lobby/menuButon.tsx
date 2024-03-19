import { Button, Card } from "@fluentui/react-components";
import { CalendarAssistant24Regular } from "@fluentui/react-icons/lib/fonts";
import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import './lbby.css'
type props = {
  menuOpen: boolean
}
export default function MenuButton({ menuOpen }: props) {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };
  const transitions = useTransition(menuOpen, {
    from: { opacity: 0, transform: "translateY(-100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(-100%)" },
  });
  // const darkenBackground = {
  //   //  / Asegura que esté por encima del contenido pero detrás del menú
  // };
  return (
    <div className="">
      {/* <Button appearance="transparent"
        className={`text-white px-4 py-2 rounded z-50  menu`}
        onClick={toggleMenu}
      >
        Abrir Menú
      </Button> */}
      {transitions(
        (styles, item) =>
          item && (
            <div className="">

              <animated.div style={{
                ...styles,
                position: "fixed",
                // transformOrigin: "top", // Define el origen de la transformación
                // transform: "translateY(10%)", // Aplica la transformación translateY
                top: "10%", // Ajusta la posición vertical del menú
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#ffffff",
                // borderBottom: "1px solid gray",
                padding: "16px",
                overflowY: "auto",
                zIndex: 10,
              }} >
                <animated.div style={styles} className="flex flex-wrap justify-between gap-[50px] pt-[15px] px-[10%] w-full">
                  <div className="w-[20%]">
                    <h2 className="text-lg font-bold mb-2 border-b-2 border-1 text-1">Ventas</h2>
                    <ul className="flex flex-col gap-[5px] font-semibold">
                      <li>CRM</li>
                      <li>Ventas</li>
                      <li>Punto de venta - Tienda</li>
                      <li>Punto de venta - Restaurante</li>
                      <li>Suscripciones</li>
                      <li>Alquiler</li>
                      {/* Agregar más opciones según sea necesario */}
                    </ul>
                  </div>
                  <div className="w-[20%]">
                    <h2 className="text-lg font-bold mb-2 border-b-2 text-green-400 border-green-400">Contabilidad</h2>
                    <ul className="flex flex-col gap-[5px] font-semibold">
                      <li>Facturación</li>
                      <li>Gastos</li>
                      <li>Hoja de cálculo</li>
                      <li>Documentos</li>
                      <li>Firma Electronica</li>
                      <li>Finanzas</li>
                      {/* Agregar más opciones según sea necesario */}
                    </ul>
                  </div>
                  <div className="w-[20%]">
                    <h2 className="text-lg font-bold mb-2 border-b-2 border-orange-400 text-orange-400">Recursos humanos</h2>
                    <ul className="flex flex-col gap-[5px] font-semibold">
                      <li>Empleados</li>
                      <li>Reclutamiento</li>
                      <li>Tiempo personal</li>
                      <li>Valoraciones</li>
                      <li>Referencias</li>
                      <li>Equipo laboral</li>
                      {/* Agregar más opciones según sea necesario */}
                    </ul>
                  </div>
                  <div className="w-[20%]">
                    <h2 className="text-lg font-bold mb-2 border-b-2 text-yellow-400 border-yellow-400">Inventarios</h2>
                    <ul className="flex flex-col gap-[5px] font-semibold">
                      <li>Inventario</li>
                      <li>Fabricación</li>
                      <li>Compra</li>
                      <li>Mantenimiento</li>
                      <li>Calidad</li>
                      <li>Devoluciones</li>
                      {/* Agregar más opciones según sea necesario */}
                    </ul>
                  </div>
                  <div className="w-[20%]">
                    <h2 className="text-lg font-bold mb-2 border-b-2 text-red-400 border-red-400">Ventas</h2>
                    <ul className='flex flex-col gap-[5px] font-semibold'>
                      <li>
                        CRM
                      </li>
                      <li>
                        Ventas
                      </li>
                      <li>
                        Punto de venta - Tienda
                      </li>
                      <li>
                        Punto de venta - Restaurante
                      </li>
                      <li>
                        Suscripciones
                      </li>
                      <li>
                        Alquiler
                      </li>
                      {/* Agregar más opciones según sea necesario */}
                    </ul>
                  </div>

                  <div className="w-[20%]">
                    <h2 className="text-lg font-bold mb-2 border-b-2 border-indigo-400 text-indigo-400">Ventas</h2>
                    <ul className="flex flex-col gap-[5px] font-semibold">
                      <li>CRM</li>
                      <li>Ventas</li>
                      <li>Punto de venta - Tienda</li>
                      <li>Punto de venta - Restaurante</li>
                      <li>Suscripciones</li>
                      <li>Alquiler</li>
                      {/* Agregar más opciones según sea necesario */}
                    </ul>
                  </div>
                  <div className="w-[20%]">
                    <h2 className="text-lg font-bold mb-2 border-b-2 border-emerald-400 text-emerald-400">Ventas</h2>
                    <ul className="flex flex-col gap-[5px] font-semibold">
                      <li>CRM</li>
                      <li>Ventas</li>
                      <li>Punto de venta - Tienda</li>
                      <li>Punto de venta - Restaurante</li>
                      <li>Suscripciones</li>
                      <li>Alquiler</li>
                      {/* Agregar más opciones según sea necesario */}
                    </ul>
                  </div>
                  <div className="w-[20%]">
                    <h2 className="text-lg font-bold mb-2 border-b-2 border-purple-400 text-purple-400">Ventas</h2>
                    <ul className="flex flex-col gap-[5px] font-semibold">
                      <li>CRM</li>
                      <li>Ventas</li>
                      <li>Punto de venta - Tienda</li>
                      <li>Punto de venta - Restaurante</li>
                      <li>Suscripciones</li>
                      <li>Alquiler</li>
                      {/* Agregar más opciones según sea necesario */}
                    </ul>
                  </div>
                </animated.div>
                {/* <animated.div style={styles} className="flex justify-around items-center">
            
          </animated.div> */}
              </animated.div>
            </div>

          ))}
    </div >
  );
}
