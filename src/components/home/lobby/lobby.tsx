// import React from "react";
// import {
//   useState
// } from "react";
// import type {
//   DNDPlugin
// } from "@formkit/drag-and-drop";
// import {
//   useDragAndDrop
// } from "@formkit/drag-and-drop/react";
// import {
//   parents,
//   addEvents
// } from "@formkit/drag-and-drop";
// import './lbby.css'
// import { Button, Checkbox, ToggleButton } from "@fluentui/react-components";
// export default function lobby() {
//   const [
//     dragStatus,
//     setDragStatus] =
//     useState("Not dragging");
//   const [
//     dragCount,
//     setDragCount] =
//     useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   
//   const handleDragStart = () => {
//     setIsDragging(true);
//   };

//   const handleDragEnd = () => {
//     setIsDragging(false);
//   };
//   return (
//     <div className="bg-1 w-full h-screen flex flex-col gap-[15px] py-[50px] items-center">
//       <h1 className="font-bold text-[40px]">Elige los módulos para tu negocio </h1>
//       <div ref={parent} className="flex w-full justify-center gap-[10px]">
//         {items.map((item, index) => {
//           return <div
//             className={`cursor-pointer w-[200px] h-[100px] bg-white rounded-[5px] ${isDragging ? 'dragging' : ''}`}
//             key={index}>
//             <figure className="flex flex-col h-[100%] ">
//               <div className={`h-[50%] w-full bg-cover bg-center rounded-t-[5px]`} style={{ backgroundImage: `url(/${item.image}.jpg)` }}>
//                 {/* <img className="h-[100%] w-full rounded-[5px]" src={`/public/`} alt={item.title} /> */}

//               </div>
//               <span className="flex h-[50%] flex-col px-[10px]">
//                 <span className="text-1 font-bold text-[10px] w-full text-start">{item.title}</span>
//                 {/* <ToggleButton id={item.title} className="font-bold">Agregar</ToggleButton> */}
//                 <div className="flex items-center h-[50%] gap-[5px]">
//                   <label htmlFor={item.title} className="text-[13px] font-semibold">Modulo {item.title}</label>
//                   <button className="px-[5px] text-[10px] text-white rounded-[5px] hover:bg-[#38b0e7] bg-1" id={item.title} >Agregar</button>
//                 </div>
//               </span>
//             </figure>
//           </div>;
//         })}
//       </div>
//     </div>

//   );

// }
// import React, { useState } from "react";
// import { ReactSortable, Sortable,  } from "react-sortablejs";
// import { MultiDrag } from "sortablejs";
// import { Swap } from "sortablejs";
// // mount whatever plugins you'd like to. These are the only current options.
// Sortable.mount(new MultiDrag(), new Swap());

// export function lobby(){
//   const [state, setState] = useState([
//     { id: 1, name: "shrek" },
//     { id: 2, name: "fiona" },
//   ]);

//   return (
//     <ReactSortable
//       multiDrag // enables mutidrag
//       // OR
//       swap // enables swap
//     >
//       {state.map((item) => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </ReactSortable>
//   );
// };
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, horizontalListSortingStrategy, rectSortingStrategy, rectSwappingStrategy, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import MenuButton from "./menuButon";
import User from "./user";
import Header from "./header";

