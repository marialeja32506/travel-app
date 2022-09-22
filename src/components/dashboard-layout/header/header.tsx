import { BiWorld } from "react-icons/bi";

export const Header = (): React.ReactElement => {
  return (
    <div className="flex justify-end bg-slate-50">
      <nav className="flex self-center">
        <ul className="flex  justify-between space-x-3 m-4 ml-40 pr-3 font-rounded font-normal text-primaryBlue laptop:ml-14 laptop:space-x-1">
          <li className="pr-8 hover:text-orange-500  laptop:pr-4 flex ">
            <BiWorld size={20} />
            <span className="ml-4">Español</span>
          </li>
          <li className="pr-8 hover:text-orange-500 laptop:pr-4 ">
            <span className="ml-4">Iniciar sesión</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
