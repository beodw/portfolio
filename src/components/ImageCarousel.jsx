import React from "react";
import { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { github } from "../assets";
import { useSelector } from "react-redux";

function ImageCarousel({ images }) {
  const appState = useSelector((s) => s.app);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        infiniteLoop={false}
        gutter={12}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={1}
        slidesToScroll={2}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={(value) => setActiveItemIndex(value)}
        rightChevron={">"}
        leftChevron={"<"}
      >
        {appState.showCasedProject.carousel_images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full object-contain"
            style={{ height: 200, background: "#EEE" }}
          />
        ))}
      </ItemsCarousel>
    </div>
  );
}

export default ImageCarousel;
