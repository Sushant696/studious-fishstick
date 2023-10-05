import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="flex justify-around py-[1rem] border-solid  ">
          <Link to="/smartphone">
            <h2 className=" hover:text-sky-400">SmartPhones</h2>
          </Link>
          <Link to="/laptops">
            <h2 className=" hover:text-sky-400">Laptop</h2>
          </Link>
          <Link to="/fragnances">
            <h2 className=" hover:text-sky-400">Fragnances</h2>
          </Link>
          <Link to="/decoration">
            <h2 className=" hover:text-sky-400">Decoration</h2>
          </Link>
          <Link to="/skincare">
            <h2 className=" hover:text-sky-400">Skin care</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
}

