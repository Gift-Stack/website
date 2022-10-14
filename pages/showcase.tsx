import Link from "next/link";
import React from "react";

const Showcase = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      Showcase __ Coming soon. Go back{" "}
      <Link href="/">
        <a className="text-blue-500 ml-0.5">home</a>
      </Link>
    </div>
  );
};

export default Showcase;
