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
    router.push("/");
  };

  const handleButtonClick = () => {
    if (selectedCards.length === 0) {
      setModalText(
        "Please pick 3 causes for your portfolio in order to continue"
      );
      setIsModalOpen(true);
    }
  };

  return (
    <section className="w-full flex flex-center justify-center p-7.5 sm:p-8 relative ">
      <div className="custom-button-back" onClick={handleGoBackClick}>
        <ArrowIcon className="arrow-icon" />
      </div>

      <div className="flex-1 max-w-xl shrink "></div>

      <div className="box-inherit shrink-0">
        <h1 className="header-h1">What do you care deeply about?</h1>
        <h2 className="header-h3 text-center">
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
            <div className="grid grid-cols-1 w-fit m-auto sm:grid-cols-2 grid-flow-row lg:grid-cols-3 gap-4">
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
            <div className="flex justify-center mt-10">
              <ProgressBar selectedCards={selectedCards} />
            </div>
          </div>
        )}

        <div
          className="custom-button mt-5 self-center "
          onClick={handleButtonClick}
        >
          <p>Continue</p>
          <span className="ml-2 flex items-center">
            <ArrowIcon className="arrow-icon" />
          </span>
        </div>
      </div>

      <div className="flex-1 max-w-xl shrink ">
        {selectedCause && <BoxInfo cause={selectedCause} />}
      </div>

      {isModalOpen && <Modal onClose={closeModal} modalText={modalText} />}
    </section>
  );
};

export default CauseSelection;
