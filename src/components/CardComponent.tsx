import { Button, Card, makeStyles } from "@fluentui/react-components";
import { Link, Outlet } from "react-router-dom";
import "./component.css";
const useStyles = makeStyles({
  buton: {
    minWidth: "130px",
  },
  buton1: {
    minWidth: "140px",
  },
  ".&width": {
    textWrap: "nowrap",
  },
  buton2: {
    minWidth: "200px",
  },
});
export function cardComponentGeneralTables() {
  const styles = useStyles();
  return (
    <section className="flex flex-col gap-[10px] w-full h-screen">
      <div className="grid grid-flow-col h-[18%]  gap-[10px]">
        <Card className="h-[100%] w-[100%]">
          <h2 className="font-semibold text-[]">Tablas generales</h2>
          <div className="w-full overflow-x-hidden snap-x">
            <div
              className={` w-full rounded-[5px] flex snap-x overflow-x-scroll gap-[10px] pb-[10px] custom-scrollbar2 ${styles[".&width"]}`}
            >
              <Link to={"lines"}>
                <Button appearance="primary">Lineas</Button>
              </Link>
              <Link to={"sources"}>
                <Button appearance="primary">Fuentes</Button>
              </Link>
              <Link className="" to={"concepts"}>
                <Button appearance="primary">Conceptos</Button>
              </Link>
              <Link className={styles[".&width"]} to={"payment_methods"}>
                <Button appearance="primary">Formas de pago</Button>
              </Link>
              <Link to={"location"}>
                <Button appearance="primary">Ubicación</Button>
              </Link>
              <Link to={"conveyors"}>
                <Button appearance="primary">transportadoras</Button>
              </Link>
              <Link to={"sellers"}>
                <Button appearance="primary">Vendedores</Button>
              </Link>
              <Link to={"collectors"}>
                <Button appearance="primary">Cobradores</Button>
              </Link>
              <Link to={"identification"}>
                <Button appearance="primary">Nit/Cédulas</Button>
              </Link>
              <Link to={"interface"}>
                <Button appearance="primary">Interfas</Button>
              </Link>
              <Link to={"iva"}>
                <Button appearance="primary">IVA</Button>
              </Link>
              <Link className={styles[".&width"]} to={"cost_center"}>
                <Button appearance="primary">Centros de costos</Button>
              </Link>
              <Link to={"items"}>
                <Button appearance="primary">Items</Button>
              </Link>
              <Link to={"lawyers"}>
                <Button appearance="primary">Abogados</Button>
              </Link>
              <Link className={styles[".&width"]} to={"financial_desing"}>
                <Button appearance="primary">Diseño Estados Financieros</Button>
              </Link>
              <Link to={"users"}>
                <Button appearance="primary">Usuarios</Button>
              </Link>
              <Link to={"assing_boxes"}>
                <Button appearance="primary">Asiganar cajas</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
      <div className="h-[100%] w-full">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentArticle() {
  return (
    <section className="flex h-[100%] w-full flex-col gap-[5px]">
      <Card className=" w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Articulos</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}

export function cardComponentSystemBranchOffices() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Sucursales</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}

export function cardComponentCustomers() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className=" w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Clientes</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}

export function cardComponentSuppliers() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Proveedores</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}

export function cardComponentAccountPlan() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Plan de cuentas</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}

export function cardComponentAccountingPolicies() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Politicas contables</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}

export function cardComponentRevelations() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Revelaciones</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}

