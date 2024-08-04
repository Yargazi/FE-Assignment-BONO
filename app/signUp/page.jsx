"use client";

import { useRouter, useSearchParams } from "next/navigation";
import useRegister from "../hocks/useRegister";
import ArrowIcon from "@/components/ArrowIcon";
import Divider from "@mui/material/Divider";
import GoogleIcon from "@/components/GoogleIcon";
import { useEffect, useState } from "react";

const SignUpScreen = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCauseParam = searchParams.get("selectedCause");

  let selectedCause = null;
  if (selectedCauseParam) {
    try {
      selectedCause = JSON.parse(decodeURIComponent(selectedCauseParam));
    } catch (error) {
      console.error("Error parsing selectedCause:", error);
    }
  }

  useEffect(() => {
    if (!selectedCause) {
      console.error("No selected cause provided");
    }
  }, [selectedCause]);

  const { email, setEmail, name, setName, register, loading, error } =
    useRegister(selectedCause);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await register();
    if (data) {
      console.log("Success", data);
    }
  };

  const handleGoBackClick = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center min-h-screen min-w-[320px] mx-auto pt-6 bg-white relative">
      <div
        className="custom-button-back lg:absolute lg:top-[32px] lg:left-[-48px] inline-flex m-2 ml-[8%] static self-start"
        onClick={handleGoBackClick}
      >
        <ArrowIcon className="arrow-icon" />
      </div>
      <div className="max-w-[450px] text-start w-full bg-white pt-3 lg:text-center">
        <div className="header-h1 mx-[40px] md:mx-0">
          Let's save your portfolio
        </div>
        <div className="header-h2 mx-[40px] md:mx-0 font-medium pt-3 tracking-normal">
          You'll receive weekly impact reports from Bono.
          <br /> Your email is not shared with anyone!
        </div>
      </div>
      <div className="max-w-sm w-full bg-white px-3 pb-3">
        <div className="flex justify-center py-3 mb-4 gap-2 font-bold border border-solid border-black rounded-full hover:shadow-[1px_1px_3px_rgba(1,1,1,1)] cursor-pointer">
          <GoogleIcon />
          <p>Continue</p>
          <p>With Google</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <Divider className="my-6">
              <p className="mx-3">or</p>
            </Divider>
            <input
              type="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="custom-input"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="custom-input hover:ring-0"
              required
            />
          </label>
          <p className="text-gray-500">
            You will receive a temporary password by email
          </p>
          <button
            type="submit"
            className="custom-button mt-6 w-[350px] first-line:self-center"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save & continue"}
            <span className="ml-2 flex items-center">
              <ArrowIcon />
            </span>
          </button>
          {error && <p className="text-red-500 mt-4">{error.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUpScreen;
