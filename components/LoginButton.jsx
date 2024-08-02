"use client";
import React from "react";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/signUp");
  };
  return (
    <button
      onClick={handleClick}
      className="btn-login inline-flex items-center justify-center px-4 py-2 bg-white text-black font-bold text-sm rounded-full outline outline-2 outline-black cursor-pointer"
    >
      Login
    </button>
  );
};

export default LoginButton;
