"use client";
import { useRouter } from "next/navigation";
import useCauses from "../hocks/useCauses";
import useCardSelection from "../hocks/useCardSelection";
import Spinner from "@/components/Spinner";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import BoxInfo from "@/components/BoxInfo";
import ProgressBar from "@/components/ProgressBar";
import ArrowIcon from "@/components/ArrowIcon";
import { useEffect, useState } from "react";

const CauseSelection = () => {
  const router = useRouter();
  const { causes, loading, error } = useCauses();
  const {
    selectedCards,
    selectedCause,
    handleCardClick,
    isModalOpen,
    setIsModalOpen,
    closeModal,
    modalText,
    setModalText,
  } = useCardSelection(causes);

  const handleGoBackClick = () => {
    router.back();
  };

  const handleButtonClick = () => {
    if (selectedCards.length === 0) {
      setModalText(
        "Please pick 3 causes for your portfolio in order to continue"
      );
      setIsModalOpen(true);
    } else if (selectedCards.length === 3) {
      const selectedCauseString = encodeURIComponent(
        JSON.stringify(selectedCards)
      );
      router.push(`/signUp?selectedCause=${selectedCauseString}`);
    }
  };

  const [screen, setScreen] = useState("mobile");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreen("desktop");
      } else {
        setScreen("mobile");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full min-w-[320px] flex flex-center justify-center p-7.5 sm:p-8 relative flex-col">
      <div
        className="custom-button-back xl:absolute xl:top-8 xl:left-24 inline-flex m-2 static self-start mb-4 xl:mb-0"
        onClick={handleGoBackClick}
      >
        <ArrowIcon className="arrow-icon" />
      </div>
      <div className="lg:flex lg:justify-center lg:flex-row lg:max-h-[553px]">
        <div className="hidden max-w-xl shrink lg:flex lg:flex-1"></div>
        <div className="box-inherit shrink-0 lg:w-fit">
          <h1 className="header-h1 text-start lg:text-center">
            What do you care deeply about?
          </h1>
          <h2 className="header-h3 text-start lg:text-center">
            Pick the 3 causes that mostly care about:
          </h2>
          {loading && (
            <div className="flex justify-center my-[15rem]">
              <Spinner />
            </div>
          )}
          {error && <p>Error loading causes: {error.message}</p>}
          {!loading && (
            <div>
              <div className="grid grid-rows-2 grid-flow-col gap-3 pb-6 pl-1 m-auto overflow-x-scroll touch-pan-x scroll-smooth lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:overflow-hidden lg:w-fit">
                {causes &&
                  causes
                    .slice(0, 9)
                    .map((cause) => (
                      <Card
                        key={cause.id}
                        cause={cause}
                        handleCardClick={() => handleCardClick(cause)}
                        isChecked={selectedCards.includes(cause.id)}
                      />
                    ))}
              </div>
            </div>
          )}
        </div>
        <div className="order-1 lg:flex-1 lg:max-w-xl lg:shrink lg:order-1">
          {selectedCause && <BoxInfo cause={selectedCause} screen={screen} />}
        </div>
      </div>
      <div className="m-0 xl:mx-[38%]">
        <div className="flex justify-center mt-10 order-2 lg:order-2">
          <ProgressBar selectedCards={selectedCards} />
        </div>
        <div
          className="custom-button mt-5 self-center order-3 lg:order-3"
          onClick={handleButtonClick}
        >
          <p>Continue</p>
          <span className="ml-2 flex items-center">
            <ArrowIcon className="arrow-icon" />
          </span>
        </div>
      </div>
      {isModalOpen && <Modal onClose={closeModal} modalText={modalText} />}
    </section>
  );
};

export default CauseSelection;
