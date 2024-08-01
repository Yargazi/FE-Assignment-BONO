import { useState } from "react";

const useCardSelection = (causes) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState(null);

  const handleCardClick = (cause) => {
    if (selectedCards.includes(cause.id)) {
      // Default action for removing selection from a card
      const updatedCards = selectedCards.filter((id) => id !== cause.id);
      setSelectedCards(updatedCards);

      // If no cards are selected, reset the selected cause
      if (updatedCards.length === 0) {
        setSelectedCause(null);
      } else {
        // Find the previously selected cause
        const lastSelectedCause = causes.find(
          (c) => c.id === updatedCards[updatedCards.length - 1]
        );
        setSelectedCause(lastSelectedCause);
      }
    } else if (selectedCards.length < 3) {
      // If fewer than 3 cards are selected, add the new card
      setSelectedCards([...selectedCards, cause.id]);
      setSelectedCause(cause);
    } else {
      // If 3 cards are already selected
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
  };
};

export default useCardSelection;
