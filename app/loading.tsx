"use client";
import React from "react";
import { Grid } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#805AD5"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default Loading;
