import React, { useState, useEffect } from "react";

export default ({ description, urls }) => {
  const [spans, setSpansHeight] = useState(0);
  const ref = React.createRef();

  const setSpans = () => {
    const height = ref.current.clientHeight;

    const spans = Math.ceil(height / 10);

    setSpansHeight(spans);
  };

  useEffect(() => setSpans(), []);
  return (
    <div>
      <img
        ref={ref}
        alt={description}
        src={urls.regular}
        style={{ gridRowEnd: `span ${spans}` }}
      />
    </div>
  );
};
