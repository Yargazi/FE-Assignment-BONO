"use client";
import ArrowIcon from "@/components/ArrowIcon";
import { useRouter } from "next/navigation";
import useCauses from "./useCauses";

const CauseSelection = () => {
  const router = useRouter();
  const { causes, loading, error } = useCauses();

  const handleButtonClick = () => {
    router.push("/");
  };

  return (
    <section className="w-full flex-center p-7.5 sm:p-8">
      <div
        className="custom-button-back rotate-180 cursor-pointer"
        onClick={handleButtonClick}
      >
        <ArrowIcon />
      </div>
      <div className="max-w-max m-auto box-inherit">
        <h1 className="header-h1">What do you care deeply about?</h1>
        <h2 className="header-h3 text-center">
          Pick the 3 causes that mostly care about:
        </h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error loading causes: {error.message}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {causes &&
            causes.slice(0, 9).map((cause) => (
              <div key={cause.id} className="custom-card">
                <p>{cause.title}</p> <span>+</span>
              </div>
            ))}
        </div>
        <div className="custom-button mt-16 self-center ">
          <p>Continue</p>
          <span className="ml-2 flex items-center">
            <ArrowIcon />
          </span>
        </div>
      </div>
    </section>
  );
};

export default CauseSelection;
