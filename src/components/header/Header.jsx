import "./header.css";
import Navbar from "./Navbar";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";
import { useState } from "react";

const Header = () => {
    const [toggle,setToggle] = useState(false);

  return (
    <div className="header">
      <TopHeader setToggle={setToggle} />
      <MiddleHeader />
      <Navbar toggle={toggle} setToggle={setToggle} />
      <div className="header-login">
        تسجيل الدخول
        <i className="bi bi-person-fill"></i>
    </div>
    </div>
  );
};

export default Header;
