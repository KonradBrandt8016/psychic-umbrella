import React from "react";
import "bulma/css/bulma.css";

class Welcome extends React.Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Hero title</h1>
            <h2 class="subtitle">{this.state.response}</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
