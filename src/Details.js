import React from "react";
import { Container, Header, Image, Statistic } from "semantic-ui-react";

import { find, propEq } from "ramda";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      item: null
    };
  }

  componentDidMount() {
    let data = require("./sources.json");
    this.setState(data, () => {
      let item = find(propEq("slug", this.props.match.params.slug))(
        this.state.data
      );
      this.setState(Object.assign(this.state, { item: item }));
    });
  }

  render() {
    if (this.state.data === null || this.state.item === null)
      return <div>loading...</div>;

    return (
      <Container>
        <Image src={this.state.item.image} />
        <Header as="h1">
          {this.state.item.name}
          <Header.Subheader>{this.state.item.make}</Header.Subheader>
        </Header>
        <Statistic horizontal>
          <Statistic.Value>
            {this.state.item.price.toLocaleString()}
          </Statistic.Value>
          <Statistic.Label>MMK</Statistic.Label>
        </Statistic>
      </Container>
    );
  }
}
