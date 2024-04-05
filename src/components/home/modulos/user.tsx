import { useSortable } from "@dnd-kit/sortable";
import { Link } from "react-router-dom";
import { CSS } from "@dnd-kit/utilities";
type anyProps = {
    user: any,
}
export function User({ user }: anyProps) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: user.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (
        <section className="">
            <Link to={`${user.route}`}
                style={style}
                ref={setNodeRef}
                {...attributes}
                {...listeners}
                className={`flex w-[100px] gap-[15px] flex-col items-center `}>
                <div
                    className={`text-center backdrop-blur-[5px] bg-white/5 rounded-[5px] p-[10px] shadow-md 
                        }`}>
                    <img
                        className={`h-[45px] w-[45px]`}
                        src={`./public/${user.image}`}
                        alt={user.image} />
                </div>
                <p id={user.id} className={`z-5 relative text truncate`} >{user.name}</p>
            </Link>
        </section>
    );
}
