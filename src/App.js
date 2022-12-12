import { useState } from "react";
import "./App.css";
import { FirstLook } from "./firstLook.js";
import { SecondLook } from "./secondLook";

function App() {
  const [canSubmit, setCanSubmit] = useState(false);
  const [ratedNum, setRatedNum] = useState(0);
  return (
    <div className="main-con">
      {canSubmit ? (
        <SecondLook ratedNum={ratedNum}/>
      ) : (
        <FirstLook
          setCanSubmit={setCanSubmit}
          ratedNum={ratedNum}
          setRatedNum={setRatedNum}
        />
      )}
    </div>
  );
}

export default App;
