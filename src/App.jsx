import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/Pages/Home-Page";

import "./App.css";
import InfoPage from "./components/Pages/Info-Page";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route
            path="/:taskTitle"
            element={
              <>
                <InfoPage />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
