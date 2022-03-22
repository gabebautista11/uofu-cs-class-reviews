<<<<<<< HEAD
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
=======
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
>>>>>>> 5295bf36cf3422b3f189089c5d3f14d9b639735d
    </div>
  );
};

export default ViewReviewsPage;
