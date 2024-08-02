"use client";
import { useState } from "react";
import ArrowIcon from "@/components/ArrowIcon";
import { useRouter } from "next/navigation";
import Divider from "@mui/material/Divider";
import GoogleIcon from "@/components/GoogleIcon";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic here
  };

  const handleGoBackClick = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center  min-h-screen p-4 bg-white relative">
      <div
        className="custom-button-back absolute top-5 left-10"
        onClick={handleGoBackClick}
      >
        <ArrowIcon className="arrow-icon" />
      </div>
      <div className="max-w-lg w-full bg-white pt-3 text-center">
        <div className="header-h1">Let's save your portfolio</div>
        <div className="header-h2 font-semibold pt-3">
          You'll receive weekly impact reports from Bono. Your email is not
          shared with anyone!
        </div>
      </div>
      <div className="max-w-sm w-full bg-white p-3 ">
        <div className="flex justify-center py-3 mb-3 gap-2 font-bold border border-solid border-black rounded-full">
          {" "}
          <GoogleIcon /> <p>Continue</p> <p>With Google</p>{" "}
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <Divider>
              {" "}
              <p className="mx-3">or</p>{" "}
            </Divider>
            <input
              type="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-6 block w-full px-3 py-2 border border-[#333333] rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#333333] focus:border-[#333333] sm:text-sm"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-[#333333] rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#333333] focus:border-[#333333] sm:text-sm"
              required
            />
          </label>
          <p className="text-gray-500">
            You will receive a temporary password by email
          </p>
          <button type="submit" className="custom-button mt-16 self-center">
            Save & continue
            <span className="ml-2 flex items-center">
              <ArrowIcon />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpScreen;
