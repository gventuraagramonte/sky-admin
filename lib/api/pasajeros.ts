export async function getPasajerosCount(): Promise<number> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_GO_BASE_URL}/pasajeros-sql`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error('Error al obtener el conteo de pasajeros');
    }

    const data = await res.json();
    return data.meta?.total || 0;
}