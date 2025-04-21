'use client'

import ResumenPasajeros from '@/components/admin/ResumenPasajeros'



export default function AdminDashboard() {

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className='flex flex-wrap gap-6'>
                <ResumenPasajeros />
            </div>
        </section>
    )
}