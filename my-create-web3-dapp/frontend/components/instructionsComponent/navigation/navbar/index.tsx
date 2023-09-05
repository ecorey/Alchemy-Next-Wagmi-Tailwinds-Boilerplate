import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import myImage from "./images/giphy.gif";

export default function Navbar() {
  return (
    <nav className="w-32 h-32 mb-2 ml-auto">
      <Image src={myImage} alt="Description" width={152} height={152} />
      <ConnectKitButton />
    </nav>
  );
}
