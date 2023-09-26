import { useEffect, useState } from "react";
import { getGifs } from "./../helpers/getGifs";

export const useFetchGifs = (category, limit) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category, limit).then((newImages) => setImages(newImages));
    setIsLoading(false);
  }, []);

  return {
    images,
    isLoading,
  };
};
