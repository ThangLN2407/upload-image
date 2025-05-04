import React from "react";
import ImageUploader from "../components/ImageUploader";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1>Welcome to the Image Uploader</h1>
      <p>Upload your images easily and quickly!</p>
      <ImageUploader />

      <div className="flex flex-col"></div>
    </div>
  );
};

export default Home;
