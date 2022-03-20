import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/SearchBar";
import getReviews from "../../FirebaseData/QueryFirestore";
import "./ViewReviewsPage.css";
const ViewReviewsPage = () => {
  const { className } = useParams();
  useEffect(() => {
    getReviews(className);
  }, [className]);
  return (
    <div className="view-reviews-page">
      <SearchBar />
      <h1 className="page-title">{className} Reviews</h1>
    </div>
  );
};
export default ViewReviewsPage;
