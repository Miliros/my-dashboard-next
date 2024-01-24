
import { IoCafeOutline } from "react-icons/io5"

export const SimpleWidget = () => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[28%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-7 justify-center">
      <div className="flex flex-col content-center justify-center">
        <div>
          <h2 className="font-bold text-gray-600 text-center ">Contador</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 py-3">
            <div id="icon">
              <IoCafeOutline size={50} className='text-green-600' />
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-2xl">Titulo</h4>
              <p className="text-xs text-gray-500">Subtitulo</p>
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
            <a href="#" className="text-indigo-600 text-xs font-medium">Más</a>
        </div>
        
      </div>
    </div>
  )
}