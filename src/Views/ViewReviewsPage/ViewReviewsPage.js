import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { queryDatabaseForClass } from "../../FirebaseData/QueryFirestore";
import SearchBar from "../../Components/SearchBar/SearchBar";

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
      <SearchBar/>;
      <h1>Review Page {className} </h1>
      <ul>
        {reviews.map((review) => (
          <li>review</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewReviewsPage;
