// libs
import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
  blank?: boolean;
}

const TextLink = ({ href, text, blank }: Props) => {
  return (
    <Link href={href}>
      <a
        style={{
          color: "inherit",
        }}
        target={blank ? "_blank" : "_self"}
        rel="noopener noreferrer"
      >
        <span>{text}</span>
      </a>
    </Link>
  );
};

export default TextLink;
