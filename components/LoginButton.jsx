"use client";
import React from "react";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/signUp");
  };
  return (
    <div onClick={handleClick} className="btn-login hover:custom-shadow">
      Login
    </div>
  );
};

export default LoginButton;