export function cardComponentCommodity() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className="h-[15%] ">
        <h2 className="font-semibold text-[]">Mercancias</h2>
        <div className="flex gap-[10px] ">
          <Link to={"create"}>
            <Button appearance="primary">Entrada de mercancias</Button>
          </Link>
          <Link to={"return"}>
            <Button appearance="primary">Devoluciones de Mercancias</Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentOrderAndImport() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className=" h-[15%] ">
        <h2 className="font-semibold text-[]">
          Orden de compra e importaciones
        </h2>
        <div className="flex gap-[10px] ">
          <Link to={"order"}>
            <Button appearance="primary">Ordenes de compra</Button>
          </Link>
          <Link to={"import"}>
            <Button appearance="primary">Liquidación de importacines</Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentBranchOffices() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className="h-[15%]">
        <h2 className="font-semibold text-[]">Sucursales</h2>
        <div className="flex gap-[10px] ">
          <Link to={"branch_referral"}>
            <Button appearance="primary">Remisiones a sucursales</Button>
          </Link>
          <Link to={"branch_entrance"}>
            <Button appearance="primary">Entrada de sucursales</Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentStore() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className="h-[15%] ">
        <h2 className="font-semibold text-[]">
          Ajustes y movimientos entre bodegas
        </h2>
        <div className="flex gap-[10px] pb-[10px]">
          <Link to={"inventory_tweaks"}>
            <Button appearance="primary">Ajustes de inventario</Button>
          </Link>
          <Link to={"transfer_between_warehousess"}>
            <Button appearance="primary">Traslados entre bodegas</Button>
          </Link>
          <Link to={"internal_consumption"}>
            <Button appearance="primary">Consumos internos</Button>
          </Link>
          <Link to={"internal_consumption_refund"}>
            <Button appearance="primary">Devolución consumos internos</Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentPhysicalInventory() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className=" h-[15%]">
        <h2 className="font-semibold text-[]">Toma fisica de inventario</h2>
        <div className="flex gap-[10px] pb-[10px]">
          <Link to={"shot_list"}>
            <Button appearance="primary">Listado para toma fisica</Button>
          </Link>
          <Link to={"define_count"}>
            <Button appearance="primary">Definir Conteo</Button>
          </Link>
          <Link to={"include_physical_shot"}>
            <Button appearance="primary">Incluir toma fisica</Button>
          </Link>
          <Link to={"comparative"}>
            <Button appearance="primary">Comparativo</Button>
          </Link>
          <Link to={"automatic_adjustment"}>
            <Button appearance="primary">Ajuste Automatico</Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentMotionPanel() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">
          Panel de movimiento de productos
        </h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentInventoryDeterioration() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className=" h-[15%] ">
        <h2 className="font-semibold text-[]">Deterioro de Inventarios</h2>
        <div className="flex gap-[10px] pb-[10px]">
          <Link to={"inventory_deterioration"}>
            <Button appearance="primary">Deterioro de Inventarios</Button>
          </Link>
          <Link to={"inventory_inpairment_reversal"}>
            <Button appearance="primary">
              Reversión de Deterioro de Inventarios
            </Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentOrdersandPriceClient() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className=" h-[15%] ">
        <h2 className="font-semibold text-[]">Cotizaciones y Pedidos</h2>
        <div className="flex gap-[10px] pb-[10px]">
          <Link to={"quote_to_clients"}>
            <Button appearance="primary">Cotizaciones a clientes</Button>
          </Link>
          <Link to={"customer_orders"}>
            <Button appearance="primary">Pedidos a clientes</Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}

export function cardComponentConsignment() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className=" h-[15%] w-full">
        <h2 className="font-semibold text-[]">Mercancia en consignación</h2>
        <div className="flex gap-[10px] pb-[10px]">
          <Link to={"referrals_to_merchandise_customers"}>
            <Button appearance="primary">Remisiones a clientes</Button>
          </Link>
          <Link to={"returns_to_customers"}>
            <Button appearance="primary">Devoluciones de clientes</Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
// Inventarios
export function cardComponentreFerralstoClients() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className=" h-[15%] w-full ">
        <h2 className="font-semibold text-[]">Remisiones y Devoluciones</h2>
        <div className="flex gap-[10px] pb-[10px]">
          <Link to={"referrals_to_customers"}>
            <Button appearance="primary">Remisiones a clientes</Button>
          </Link>
          <Link to={"returns_of_referrals_to_clients"}>
            <Button appearance="primary">
              Devoluciones de Remisiones a clientes
            </Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentBilling() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className=" h-[15%] w-full">
        <h2 className="font-semibold text-[]">Facturación</h2>
        <div className="flex gap-[10px] pb-[10px]">
          <Link to={"credit_billing"}>
            <Button appearance="primary">Facturación Credito</Button>
          </Link>
          <Link to={"cash_billing"}>
            <Button appearance="primary">Facturación Contado</Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentConsolidate() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="h-[100%] w-[100%] ">
        <h2 className="font-semibold text-[]">Devoluciones</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentAutomaticInvoices() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className=" h-[100%] w-full">
        <h2 className="font-semibold text-[]">
          Generación de facturas automaticas
        </h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentExtractions() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="h-[100%] w-full ">
        <h2 className="font-semibold text-[]">
          Extracción de Movimiento de Ventas a Excel
        </h2>
        <div className="flex gap-[10px] pb-[10px]">
          {/* <Button appearance="primary">Prueba</Button> */}
        </div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentReturns() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className=" ">
        <h2 className="font-semibold text-[]">Devoluciones</h2>
        <div className="flex gap-[10px] pb-[10px]">
          <Button appearance="primary">Prueba</Button>
        </div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentExternalMovement() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className=" h-[15%] ">
        <h2 className="font-semibold text-[]">Movimiento Externo</h2>
        <div className="flex gap-[10px] pb-[10px]">
          <Link to={"pintacasa_billing_movement"}>
            <Button appearance="primary">
              Generar Movimiento de facturación Pintacasa
            </Button>
          </Link>
          <Link to={"petrobas_billing_movement"}>
            <Button appearance="primary">Generar Movimiento Petrobas</Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}

