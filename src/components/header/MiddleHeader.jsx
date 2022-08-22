const MiddleHeader = () => {
  return (
    <div className="middle-header">
      <div className="middle-header-search-box">
        <input type="search" placeholder="ماذا ترید؟" />
        <button className="search-box-btn">ابحث</button>
      </div>
      <div className="middle-header-shopping-cart">
        سله التسوق
        <i className="bi bi-cart3"></i>
      </div>
    </div>
  );
};

export default MiddleHeader;
