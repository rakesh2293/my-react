import { LOG_URL } from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom"
const Header = () => {
  const [btnName, setbtnName] = useState("Login")
  return (
    <div className="res-header">
      <div className="res-logo">
        <img className="logo" src={LOG_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact US</Link></li>
          <button className="login" type="button" onClick={() => {
            btnName === "Login" ? setbtnName("LogOut") : setbtnName("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
