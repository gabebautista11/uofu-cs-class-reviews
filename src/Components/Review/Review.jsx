import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Review = (props) => {
  return (
    <div className="review-component">
      <p className="rating">
        {props.reviewProp.rating}/5 &nbsp;
        <FontAwesomeIcon icon={faStar} className="review-star" />
      </p>
      <p className="professor"> Professor: {props.reviewProp.professor}</p>
      <p className="review">{props.reviewProp.review}</p>
    </div>
  );
};

export default Review;
