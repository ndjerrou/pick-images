import React from "react";

export default ({ images }) => {
  return images.map(({ urls, id, description }) => (
    <img alt={description} key={id} src={urls.regular} />
  ));
};
