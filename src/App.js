import axios from "axios";
import SearchHeader from "./SearchHeader";
import { useState } from "react";
import ImageList from "./ImageList";

const App = () => {
  const [images, setImages] = useState([]);

  const searchImages = async (term) => {
    const response = await axios.get(
      "https://api.unsplash.com//search/photos",
      {
        headers: {
          Authorization: "Client-ID ...",
        },
        params: {
          query: term,
        },
      }
    );
    return response.data.results;
  };

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchHeader search={handleSubmit} />
      <ImageList picture={images} />
    </div>
  );
};

export default App;