// CuentaxCobrar
export function cardComponentReceipts() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Recibos de caja</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentNotesWallet() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Notas de cartera</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentChecks() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Cheques posfechados</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentInterestSettlement() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Liquidación de intereses</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentportFolioDeterioration() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className="h-[15%] ">
        <h2 className="font-semibold text-[]">Deterioro de cartera</h2>
        <div className="flex gap-[10px] pb-[10px]">
          <Link to={"portfolio_deterioration"}>
            <Button appearance="primary">Deterioro de Cartera</Button>
          </Link>
          <Link to={"reverse_deterioration"}>
            <Button appearance="primary">Revertir deterioro de cartera</Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}

// CuentaPagar
export function cardComponentTransactions() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className=" w-full h-[100%]  ">
        <h2 className="font-semibold text-[]">Transacciones</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentCheckIssuance() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Emisión de cheques</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}

// Contabilidad
export function cardComponentTransactionsAccounting() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Transacciones</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentCheckIssuanceAccounting() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className=" w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Emisión de cheques</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentConciliationt() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Conciliación</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentReclassifyThirdParties() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">Reclasificar terceros</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentAccountingExtraction() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="  w-full h-[100%] ">
        <h2 className="font-semibold text-[]">
          Extracción de Movimiento contable a Excel
        </h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentExternalMovementAccounting() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className=" h-[15%] ">
        <h2 className="font-semibold text-[]">Deterioro de Inventarios</h2>
        <div className="flex gap-[10px] pb-[10px]">
          <Link to={"billing_movement"}>
            <Button appearance="primary">Generar Movimiento de contable</Button>
          </Link>
          <Link to={"petrobas_movement"}>
            <Button appearance="primary">Leer Movimiento externo</Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentAccountingNiif() {
  return (
    <section className="flex h-screen flex-col gap-[5px]">
      <Card className="h-[15%] ">
        <h2 className="font-semibold text-[]">Contabilidad NIIF</h2>
        <div className="flex gap-[10px] pb-[10px]">
          <Link to={"niif_transations"}>
            <Button appearance="primary">Transacciones NIIIF</Button>
          </Link>
          <Link to={"esfa_transations"}>
            <Button appearance="primary">Transacciones ESFA</Button>
          </Link>
        </div>
      </Card>
      <div className="h-[85%]">
        <Outlet></Outlet>
      </div>
    </section>
  );
}

