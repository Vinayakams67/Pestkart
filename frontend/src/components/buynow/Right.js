import { React, useState, useEffect } from "react";

const Right = ({ iteam }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [iteam]);

  const totalAmount = () => {
    let price = 0;
    iteam.map((item) => {
      price += item.price.cost;
    });
    setPrice(price);
  };

  return (
    <div className="right_buy">
      <div className="cost_right">
        <p>Your order is eligible for FREE Delivery</p> <br />
        <span style={{ color: "#565959" }}>
          Select this option at checkout. Details
        </span>
        <h3>
          Subtotal ({iteam.length} items) :{" "}
          <span style={{ fonteWeight: 700, color: "#111" }}>₹{price}.00</span>
          <button className="rightbuy_btn">Proceed to Buy</button>
          <div className="emi">EMI available</div>
        </h3>
      </div>
    </div>
  );
};

export default Right;
