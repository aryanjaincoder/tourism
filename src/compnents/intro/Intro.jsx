import "./intro.scss";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeftOutlined,
  ArrowRightAltOutlined,
  ArrowRightOutlined,
} from "@mui/icons-material";

export default function Intro() {
  const [imageIndex, setImageIndex] = useState(0);
  
  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(sliderItems.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === sliderItems.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };
  
  const sliderItems = ["1.png", "2.png", "3.png"];

  
  return (
    <div className="intro" id="intro">
      <div className="arrows left"  onClick={() => changeSlide("left")}>
        <ArrowLeftOutlined />
      </div>

      <div className="slider">
        <img src={sliderItems[imageIndex]}  alt="" className="img" />
      </div>

      {sliderItems.map((item) =>(
        <img src={item}  alt="" className="image" />
      ))}

      <div className="arrows right" onClick={() => changeSlide("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
}
