import React from "react";
import Title from "./Title";

const Toodos = () => {
  return (
    <div>
          <h1 style={{textAlign:'center',textDecoration:'underline',color:'#afdde5'}}>Todo App</h1>

      <div className="box">
        <h2>Title</h2>
        <hr/>
        <h2>Todo</h2>
        <hr/>
        <h2>Discription</h2>
        <hr/>
        <h2>status</h2>
      </div>
      <Title />
      
    </div>
  );
};

export default Toodos;
