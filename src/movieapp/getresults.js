import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Row, Col, Card } from "antd";
import ErrorPage from "../error/errorpage";
// import ListComp from "../core/list";
import Loader from "../core/loader";
import "./movieapp.css";

const GetMovieAppResults = () => {
  const searchSongValue = useSelector((state) => state.movieapp.searchvalue);
  const [songValue, setSongValue] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async (searchValue) => {
      if (searchValue === "" || searchValue !== songValue) {
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
          console.log(response.data);
          Object.entries(response.data).forEach(([key, data]) => {
            let obj = {
              title: key,
              name: [],
            };

            data.items.forEach((item) => {
              Object.values(item).forEach((value) => {
                obj.name.push(value.name);
              });
            });

            arr.push(obj);
          });

          setSongValue(arr);
        } catch (error) {
          console.error(error.response);
          setIsError(true);
        }
      }
    };

    fetchData(searchSongValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchSongValue]);
  console.log(songValue);
  const displaySongs = () => {
    return (
      <>
        {songValue.length !== 0 ? (
          songValue.map((item) => (
            <Row gutter={16} key={item.title}>
              <Col span={24} className="resultItem">
                {item.title}
                {item.name.map((val) => (
                  <>
                    <Card key={val} bordered={true}>
                      {val}
                    </Card>
                  </>
                ))}
              </Col>
            </Row>
          ))
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
