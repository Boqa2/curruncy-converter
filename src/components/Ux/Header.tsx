import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex px-3 py-5 border-b-2 shadow-2xl text-gray-700 justify-between">
      <div>
        <h1 className="text-2xl font-bold ">React</h1>
      </div>
      <div className="space-x-1">
        <Link className="button" to={"/"}>
        nnn
        </Link>
        <Link className="button py-1" to={"/currency"}>
            Go to pages
        </Link>
      </div>
    </div>
  );
};

export default Header;
