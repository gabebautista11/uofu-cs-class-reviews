import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./WriteReviewPage.css";
import { addAReview } from "../../FirebaseData/WriteToFirestore";
import { useSelector } from "react-redux";

const WriteReviewPage = () => {
  const { user } = useSelector((state) => state.auth);
  let navigation = useNavigate();
  const { className } = useParams();
  const [rating, setRating] = useState(1);
  const [professor, setProfessor] = useState("");
  const [review, setReview] = useState("");

  const onChangeProfessor = (e) => {
    setProfessor(e.target.value);
  };

  const onChangeReview = (e) => {
    setReview(e.target.value);
  };

  const onRatingChange = (e) => {
    setRating(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitted");
    addAReview(className, rating, professor, review);
    navigation(`/ViewReviews/${className}`);
  };
  return (
    <div className="WriteReviewPage">
      {user != null ? (
        <div>
          <h1 className="title-area">{`Write A Review for ${className}`}</h1>
          <form className="review-form" onSubmit={submitForm}>
            <div className="rating-div">
              <label className="rating-label">
                Rating:
                <input
                  type="number"
                  value={rating}
                  onChange={onRatingChange}
                  max={5}
                  min={1}
                  className="rating-input"
                  required
                />
              </label>
            </div>
            <div className="professor-div">
              <label className="professor-label">
                Professor:
                <input
                  type="text"
                  value={professor}
                  onChange={onChangeProfessor}
                  className="professor-input"
                  required
                />
              </label>
            </div>
            <div className="review-div">
              <label className="review-label">
                Review:
                <textarea
                  onChange={onChangeReview}
                  value={review}
                  className="review-input"
                  required
                />
              </label>
            </div>
            <div className="submit-div">
              <input className="form-submit-input" type="submit" />
            </div>
          </form>
        </div>
      ) : (
        <h1 className="login-prompt">Please login to write a review</h1>
      )}
    </div>
  );
};

export default WriteReviewPage;
