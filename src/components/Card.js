import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src='https://avatars.githubusercontent.com/u/100253327?s=400&u=0adbdf03afcaa8842a21fb849fb86b65522c15a2&v=4${randomWidth()}'
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Description: {props.description}</p>
          {/* <p className="card-text">ID: {props.id}</p> */}
          <a href="https://project-communication-app.herokuapp.com/" className="btn btn-primary">
            Open {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}
