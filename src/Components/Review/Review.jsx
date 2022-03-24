import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faR } from "@fortawesome/free-solid-svg-icons";
const Review = (props) => {
  const displayStars = () => {
    let arrayOfStars = [];
    for (let i = 0; i < props.reviewProp.rating; i++) {
      arrayOfStars.push(
        <FontAwesomeIcon icon={faStar} className="review-star" key={i} />
      );
      for (let i = props.reviewProp.rating; i < 5; i++) {
        arrayOfStars.push(<FontAwesomeIcon icon={faStar} key={i} />);
      }
    }
    return arrayOfStars;
  };
  return (
    <div className="review-component">
      <p className="rating">
        {props.reviewProp.rating}/5 &nbsp;
        {displayStars()}
      </p>
      <p className="professor"> Professor: {props.reviewProp.professor}</p>
      <p className="review">{props.reviewProp.review}</p>
    </div>
  );
};

export default Review;
