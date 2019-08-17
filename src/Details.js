import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Statistic,
  Table,
  Button
} from "semantic-ui-react";

import { find, propEq } from "ramda";

import { api_host } from "./constants";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: false,
      loading: true
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;

    fetch(`http://${api_host}/api/phones/${slug}`)
      .then(data => data.json())
      .then(json =>
        this.setState(
          Object.assign(this.state, {
            data: json,
            loading: false
          })
        )
      )
      .catch(err =>
        this.setState(
          Object.assign(this.state, {
            error: true,
            loading: false
          })
        )
      );
  }

  render() {
    if (this.state.loading)
      return (
        <Container>
          <div>loading...</div>
        </Container>
      );

    if (!this.state.loading && this.state.error) {
      return (
        <Container>
          <div>Phone not found</div>
        </Container>
      );
    }

    return (
      <Container>
        <Header as="h1" onClick={() => this.props.history.push('/')}>SellPhones™</Header>

        <Grid stackable columns={2}>
          <Grid.Column>
            <Image
              src={this.state.data.image}
              onError={i => (i.target.src = require("./404.png"))}
              style={{
                width: "600px",
                height: "auto"
              }}
            />
            <Button.Group>
              <Button icon="call" content="Inquire" />
              <Button.Or />
              <Button positive icon="cart" content="Order" />
            </Button.Group>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">
              {this.state.data.name}
              <Header.Subheader>{this.state.data.make}</Header.Subheader>
            </Header>
            <Statistic.Group widths="two">
              <Statistic horizontal>
                <Statistic.Value>
                  {parseInt(this.state.data.price).toLocaleString()}
                </Statistic.Value>
                <Statistic.Label>MMK</Statistic.Label>
              </Statistic>
              <Statistic horizontal>
                <Statistic.Value>FREE</Statistic.Value>
                <Statistic.Label>Shipping</Statistic.Label>
              </Statistic>
            </Statistic.Group>
            <Divider horizontal>
              <Header as="h4">
                <Icon name="bar chart" />
                Specifications
              </Header>
            </Divider>
            <Table definition>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Released</Table.Cell>
                  <Table.Cell>{this.state.data.details.released}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Display Size</Table.Cell>
                  <Table.Cell>{this.state.data.dimension} inches</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Memory</Table.Cell>
                  <Table.Cell>{this.state.data.memory}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Chipset</Table.Cell>
                  <Table.Cell>{this.state.data.details.chipset}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>CPU</Table.Cell>
                  <Table.Cell>{this.state.data.details.cpu}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Front Camera</Table.Cell>
                  <Table.Cell>{this.state.data.details.fcamera}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Rear Camera</Table.Cell>
                  <Table.Cell>{this.state.data.details.rcamera}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Resolution</Table.Cell>
                  <Table.Cell>{this.state.data.details.resolution}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>GPU</Table.Cell>
                  <Table.Cell>{this.state.data.details.gpu}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Operating System</Table.Cell>
                  <Table.Cell>{this.state.data.details.os}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
