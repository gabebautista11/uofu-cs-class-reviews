import { useParams } from "react-router-dom";

const ViewReviewsPage = (props) => {
  const { className } = useParams();
  return <h2>Review Page {className} </h2>;
};
export default ViewReviewsPage;
