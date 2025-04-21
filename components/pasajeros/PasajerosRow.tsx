'use client'

import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface PasajeroRowProps {
    nombre: string
    asiento: number
    activo: boolean
    onToggle: () => void
}

export function PasajerosRow({nombre, asiento, activo, onToggle}: PasajeroRowProps) {
    const [enabled, setEnabled] = useState(activo)

    const handleChange = () => {
        setEnabled(!enabled)
        onToggle()
    }

    return(
        <tr>
            <td className='py-2'>{nombre}</td>
            <td className='py-2 text-center'>{asiento}</td>
            <td className='py-2 text-center'>
                <span className={cn('font-semibold', activo ? 'text-green-500' : 'text-red-500')}>
                    {activo ? 'Activo' : 'Inactivo'}
                </span>
            </td>
            <td className='py-2 text-center'>
                <Switch checked={enabled} onCheckedChange={handleChange} />
            </td>
        </tr>
    )
}