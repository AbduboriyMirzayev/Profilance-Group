import Button from "components/Button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveNews, deleteNews } from "store/actions/news";
import "styles/NewsCard.scss";

function Card({ title, description, createdAt, isApproved, id }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const approveHandler = (id) => {
    dispatch(approveNews(id));
  };

  const deleteHandler = (id) => {
    dispatch(deleteNews(id));
  };

  const isAdmin = user?.role === "admin";
  const isUser = user?.role === "user";

  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__text">{description}</p>
      <div className="card__wrapper">
        <p className="card__date">{createdAt}</p>
        {isUser && !isApproved && <p className="card__pending">ожидается</p>}
        {!isApproved && isAdmin ? (
          <div className="card__wrapper">
            <Button
              text="Одобрить"
              isGreen={true}
              onClick={() => approveHandler(id)}
            />
            <Button
              text="Удалить"
              isRed={true}
              onClick={() => deleteHandler(id)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
