import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (<Link to={"/smartPhones"}><h2 className=" hover:text-sky-400" >SmartPhones</h2></Link>),
  },
  {
    key: "",
    label: (<Link to={"/laptops"}><h2 className=" hover:text-sky-400" >Laptops</h2></Link>)
  },
];

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="flex justify-around py-[1rem] border-solid  ">
          <Link to="/">
            <h2 className=" hover:text-sky-400">Homepage</h2>
          </Link>
          <Link to="/carousel">
            <h2 className=" hover:text-sky-400">Carousel</h2>
          </Link>
          <Link to="/about">
            <h2 className=" hover:text-sky-400">About Us</h2>
          </Link>
          <Link to="/Contact">
            <h2 className=" hover:text-sky-400">Contact</h2>
          </Link>
          <Link to="/form">
            <h2 className=" hover:text-sky-400">Form</h2>
          </Link>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Product Listing
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </nav>
    </div>
  );
}
