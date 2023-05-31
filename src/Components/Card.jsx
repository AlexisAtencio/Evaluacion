import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-md w-[250px] shadow-md py-4">
      
      <p className="text-2xl font-bold">{props.student.name}</p>
      <p className="text-2xl font-bold"> {props.student.commission}</p>
    
     
      
      <p className="flex flex-col items-center">
      
      </p>
    </div>
  );
};

export default Card;