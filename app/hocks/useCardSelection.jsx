import { useState } from "react";

const useCardSelection = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (id) => {
    setSelectedCards((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((cardId) => cardId !== id);
      }

      if (prevSelected.length >= 3) {
        setIsModalOpen(true);
        return prevSelected;
      }

      return [...prevSelected, id];
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    selectedCards,
    handleCardClick,
    isModalOpen,
    closeModal,
  };
};

export default useCardSelection;
