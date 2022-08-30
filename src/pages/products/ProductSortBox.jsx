const ProductSortBox = ({ setSortItem, sortItem,setCurrentPage }) => {

  // On Change Handler
  const onChangeHandler = (e) => {
    setSortItem(e.target.id);
    setCurrentPage(1);
  };

  return (
    <div className="product-sort-box">
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          value={sortItem}
          type="radio"
          name="sort"
          id="noSort"
        />
        <label htmlFor="noSort">بدون ترتیب</label>
      </div>
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          value={sortItem}
          type="radio"
          name="sort"
          id="low"
        />
        <label htmlFor="low"> من الأقل الی الأعلی</label>
      </div>
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          value={sortItem}
          type="radio"
          name="sort"
          id="high"
        />
        <label htmlFor="high"> من الأعلی الی الأقل</label>
      </div>
    </div>
  );
};

export default ProductSortBox;

/* 
     <select
        value={sortItem}
        onChange={(e) => setSortItem(e.target.value)}
        className="select-box"
      >
        <option value="select">ترتیب حسب</option>
        <option value="low">السعر : من الأقل الی الأعلی</option>
        <option value="high">السعر : من الأعلی الی الأقل</option>
      </select>
*/
