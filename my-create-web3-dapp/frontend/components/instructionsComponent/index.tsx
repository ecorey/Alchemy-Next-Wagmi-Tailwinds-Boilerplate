import {
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
  useNetwork,
} from "wagmi";

import { sepolia } from "wagmi";
import { configureChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useEffect, useState } from "react";

import Image from "next/image";
import myImage from "./images/11.gif";
import Link from "next/link";

export default function InstructionsComponent() {
  return (
    <h1 className="flex items-center justify-center mt-48 text-3xl underline font-weight-bold text-stone-400">
      <Link
        href="https://www.polytope.net/hedrondude/polytera.htm"
        target="_blank"
      >
        Hello World
      </Link>
    </h1>
  );
}
