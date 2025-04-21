'use client'
import {MdFlight} from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {HiOutlineChartBar} from 'react-icons/hi'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = [
    {label: 'Vuelos', href: '/admin/vuelos', icon: <MdFlight />},
    {label: 'Pasajeros', href: '/admin/pasajeros',icon: <FaUsers />},
    {label: 'Reportes', href: '/admin/reportes', icon: <HiOutlineChartBar />},
]

export function Sidebar(){
    const pathname = usePathname()

    return (
        <aside className='hidden md:flex flex-col w-60 bg-white dark:bg-slate-900 border-r dark:border-slate-700 shadow-sm'>
            <div className='px-6 py-4 text-xl font-bold tracking-tight'>
                SkyAdmin
            </div>
            <nav className="flex flex-col gap-1 px-4">
            {navItems.map(({ label, href, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition ${
              pathname === href
                ? 'bg-slate-200 dark:bg-slate-700 font-semibold'
                : ''
            }`}
          >
            <span className="text-lg">{icon}</span>
            {label}
          </Link>
        ))}
            </nav>
        </aside>
    )
}