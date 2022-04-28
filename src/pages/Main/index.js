import React from "react";
import { useSelector } from "react-redux";
import "styles/Main.scss";

function Main() {
  const user = useSelector((state) => state.user);
  return (
    <div className="main">
      <h1 className="main__title">Привет, {user?.name || "Гость"}</h1>
    </div>
  );
}

export default Main;
