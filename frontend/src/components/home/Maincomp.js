import React, { useEffect } from "react";
import Banner from "./Banner";
import Slide from "./Slide";
import "./home.css";
import "./slide.css";
import { getProducts } from "../redux/actions/action";
import {useDispatch, useSelector} from "react-redux";

const Maincomp = () => {

  const {products}  = useSelector(state => state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);

  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <Slide title="Deals of the day" products={products} />
      <div className="center_img">
          <img src="https://www.gingerbays.com/wp-content/uploads/2022/10/gingerbay-12-Oct-2022-Desktop-View.jpg"/>      </div>
      <Slide title="Today's deal" products={products} />
      <Slide title="Best Seller" products={products}/>
      <Slide title="Upto 80% off" products={products}/>
    </div>
  );
};

export default Maincomp;
