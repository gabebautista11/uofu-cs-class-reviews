import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/Views/HomePage/HomePage";
import ViewReviewsPage from "./Views/ViewReviewsPage/ViewReviewsPage";
import WriteReviewPage from "./Views/WriteReviewPage/WriteReviewPage";
import Footer from "../src/Components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ViewReviews/:className" element={<ViewReviewsPage />} />
          <Route
            path="/WriteAReview/:className"
            element={<WriteReviewPage />}
          />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
