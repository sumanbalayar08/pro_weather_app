import React from "react";

const Card = ({ data }) => {
  return (
    
      <div class="bg-red-600 rounded-lg shadow-lg items-center justify-center">
        <div className="flex items-center justify-center">
          {data.img}
          <h3>{data.description}</h3>
        </div>
        <p>{data.data}</p>
      </div>
    
  );
};

export default Card;
