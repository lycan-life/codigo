
function Panel() {
  return (
    <div class="overflow-x-auto relative sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    Producto
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Color
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Categoria
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Accesorios
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Disponible
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Precio
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Peso
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Opciones
                                </th>
                            </tr>
                            {/* PROGRAMA PARA DESPUES */}
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="py-4 px-6 ">
                                    Sliver
                                </td>
                                <td class="py-4 px-6">
                                    Laptop
                                </td>
                                <td class="py-4 px-6">
                                    Yes
                                </td>
                                <td class="py-4 px-6">
                                    Yes
                                </td>
                                <td class="py-4 px-6">
                                    $2999
                                </td>
                                <td class="py-4 px-6">
                                    3.0 lb.
                                </td>
                                <td class="flex items-center py-4 px-6 space-x-3">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
  )
}
export default Panel;