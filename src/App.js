import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/Views/HomePage/HomePage";
import ViewReviewsPage from "./Views/ViewReviewsPage/ViewReviewsPage";
import WriteReviewPage from "./Views/WriteReviewPage/WriteReviewPage";
import Footer from "../src/Components/Footer/Footer";
import "./App.css";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main-content-window">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/ViewReviews/:className"
              element={<ViewReviewsPage />}
            />
            <Route
              path="/WriteAReview/:className"
              element={<WriteReviewPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
