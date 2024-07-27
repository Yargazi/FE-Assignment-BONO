"use client";
import { useState, useEffect } from "react";

const useCauses = () => {
  const [causes, setCauses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const response = await fetch(
          "https://dev.api.bono.so/v1/charity/causes"
        );
        const result = await response.json();
        setCauses(result.data); // Устанавливаем данные из поля "data"
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCauses();
  }, []);

  return { causes, loading, error };
};

export default useCauses;
