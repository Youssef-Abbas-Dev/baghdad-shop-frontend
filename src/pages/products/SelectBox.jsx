const SelectBox = ({ setSortItem, sortItem }) => {
  return (
    <div className="product-select-box">
      <select
        value={sortItem}
        onChange={(e) => setSortItem(e.target.value)}
        className="select-box"
      >
        <option value="select">ترتیب حسب</option>
        <option value="low">السعر : من الأقل الی الأعلی</option>
        <option value="high">السعر : من الأعلی الی الأقل</option>
      </select>
    </div>
  );
};

export default SelectBox;
