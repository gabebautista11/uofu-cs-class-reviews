import "./HomePage.css";
import Header from "../../Components/Header/Header";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header className="header"/>
      <h1 className="title">CS Class Reviews</h1>
      <div className="info-section">
        <p>
          Hey Everyone, <br /> I made this website because a lot of people on
          the CS discord would ask about how classes were and I thought if we
          had a website to share reviews it would be a nice place to visit
          before choosing classes.
        </p>
        <div className="list-area">
          <p> To write a review do the following things</p>
          <ul>
            <li>Login to the site using your google account</li>
            <li>Search the class you want to review</li>
            <li>Click on the "Write A Review" button</li>
            <li>Provide all the required info and submit the review!</li>
          </ul>
          <p>
            Even though logging in is required to post a review. I decieded to
            make the reviews anonymous. On the other hand I still can see who
            wrote the review so please keep it mature. <br /> <br />
            Not Affliated with The University of Utah
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
