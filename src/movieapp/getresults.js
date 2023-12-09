import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ErrorPage from "../error/errorpage";
import ListComp from "../core/list";
import Loader from "../core/loader";
import "./movieapp.css";
const GetMovieAppResults = () => {
  const searchSongValue = useSelector((state) => state.movieapp.searchvalue);
  const [songValue, setSongValue] = React.useState([]);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    fetchdata(searchSongValue);
  }, [searchSongValue]);
  
  const fetchdata = async (searchValue) => {
    if(searchValue === "" || searchValue !== songValue){
      setSongValue([]);
    }
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
        let arr = [];
        let obj = {};
        for (let i in response.data) {
          obj = {
            title: i,
          };
          arr.push(obj);
          obj = {};
        }
        setSongValue(arr);
      } catch (error) {
        console.error(error.response);
        setIsError(true);
        // setErrorResult(error);
      }
    }
  };

  const displaySongs = () => {
    return (
      <>
        {songValue.length !== 0 ? (
          <ListComp data={songValue} className="listResult" />
        ) : (
          <Loader />
        )}
      </>
    );
  };
  return (
    <>
      {searchSongValue !== "" && displaySongs()}
      {isError && <ErrorPage status={502} />}
    </>
  );
};

export default GetMovieAppResults;
