import React, { useState } from "react";

import SearchBar from "./SearchBar";
import unsplashAPI from "../api/unsplash";
import ImageList from "./ImageList";
import "bulma/css/bulma.css";

export default () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await unsplashAPI.get("/search/photos", {
      params: {
        query: term,
      },
    });
    setImages(response.data.results);
  };

  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <h1>SALUT</h1>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};