function lobby() {
  const [people, setPeople] = useState([
    { id: 1, name: "Transacciones", image: 'bg-contables' },
    { id: 2, name: "Emisión de cheques", image: 'bg-contables' },
    { id: 3, name: "Reclasificar terceros", image: 'bg-contables' },
    { id: 4, name: "Conciliación", image: 'bg-contables' },
    { id: 5, name: "Gastos", image: 'bg-contables' },
  ]);
  const [people2, setPeople2] = useState([
    { id: 1, name: "Contabilidad", image: 'bg-ventas' },
    { id: 2, name: "Banco", image: 'bg-ventas' },
    { id: 3, name: "Inventario", image: 'bg-ventas' },
    { id: 4, name: "Cuentas", image: 'bg-ventas' },
    { id: 5, name: "Clientes", image: 'bg-ventas' },
  ]);
  const [people3, setPeople3] = useState([
    { id: 1, name: "Contabilidad", image: 'bg-inventario' },
    { id: 2, name: "Banco", image: 'bg-inventario' },
    { id: 3, name: "Inventario", image: 'bg-inventario' },
    { id: 4, name: "Cuentas", image: 'bg-inventario' },
    { id: 5, name: "Clientes", image: 'bg-inventario' },
  ]);
  const [people4, setPeople4] = useState([
    { id: 1, name: "Contabilidad", image: 'bg-bancos' },
    { id: 2, name: "Banco", image: 'bg-bancos' },
    { id: 3, name: "Inventario", image: 'bg-bancos' },
    { id: 4, name: "Cuentas", image: 'bg-bancos' },
    { id: 5, name: "Clientes", image: 'bg-bancos' },
  ]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    console.log("active", active.id);
    console.log("over", over.id);

    if (!active.id !== over.id) {
      setPeople((people) => {
        const oldIndex = people.findIndex((person) => person.id === active.id);
        const newIndex = people.findIndex((person) => person.id === over.id);

        console.log(arrayMove(people, oldIndex, newIndex));
        return arrayMove(people, oldIndex, newIndex);
      });
    }
  }
  const handleDragEnd2 = (event: any) => {
    const { active, over } = event;
    console.log("active", active.id);
    console.log("over", over.id);

    if (!active.id !== over.id) {
      setPeople2((people) => {
        const oldIndex = people2.findIndex((person) => person.id === active.id);
        const newIndex = people2.findIndex((person) => person.id === over.id);

        console.log(arrayMove(people, oldIndex, newIndex));
        return arrayMove(people, oldIndex, newIndex);
      });
    }
    console.log("drag end");
  };
  const handleDragEnd3 = (event: any) => {
    const { active, over } = event;
    console.log("active", active.id);
    console.log("over", over.id);

    if (!active.id !== over.id) {
      setPeople3((people) => {
        const oldIndex = people3.findIndex((person) => person.id === active.id);
        const newIndex = people3.findIndex((person) => person.id === over.id);

        console.log(arrayMove(people, oldIndex, newIndex));
        return arrayMove(people, oldIndex, newIndex);
      });
    }
    console.log("drag end");
  };
  const handleDragEnd4 = (event: any) => {
    const { active, over } = event;
    console.log("active", active.id);
    console.log("over", over.id);

    if (!active.id !== over.id) {
      setPeople4((people) => {
        const oldIndex = people4.findIndex((person) => person.id === active.id);
        const newIndex = people4.findIndex((person) => person.id === over.id);

        console.log(arrayMove(people, oldIndex, newIndex));
        return arrayMove(people, oldIndex, newIndex);
      });
    }
    console.log("drag end");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex flex-col h-screen custom-scrollbar overflow-scroll relative z-50">
      <div className="h-[10%] ">
        <Header toggleMenu={toggleMenu} ></Header>
      </div>
      <div className="w-full h-[90%]  flex flex-col gap-[20px] ">
        <h1 className="text-[40px] text-1 font-bold text-center mb-[20px] pt-[35px] flex flex-col gap-4 ">Elige tus modulos deseados <p className="text-[13px]">Prueba cada uno de ellos y elige el mejor</p></h1>
        <div className="flex flex-col h-[800px] gap-[20px] px-[100px]">
          <div className="flex flex-col px-[150px] ">
            <h2 className="font-semibold inter text-[#2e1c3d]">CONTABLE</h2>
            <div className=" flex flex-wrap w-full h-[50%] ">
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={people}
                // strategy={horizontalListSortingStrategy}
                >
                  {people.map((user) => (
                    <User key={user.id} user={user} />
                  ))}
                </SortableContext>

              </DndContext>

            </div>
          </div>
          <div className="flex flex-col px-[150px] ">
            <h2 className="font-semibold inter text-[#2e1c3d]">VENTAS</h2>
            <div className=" flex flex-wrap w-full  h-[50%] ">
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd2}
              >
                <SortableContext
                  items={people2}
                // strategy={horizontalListSortingStrategy}
                >
                  {people2.map((user) => (
                    <User key={user.id} user={user} />
                  ))}
                </SortableContext>

              </DndContext>

            </div>
          </div>
          <div className="flex flex-col px-[150px] ">
            <h2 className="font-semibold inter text-[#2e1c3d]">INVENTARIO</h2>
            <div className=" flex flex-wrap w-full h-[50%] ">
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd3}
              >
                <SortableContext
                  items={people3}
                // strategy={horizontalListSortingStrategy}
                >
                  {people3.map((user) => (
                    <User key={user.id} user={user} />
                  ))}
                </SortableContext>

              </DndContext>

            </div>
          </div>
          <div className="flex flex-col px-[150px] ">
            <h2 className="font-semibold inter text-[#2e1c3d]">BANCOS</h2>
            <div className=" flex flex-wrap w-full h-[50%] ">
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd4}
              >
                <SortableContext
                  items={people4}
                // strategy={horizontalListSortingStrategy}
                >
                  {people4.map((user) => (
                    <User key={user.id} user={user} />
                  ))}
                </SortableContext>

              </DndContext>

            </div>
          </div>

        </div>
      </div>
      <MenuButton menuOpen={isMenuOpen}></MenuButton>
    </div>
  );
}

export default lobby;
