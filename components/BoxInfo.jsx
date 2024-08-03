"use client";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import { useEffect, useState } from "react";

const BoxInfo = ({ cause, screen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when `cause` changes
    if (cause) {
      setIsVisible(true);
    }
  }, [cause]);

  if (!cause) return null;

  return screen === "mobile" ? (
    <div className="flex items-start flex-row ">
      <div className="flex items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">{cause.shortDescription}</h1>
          <p className=" font-medium">{cause.description}</p>
        </div>
        {cause.icon && (
          <Image
            src={cause.icon}
            width="100"
            height="100"
            alt={cause.title}
            className="rounded-md  min-w-[100px] max-h-[100px]"
          />
        )}
      </div>
    </div>
  ) : (
    <div
      className={`flex items-start w-[550px] h-screen mt-[120px] transition-opacity duration-500 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-row max-h-[420px]">
        <Divider orientation="vertical" flexItem />
        <div className="flex flex-col ml-[80px] py-[100px]">
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
