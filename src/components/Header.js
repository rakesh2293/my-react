import { LOG_URL } from "../utils/constants";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
