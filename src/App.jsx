import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/Pages/Home-Page";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
