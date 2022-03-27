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
  const [loading, setLoading] = useState("true");
  const [numOfReviews, setNumOfReviews] = useState(0);

  useEffect(() => {
    queryDatabaseForClass(className)
      .then((result) => {
        if (result === false) {
          console.log("no result found");
        } else {
          setReviews(result.reviews);
          setNumOfReviews(result.reviews.length);
        }
      })
      .finally((result) => {
        setLoading(false);
      });
  }, [className]);

  return (
    <div className="view-review-page">
      <Header />
      <div className="title-flex-div">
        <h1 className="page-title">{className}</h1>
        <div className="button-flex">
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
        </div>
      </div>

      {loading ? waitingForReviews() : numOfReviews === 0 && noReviews()}
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

const waitingForReviews = () => {
  return <h1 className="fetching-data">LOADING...</h1>;
};
const noReviews = () => {
  return <h1 className="fetching-data">NO REVIEWS</h1>;
};
export default ViewReviewsPage;
