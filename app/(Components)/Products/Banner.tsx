//@ts-nocheck
"use client";
import React from "react";
import Image from "next/image";

const Banner = (props) => {
  const { bannerInfo } = props;
  return (
    <header className="cn-banner">
      <h2>
        <Image
          src={bannerInfo.url}
          objectFit="cover"
          fill={true}
          alt={bannerInfo.alt}
        />
      </h2>
    </header>
  );
};

export default Banner;
