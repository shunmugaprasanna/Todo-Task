import React from "react";

const Cards = ({toDovalue}:any) => {
  console.log(toDovalue,"toDovalue");
  
  return (
    <div className="CardsWrapper">
     <p>{toDovalue?.text}</p>
      <div>
        <button className="buttonWrapper">EDIT</button>
        <button className="buttonWrapper">DELETE</button>
      </div>
    </div>
  );
};

export default Cards;