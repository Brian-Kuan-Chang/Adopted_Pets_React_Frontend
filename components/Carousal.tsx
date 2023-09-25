// big image on left, default the first image
// small images on right
// when u click the small imageConfigDefault, it will sync to the big image
import React, { useState } from "react";

export default function Carousal({ images }: { images: string[] }) {
  const [picURL, setPicURL] = useState(
    "http://pets-images.dev-apis.com/pets/none.jpg"
  );
  return (
    <div className="flex bg-blue-300  w-full justify-center">
      <div className="w-1/2 ">
        <img src={picURL} alt="animal" />
      </div>
      <div className="w-1/2  cursor-pointer flex flex-wrap items-center justify-around">
        {images.map((image) => (
          <img
            className="rounded-full object-cover w-16 h-16"
            src={image}
            alt="animal thumbnail"
            key={image}
            onClick={(e) => setPicURL(image)}
          />
        ))}
      </div>
    </div>
  );
}
