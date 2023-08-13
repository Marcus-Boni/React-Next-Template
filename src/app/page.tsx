export default function Home() {
  return (
    <div className="container mx-auto">
      <table className="mx-2 w-full">
        <thead>
          <tr className="border-b border-gray-300 text-left text-sm">
            <th className="py-2">Nome</th>
            <th className="hidden md:table-cell">Título</th>
            <th className="hidden md:table-cell">Email</th>
            <th>Função</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300 text-left text-sm">
            <td className="py-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">mariadocafe@hotmail.com</p>
            </td>
            <td className="hidden text-gray-400 md:table-cell">Cafezeira</td>
            <td className="hidden text-gray-400 md:table-cell">mariadocafe@hotmail.com</td>
            <td className="text-gray-400">Membro</td>
            <td>
              <a href="http://">Editar</a>
            </td>
          </tr>
          <tr className="border-b border-gray-300 text-left text-sm">
            <td className="py-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">mariadocafe@hotmail.com</p>
            </td>
            <td className="hidden text-gray-400 md:table-cell">Cafezeira</td>
            <td className="hidden text-gray-400 md:table-cell">mariadocafe@hotmail.com</td>
            <td className="text-gray-400">Membro</td>
            <td>
              <a href="http://">Editar</a>
            </td>
          </tr>
          <tr className="border-b border-gray-300 text-left text-sm">
            <td className="py-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">mariadocafe@hotmail.com</p>
            </td>
            <td className="hidden text-gray-400 md:table-cell">Cafezeira</td>
            <td className="hidden text-gray-400 md:table-cell">mariadocafe@hotmail.com</td>
            <td className="text-gray-400">Membro</td>
            <td>
              <a href="http://">Editar</a>
            </td>
          </tr>
          <tr className="border-b border-gray-300 text-left text-sm">
            <td className="py-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">mariadocafe@hotmail.com</p>
            </td>
            <td className="hidden text-gray-400 md:table-cell">Cafezeira</td>
            <td className="hidden text-gray-400 md:table-cell">mariadocafe@hotmail.com</td>
            <td className="text-gray-400">Membro</td>
            <td>
              <a href="http://">Editar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
