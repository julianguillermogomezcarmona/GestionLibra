import './style.css'
export function TableExtraction() {
    // Array de ejemplo con nombres de columnas
    const columnNames = ['Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.'];

    // Array de ejemplo con datos
    const data = [
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },
        { transaction: '01', indicators: '105475844', transaction2: '01', indicators2: '105475844', transaction3: '01', indicators3: '105475844', transaction4: '01', indicators4: '105475844', transaction5: '01', indicators5: '105475844', transaction6: '01', indicators6: '105475844', transaction7: '01', indicators7: '105475844', transaction8: '01', indicators8: '105475844', transaction13: '01', indicators9: '105475844', transaction9: '01', indicators10: '105475844', transaction10: '01', indicators11: '105475844', transaction11: '01', indicators12: '105475844', transaction12: '01', indicators13: '105475844' },

        // Agrega más objetos al array según sea necesario
    ];
    // const  = ['Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.', 'Indicadores', 'Transacion.'];

    return (
        <section className="px-[15px]">
            <div style={{ overflowX: 'scroll' }} className="relative px-[2px]">
                {/* <table className="text-center text-first" style={{ tableLayout: 'fixed' }}>
                    
                </table> */}
                <table style={{}} className=" top-0 z-50 w-full divide-y-[1px] divide-first text-center text-first">
                    <thead className='w-full px-[10px]' style={{ backgroundColor: 'var(--colorNeutralStencil1Alpha)', top: 0, zIndex: 10, color: 'var(--colorNeutralForeground1)' }}>
                        <tr className="z-40 top-0 text-[14px] " style={{}} >
                            {columnNames.map((columnName, index) => (
                                <th key={index} style={{ minWidth: '100px', maxWidth: '150px', overflow: 'hidden', }} className="font-semibold py-[5px] text-center">{columnName}</th>
                            ))}
                        </tr>
                    </thead>
                </table>
                <div style={{ maxHeight: '275px', }} className='pr-[50px]'>
                    <table style={{ borderTopColor: 'var(--colorNeutralStroke2)' }} className="border-t-[1px] w-full divide-y-[1px] divide-first text-center text-first ">
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} style={{ borderBottomColor: 'var(--colorNeutralStroke2)', borderTopColor: 'var(--colorNeutralStroke2)' }} className="h-[30px] flex text-[11px] font-semibold border-b-[0.5px] w-full">
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators}</td>
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction2}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators2}</td>
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction3}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators3}</td>
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction4}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators4}</td>
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction5}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators5}</td>
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction6}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators6}</td>
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction7}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators7}</td>
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction8}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators8}</td>
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction9}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators9}</td>
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction10}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators10}</td>
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction11}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators11}</td>
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction12}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators12}</td>
                                    <td style={{ minWidth: '60px', maxWidth: '60px', overflow: 'hidden' }} className="text-end">{item.transaction13}</td>
                                    <td style={{ minWidth: '150px', maxWidth: '150px', overflow: 'hidden' }} className="text-center">{item.indicators13}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    )
}