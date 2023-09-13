import { useRef, useState } from "react";
import { ComponentCard } from "../ComponentCard/ComponentCard";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./Carousel.css";
import { Alert } from "../../ComponentLibrary/Alert/Alert";
import { Avatar } from "../../ComponentLibrary/Avatar/Avatar";
import { Badge } from "../../ComponentLibrary/Badge/Badge";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const components = [
    <Alert variant="info" text="oops something went wrong" />,
    <Avatar
      fallback="D"
      size="lg"
      name="david"
      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />,
    <Avatar
      fallback="D"
      size="lg"
      name="david"
      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    >
      <Badge variant="info" size="sm" text="4+" />
    </Avatar>,
    "four",
    "five",
  ];

  const handleNext = () => {
    if (currentIndex < components.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const itemWidth = carouselRef.current
    ? carouselRef.current.clientWidth / components.length
    : 0;

  const transformValue = `translateX(-${400 * currentIndex}px)`;
  return (
    <div className="carousel">
      <button onClick={handlePrevious}>
        <BsChevronLeft />
      </button>
      <div
        className="list"
        ref={carouselRef}
        style={{ transform: transformValue }}
      >
        {components.map((component) => (
          <ComponentCard component={component} />
        ))}
      </div>
      <button onClick={handleNext}>
        <BsChevronRight />
      </button>
    </div>
  );
};
