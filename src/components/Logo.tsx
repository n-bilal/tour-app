import * as React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
};

const Logo = ({className = "", ...props}) => (
  <Link href="/" className={`self-center whitespace-nowrap text-xl font-semibold dark:text-white ${className}`} {...props}>
    YourTours
  </Link>
);

export default Logo;