//@ts-nocheck
import React from "react";
import Link from "next/link";

const MoreHref = ({ title, href, color }) => {
  return (
    <Link className={`more-btn${color ? " color" : ""}`} href={href}>
      {title}
    </Link>
  );
};

export default MoreHref;
