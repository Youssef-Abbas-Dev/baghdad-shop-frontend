const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav style={{ right: toggle && "0" }} className="navbar">
      <div className="navbar-close-icon">
        <i onClick={() => setToggle(false)} className="bi bi-x-lg"></i>
      </div>
      <ul className="navbar-links">
        <li onClick={() => setToggle(false)} className="navbar-link">
          الصفحه الرئیسیه
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          المنزل و المطبخ
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          الإلكترونيات و الموبايلات
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          رجاليه
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          نسائیه
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          الکتب
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
