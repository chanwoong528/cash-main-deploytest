//@ts-nocheck
import React from "react";
import Link from "next/link";
const LoginHref = ({ title, href, className }) => {
  return (
    <Link className={className} href={href}>
      {title}
    </Link>
  );
};

export default LoginHref;
