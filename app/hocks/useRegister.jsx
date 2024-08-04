import { useState } from "react";

const useRegister = (causes) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async () => {
    setLoading(true);
    setError(null);

    const payload = {
      email: email,
      firstName: name,
      causes: causes,
    };

    try {
      const response = await fetch(
        "https://dev.api.bono.so/v1/auth/register/anonymous",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();

        setLoading(false);
        return data;
      } else {
        const errorData = await response.json();
        setError(errorData);
        setLoading(false);
        console.error("Registration failed:", errorData);
        return null;
      }
    } catch (error) {
      setError(error);
      setLoading(false);
      console.error("Registration failed:", error);
      return null;
    }
  };

  return {
    email,
    setEmail,
    name,
    setName,
    register,
    loading,
    error,
  };
};

export default useRegister;
