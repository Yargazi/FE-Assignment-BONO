import { useState } from "react";

const useCardSelection = (causes) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState(null);
  const [modalText, setModalText] = useState("");

  const handleCardClick = (cause) => {
    if (selectedCards.includes(cause.id)) {
      const updatedCards = selectedCards.filter((id) => id !== cause.id);
      setSelectedCards(updatedCards);

      if (updatedCards.length === 0) {
        setSelectedCause(null);
      } else {
        const lastSelectedCause = causes.find(
          (c) => c.id === updatedCards[updatedCards.length - 1]
        );
        setSelectedCause(lastSelectedCause);
      }
    } else if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, cause.id]);
      setSelectedCause(cause);
    } else {
      setModalText(
        "You can add only 3 causes. Please remove one if you wish to add a different one."
      );
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    selectedCards,
    selectedCause,
    handleCardClick,
    isModalOpen,
    closeModal,
    modalText,
    setModalText,
    setIsModalOpen,
  };
};

export default useCardSelection;
