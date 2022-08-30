import ProductFilterBox from "./ProductFilterBox";
import ProductSortBox from "./ProductSortBox";

const ProductSidebar = ({
  setSortItem,
  sortItem,
  filterItem,
  setFilterItem,
  setCurrentPage,
}) => {
  return (
    <div className="product-sidebar">
      <div className="sidebar-item">
        <h4 className="product-sidebar-title">ترتیب حسب السعر</h4>
        <ProductSortBox
          setCurrentPage={setCurrentPage}
          setSortItem={setSortItem}
          sortItem={sortItem}
        />
      </div>
      <div className="sidebar-item">
        <h4 className="product-sidebar-title">فلتر حسب السلعه</h4>
        <ProductFilterBox
          filterItem={filterItem}
          setFilterItem={setFilterItem}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductSidebar;
