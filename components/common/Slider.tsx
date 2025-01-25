import React from "react";

type SliderItem = {
  icon: React.ReactNode;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
};

type SliderProps = {
  slides: SliderItem[];
};

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return <div>Slider</div>;
};

export default Slider;
