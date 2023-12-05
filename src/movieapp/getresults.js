import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const GetMovieAppResults = () => {
  const searchSongValue = useSelector((state) => state.movieapp.searchvalue);
  const [songValue, setSongValue] = React.useState([]);
  React.useEffect(() => {
    fetchdata(searchSongValue);
  }, [searchSongValue]);
  const fetchdata = async (searchValue) => {
    if (searchValue !== "") {
      const options = {
        method: "GET",
        url: "https://spotify23.p.rapidapi.com/search/",
        params: {
          q: `${searchValue}`,
          type: "multi",
          offset: "0",
          limit: "10",
          numberOfTopResults: "5",
        },
        headers: {
          "X-RapidAPI-Key":
            "70143dc9c7msh6ff1068fea1b043p146d23jsn3df8381f9773",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setSongValue(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const displaySongs = () => {
    return (
      <>
        {Object.keys(songValue).map((songTitle) => {
          return (
            <>
              <li>{songTitle}</li>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      {searchSongValue !== "" && displaySongs()}
    </>
  );
};

export default GetMovieAppResults;
