import React from 'react';

const Card = ({ item, buttonText, onClick }) => (
  <div className="card" key={item.id}>
    <h3>{item.title}</h3>
    <img alt="" src={item.img} />
    <button type="button" onClick={onClick}>
      {buttonText}
    </button>
  </div>
);

export default Card;
