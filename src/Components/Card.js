import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-slate-700 text-white rounded-lg shadow-md px-20 py-6">
      <div className="flex">
        {data.img}
        <h2 className="">{data.description}</h2>
      </div>
      <p className="text-gray-600">{data.data}</p>
    </div>
  );
};

export default Card;
