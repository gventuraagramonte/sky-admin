import { useEffect, useState } from "react"


export interface Pasajero {
    id: string
    nombre: string
    asiento: number
    activo: string
}

export function usePasajeros(){
    const [pasajeros, setPasajeros] = useState<Pasajero[]>([])

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_GO_BASE_URL}/pasajeros-sql`)
            .then(res=>res.json())
            .then(data => setPasajeros(data.data))
            .catch(error => console.error("❌ Error al obtener los pasajeros", error))
    },[])

    const handleToogle = async (index: number) => {
        const pasajero = pasajeros[index]
        const nuevoEstado = pasajero.activo === "true" ? "false" : "true"
        const endpoint = `${process.env.NEXT_PUBLIC_API_GO_BASE_URL}/pasajeros-sql/${nuevoEstado==="true"?"activar":"desactivar"}/${pasajero.id}`

        try {
            const res = await fetch(endpoint, {
                method: 'PUT',
            })
            if(res.ok){
                const actualizados = pasajeros.map((p,i)=> i === index ? {...p, activo: nuevoEstado} : p)
                setPasajeros(actualizados)
            }else{
                console.error("❌ Error al actualizar el estado del pasajero")
            }
        } catch (error) {
            console.error("❌ Error en la solicitud",error)
        }
    }

    return {pasajeros, handleToogle}
}