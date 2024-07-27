"use client";
import ArrowIcon from "@/components/ArrowIcon"; // Adjust the path as necessary
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/causes");
  };
  return (
    <section className="w-full flex-center p-7.5 sm:p-8">
      <div className="pt-[113px] max-w-max m-auto .box-inherit ">
        <h1 className="header-h1">Let's build your nonprofit portfolio</h1>
        <h2 className="header-h2">
          Join the movement and help fix the October 7th aftermath
        </h2>
        <div className="custom-box">
          <ul className="list-none space-y-3 ">
            <li className="flex">
              <div className="custom-list">1</div>{" "}
              <p className="custom-p">Choose causes</p>
            </li>
            <li className="flex">
              <div className="custom-list">2</div>{" "}
              <p className="custom-p">Save your portfolio</p>
            </li>
            <li className="flex">
              <div className="custom-list ">3</div>{" "}
              <p className="custom-p">Subscribe to make an impact</p>
            </li>
            <li className="flex">
              <div className="custom-list">4</div>{" "}
              <p className="custom-p">Receive weekly impact updates</p>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="custom-button mt-16 self-center "
        onClick={handleButtonClick}
      >
        <p>Let's start</p>
        <span className="ml-2 flex items-center">
          <ArrowIcon />
        </span>
      </div>
      <h5 className="mt-7 text-base font-medium text-center">
        By continuing you agree to our
        <a href="https://www.bono.so/tc" className="underline text-black ml-1">
          Terms and Conditions
        </a>
        <span className="mx-1">and</span>
        <a
          href="https://www.bono.so/privacy-policy"
          className="underline text-black"
        >
          Privacy Policy
        </a>
        .
      </h5>
    </section>
  );
};

export default Welcome;
