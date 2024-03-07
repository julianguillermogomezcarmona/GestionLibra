import { createBrowserRouter, RouterProvider } from "react-router-dom";
import login from "../components/login";
import home from "../components/home/home";
import {
  cardComponentAbout,
  cardComponentAccountingExtraction,
  cardComponentAccountingNiif,
  cardComponentAccountingPolicies,
  cardComponentAccountingReports,
  cardComponentAccountPlan,
  cardComponentAccountxPayReports,
  cardComponentAccountxReceivableReports,
  cardComponentArticle,
  cardComponentAutomaticInvoices,
  cardComponentBilling,
  cardComponentBranchOffices,
  cardComponentCheckIssuance,
  cardComponentCheckIssuanceAccounting,
  cardComponentChecks,
  cardComponentCommodity,
  cardComponentConciliationt,
  cardComponentConsignment,
  cardComponentConsolidate,
  cardComponentCustomers,
  cardComponentExternalMovement,
  cardComponentExternalMovementAccounting,
  cardComponentExtractions,
  cardComponentGeneralTables,
  cardComponentHelpTopics,
  cardComponentInterestSettlement,
  cardComponentInventoryDeterioration,
  cardComponentInventoryReports,
  cardComponentLicenseAgreement,
  cardComponentMotionPanel,
  cardComponentNotesWallet,
  cardComponentOrderAndImport,
  cardComponentOrdersandPriceClient,
  cardComponentPhysicalInventory,
  cardComponentportFolioDeterioration,
  cardComponentReceipts,
  cardComponentReclassifyThirdParties,
  cardComponentreFerralstoClients,
  cardComponentReturns,
  cardComponentRevelations,
  cardComponentSalesReports,
  cardComponentStore,
  cardComponentSuppliers,
  cardComponentSystemBranchOffices,
  cardComponentSystemInformation,
  cardComponenttoRegister,
  cardComponentTransactions,
  cardComponentTransactionsAccounting,
} from "../components/CardComponent";
import {
  assingBoxes,
  collectors,
  concepts,
  conveyors,
  costCenter,
  financialDesing,
  identification,
  interfaceComponet,
  items,
  iva,
  lawyers,
  lines,
  location,
  paymentMethods,
  sellers,
  sources,
  users,
} from "../components/home/system/systemCompont";
import {
  createCommodity,
  returnCommodity,
  // importCompras,
  orderCompras,
  branchReferral,
  branchEntrance,
  inventoryTweaks,
  transfersBetweenWarehousess,
  internalConsumption,
  InternalConsumptionRefund,
  importLiquidation,
  shotList,
  defineCount,
  includePhysicalShot,
  comparative,
  automaticAdjustment,
  inventoryDeterioration,
  inventoryImpairmentReversal,
} from "../components/home/inventario/inventoryComponent";
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
    path: "/home",
    Component: home,
    errorElement: (
      <div>
        <h2>Esta ruta no existe</h2>
      </div>
    ),
    children: [
      {
        path: "general_tables",
        Component: cardComponentGeneralTables,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [
          {
            path: "lines",
            Component: lines,
          },
          {
            path: "sources",
            Component: sources,
          },
          {
            path: "concepts",
            Component: concepts,
          },
          {
            path: "payment_methods",
            Component: paymentMethods,
          },
          {
            path: "location",
            Component: location,
          },
          {
            path: "conveyors",
            Component: conveyors
          },
          {
            path: "sellers",
            Component: sellers
          },
          {
            path: "collectors",
            Component: collectors
          },
          {
            path: "identification",
            Component: identification
          },
          {
            path: "interface",
            Component: interfaceComponet,
          },
          {
            path: "iva",
            Component: iva
          },
          {
            path: "cost_center",
            Component: costCenter
          },
          {
            path: "items",
            Component: items
          },
          {
            path: "lawyers",
            Component: lawyers
          },
          {
            path: "financial_desing",
            Component: financialDesing
          },
          {
            path: "users",
            Component: users
          },
          {
            path: "assing_boxes",
            Component: assingBoxes
          }
        ],
      },

      {
        path: "article",
        Component: cardComponentArticle,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },

      {
        path: "system_branch_offices",
        Component: cardComponentSystemBranchOffices,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [
        ],
      },
      {
        path: "customers",
        Component: cardComponentCustomers,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "suppliers",
        Component: cardComponentSuppliers,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "account_plan",
        Component: cardComponentAccountPlan,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "accounting_policies",
        Component: cardComponentAccountingPolicies,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "revelations",
        Component: cardComponentRevelations,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "commodity",
        Component: cardComponentCommodity,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [
          {
            path: "create",
            Component: createCommodity,
            errorElement: (
              <div>
                <h2>Esta ruta no existe</h2>
              </div>
            ),
          },
          {
            path: "return",
            Component: returnCommodity,
            errorElement: (
              <div>
                <h2>Esta ruta no existe</h2>
              </div>
            ),
          },
        ],
      },
      {
        path: "orderandimport",
        Component: cardComponentOrderAndImport,
        children: [
          {
            path: "order",
            Component: orderCompras,
            errorElement: (
              <div>
                <h2>Esta ruta no existe</h2>
              </div>
            ),
          },
          {
            path: "import",
            Component: importLiquidation,
            errorElement: (
              <div>
                <h2>Esta ruta no existe</h2>
              </div>
            ),
          },
        ],
      },
      {
        path: "branch_office",
        Component: cardComponentBranchOffices,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [
          {
            path: "branch_referral",
            Component: branchReferral
          },
          {
            path: "branch_entrance",
            Component: branchEntrance
          },
        ],
      },
      {
        path: "store",
        Component: cardComponentStore,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [
          {
            path: "inventory_tweaks",
            Component: inventoryTweaks
          },
          {
            path: "transfer_between_warehousess",
            Component: transfersBetweenWarehousess
          },
          {
            path: "internal_consumption",
            Component: internalConsumption,
          },
          {
            path: "internal_consumption_refund",
            Component: InternalConsumptionRefund
          },

        ],
      },
      {
        path: "physica_inventory",
        Component: cardComponentPhysicalInventory,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [
          {
            path: "shot_list",
            Component: shotList
          },
          {
            path: "define_count",
            Component: defineCount
          },
          {
            path: "include_physical_shot",
            Component: includePhysicalShot
          },
          {
            path: "comparative",
            Component: comparative,
          },
          {
            path: "automatic_adjustment",
            Component: automaticAdjustment
          },


        ],
      },
      {
        path: "motion_panel",
        Component: cardComponentMotionPanel,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "inventory_deterioration",
        Component: cardComponentInventoryDeterioration,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [
          {
            path: "inventory_deterioration",
            Component: inventoryDeterioration
          },
          {
            path: "inventory_inpairment_reversal",
            Component: inventoryImpairmentReversal
          }
        ],
      },
      {
        path: "orders_and_Price",
        Component: cardComponentOrdersandPriceClient,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "consignament",
        Component: cardComponentConsignment,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "ferrals_to_Clients",
        Component: cardComponentreFerralstoClients,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "billing",
        Component: cardComponentBilling,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "consolidate",
        Component: cardComponentConsolidate,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "automatic_invoices",
        Component: cardComponentAutomaticInvoices,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "extractions",
        Component: cardComponentExtractions,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "returns",
        Component: cardComponentReturns,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "external_movement",
        Component: cardComponentExternalMovement,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "receipts",
        Component: cardComponentReceipts,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "notes_wallet",
        Component: cardComponentNotesWallet,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "checks",
        Component: cardComponentChecks,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "interest_settlement",
        Component: cardComponentInterestSettlement,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "folido_deterioration",
        Component: cardComponentportFolioDeterioration,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "transations",
        Component: cardComponentTransactions,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "check_issuance",
        Component: cardComponentCheckIssuance,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "transations_accounting",
        Component: cardComponentTransactionsAccounting,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "check_issuance_accounting",
        Component: cardComponentCheckIssuanceAccounting,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "conciliationt",
        Component: cardComponentConciliationt,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "reclassify",
        Component: cardComponentReclassifyThirdParties,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "accounting_extraction",
        Component: cardComponentAccountingExtraction,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "external_movement_accounting",
        Component: cardComponentExternalMovementAccounting,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "accounting_niif",
        Component: cardComponentAccountingNiif,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "inventory_reports",
        Component: cardComponentInventoryReports,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "sales_reports",
        Component: cardComponentSalesReports,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "receivable_reports",
        Component: cardComponentAccountxReceivableReports,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "account_x_pay_reports",
        Component: cardComponentAccountxPayReports,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "accounting_reports",
        Component: cardComponentAccountingReports,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "license_agreement",
        Component: cardComponentLicenseAgreement,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "help_topics",
        Component: cardComponentHelpTopics,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "about",
        Component: cardComponentAbout,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "system_information",
        Component: cardComponentSystemInformation,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
      {
        path: "register_software",
        Component: cardComponenttoRegister,
        errorElement: (
          <div>
            <h2>Esta ruta no existe</h2>
          </div>
        ),
        children: [],
      },
    ],
  },
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
