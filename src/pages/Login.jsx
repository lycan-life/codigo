import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className="flex items-center justify-center h-screen">

        <div className="w-full max-w-xs">
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 border shadow-lg p-10">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="usuario">Usuario</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="usuario" type="text" placeholder="usuario"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="Contraseña">Contraseña</label>
                    <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Contraseña" type="password" placeholder="******************"/>
                </div>
                <div className="flex items-center justify-between">
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" to={'/WorkPlace'}>
                    Entrar
                </Link>
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" to={'/Registrate'}>
                    Registrate
                </Link>
                </div>
            </form>
        </div> 

    </div>
  )
}

export default Login