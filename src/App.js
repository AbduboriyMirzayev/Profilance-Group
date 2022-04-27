import Navbar from "components/Navbar";
import Page404 from "pages/404";
import { Route, Routes } from "react-router-dom";
import routes from "routes";
import "styles/global.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__components-wrapper">
        <div className="container">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.title}
                path={route.path}
                element={route.component}
              />
            ))}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
