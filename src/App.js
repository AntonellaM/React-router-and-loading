import React from "react";
import { fetchPeople } from "./service/Fetch";
import Home from './components/Home';
import { Route, Switch } from "react-router-dom";
import "./App.css";
import PersonDetails from "./components/PersonDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };

    this.getPeople = this.getPeople.bind(this);
    this.getPeople();
  }

  getPeople() {
    fetchPeople().then(data => {
      this.setState({
        people: data.results
      });
    });
  }

  render() {
    return this.state.person !== [] ? (
      <React.Fragment>
        <Switch>
          <Route exact path='/' render={() => (
            <Home people={this.state.people} />
          )} />
          <Route path='/card/:id' render={(routerProps) => {
            const person = this.state.people.find(item => item.login.uuid === routerProps.match.params.id);
            console.log(person);
            return person !== undefined ? (
              <PersonDetails person={person} />
            )
            :
            (
              <p>No hay datos</p>
            );
          }}
          />
        </Switch>
      </React.Fragment>
    )
    :
    (
      <p>No hay datos</p>
    );
  }
}

export default App;
