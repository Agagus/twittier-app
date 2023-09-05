import Image from "next/image";
import twitter from "../../public/twitter-logo.png";
import { useState } from "react";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  const handleChange = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      {sideBar ? (
        <div className="h-screen w-10/12 bg-[rgb(33,52,64)]"></div>
      ) : (
        <div className="p-2 flex justify-center items-center">
          <p className="self-start" onClick={handleChange}>
            IMG
          </p>
          <Image src={twitter} className="w-8"></Image>
        </div>
      )}
    </>
  );
}
