import React from "react";
import { Container, Header, Image, Statistic } from "semantic-ui-react";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    let data = require("./sources.json");
    this.setState(data);
  }

  render() {
    if (this.state.data === null) return <div>loading...</div>;

    return (
      <Container>
        <Image src={this.state.data[this.props.match.params.id].image} />
        <Header as="h1">{this.state.data[this.props.match.params.id].name}</Header>
        <Statistic horizontal>
          <Statistic.Value>{this.state.data[this.props.match.params.id].price.toLocaleString()}</Statistic.Value>
          <Statistic.Label>MMK</Statistic.Label>
        </Statistic>
      </Container>
    );
  }
}