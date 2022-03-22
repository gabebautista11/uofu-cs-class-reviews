import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { queryDatabaseForClass } from "../../FirebaseData/QueryFirestore";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./ViewReviewsPage.css";
import Review from "../../Components/Review/Review";

const ViewReviewsPage = (props) => {
  const { className } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    queryDatabaseForClass(className).then((result) => {
      if (result === false) {
        console.log("no result found");
      } else {
        setReviews(result.reviews);
      }
    });
  }, [className]);

  return (
    <div className="view-review-page">
      <SearchBar />
      <h1 className="page-title">{className} </h1>
      <ul className="review-list">
        {reviews.map((review, index) => (
          <li key={index}>
            <Review reviewProp={review}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewReviewsPage;
