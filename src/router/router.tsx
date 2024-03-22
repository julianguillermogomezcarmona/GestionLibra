import { createBrowserRouter, RouterProvider } from "react-router-dom";
import login from "../components/login";
import componentContable from "../components/home/modulos/component_Contable";
import {
  portfolioDeterioration,
  reverseDeterioration,
} from "../components/home/cuenta_cobrar/cuentaCobraComponent";
import {
  cardComponentAbout,
  cardComponentAccountingExtraction,
  cardComponentAccountingNiif,
  cardComponentAccountingPolicies,
  cardComponentAccountingReports,
  cardComponentAccountingUpdate,
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
  cardComponentClosingofPeriod,
  cardComponentClosingProcesses,
  cardComponentCommodity,
  cardComponentConciliationt,
  cardComponentConsecutive,
  cardComponentConsignment,
  cardComponentConsolidate,
  cardComponentCustomers,
  cardComponentDataAudit,
  cardComponentElectronicBillingParameters,
  cardComponentExternalMovement,
  cardComponentExternalMovementAccounting,
  cardComponentExtractions,
  cardComponentFileManagement,
  cardComponentGeneralParameters,
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
  cardComponentRecoverersandIntegrity,
  cardComponentreFerralstoClients,
  cardComponentReturns,
  cardComponentRevelations,
  cardComponentSalesReports,
  cardComponentSpecialProcesses,
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
import {
  billingMovement,
  esfaTransactions,
  niifTransactions,
  petrobasMovement,
} from "../components/home/accounting/accountingComponent";
import {
  annexes,
  auxiliaries,
  auxiliaryKardex,
  bills,
  bookFolios,
  certificatePrinting,
  checkofPrinting,
  checkPrinting,
  consignmentMerchandise,
  customerMovementSummary,
  diaryBox,
  expirationAnalysis,
  financialStatements,
  inventoryandBalanceBook,
  itemsSlock,
  itemsWithoutMovements,
  journalVouchers,
  legalJournalBook,
  legalLedger,
  listofCollectionCommissions,
  listofPayDays,
  movementProcess,
  pendingPurchaseOrders,
  physicalShotList,
  portfolioMaturity,
  priceList,
  printingPendingOrders,
  processedMovement,
  processedPortfolioMovement,
  processedSupplierMovement,
  proposedvsExecuted,
  purchasingSummarybySupplier,
  referrals,
  referralsSenttoBranches,
  salesAudit,
  statementsofAccounts,
  statistics,
  stockWarehouse,
  supplierStatement,
} from "../components/home/reports/reportsComponent";
import { cashBilling, creditBilling, customerOrders, petrobasBillingMovement, pintacasaBillingMovement, quotetoClients, referralstoClients, referralstocustomers, referralstoMerchandiseCustomers, returnstoCustomers } from "../components/home/sales/salesComponent";
import { accountingUpdate, annual, auditofAccountingReceipts, auditProcesses, changeofCompanyUser, changeofYear, closingEntries, consolidateCompanies, createDataDictionary, dataBackup, electronicBillingParameters, electronicBillingResolutions, ensureAccountingPeriod, fileViewer, fontOverride, generateElectronicBillingToken, monthly, monthlyInventorySummary, organizeFiles, purgeOldInformation, recoverCostCenters, recoverLargerBalances, recoverMovements, recoverThirdPartyBalances, resetBoxesShifts, sqlQueries, telephoneDirectory, TransferofAccountingBalances } from "../components/home/utilitis/utilitisComponet";
import { config } from "../components/home/config/config";
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
    // children: [
    //   {
    //     path: "general_tables",
    //     Component: cardComponentGeneralTables,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "lines",
    //         Component: lines,
    //       },
    //       {
    //         path: "sources",
    //         Component: sources,
    //       },
    //       {
    //         path: "concepts",
    //         Component: concepts,
    //       },
    //       {
    //         path: "payment_methods",
    //         Component: paymentMethods,
    //       },
    //       {
    //         path: "location",
    //         Component: location,
    //       },
    //       {
    //         path: "conveyors",
    //         Component: conveyors,
    //       },
    //       {
    //         path: "sellers",
    //         Component: sellers,
    //       },
    //       {
    //         path: "collectors",
    //         Component: collectors,
    //       },
    //       {
    //         path: "identification",
    //         Component: identification,
    //       },
    //       {
    //         path: "interface",
    //         Component: interfaceComponet,
    //       },
    //       {
    //         path: "iva",
    //         Component: iva,
    //       },
    //       {
    //         path: "cost_center",
    //         Component: costCenter,
    //       },
    //       {
    //         path: "items",
    //         Component: items,
    //       },
    //       {
    //         path: "lawyers",
    //         Component: lawyers,
    //       },
    //       {
    //         path: "financial_desing",
    //         Component: financialDesing,
    //       },
    //       {
    //         path: "users",
    //         Component: users,
    //       },
    //       {
    //         path: "assing_boxes",
    //         Component: assingBoxes,
    //       },
    //     ],
    //   },

    //   {
    //     path: "article",
    //     Component: cardComponentArticle,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },

    //   {
    //     path: "system_branch_offices",
    //     Component: cardComponentSystemBranchOffices,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "customers",
    //     Component: cardComponentCustomers,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "suppliers",
    //     Component: cardComponentSuppliers,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "account_plan",
    //     Component: cardComponentAccountPlan,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "accounting_policies",
    //     Component: cardComponentAccountingPolicies,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "revelations",
    //     Component: cardComponentRevelations,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "commodity",
    //     Component: cardComponentCommodity,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "create",
    //         Component: createCommodity,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //       },
    //       {
    //         path: "return",
    //         Component: returnCommodity,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //       },
    //     ],
    //   },
    //   {
    //     path: "orderandimport",
    //     Component: cardComponentOrderAndImport,
    //     children: [
    //       {
    //         path: "order",
    //         Component: orderCompras,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //       },
    //       {
    //         path: "import",
    //         Component: importLiquidation,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //       },
    //     ],
    //   },
    //   {
    //     path: "branch_office",
    //     Component: cardComponentBranchOffices,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "branch_referral",
    //         Component: branchReferral,
    //       },
    //       {
    //         path: "branch_entrance",
    //         Component: branchEntrance,
    //       },
    //     ],
    //   },
    //   {
    //     path: "store",
    //     Component: cardComponentStore,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "inventory_tweaks",
    //         Component: inventoryTweaks,
    //       },
    //       {
    //         path: "transfer_between_warehousess",
    //         Component: transfersBetweenWarehousess,
    //       },
    //       {
    //         path: "internal_consumption",
    //         Component: internalConsumption,
    //       },
    //       {
    //         path: "internal_consumption_refund",
    //         Component: InternalConsumptionRefund,
    //       },
    //     ],
    //   },
    //   {
    //     path: "physica_inventory",
    //     Component: cardComponentPhysicalInventory,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "shot_list",
    //         Component: shotList,
    //       },
    //       {
    //         path: "define_count",
    //         Component: defineCount,
    //       },
    //       {
    //         path: "include_physical_shot",
    //         Component: includePhysicalShot,
    //       },
    //       {
    //         path: "comparative",
    //         Component: comparative,
    //       },
    //       {
    //         path: "automatic_adjustment",
    //         Component: automaticAdjustment,
    //       },
    //     ],
    //   },
    //   {
    //     path: "motion_panel",
    //     Component: cardComponentMotionPanel,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "inventory_deterioration",
    //     Component: cardComponentInventoryDeterioration,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "inventory_deterioration",
    //         Component: inventoryDeterioration,
    //       },
    //       {
    //         path: "inventory_inpairment_reversal",
    //         Component: inventoryImpairmentReversal,
    //       },
    //     ],
    //   },
    //   {
    //     path: "orders_and_Price",
    //     Component: cardComponentOrdersandPriceClient,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "quote_to_clients",
    //         Component: quotetoClients,
    //       },
    //       {
    //         path: "customer_orders",
    //         Component: customerOrders,
    //       },
    //     ],
    //   },
    //   {
    //     path: "consignament",
    //     Component: cardComponentConsignment,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "referrals_to_merchandise_customers",
    //         Component: referralstoMerchandiseCustomers,
    //       },
    //       {
    //         path: "returns_to_customers",
    //         Component: returnstoCustomers,
    //       },
    //     ],
    //   },
    //   {
    //     path: "ferrals_to_Clients",
    //     Component: cardComponentreFerralstoClients,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "referrals_to_customers",
    //         Component: referralstocustomers,
    //       },
    //       {
    //         path: "returns_of_referrals_to_clients",
    //         Component: referralstoClients,
    //       },
    //     ],
    //   },
    //   {
    //     path: "billing",
    //     Component: cardComponentBilling,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "credit_billing",
    //         Component: creditBilling,
    //       },
    //       {
    //         path: "cash_billing",
    //         Component: cashBilling,
    //       },
    //     ],
    //   },
    //   {
    //     path: "consolidate",
    //     Component: cardComponentConsolidate,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "automatic_invoices",
    //     Component: cardComponentAutomaticInvoices,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "extractions",
    //     Component: cardComponentExtractions,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "returns",
    //     Component: cardComponentReturns,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "external_movement",
    //     Component: cardComponentExternalMovement,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "pintacasa_billing_movement",
    //         Component: pintacasaBillingMovement,
    //       },
    //       {
    //         path: "petrobas_billing_movement",
    //         Component: petrobasBillingMovement,
    //       },
    //     ],
    //   },
    //   {
    //     path: "receipts",
    //     Component: cardComponentReceipts,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "notes_wallet",
    //     Component: cardComponentNotesWallet,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "checks",
    //     Component: cardComponentChecks,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "interest_settlement",
    //     Component: cardComponentInterestSettlement,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "folido_deterioration",
    //     Component: cardComponentportFolioDeterioration,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "portfolio_deterioration",
    //         Component: portfolioDeterioration,
    //       },
    //       {
    //         path: "reverse_deterioration",
    //         Component: reverseDeterioration,
    //       },
    //     ],
    //   },
    //   {
    //     path: "transations",
    //     Component: cardComponentTransactions,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "check_issuance",
    //     Component: cardComponentCheckIssuance,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "transations_accounting",
    //     Component: cardComponentTransactionsAccounting,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "check_issuance_accounting",
    //     Component: cardComponentCheckIssuanceAccounting,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "conciliationt",
    //     Component: cardComponentConciliationt,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "reclassify",
    //     Component: cardComponentReclassifyThirdParties,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "accounting_extraction",
    //     Component: cardComponentAccountingExtraction,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "external_movement_accounting",
    //     Component: cardComponentExternalMovementAccounting,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "billing_movement",
    //         Component: billingMovement,
    //       },
    //       {
    //         path: "petrobas_movement",
    //         Component: petrobasMovement,
    //       },
    //     ],
    //   },
    //   {
    //     path: "accounting_niif",
    //     Component: cardComponentAccountingNiif,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "niif_transations",
    //         Component: niifTransactions,
    //       },
    //       {
    //         path: "esfa_transations",
    //         Component: esfaTransactions,
    //       },
    //     ],
    //   },
    //   {
    //     path: "inventory_reports",
    //     Component: cardComponentInventoryReports,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "stock_warehouse",
    //         Component: stockWarehouse,
    //       },
    //       {
    //         path: "items_slock",
    //         Component: itemsSlock,
    //       },
    //       {
    //         path: "physical_shot_list",
    //         Component: physicalShotList,
    //       },
    //       {
    //         path: "auxiliary_kardex",
    //         Component: auxiliaryKardex,
    //       },
    //       {
    //         path: "movement_process",
    //         Component: movementProcess,
    //       },
    //       {
    //         path: "pending_purchase_orders",
    //         Component: pendingPurchaseOrders,
    //       },
    //       {
    //         path: "referrals_sent_to_branches",
    //         Component: referralsSenttoBranches,
    //       },
    //     ],
    //   },
    //   {
    //     path: "sales_reports",
    //     Component: cardComponentSalesReports,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "price_list",
    //         Component: priceList,
    //       },
    //       {
    //         path: "printing_pending_orders",
    //         Component: printingPendingOrders,
    //       },
    //       {
    //         path: "sales_audit",
    //         Component: salesAudit,
    //       },
    //       {
    //         path: "referrals",
    //         Component: referrals,
    //       },
    //       {
    //         path: "bills",
    //         Component: bills,
    //       },
    //       {
    //         path: "items_without_movements",
    //         Component: itemsWithoutMovements,
    //       },
    //       {
    //         path: "consignment_merchandise",
    //         Component: consignmentMerchandise,
    //       },
    //       {
    //         path: "statistics",
    //         Component: statistics,
    //       },
    //     ],
    //   },
    //   {
    //     path: "receivable_reports",
    //     Component: cardComponentAccountxReceivableReports,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "statementssof_accounts",
    //         Component: statementsofAccounts,
    //       },
    //       {
    //         path: "expiration_analysis",
    //         Component: expirationAnalysis,
    //       },
    //       {
    //         path: "customer_movement_summary",
    //         Component: customerMovementSummary,
    //       },
    //       {
    //         path: "list_of_collection_commissions",
    //         Component: listofCollectionCommissions,
    //       },
    //       {
    //         path: "processed_porfolio_movement",
    //         Component: processedPortfolioMovement,
    //       },
    //       {
    //         path: "list_of_pay_days",
    //         Component: listofPayDays,
    //       },
    //     ],
    //   },
    //   {
    //     path: "account_x_pay_reports",
    //     Component: cardComponentAccountxPayReports,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "supplier_statement",
    //         Component: supplierStatement,
    //       },
    //       {
    //         path: "portfolio_maturity",
    //         Component: portfolioMaturity,
    //       },
    //       {
    //         path: "processed_supplier_movement",
    //         Component: processedSupplierMovement,
    //       },
    //       {
    //         path: "purchasing_summary_by_supplier",
    //         Component: purchasingSummarybySupplier,
    //       },
    //       {
    //         path: "check_of_printing",
    //         Component: checkofPrinting,
    //       },
    //     ],
    //   },
    //   {
    //     path: "accounting_reports",
    //     Component: cardComponentAccountingReports,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "processed_movement",
    //         Component: processedMovement,
    //       },
    //       {
    //         path: "annexes",
    //         Component: annexes,
    //       },
    //       {
    //         path: "auxiliaries",
    //         Component: auxiliaries,
    //       },
    //       {
    //         path: "legal_journal_book",
    //         Component: legalJournalBook,
    //       },
    //       {
    //         path: "diary_box",
    //         Component: diaryBox,
    //       },
    //       {
    //         path: "inventory_and_balance_book",
    //         Component: inventoryandBalanceBook,
    //       },
    //       {
    //         path: "financial_statements",
    //         Component: financialStatements,
    //       },
    //       {
    //         path: "book_folios",
    //         Component: bookFolios,
    //       },
    //       {
    //         path: "check_print",
    //         Component: checkPrinting,
    //       },
    //       {
    //         path: "certificate_printing",
    //         Component: certificatePrinting,
    //       },
    //       {
    //         path: "proposed_vs_executed",
    //         Component: proposedvsExecuted,
    //       },
    //       {
    //         path: "legal_ledger",
    //         Component: legalLedger,
    //       },
    //       {
    //         path: "journal_vouchers",
    //         Component: journalVouchers,
    //       },
    //     ],
    //   },
    //   {
    //     path: "license_agreement",
    //     Component: cardComponentLicenseAgreement,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "help_topics",
    //     Component: cardComponentHelpTopics,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "about",
    //     Component: cardComponentAbout,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "system_information",
    //     Component: cardComponentSystemInformation,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "register_software",
    //     Component: cardComponenttoRegister,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   // utilidades
    //   {
    //     path: "file_management",
    //     Component: cardComponentFileManagement,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "organizer_files",
    //         Component: organizeFiles,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "data_backup",
    //         Component: dataBackup,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //     ],
    //   },
    //   {
    //     path: "consecutive",
    //     Component: cardComponentConsecutive,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "general_parameters",
    //     Component: cardComponentGeneralParameters,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    //   {
    //     path: "electronic_billing_parameters",
    //     Component: cardComponentElectronicBillingParameters,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "electronic_billing_parameters",
    //         Component: electronicBillingParameters,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "electronic_billing_resolutions",
    //         Component: electronicBillingResolutions,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "generate_electronic_billingToken",
    //         Component: generateElectronicBillingToken,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //     ],
    //   },
    //   {
    //     path: "closing_of_period",
    //     Component: cardComponentClosingofPeriod,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "monthly",
    //         Component: monthly,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "annual",
    //         Component: annual,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "closing_entries",
    //         Component: closingEntries,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "Transfer_of_accounting_balances",
    //         Component: TransferofAccountingBalances,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "ensure_accounting_period",
    //         Component: ensureAccountingPeriod,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "purge_old_information",
    //         Component: purgeOldInformation,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //     ],
    //   },
    //   {
    //     path: "closing_processes",
    //     Component: cardComponentClosingProcesses,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "change_of_year",
    //         Component: changeofYear,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "change_of_companyUser",
    //         Component: changeofCompanyUser,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //     ],
    //   },
    //   {
    //     path: "data_audit",
    //     Component: cardComponentDataAudit,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "monthly_inventory_summary",
    //         Component: monthlyInventorySummary,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "audit_of_accounting_receipts",
    //         Component: auditofAccountingReceipts,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //     ],
    //   },
    //   {
    //     path: "accounting_update",
    //     Component: cardComponentAccountingUpdate,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "font_override",
    //         Component: fontOverride,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "accounting_update",
    //         Component: accountingUpdate,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //     ],
    //   },
    //   {
    //     path: "recoverer_and_integrity",
    //     Component: cardComponentRecoverersandIntegrity,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "recover_movements",
    //         Component: recoverMovements,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "recover_larger_balances",
    //         Component: recoverLargerBalances,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "recover_third_party_balances",
    //         Component: recoverThirdPartyBalances,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "recoverCostCenters",
    //         Component: recoverCostCenters,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "audit_processes",
    //         Component: auditProcesses,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //     ],
    //   },
    //   {
    //     path: "special_processes",
    //     Component: cardComponentSpecialProcesses,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [
    //       {
    //         path: "file_viewer",
    //         Component: fileViewer,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "telephone_directory",
    //         Component: telephoneDirectory,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "consolidate_companies",
    //         Component: consolidateCompanies,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "reset_boxes_shifts",
    //         Component: resetBoxesShifts,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "create_data_dictionary",
    //         Component: createDataDictionary,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //       {
    //         path: "sql_queries",
    //         Component: sqlQueries,
    //         errorElement: (
    //           <div>
    //             <h2>Esta ruta no existe</h2>
    //           </div>
    //         ),
    //         children: [],
    //       },
    //     ],
    //   },
    //   {
    //     path: "config",
    //     Component: config,
    //     errorElement: (
    //       <div>
    //         <h2>Esta ruta no existe</h2>
    //       </div>
    //     ),
    //     children: [],
    //   },
    // ],
  },
  {
    path: "/moduls",
    Component: homeModuls,
  }
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
