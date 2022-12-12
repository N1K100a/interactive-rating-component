import "./secondLook.css";
import tnxImg from "./images/illustration-thank-you.svg";

function SecondLook({ratedNum}) {
  return (
    <div className="secondLook-con">
      <div className="tnx-con">
        <img src={tnxImg} alt="tnx"/>
      </div>
      <center>
        <div className="selected">You selected {ratedNum} out of 5</div>
      </center>
      <div className="thank-u">Thank you!</div>
      <p className="tnx-p">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  );
}

export { SecondLook };
