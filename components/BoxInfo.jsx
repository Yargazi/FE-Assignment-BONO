"use client";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import { useEffect, useState } from "react";

const BoxInfo = ({ cause }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when `cause` changes
    if (cause) {
      setIsVisible(true);
    }
  }, [cause]);

  if (!cause) return null;

  return (
    <div
      className={`flex items-start w-[550px] h-screen mt-[120px] transition-opacity duration-500 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-row">
        <Divider orientation="vertical" flexItem />
        <div className="flex flex-col ml-[80px] py-[120px]">
          <h1 className="text-lg font-bold mb-2">{cause.shortDescription}</h1>
          <p className="mb-4 font-medium">{cause.description}</p>
          {cause.icon && (
            <Image
              src={cause.icon}
              width="120"
              height="120"
              alt={cause.title}
              className="rounded-md"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BoxInfo;
