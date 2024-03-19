import { useSortable } from "@dnd-kit/sortable";
import { useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { ToggleButton, Checkbox, makeStyles } from "@fluentui/react-components";
type anyProps = {
    user: any,
}
const useStyles = makeStyles({
    // wrapper: {
    //     color: 'red',
    // },
});
function User({ user }: anyProps) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: user.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    const [isSelected, setIsSelected] = useState(false);
    const handleToggle = () => {
        setIsSelected(!isSelected);
    };
    const styles = useStyles();
    return (
        <div
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className={`${user.image} h-[50px] justify-center items-center text-center relative bg-cover bg-center m-[5px] p-4 w-[201px] flex  rounded-[5px] shadow-md`}
        >
            <div className="bg-black absolute  top-0 left-0 h-[100%] opacity-35 w-full z-1 rounded-[5px]">
            </div>
            <Checkbox id={user.id} className={`z-5 relative text truncate ...`} checked={isSelected} onClick={handleToggle} labelPosition="before" shape="circular" label={user.name} />;

        </div>
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