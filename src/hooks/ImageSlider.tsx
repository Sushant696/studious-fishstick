import { useState } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ImageUrls from "./images";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? ImageUrls.length - 1 : prevSlide - 1
    );
  }; // if index of img is 0 then go to last image or current index - 1

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === ImageUrls.length - 1 ? 0 : prevSlide + 1
    );
  }; // if last index then go to 0 index and if not then curre t index + 1 ;

  return (
    <div>
      <img
        src={ImageUrls[currentSlide]}
        alt={`Slide`}
        style={{ width: "100%", height: "600px", objectFit: "cover" }}
      />
      <Button type="primary" onClick={handlePrevious}>
        <LeftOutlined />
        Previous
      </Button>
      <Button type="primary" onClick={handleNext}>
        Next
        <RightOutlined />
      </Button>
    </div>
  );
}

// why we used a arrow function inside the setstate function instead of directly changing it's value is because first we are checking the current state and than updating it as we like ..
