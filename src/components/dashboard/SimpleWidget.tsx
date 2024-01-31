


interface Props{
title?: string, 
subtitle?: string,
label?: string, 
icon?: React.ReactNode,
href?: string
}

export const SimpleWidget = ({title, subtitle, label, icon, href} : Props) => {
  return (
    <div className="bg-white shadow-xl p-4 sm:min-w-[28%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-7 justify-center">
      <div className="flex flex-col content-center justify-center">
        <div>
          <h2 className="font-bold text-gray-600 text-center text-xl my-0">{label}</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 py-3">
          <div className="flex-shrink-0 mr-2">
              {icon}
            </div>
            <div id="temp" className=" flex-col text-center content-center">
          
              <h4 className="text-1x2">{title}</h4>
              <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
            <a href={href} className="text-indigo-600 text-xs font-large ">Más</a>
        </div>
        
      </div>
    </div>
  )
}