"use client";

import { useState, useEffect } from "react";

const FaviconLoader = ({ url }) => {
  const [faviconUrl, setFaviconUrl] = useState("");

  useEffect(() => {
    const fetchFavicon = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFaviconUrl(data.favicon);
      } catch (error) {
        console.error("Failed to fetch favicon:", error);
      }
    };

    fetchFavicon();
  }, [url]);

  return faviconUrl && <link rel="icon" href={faviconUrl} />;
};

export default FaviconLoader;
