'use client'
import { FaUser } from 'react-icons/fa'
import { MdFlight } from 'react-icons/md'
import { HiOutlineChartBar } from 'react-icons/hi'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ResumenPasajeros from '@/components/admin/ResumenPasajeros'

const kpis = [
    {
        label: 'Vuelos Activos',
        value: '120',
        icon: <MdFlight className="w-6 h-6 text-blue-500" />,
    },
    {
        label: 'Pasajeros Registrados',
        value: '1,200',
        icon: <FaUser className='h-6 w-6 text-green-500' />,
    },
    {
        label: 'Reportes Generados',
        value: '50',
        icon: <HiOutlineChartBar className='h-6 w-6 text-yellow-500' />,
    },
]

export default function AdminDashboard() {

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className='flex flex-wrap gap-6'>
                <ResumenPasajeros />
            </div>
        </section>
    )
}