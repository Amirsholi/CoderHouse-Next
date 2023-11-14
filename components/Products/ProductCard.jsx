import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ item }) => {

    return (
        <article className=" p-2 border w-full h-[200px] shadow-sm rounded hover:shadow-lg hover:scale-110 ease-in duration-300 ">
            <Link href={`/detalle/${item.id}`}
                className="flex flex-col"
            >
                <Image
                    alt={item.title}
                    src={item.image}
                    width={288}
                    height={288}
                    className={"w-full h-[120px] object-contain"}
                />

                <div className="px-4 border-t border-gray-200">
                    <h4 className="text-sm">Producto {item.id}</h4>
                    <p className="text-lg font-semibold">$ {item.price}</p>
                </div>
            </Link>
        </article>
    )
}

export default ProductCard