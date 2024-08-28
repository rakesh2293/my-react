import { LOG_URL } from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus =useOnlineStatus()
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg px-2">
      <div className="res-logo">
        <img className="w-20" src={LOG_URL} />
      </div>
      <div className="nav-items items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact US</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <button className="login" type="button" onClick={() => {
            btnName === "Login" ? setbtnName("LogOut") : setbtnName("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
