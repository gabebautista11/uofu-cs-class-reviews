import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { queryDatabaseForClass } from "../../FirebaseData/QueryFirestore";
import Header from "../../Components/Header/Header";
import "./ViewReviewsPage.css";
import Review from "../../Components/Review/Review";
import { Link } from "react-router-dom";

const ViewReviewsPage = () => {
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
      <Header />

      <h1 className="page-title">{className}</h1>
      <div className="button-div">
        <button className="write-a-review-button">
          <Link
            className="write-a-review-link"
            to={`/WriteAReview/${className}`}
          >
            Write A Review
          </Link>
        </button>
      </div>

      {reviews.length === 0 && <h1 className="no-review">NO REVIEWS</h1>}
      <ul className="review-list">
        {reviews.map((review, index) => (
          <li key={index}>
            <Review reviewProp={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewReviewsPage;
