import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type redirectLinkProps = {
  icon: any;
  title: string;
  description: string;
};
export default function RedirectLink({
  icon,
  title,
  description,
}: redirectLinkProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="text-white flex w-full border-b-[1px] gap-[15px] px-[10px] py-[5px] items-center   rounded-[2px] ">
        {icon}
        <h2 className="flex text-[15px] flex-col w-[95%]">
          {title}
          <span className="text-[10px]">{description}</span>
        </h2>
        <FontAwesomeIcon className="cursor-pointer" icon={faChevronRight}></FontAwesomeIcon>
      </div>
    </div>
  );
}
