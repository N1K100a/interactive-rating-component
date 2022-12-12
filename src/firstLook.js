import "./firstLook.css";
import star from "./images/icon-star.svg";
import { Buttons } from "./buttons";

function FirstLook({setCanSubmit, ratedNum, setRatedNum}) {
  
  return (
    <div className="firstLook-con">
      <div className="star-icon">
        <img src={star} alt="star" />
      </div>

      <div className="big-title">How did we do?</div>

      <p className="p-text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <Buttons  
          setCanSubmit={setCanSubmit}
          ratedNum={ratedNum}
          setRatedNum={setRatedNum}
        />
    </div>
  );
}

export { FirstLook };
