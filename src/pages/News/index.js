import { Input } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import "styles/News.scss";
import Button from "components/Button";
import CreateNews from "./Create";
import { useSelector } from "react-redux";
import NewsPagination from "./NewsPagination";

function getNewsByTitle(news, searchedText) {
  return news.filter((news) => news.title.includes(searchedText));
}

function News() {
  const [news, setNews] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { news: newsList, user } = useSelector((state) => state);

  const approvedNews = useMemo(() => {
    return newsList.filter((news) => news.isApproved);
  }, [newsList]);

  const onChange = (e) => {
    const inputValue = e.target.value;
    const newsForUserOrGuest = user ? newsList : approvedNews;
    if (inputValue) {
      const filteredNewsByApproved = getNewsByTitle(
        newsForUserOrGuest,
        inputValue
      );
      setNews(filteredNewsByApproved);
    } else {
      setNews(newsForUserOrGuest);
    }
  };

  const modalVisibleHandler = () =>
    setIsModalVisible((isModalVisible) => !isModalVisible);

  useEffect(() => {
    if (user) {
      setNews(newsList);
    } else {
      setNews(approvedNews);
    }
  }, [newsList, user, approvedNews]);

  return (
    <div className="news">
      <div className="news__header news__wrapper">
        <h1 className="news__header-title">Новости</h1>
        <div className="news__wrapper news__action-wrapper">
          <Input.Search
            className="news__input"
            placeholder="input search text"
            allowClear
            onChange={onChange}
            style={{ width: 200 }}
          />
          {user && (
            <Button
              text="Создать"
              isGreen={true}
              onClick={modalVisibleHandler}
            />
          )}
        </div>
      </div>
      <NewsPagination news={news} />
      <CreateNews
        isModalVisble={isModalVisible}
        modalVisibleHandler={modalVisibleHandler}
      />
    </div>
  );
}

export default News;
