import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove} from "@dnd-kit/sortable";
import { useState, useEffect } from "react";
import {User} from "./user";
function lobby() {
  const [people, setPeople] = useState([
    { id: 1, name: "Contabilidad", image: 'escribiendo.svg', route: '/contable' },
    { id: 2, name: "Inventario", image: 'inventario.svg', route: '/contable' },
    { id: 3, name: "Bancos", image: 'banco.svg', route: '/contable' },
    { id: 4, name: "Clientes", image: 'cliente.svg', route: '/contable' },
    { id: 5, name: "Ventas", image: 'ventas.svg', route: '/contable' },
    { id: 6, name: "Proveedores", image: 'proveedor.svg', route: '/contable' },
    { id: 7, name: "Cuentas", image: 'cuentas.svg', route: '/contable' },
  ]);
  useEffect(() => {
    // Recuperar las posiciones guardadas desde el almacenamiento local
    const savedPositions = localStorage.getItem("savedPositions");
    if (savedPositions) {
      setPeople(JSON.parse(savedPositions));
    }
  }, []);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    console.log("active", active.id);
    console.log("over", over.id);

    if (!active.id !== over.id) {
      setPeople((people) => {
        const oldIndex = people.findIndex((person) => person.id === active.id);
        const newIndex = people.findIndex((person) => person.id === over.id);
        const newPeople = arrayMove(people, oldIndex, newIndex);
        console.log(arrayMove(people, oldIndex, newIndex))
        localStorage.setItem("savedPositions", JSON.stringify(newPeople));
        return newPeople;;
      });
    }
  }
  return (
    <div className="flex flex-col h-screen custom-scrollbar  relative z-50">
      <div className="w-full h-[90%]  flex flex-col gap-[20px] ">
        <div className="flex w-full flex-col h-[800px] gap-[20px] ">
          <div className="flex flex-col px-[150px] items-center ">
            <div className=" flex flex-wrap gap-9 mt-[50px] w-[80%] h-[50%] ">
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}>
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
        </div>
      </div>
    </div>
  );
}

export default lobby;