// Informes
export function cardComponentInventoryReports() {
  const styles = useStyles();
  return (
    <section className="flex flex-col gap-[8px] w-full h-screen">
      <div className="grid grid-flow-col h-[18%]  gap-[5px]">
        <Card className="h-[100%] w-[100%]">
          <h2 className="font-semibold text-[]">Informes de inventarios</h2>
          <div className="w-full overflow-x-hidden snap-x">
            <div
              className={`snap-x w-full ${styles[".&width"]} overflow-x-scroll flex gap-[10px] pb-[10px] custom-scrollbar2`}
            >
              <Link to={"stock_warehouse"}>
                <Button appearance="primary">Existencia en bodega</Button>
              </Link>
              <Link to={"items_slock"}>
                <Button appearance="primary">Articulos en slock</Button>
              </Link>
              <Link to={"physical_shot_list"}>
                <Button appearance="primary">Listado para toma fisica</Button>
              </Link>
              <Link to={"auxiliary_kardex"}>
                <Button appearance="primary">Kardex auxiliar</Button>
              </Link>
              <Link to={"movement_process"}>
                <Button appearance="primary">Movimiento procesado</Button>
              </Link>
              <Link to={"pending_purchase_orders"}>
                <Button appearance="primary">
                  Órdenes de compra pendientes
                </Button>
              </Link>
              <Link to={"referrals_sent_to_branches"}>
                <Button appearance="primary">
                  Remisiones enviadas a sucursales
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
      <div className="h-[100%] w-full">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentSalesReports() {
  const styles = useStyles();
  return (
    <section className="flex flex-col gap-[8px] w-full h-screen">
      <div className="grid grid-flow-col h-[18%]  gap-[5px]">
        <Card className="h-[100%] w-[100%]">
          <h2 className="font-semibold text-[]">Informes de ventas</h2>
          <div className="w-full overflow-x-hidden snap-x">
            <div
              className={`snap-x w-full ${styles[".&width"]} overflow-x-scroll flex gap-[10px] pb-[10px] custom-scrollbar2`}
            >
              <Link to={"price_list"}>
                <Button appearance="primary">Lista de precios</Button>
              </Link>
              <Link to={"printing_pending_orders"}>
                <Button appearance="primary">
                  Impresión de pedidos pendientes
                </Button>
              </Link>
              <Link to={"sales_audit"}>
                <Button appearance="primary">Auditoria de ventas</Button>
              </Link>
              <Link to={"referrals"}>
                <Button appearance="primary">Remisiones</Button>
              </Link>
              <Link to={"bills"}>
                <Button appearance="primary">Facturas</Button>
              </Link>
              <Link to={"items_without_movements"}>
                <Button appearance="primary">
                  Items sin movimientos en N meses
                </Button>
              </Link>
              <Link to={"consignment_merchandise"}>
                <Button appearance="primary">Mercancia en consignación</Button>
              </Link>
              <Link to={"statistics"}>
                <Button appearance="primary">Estadisticas</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
      <div className="h-[100%] w-full">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentAccountxReceivableReports() {
  const styles = useStyles();
  return (
    <section className="flex flex-col gap-[8px] w-full h-screen">
      <div className="grid grid-flow-col h-[18%]  gap-[5px]">
        <Card className=" h-[100%] w-[100%]">
          <h2 className="font-semibold text-[]">
            Informes de cuentas x cobrar
          </h2>
          <div className="w-full overflow-x-hidden snap-x">
            <div
              className={`snap-x w-full ${styles[".&width"]} overflow-x-scroll flex gap-[10px] pb-[10px] custom-scrollbar2`}
            >
              <Link to={"statementssof_accounts"}>
                <Button appearance="primary">Estado de cuentas</Button>
              </Link>
              <Link to={"expiration_analysis"}>
                <Button appearance="primary">Analisis de vencimiento</Button>
              </Link>
              <Link to={"customer_movement_summary"}>
                <Button appearance="primary">
                  Resumen de movimientos de Clientes
                </Button>
              </Link>
              <Link to={"list_of_collection_commissions"}>
                <Button appearance="primary">
                  Listado de comisiones conbradores
                </Button>
              </Link>
              <Link to={"processed_porfolio_movement"}>
                <Button appearance="primary">
                  Movimiento procesado de cartera
                </Button>
              </Link>
              <Link to={"list_of_pay_days"}>
                <Button appearance="primary">Listado de Dias de pagos</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
      <div className="h-[100%] w-full">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentAccountxPayReports() {
  const styles = useStyles();
  return (
    <section className="flex flex-col gap-[8px] w-full h-screen">
      <div className="grid grid-flow-col h-[18%]  gap-[5px]">
        <Card className="h-[100%] w-[100%] ">
          <h2 className="font-semibold text-[]">Informes de cuentas x pagar</h2>
          <div className="w-full overflow-x-hidden snap-x">
            <div
              className={`snap-x w-full ${styles[".&width"]} overflow-x-scroll flex gap-[10px] pb-[10px] custom-scrollbar2`}
            >
              <Link to={"supplier_statement"}>
                <Button appearance="primary">Extracto de proveedores</Button>
              </Link>
              <Link to={"portfolio_maturity"}>
                <Button appearance="primary">Vencimiento de cartera</Button>
              </Link>
              <Link to={"processed_supplier_movement"}>
                <Button appearance="primary">
                  Movimiento procesado de Proveedores
                </Button>
              </Link>
              <Link to={"purchasing_summary_by_supplier"}>
                <Button appearance="primary">
                  Resumen de compras por proveedor
                </Button>
              </Link>
              <Link to={"check_of_printing"}>
                <Button appearance="primary">Impresión de cheques</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
      <div className="h-[100%] w-full">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
export function cardComponentAccountingReports() {
  const styles = useStyles();

  return (
    <section className="flex flex-col gap-[8px] w-full h-screen">
      <div className="grid grid-flow-col h-[18%]  gap-[5px]">
        <Card className=" h-[100%] w-[100%]">
          <h2 className="font-semibold text-[]">Informes de contabilidad</h2>
          <div className="w-full overflow-x-hidden snap-x">
            <div
              className={`snap-x w-full ${styles[".&width"]} overflow-x-scroll flex gap-[10px] pb-[10px] custom-scrollbar2`}
            >
              <Link to={"processed_movement"}>
                <Button appearance="primary">Movimiento procesado</Button>
              </Link>
              <Link to={"annexes"}>
                <Button appearance="primary">Anexos</Button>
              </Link>
              <Link to={"auxiliaries"}>
                <Button appearance="primary">Auxiliares</Button>
              </Link>
              <Link to={"legal_journal_book"}>
                <Button appearance="primary">Libro diario legal</Button>
              </Link>
              <Link to={"legal_ledger"}>
                <Button appearance="primary">Libro mayor legal</Button>
              </Link>
              <Link to={"journal_vouchers"}>
                <Button appearance="primary">Comprobantes de diario</Button>
              </Link>
              <Link to={"diary_box"}>
                <Button appearance="primary">Caja Diario</Button>
              </Link>
              <Link to={"inventory_and_balance_book"}>
                <Button appearance="primary">
                  Libro de Inventario y Balance
                </Button>
              </Link>
              <Link to={"financial_statements"}>
                <Button appearance="primary">Estados financieros</Button>
              </Link>
              <Link to={"book_folios"}>
                <Button appearance="primary">Foliadores de libros</Button>
              </Link>
              <Link to={"check_print"}>
                <Button appearance="primary">Impresión de cheques</Button>
              </Link>
              <Link to={"certificate_printing"}>
                <Button appearance="primary">Impresión certificados</Button>
              </Link>
              <Link to={"proposed_vs_executed"}>
                <Button appearance="primary">Propuesto Vs. ejecutado</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
      <div className="h-[100%] w-full">
        <Outlet></Outlet>
      </div>
    </section>
  );
}

// export function cardComponent() {
//   return (
//     <section className="flex h-[100%] flex-col gap-[5px]">
//       <Card className=" ">
//         <h2 className="font-semibold text-[]">Manejo de archivos</h2>
//         <div className="flex gap-[10px] pb-[10px]">
//           <Button appearance="primary">Prueba</Button>
//         </div>
//       </Card>
//       <Outlet></Outlet>
//     </section>
//   );
// }
// export function cardComponent() {
//   return (
//     <section className="flex h-[100%] flex-col gap-[5px]">
//       <Card className=" ">
//         <h2 className="font-semibold text-[]">Parametros</h2>
//         <div className="flex gap-[10px] pb-[10px]">
//           <Button appearance="primary">Prueba</Button>
//         </div>
//       </Card>
//       <Outlet></Outlet>
//     </section>
//   );
// }
// export function cardComponent() {
//   return (
//     <section className="flex h-[100%] flex-col gap-[5px]">
//       <Card className=" ">
//         <h2 className="font-semibold text-[]">Procesos de cierres</h2>
//         <div className="flex gap-[10px] pb-[10px]">
//           <Button appearance="primary">Prueba</Button>
//         </div>
//       </Card>
//       <Outlet></Outlet>
//     </section>
//   );
// }
export function cardComponentLicenseAgreement() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="h-[100%] w-full ">
        <h2 className="font-semibold text-[]">Contrato de Licencia</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentHelpTopics() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className="h-[100%] w-full ">
        <h2 className="font-semibold text-[]">Temas de ayuda</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentAbout() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className=" h-[100%] w-full">
        <h2 className="font-semibold text-[]">Acerca de</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponentSystemInformation() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className=" h-[100%] w-full">
        <h2 className="font-semibold text-[]">Información del sistema</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
export function cardComponenttoRegister() {
  return (
    <section className="flex h-[100%] flex-col gap-[5px]">
      <Card className=" h-[100%] w-full">
        <h2 className="font-semibold text-[]">Registrar Serial del Software</h2>
        <div className="flex gap-[10px] pb-[10px]"></div>
      </Card>
      <Outlet></Outlet>
    </section>
  );
}
