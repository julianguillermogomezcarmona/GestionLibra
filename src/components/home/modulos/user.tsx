import { useSortable } from "@dnd-kit/sortable";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CSS } from "@dnd-kit/utilities";
import { ToggleButton, Checkbox, makeStyles, Card } from "@fluentui/react-components";
type anyProps = {
    user: any,
}
const useStyles = makeStyles({
    selected: {
        backgroundColor: 'blue', // Cambia el color de fondo cuando está seleccionado
        color: 'white', // Cambia el color del texto cuando está seleccionado
    },
});
function User({ user }: anyProps) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: user.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    const [isHovered, setIsHovered] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const handleToggle = () => {
        setIsSelected(!isSelected);
    };
    const styles = useStyles();
    return (
        <section className="">
            <Link to={`${user.route}`}
                style={style}
                ref={setNodeRef}
                {...attributes}
                {...listeners}
                onMouseEnter={() => setIsHovered(true)}
                className={`flex w-[100px] gap-[15px] flex-col items-center }`}


            // onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`text-center backdrop-blur-[5px] bg-white/5 rounded-[5px] p-[10px] shadow-md 
                        }`}>
                    <img
                        className={`h-[45px] w-[45px]`}
                        src={`./public/${user.image}`}
                        alt={user.image}
                    />
                </div>
                {/* <Checkbox id={user.id} className={`z-5 relative text truncate ...`} checked={isSelected} onClick={handleToggle} labelPosition="before" shape="circular" label={user.name} />; */}
                <p id={user.id} className={`z-5 relative text truncate`} >{user.name}</p>

            </Link>

        </section>
    );
}

export default User;

{/* <h1 className="relative z-10 font-bold text-white">{user.name}</h1> */ }
{/* <ToggleButton
                checked={isSelected}
                onClick={handleToggle}
                appearance="primary"
                className="mr-2 relative z-10"
            >
                Seleccionar
            </ToggleButton> */}