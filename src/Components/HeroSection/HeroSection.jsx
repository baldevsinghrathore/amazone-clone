import React, { useState,useEffect } from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import Advertisement from "../../assets/Advertisement.jpg"
import Advertisement2 from "../../assets/Advertisement2.jpg";
import Advertisement3 from "../../assets/Advertisement3.jpg";
import Advertisement4 from "../../assets/Advertisement4.jpg";
import Advertisement5 from "../../assets/Advertisement5.jpg";


function HeroSection() {
  const images = [Advertisement, Advertisement2, Advertisement3, Advertisement4, Advertisement5];
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="herosection" style={{ position: "relative" }}>
      <img src={images[currentIndex]} alt="Advertisement" style={{ width: "100%", height: "auto" }} />
      {currentIndex > 0 && (
        <p onClick={prevImage} style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}>
          <ArrowBackIosNewSharpIcon
            className="prev"
            style={{
              fontSize: "40px",
            }}
          />
        </p>
      )}
      {currentIndex < images.length - 1 && (
        <p onClick={nextImage} style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}>
          <ArrowForwardIosSharpIcon
            className="next"
            style={{
              fontSize: "40px",
            }}
          />
        </p>
      )}
    </div>
  );
}

export default HeroSection;
