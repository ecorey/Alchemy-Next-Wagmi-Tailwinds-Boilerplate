import Image from "next/image";
import myImage from "./images/giphy.gif";

export default function Footer() {
  return (
    <div className="">
      <Image src={myImage} alt="Description" width={152} height={152} />
      <div></div>
    </div>
  );
}
