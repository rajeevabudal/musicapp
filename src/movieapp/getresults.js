import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Col, Row, Card } from "antd";
import ErrorPage from "../error/errorpage";
import ListComp from "../core/list";
import Loader from "../core/loader";
import "./movieapp.css";

const GetMovieAppResults = () => {
  const searchSongValue = useSelector((state) => state.movieapp.searchvalue);
  const [songValue, setSongValue] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchdata = async (searchValue) => {
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
            "X-RapidAPI-Key": "70143dc9c7msh6ff1068fea1b043p146d23jsn3df8381f9773",
            "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);
          let arr = [];

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

    fetchdata(searchSongValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchSongValue]);

  const displaySongs = () => {
    return (
      <>
        <Card title="Card title" bordered={true}>
          card title
        </Card>
        {songValue.length !== 0 ? (
          songValue.map((item) => (
            <React.Fragment key={item.title}>
              {item.title}
              {item.name.map((val) => (
                <Row gutter={16} key={val}>
                  <Col span={8}>
                    <Card title="Card title" bordered={true}>
                      {val}
                    </Card>
                  </Col>
                </Row>
              ))}
            </React.Fragment>
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
