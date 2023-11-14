import Boton from "@/components/ui/Boton";



const Admin = () =>{


    return(
        <div class="contenedor flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                    <th scope="col" class="px-6 py-4">id</th>
                    <th scope="col" class="px-6 py-4">Name</th>
                    <th scope="col" class="px-6 py-4">Stock</th>
                    <th scope="col" class="px-6 py-4">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td class="whitespace-nowrap px-6 py-4">Product 1</td>
                    <td class="whitespace-nowrap px-6 py-4">19</td>
                    <td class="whitespace-nowrap px-6 py-4">$1999</td>
                    <td class="whitespace-nowrap px-6 py-4"><Boton className="bg-orange-500">Edit</Boton><Boton>Delete</Boton></td>
                    </tr>
                    <tr
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                    <td class="whitespace-nowrap px-6 py-4">Product 3</td>
                    <td class="whitespace-nowrap px-6 py-4">80</td>
                    <td class="whitespace-nowrap px-6 py-4">$100</td>
                    <td class="whitespace-nowrap px-6 py-4"><Boton className="bg-orange-500">Edit</Boton><Boton>Delete</Boton></td>
                    </tr>
                    <tr
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-200">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                    <td class="whitespace-nowrap px-6 py-4">Product 3</td>
                    <td class="whitespace-nowrap px-6 py-4">40</td>
                    <td class="whitespace-nowrap px-6 py-4">$60</td>
                    <td class="whitespace-nowrap px-6 py-4"><Boton className="bg-orange-500">Edit</Boton><Boton>Delete</Boton></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Admin;