import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TableNewTransation() {
    return (
        <section className="px-[15px]">
            <div style={{ maxHeight: '200px', overflowY: 'auto' }} className="px-[2px]">
                <table className="w-full divide-y-[1px] divide-first text-center text-first">
                    <thead className="" style={{ backgroundColor: 'var(--colorNeutralStencil1Alpha)' }}>
                        <tr style={{ color: 'var(--colorNeutralForeground1)' }} className="z-40 top-0 text-[14px] ">
                            <th className="py-[7px] font-semibold text-center" style={{ width: '3%' }}>No.</th>
                            <th className="font-semibold text-center" style={{ width: '15%' }}>Codigo</th>
                            <th className="font-semibold text-center" style={{ width: '23%' }}>Descripción del movimiento</th>
                            <th className="font-semibold text-center" style={{ width: '16%' }}>Valor Débito</th>
                            <th className="font-semibold text-center" style={{ width: '15%' }}>Valor Crédito</th>
                            <th className="font-semibold text-center" style={{ width: '15%' }}>Base Gravable</th>
                        </tr>
                    </thead>
                </table>
                <div style={{ maxHeight: '160px', overflowY: 'auto' }}>
                    <table style={{ borderTopColor: 'var(--colorNeutralStroke2)' }} className="border-t-[1px] w-full divide-y-[1px] divide-first text-center text-first">
                        <tbody >
                            <tr style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] text-[11px] font-semibold border-b-[0.5px] w-full">
                                <td className="text-end" style={{ width: '3%' }}>01</td>
                                <td className="text-center" style={{ width: '15%' }}>105475844 </td>
                                <td className="text-start" style={{ width: '23%' }}>Conceptoasda asdad </td>
                                <td className="text-end" style={{ width: '16%' }}>$472.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$142.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$562.455</td>
                            </tr>
                            <tr style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] text-[11px] font-semibold border-b-[0.5px] w-full">
                                <td className="text-end" style={{ width: '3%' }}>01</td>
                                <td className="text-center" style={{ width: '15%' }}>105475844 </td>
                                <td className="text-start" style={{ width: '23%' }}>Conceptoasda asdad </td>
                                <td className="text-end" style={{ width: '16%' }}>$472.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$142.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$562.455</td>
                            </tr>
                            <tr style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] text-[11px] font-semibold border-b-[0.5px] w-full">
                                <td className="text-end" style={{ width: '3%' }}>01</td>
                                <td className="text-center" style={{ width: '15%' }}>105475844 </td>
                                <td className="text-start" style={{ width: '23%' }}>Conceptoasda asdad </td>
                                <td className="text-end" style={{ width: '16%' }}>$472.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$142.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$562.455</td>
                            </tr>
                            <tr style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] text-[11px] font-semibold border-b-[0.5px] w-full">
                                <td className="text-end" style={{ width: '3%' }}>01</td>
                                <td className="text-center" style={{ width: '15%' }}>105475844 </td>
                                <td className="text-start" style={{ width: '23%' }}>Conceptoasda asdad </td>
                                <td className="text-end" style={{ width: '16%' }}>$472.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$142.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$562.455</td>
                            </tr>
                            <tr style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] text-[11px] font-semibold border-b-[0.5px] w-full">
                                <td className="text-end" style={{ width: '3%' }}>01</td>
                                <td className="text-center" style={{ width: '15%' }}>105475844 </td>
                                <td className="text-start" style={{ width: '23%' }}>Conceptoasda asdad </td>
                                <td className="text-end" style={{ width: '16%' }}>$472.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$142.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$562.455</td>
                            </tr>
                            <tr style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] text-[11px] font-semibold border-b-[0.5px] w-full">
                                <td className="text-end" style={{ width: '3%' }}>01</td>
                                <td className="text-center" style={{ width: '15%' }}>105475844 </td>
                                <td className="text-start" style={{ width: '23%' }}>Conceptoasda asdad </td>
                                <td className="text-end" style={{ width: '16%' }}>$472.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$142.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$562.455</td>
                            </tr>
                            <tr style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] text-[11px] font-semibold border-b-[0.5px] w-full">
                                <td className="text-end" style={{ width: '3%' }}>01</td>
                                <td className="text-center" style={{ width: '15%' }}>105475844 </td>
                                <td className="text-start" style={{ width: '23%' }}>Conceptoasda asdad </td>
                                <td className="text-end" style={{ width: '16%' }}>$472.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$142.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$562.455</td>
                            </tr>
                            <tr style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] text-[11px] font-semibold border-b-[0.5px] w-full">
                                <td className="text-end" style={{ width: '3%' }}>01</td>
                                <td className="text-center" style={{ width: '15%' }}>105475844 </td>
                                <td className="text-start" style={{ width: '23%' }}>Conceptoasda asdad </td>
                                <td className="text-end" style={{ width: '16%' }}>$472.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$142.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$562.455</td>
                            </tr>
                            <tr style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] text-[11px] font-semibold border-b-[0.5px] w-full">
                                <td className="text-end" style={{ width: '3%' }}>01</td>
                                <td className="text-center" style={{ width: '15%' }}>105475844 </td>
                                <td className="text-start" style={{ width: '23%' }}>Conceptoasda asdad </td>
                                <td className="text-end" style={{ width: '16%' }}>$472.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$142.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$562.455</td>
                            </tr>
                            <tr style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] text-[11px] font-semibold border-b-[0.5px] w-full">
                                <td className="text-end" style={{ width: '3%' }}>01</td>
                                <td className="text-center" style={{ width: '15%' }}>105475844 </td>
                                <td className="text-start" style={{ width: '23%' }}>Conceptoasda asdad </td>
                                <td className="text-end" style={{ width: '16%' }}>$472.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$142.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$562.455</td>
                            </tr>
                            <tr style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] text-[11px] font-semibold border-b-[0.5px] w-full">
                                <td className="text-end" style={{ width: '3%' }}>01</td>
                                <td className="text-center" style={{ width: '15%' }}>105475844 </td>
                                <td className="text-start" style={{ width: '23%' }}>Conceptoasda asdad </td>
                                <td className="text-end" style={{ width: '16%' }}>$472.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$142.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$562.455</td>
                            </tr>
                            <tr style={{ color: 'var(--colorNeutralForeground1)', borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] text-[11px] font-semibold border-b-[0.5px] w-full">
                                <td className="text-end" style={{ width: '3%' }}>01</td>
                                <td className="text-center" style={{ width: '15%' }}>105475844 </td>
                                <td className="text-start" style={{ width: '23%' }}>Conceptoasda asdad </td>
                                <td className="text-end" style={{ width: '16%' }}>$472.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$142.256</td>
                                <td className="text-end" style={{ width: '15%' }}>$562.455</td>
                            </tr>
                            {/* Aquí van más filas */}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
