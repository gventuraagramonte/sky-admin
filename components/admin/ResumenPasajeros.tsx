'use client'

import { getPasajerosCount } from "@/lib/api/pasajeros"
import { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa"

export default function ResumenPasajeros() {
    const [cantidad, setCantidad] = useState<number | null>(null)

    useEffect(()=>{
        getPasajerosCount()
            .then(setCantidad)
            .catch(()=>setCantidad(0))
    },[])

    return (
        <div className="bg-zinc-900 text-white p-6 rounded-lg shadow w-full md:w-1/3">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-zinc-400">Pasajeros Registrados</span>
                <FaUser className="text-green-400" />
            </div>
            <h2 className="text-2xl font-bold">{cantidad ?? 'Cargando...'}</h2>
        </div>
    )

}