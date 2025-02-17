
import React, { useState,useEffect } from "react";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

function Loader() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    // Set a timeout to change the loading state after a certain period
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change the delay duration as needed (3000ms = 3 seconds)

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-container">
      <FadeLoader color={'#000'} loading={loading} css={css``} height={30} />
    </div>
  );
}

export default Loader;