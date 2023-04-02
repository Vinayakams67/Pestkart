import React from "react";
import Carousel from "react-material-ui-carousel";
import "./banner.css";

const data = [
  "https://www.pestcontrolindia.com/wp-content/uploads/2015/04/Untitled-presentation-20.jpg?q=50",
  "https://www.pestcontrolindia.com/wp-content/uploads/2015/04/Web-Banners-Pest-Seal-2-1.jpg?q=50",
  "https://www.pestcontrolindia.com/wp-content/uploads/2015/04/Web-Banners-Trubble-Gum-1.jpg?q=50",
];

const Banner = () => {
  return (
    <Carousel
      className="carasousel"
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#fff",
          color: "#494949",
          borderRadius: 0,
          marginTop: -22,
          height: "104px",
        },
      }}
    >
      {data.map((img, i) => {
        return (
          <>
            <img src={img} alt="" className="banner_img" />
          </>
        );
      })}
    </Carousel>
  );
};

export default Banner;
