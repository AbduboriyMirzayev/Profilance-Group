import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const defaultPageSize = 10;

function NewsPagination({ news = [] }) {
  const [pieceOfNews, setPieceOfNews] = useState([]);
  const [currenPage, setCurrentPage] = useState(1);
  const onChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const startIndex = defaultPageSize * currenPage - defaultPageSize;
    const endIndex = startIndex + defaultPageSize;
    setPieceOfNews(news.slice(startIndex, endIndex));
  }, [currenPage, news]);

  return (
    <>
      <div className="news__wrapper">
        {pieceOfNews.map((news) => (
          <Card key={news.id} {...news} />
        ))}
      </div>
      <Pagination defaultCurrent={1} total={news.length} onChange={onChange} />
    </>
  );
}

export default NewsPagination;
