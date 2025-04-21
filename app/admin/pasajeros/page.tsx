'use client'
import { useEffect, useState } from 'react'
import {Switch} from '@/components/ui/switch'
import { PasajerosTable } from '@/components/pasajeros/PasajerosTable'
import { usePasajeros } from '@/lib/hooks/usePasajeros'

interface Pasajero {
    id: string
    nombre: string
    asiento: number
    activo: string
}

export default function PasajerosPage() {
    const {pasajeros, handleToogle} = usePasajeros()

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Gestión de Pasajeros</h1>
            <PasajerosTable
        pasajeros={pasajeros.map(p => ({ ...p, activo: p.activo === "true" }))}
        onToggle={handleToogle}
      />
        </div>
    )
}