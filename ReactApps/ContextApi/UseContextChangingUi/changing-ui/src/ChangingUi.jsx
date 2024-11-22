import React, { useContext } from "react";
import { userContextUi } from "./UserContext";

const ChangingUi = () => {
    console.log('changing ui rendered');
  const { ChangingNames, array, clickHandler } = useContext(userContextUi);

  return (
    <div>
      {ChangingNames.slice(0, array).map(( changingName,index) => (
        <h1 key={index}>
          {index + 1} : {changingName}
        </h1>
      ))}
       <button onClick={clickHandler} className="btn">Change The Ui</button>
    </div>
  );
};

export default ChangingUi;
