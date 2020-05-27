import React from "react";
import "./ImageList.css";

import ImageCard from "./ImageCard";

export default ({ images }) => {
  const imagesList = images.map(({ urls, id, description }) => (
    <ImageCard alt={description} key={id} urls={urls} />
  ));
  return <div className="image-list">{imagesList}</div>;
};
