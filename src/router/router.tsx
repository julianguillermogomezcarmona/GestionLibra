import { createBrowserRouter, RouterProvider } from "react-router-dom";
import login from "../components/login";
import componentContable from "../components/home/modulos/component_Contable";
import { Fountain } from "../components/home/modulos/moduloContable/fountain";
import { Extraction } from "../components/home/modulos/moduloContable/extraction";
import { GruopTercero } from "../components/home/modulos/moduloContable/terceros/Tercero";
import { Transactions } from "../components/home/modulos/moduloContable/transactions";
import lobby from "../components/home/lobby/lobby";
import homeModuls from "../components/home/modulos/modulos";
const router = createBrowserRouter([
  {
    path: "/",
    Component: login,
    errorElement: (
      <div>
        <h2>Esta ruta no existe</h2>
      </div>
    ),
  },
  {
    path: "/lobby",
    Component: lobby,
    errorElement: (
      <div>
        <h2>Esta ruta no existe</h2>
      </div>
    ),
  },
  {
    path: "/contable",
    Component: componentContable,
    errorElement: (
      <div>
        <h2>Esta ruta no existe</h2>
      </div>
    ),
    children: [
      {
        path: "transation",
        Component: Transactions,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
      },
      {
        path: "third_party_reclassification",
        Component: GruopTercero,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
      },
      {
        path: "fountain",
        Component: Fountain,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
      },
      {
        path: "extraction",
        Component: Extraction,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
      },

    ],
  },
  {
    path: "/moduls",
    Component: homeModuls,
  }
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
