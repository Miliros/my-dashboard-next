interface Props {
  title?: string;
  subtitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
  imgSrc?: string; // Nueva propiedad para la URL de la imagen
}

export const SimpleWidget = ({
  title,
  subtitle,
  label,
  icon,
  href,
  imgSrc,
}: Props) => {
  return (
    // <div className="bg-white shadow-xl p-4 sm:min-w-[28%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-7 justify-center">
    //   <div className="flex flex-col content-center justify-center">
    //     <div>
    //       <h2 className="font-bold text-gray-600 text-center text-xl my-0">{label}</h2>
    //     </div>
    //     <div className="my-3">
    //       <div className="flex flex-row items-center justify-center space-x-1 py-3">
    //       <div className="flex-shrink-0 mr-2">
    //           {icon}
    //         </div>
    //         <div id="temp" className=" flex-col text-center content-center">

    //           <h4 className="text-1x2">{title}</h4>
    //           <p className="text-xs text-gray-500">{subtitle}</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
    //         <a href={href} className="text-indigo-600 text-xs font-large ">Add more</a>
    //     </div>

    //   </div>
    // </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-3">
      <a href="#">
        <img className="rounded-t-lg" src={imgSrc} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
       
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {label}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {subtitle}
        </p>
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </p>
        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          <a href={href} className="text-indigo-600 text-xs font-large ">
            Add more
          </a>
        </div>
      </div>
    </div>
  );
};
