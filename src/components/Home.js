import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="card">
      {props.people.map((person, index) => (
        <Link key={index} to={`/card/${person.login.uuid}`}>
          <h2>{`${person.name.first} ${person.name.last}`}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Home;
