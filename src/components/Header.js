import { LOG_URL } from "../utils/constants";
import {useState} from "react"
const Header = () => {
  const [btnName, setbtnName] = useState("Login")
  return (
    <div className="res-header">
      <div className="res-logo">
        <img className="logo" src={LOG_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button class="login" type="button" onClick={() => {
            btnName === "Login" ? setbtnName("LogOut") : setbtnName("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
