import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <div className="flex md:flex-row flex-col">
      <div className=" flex flex-col px-4 py-2 overflow-y-auto h-screen">
        <h4 className=" text-2xl font-bold text-white p-4">
          Showing Search Results For:{" "}
          <span style={{ color: "#F31503" }}>{searchTerm}</span>
        </h4>
        <div className=" flex w-full justify-center mt-10">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default SearchFeed;
