"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { label: "Todos", href: "/productos/todos", },
    { label: "Electronics", href: "/productos/electronics", },
    { label: "Jewelery", href: "/productos/jewelery", },
    { label: "Food", href: "/productos/food", }
]

const CategoriesMenu = () => {
    
    const pathname = usePathname();

    return (
        <aside className="flex flex-col gap-3">
            {links.map(link => (
                    <Link 
                        key={link.label} 
                        href={link.href}
                        className={`${pathname === link.href ? "font-semibold border-b-2" :'hover:cursor-pointer hover:font-bold ease-in duration-300'}`}
                    >
                        {link.label}
                    </Link>
                ))}
        </aside>
    )
}

export default CategoriesMenu;