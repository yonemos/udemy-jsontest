import React from "react";
import { render } from "react-dom";
import axios from "axios";
//import Redux from "redux";

class App extends React.Component {
  constructor() {
    super();
    this.state = { member: [] };
  }
  memberList(List) {
    const memberList = List.map((member, index) => {
      return (
        <li key={member.index}>
          {member.name},{member.age}
        </li>
      );
    });
    return <ul>{memberList}</ul>;
  }
  render() {
    console.log(this.state.member);
    return (
      <div>
        <h2>App</h2>
        <button onClick={this.getJson}>押して</button>
        {this.memberList(this.state.member)}
      </div>
    );
  }
  getJson = () => {
    const url = "https://api.myjson.com/bins/nwsao";

    axios.get(url).then(res => {
      this.setState(res.data);
    });
  };
}
const rootElement = document.getElementById("root");
render(<App />, rootElement);
