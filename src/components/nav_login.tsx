import {
  faComputer,
  faGlobe,
  faPeopleGroup,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import RedirectLink from "./rediret";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NavLogin() {
  return (
    <div className=" flex flex-col gap-[20px]">
      <RedirectLink
        icon={
          <FontAwesomeIcon
            className="bg-gray-700 rounded-[3px] text-start p-[4px] text-[17px]"
            icon={faComputer}
          />
        }
        title="Conozca más sobre Gestión libra"
        description="Software Gestión libra"
      ></RedirectLink>

      <RedirectLink
        icon={
          <FontAwesomeIcon
            className="bg-gray-700 rounded-[3px] p-[4px] text-[22px]"
            icon={faGlobe}
          />
        }
        title="Conozca más sobre MicroExpress"
        description="MicroExpress sitio oficial"
      ></RedirectLink>
      <RedirectLink
        icon={
          <FontAwesomeIcon
            className="bg-gray-700 rounded-[3px] p-[4px] text-[25px]"
            icon={faSquarePhone}
          />
        }
        title="Atención al cliente"
        description="Escribanos si tiene alguna duda o inquietud"
      ></RedirectLink>
      <RedirectLink
        icon={
          <FontAwesomeIcon
            className="bg-gray-700 rounded-[3px] p-[4px] text-[18px]"
            icon={faPeopleGroup}
          />
        }
        title="Conoce más sobre nuestro equipo"
        description="Equipó de desarrollo y administrativo MicroExpress"
      ></RedirectLink>
    </div>
  );
}
