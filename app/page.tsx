"use client";
import { useEffect, useState } from "react";
import Tres from "./_actos/tres";
import Uno from "./_actos/uno";
import Final from "./_actos/final";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    // Initialize the window width
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    // Calculate the image width as 30% of the window width
    setImageWidth(windowWidth * 0.5);
  }, [windowWidth]);
  return (
    <main className="flex flex-col items-center justify-start snap-y snap-mandatory overflow-y-auto h-screen">
      <Uno />
      <Tres windowWidth={windowWidth} imageWidth={imageWidth} windowHeight={windowHeight} />
      <Final windowWidth={windowWidth} imageWidth={imageWidth} windowHeight={windowHeight} />
    </main>
  );
};

export default Home;
