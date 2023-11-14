import Boton from "@/components/ui/Boton"
import Link from "next/link"

export const generateMetadata = {
  title: 'E-commerce',
  description: 'App de compras online',
  keywords: ['Compra', 'Venta', 'Barato', 'Nuevo'],
  openGraph: {
    title: 'E-commerce',
    description: 'App de compras online',
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['Amir Sholi'],
  },
}

export default function Home() {


  return (
    <>
      <main className="contenedor">
        <p className="text-2xl text-center my-6 border-b-2 border-blue-600 text-primario">Bienvenidos a mi Ecommerce</p>

        <Link href={"/productos/todos"} className=''>
          <p className="bg-primario text-white w-fit p-2 rounded-md shadow-md hover:cursor-pointer ">Ver Productos</p>
        </Link>
        
      </main>
    </>
  )
}
