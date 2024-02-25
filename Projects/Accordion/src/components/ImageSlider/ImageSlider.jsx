import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImageSlider.css";

const ImageSlider = ({ url, limit, page }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchImage = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (url !== "") {
      fetchImage(url);
    }
  }, [url]);

  console.log(images);

  const handlePervious = () => {
    setCurrentSlide((currentSlide) => currentSlide === 0 ? images.length -1 : currentSlide-1)
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide) => currentSlide === images.length -1 ? 0 : currentSlide + 1)
  };


  if (loading) {
    return <div className="">Loading....</div>;
  }

  if (error !== null) {
    return <div className="">{error.message}</div>;
  }
  return (
    <>
      <div className="container">
        <BsArrowLeftCircleFill
          onClick={handlePervious}
          className="arrow arrow-left"
        />
        {images && images.length > 0
          ? images.map((image, index) => {
              return (
                <img
                  key={image.id}
                  alt={image.download_url}
                  src={image.download_url}
                  className={
                    currentSlide === index
                      ? "current-image"
                      : "current-image hide-current-image"
                  }
                />
              );
            })
          : null}
          <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
          />
        <span className="circle-indicators">
        {images && images.length > 0
          ? images.map((image, index) => {
              return (
                <button
                  key={image.id}
                  className={
                    currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              );
            })
          : null}
            </span> 
      </div>
    </>
  );
};

export default ImageSlider;
