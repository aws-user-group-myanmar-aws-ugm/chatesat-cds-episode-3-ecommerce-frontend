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
      item: null
    };
  }

  componentDidMount() {
    fetch(`http://${api_host}:8000/api/phones`)
      .then(data => data.json())
      .then(json =>
        this.setState(
          Object.assign(this.state, {
            data: json
          }),
          () => {
            let item = find(propEq("slug", this.props.match.params.slug))(
              this.state.data
            );
            this.setState(
              Object.assign(this.state, {
                item: item
              })
            );
          }
        )
      );
  }

  render() {
    if (this.state.data === null || this.state.item === null)
      return <div>loading...</div>;

    return (
      <Container>
        <Header as="h1">SellPhones™</Header>

        <Grid stackable columns={2}>
          <Grid.Column>
            <Image
              src={this.state.item.image}
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
              {this.state.item.name}
              <Header.Subheader>{this.state.item.make}</Header.Subheader>
            </Header>
            <Statistic.Group widths="two">
              <Statistic horizontal>
                <Statistic.Value>
                  {parseInt(this.state.item.price).toLocaleString()}
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
                  <Table.Cell>{this.state.item.details.released}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Display Size</Table.Cell>
                  <Table.Cell>{this.state.item.dimension} inches</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Memory</Table.Cell>
                  <Table.Cell>{this.state.item.memory}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Chipset</Table.Cell>
                  <Table.Cell>{this.state.item.details.chipset}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>CPU</Table.Cell>
                  <Table.Cell>{this.state.item.details.cpu}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Front Camera</Table.Cell>
                  <Table.Cell>{this.state.item.details.fcamera}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Rear Camera</Table.Cell>
                  <Table.Cell>{this.state.item.details.rcamera}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Resolution</Table.Cell>
                  <Table.Cell>{this.state.item.details.resolution}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>GPU</Table.Cell>
                  <Table.Cell>{this.state.item.details.gpu}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Operating System</Table.Cell>
                  <Table.Cell>{this.state.item.details.os}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
