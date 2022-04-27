import Main from "pages/Main";
import News from "pages/News";

const routes = [
  { title: "Главная", component: <Main />, path: "/" },
  { title: "Новости", component: <News />, path: "/news" },
];

export default routes;
