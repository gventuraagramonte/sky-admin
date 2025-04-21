'use client'

import { PasajerosRow } from "./PasajerosRow"

interface Pasajero {
    nombre: string
    asiento: number
    activo: boolean
}

interface PasajerosTableProps {
    pasajeros: Pasajero[]
    onToggle: (index: number) => void
}

export function PasajerosTable({ pasajeros, onToggle }: PasajerosTableProps) {
    return (
        <table className="min-w-full table-auto border-separate border-spacing-y-2">
            <thead>
                <tr className="text-left">
                    <th>Nombre</th>
                    <th>Asiento</th>
                    <th className="text-center">Estado</th>
                    <th className="text-center">Acción</th>
                </tr>
            </thead>
            <tbody>
                {pasajeros.map((p,index)=>(
                    <PasajerosRow
                        key={index}
                        nombre={p.nombre}
                        asiento={p.asiento}
                        activo={p.activo}
                        onToggle={() => onToggle(index)}
                    />
                ))}
            </tbody>
        </table>
    )
}