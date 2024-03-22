// import { Menu,MenuButton,MenuTrigger,MenuPopover,MenuList,MenuItem,makeStyles } from "@fluentui/react-components"import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
// ,
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const useStyles = makeStyles({
//     buton: {
//       minWidth: "0",
//     },
//     switch: {
//       //  ":root":
//     },
//     ".&width": {
//       textWrap: "nowrap",
//     },
//   });
// export function componentHeader(){
//     const styles = useStyles();
//     return(
//         <div className="font-bold flex items-center gap-2">
//           <h2 className="">Usuario02</h2>
//           <h2 className="">ContableCosta</h2>
//           <Menu>
//             <MenuTrigger disableButtonEnhancement>
//               <MenuButton
//                 appearance="transparent"
//                 menuIcon={null}
//                 className={styles.buton}>
//                 <FontAwesomeIcon
//                   className="text-[20px]"
//                   icon={faCircleInfo}
//                 ></FontAwesomeIcon>
//               </MenuButton>
//             </MenuTrigger>
//             <MenuPopover>
//               <MenuList>
//                 <MenuItem>Contrato de Licencia</MenuItem>
//                 <MenuItem>Acerca de</MenuItem>
//                 {/* <MenuItem>Información del sistema</MenuItem> */}
//               </MenuList>
//             </MenuPopover>
//           </Menu>
//           <Menu>
//             <MenuTrigger disableButtonEnhancement>
//               <MenuButton
//                 className={styles.buton}
//                 size="small"
//                 appearance="primary"
//                 // icon={<QuestionCircle48Regular />}
//                 menuIcon={null}
//               >
//                 J
//               </MenuButton>
//             </MenuTrigger>
//             <MenuPopover>
//               <MenuList>
//                 <MenuItem className="text-[15px]">Documentación</MenuItem>
//                 <MenuItem>Soporte técnico</MenuItem>
//                 <Switch
//                   checked={darkMode} // Estado del modo oscuro
//                   onChange={handleDarkModeToggle} // Manejador del cambio de estado del modo oscuro
//                   onClick={showModal}
//                   className="w-full switch"
//                   labelPosition="before"
//                   style={{ maxWidth: "400px" }}
//                   label="Tema oscuro"
//                 />
//                 <MenuItem>Preferencias</MenuItem>
//                 <MenuItem>
//                   <Link to={"/"}>
//                     Cerar sesión
//                     {/* <FontAwesomeIcon icon={faRightFromBracket} /> */}
//                   </Link>
//                 </MenuItem>
//               </MenuList>
//             </MenuPopover>
//           </Menu>
//         </div>
//     )
// }