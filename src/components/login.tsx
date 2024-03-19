// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Inputs from "./input";
import ChexBox from "./chexbox";
import NavLogin from "./nav_login";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { LockClosed16Filled, PersonRegular } from "@fluentui/react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
export default function login() {
  // const styles = mergeStyles({});
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section className="grid bg-white grid-cols-2 h-screen w-full">
      <div className="bg-white">
        <div className="  flex flex-col items-center justify-center relative px-[15px] h-[100%]  rounded-[5px] overflow-hidden ">
          <form action="" className="flex flex-col items-center">
            <img
              src="/src/assets/logo.svg"
              className="h-[40px] w-[40px]"
              alt=""
            />
            <h2 className="font-bold text-black text-[20px]">
              Bienvenido de Gestion Libra
            </h2>
            <p className="text-gray-400 font-semibold">
              Introduzca sus credenciales
            </p>
            <div className="my-[20px] w-full  flex flex-col ">
              <Inputs
                from="user"
                id="user"
                label="Usuario"
                type="text"
                placeholder="Usuario007"
                icon={<FontAwesomeIcon icon={faUser} />}
              ></Inputs>
              <Inputs
                from="password"
                id="password"
                type="password"
                label="Contraseña"
                placeholder="*******"
                className="mt-[10px]"
                icon={<FontAwesomeIcon icon={faLock} />}
              ></Inputs>
              <div className="flex justify-between px-[5px] items-center">
                <ChexBox></ChexBox>
                <p className="text-[11px]  font-semibold text-black">
                  ¿Olvidaste la contraseña?
                </p>
              </div>
            </div>
            <Link
              to={"lobby"}
              className=" bg-[#0C3B5E] text-white text-center w-full py-[5px] rounded-[5px]"
            >
              Iniciar sesión
            </Link>
            <span className="flex text-[12px] mt-[20px] text-black">
              ¿No tienes una cuenta?{" "}
              <p className="text-indigo-700">Regístrate ahora</p>
            </span>
          </form>
        </div>
      </div>
      <div className=" flex flex-col  items-center justify-center">
        <NavLogin  ></NavLogin>
        {/* <img src="ruta-de-tu-imagen.jpg" alt="Imagen" /> */}
      </div>
    </section>
  );
}
