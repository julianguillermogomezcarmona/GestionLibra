import {
  faComputer,
  faGlobe,
  faPeopleGroup,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import RedirectLink from "./rediret";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function NavLogin({ image }: any) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center w-full" >

      <img onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? 'block' : 'none' }} className="absolute top-0 left-0 z-10" src="/public/Fondo_login.svg" alt="fondo_login" />
      <div className="z-30 relative flex flex-col gap-[20px]">

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
    </section >

  );
}
