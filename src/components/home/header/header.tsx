import { Card } from "@fluentui/react-components";
import { Sistema } from "./Nav";
type toggleProps ={
  toggleSidebar: ()=> void
}
export default function Header({toggleSidebar}:toggleProps) {
  return (
    <Card>
      <header className="w-full h-[20%] flex items-center ">
        {/* <h2></h2> */}
        <div>{/* <Sistema></Sistema> */}
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
        </div>
      </header>
    </Card>
  );
}
