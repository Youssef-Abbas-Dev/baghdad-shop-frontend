import "./cart.css";

const cartItems = [
  {
    id: 1,
    quantity: 2,
    price: 21,
    title: "هاتف جوال سامسونج",
    image: "/images/products/o5.jpg",
  },
  {
    id: 2,
    quantity: 3,
    price: 10.05,
    title: "هاتف جوال سامسونج",
    image: "/images/products/o26.jpg",
  },
];

const Cart = () => {
  return (
    <section className="cart">
      <h1 className="cart-title">سله التسوق</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img-wrapper">
                <img
                  className="cart-item-img"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="cart-item-info">
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-quantity">
                  الکمیه:
                  <span>{item.quantity}</span>
                </div>
                <div className="cart-item-price">
                  السعر:
                  <span>{(item.price * item.quantity).toFixed(2)}$ </span>
                </div>
                <i className="bi bi-trash fill cart-item-delete-icon"></i>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-text">
            <i className="bi bi-check-circle-fill"></i>
            جزء من طلبك مؤهل للشحن المجاني. قم بتحدید هذا الخیار عند دفع
            التفاصیل
          </div>
          <div className="cart-summary-total">
            المجموع:
            <span>
              {cartItems
                .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                .toFixed(2)}$
            </span>
          </div>
          <button className="cart-summary-btn">تابع عملیات الشراء</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
