"use client";
import Lottie from "lottie-react";
import animation from "./animation.json";

const EducationAnimation = () => {
  return (
    <>
      <Lottie animationData={animation} loop={true} />
    </>
  );
};

export default EducationAnimation;
