import React from "react";
import { Button, Container, Grid, Header, Image, List } from "semantic-ui-react";
import {Link} from 'react-router-dom';

class Home extends React.Component {
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
        <Header as="h1">SellPhones</Header>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Image src={this.state.data[0].image} />
              <Header as="h2">
                {this.state.data[0].name}
                <Header.Subheader>
                  {this.state.data[0].price.toLocaleString()} MMK
                </Header.Subheader>
              </Header>
              <List>
                <List.Item>{this.state.data[0].dimension} inches</List.Item>
                <List.Item>{this.state.data[0].spec}</List.Item>
              </List>
              <Button fluid as={Link} to="details/0">
                Details
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Image src={this.state.data[1].image} />
              <Header as="h2">
                {this.state.data[1].name}
                <Header.Subheader>
                  {this.state.data[1].price.toLocaleString()} MMK
                </Header.Subheader>
              </Header>
              <List>
                <List.Item>{this.state.data[1].dimension} inches</List.Item>
                <List.Item>{this.state.data[1].spec}</List.Item>
              </List>
              <Button fluid as={Link} to="details/1">
                Details
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Image src={this.state.data[2].image} />
              <Header as="h2">
                {this.state.data[2].name}
                <Header.Subheader>
                  {this.state.data[2].price.toLocaleString()} MMK
                </Header.Subheader>
              </Header>
              <List>
                <List.Item>{this.state.data[2].dimension} inches</List.Item>
                <List.Item>{this.state.data[2].spec}</List.Item>
              </List>
              <Button fluid as={Link} to="details/2">
                Details
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Image src={this.state.data[3].image} />
              <Header as="h2">
                {this.state.data[3].name}
                <Header.Subheader>
                  {this.state.data[3].price.toLocaleString()} MMK
                </Header.Subheader>
              </Header>
              <List>
                <List.Item>{this.state.data[3].dimension} inches</List.Item>
                <List.Item>{this.state.data[3].spec}</List.Item>
              </List>
              <Button fluid as={Link} to="details/3">
                Details
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Image src={this.state.data[4].image} />
              <Header as="h2">
                {this.state.data[4].name}
                <Header.Subheader>
                  {this.state.data[4].price.toLocaleString()} MMK
                </Header.Subheader>
              </Header>
              <List>
                <List.Item>{this.state.data[4].dimension} inches</List.Item>
                <List.Item>{this.state.data[4].spec}</List.Item>
              </List>
              <Button fluid as={Link} to="details/4">
                Details
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Image src={this.state.data[5].image} />
              <Header as="h2">
                {this.state.data[5].name}
                <Header.Subheader>
                  {this.state.data[5].price.toLocaleString()} MMK
                </Header.Subheader>
              </Header>
              <List>
                <List.Item>{this.state.data[5].dimension} inches</List.Item>
                <List.Item>{this.state.data[5].spec}</List.Item>
              </List>
              <Button fluid as={Link} to="details/5">
                Details
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Image src={this.state.data[6].image} />
              <Header as="h2">
                {this.state.data[6].name}
                <Header.Subheader>
                  {this.state.data[6].price.toLocaleString()} MMK
                </Header.Subheader>
              </Header>
              <List>
                <List.Item>{this.state.data[6].dimension} inches</List.Item>
                <List.Item>{this.state.data[6].spec}</List.Item>
              </List>
              <Button fluid as={Link} to="details/6">
                Details
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Image src={this.state.data[7].image} />
              <Header as="h2">
                {this.state.data[7].name}
                <Header.Subheader>
                  {this.state.data[7].price.toLocaleString()} MMK
                </Header.Subheader>
              </Header>
              <List>
                <List.Item>{this.state.data[7].dimension} inches</List.Item>
                <List.Item>{this.state.data[7].spec}</List.Item>
              </List>
              <Button fluid as={Link} to="details/7">
                Details
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Image src={this.state.data[8].image} />
              <Header as="h2">
                {this.state.data[8].name}
                <Header.Subheader>
                  {this.state.data[8].price.toLocaleString()} MMK
                </Header.Subheader>
              </Header>
              <List>
                <List.Item>{this.state.data[8].dimension} inches</List.Item>
                <List.Item>{this.state.data[8].spec}</List.Item>
              </List>
              <Button fluid as={Link} to="details/8">
                Details
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Image src={this.state.data[9].image} />
              <Header as="h2">
                {this.state.data[9].name}
                <Header.Subheader>
                  {this.state.data[9].price.toLocaleString()} MMK
                </Header.Subheader>
              </Header>
              <List>
                <List.Item>{this.state.data[9].dimension} inches</List.Item>
                <List.Item>{this.state.data[9].spec}</List.Item>
              </List>
              <Button fluid as={Link} to="details/9">
                Details
              </Button>
            </Grid.Column>
            <Grid.Column />
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Home;