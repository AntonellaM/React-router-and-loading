import React from "react";

function PersonDetails(props) {
  return (
    <div className="card">
      <h2>{`${props.person.name.first} ${props.person.name.last}`}</h2>
      <p>{props.person.location.city}</p>
    </div>
  );
}

export default PersonDetails;
