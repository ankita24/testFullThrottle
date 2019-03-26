import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 700,
      r1: 10,
      data: [],
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate() {
    this.fetchData();
  }
  fetchData() {
    fetch(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${
        this.state.r
      }&numMonths=${this.state.r1}`
    )
      .then(results => results.json())

      .then(data => this.setState({ data: data, isLoading: true }));
  }
  handleChange(e) {
    this.setState({
      r: e.target.value
    });
  }
  handleChange1(e) {
    this.setState({
      r1: e.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input
          type="range"
          min="500"
          max="5000"
          value={this.state.r}
          onChange={this.handleChange}
          step="1"
        />
        <h1>{this.state.r}</h1>
        <input
          type="range"
          min="6"
          max="24"
          value={this.state.r1}
          onChange={this.handleChange1}
          step="1"
        />
        <h1>{this.state.r1}</h1>
        <div>interest:{this.state.data["interestRate"]}</div>

        <div>
          <pre>{JSON.stringify(this.state.data.monthlyPayment)}</pre>
        </div>
        <div>
          <pre>{JSON.stringify(this.state.data)}</pre>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
