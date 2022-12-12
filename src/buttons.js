import "./buttons.css";
import { useState } from "react";

function Buttons({setCanSubmit, ratedNum, setRatedNum}) {
  
  const btnClick = (key) => {
    if (ratedNum === key) {
      setRatedNum(0);
      setSubmitCanHover(false);
    } else {
      setRatedNum(key);
      setSubmitCanHover(true)
    }
  };
  const [hoverNum, setHoverNum] = useState(0);
  const mouseMove = (num) => {
    setHoverNum(num);
  };
  const mouseLeave = () => {
    setHoverNum(0);
  };

  const btnNumber = [1, 2, 3, 4, 5];

  const btn = btnNumber.map((number) => (
    <div
      className={`btns ${ratedNum == number ? "active" : ""}
      ${hoverNum == number && ratedNum !== number ? "hover" : ""}`}
      onClick={(event) => btnClick(number)}
      onMouseEnter={(event) => mouseMove(number)}
      onMouseLeave={mouseLeave}
      key={number}
    >
      {number}
    </div>
  ));
  


  const submit = () => {
    if(ratedNum !== 0){
      setCanSubmit(true)
    }else{
      setCanSubmit(false)
    }
  }
  const [submitCanHover, setSubmitCanHover] = useState(false);
  const submitHover = (e)=> {
    if(submitCanHover){
      e.target.style.backgroundColor = "#FFFFFF";
      e.target.style.color = "#FC7614"
    }
    
  }
  const submitHoverLeave = (e)=> {
    e.target.style.backgroundColor = "#FC7614"
    e.target.style.color = "#FFFFFF";

    
  }

  return (
    <div>
      <div className="button-con">{btn}</div>
      <button className="submit" onClick={submit}
      onMouseEnter={submitHover}
      onMouseLeave={submitHoverLeave}
      >SUBMIT</button>
    </div>
  );
}

export { Buttons };

