import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = () => {
  return (
    <>
      <ClipLoader
        cssOverride={override}
        color="rgb(69 10 10)"
        size={150}
      />
    </>
  );
};

export default Spinner;