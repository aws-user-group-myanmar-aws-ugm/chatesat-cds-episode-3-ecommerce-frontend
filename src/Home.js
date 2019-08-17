import React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  List
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { splitEvery } from "ramda";

import { api_host } from "./constants";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(`http://${api_host}/api/phones`)
      .then(data => data.json())
      .then(json => this.setState(Object.assign(this.state, { data: json })));
  }

  render() {
    if (this.state.data === null) return <div>loading...</div>;

    return (
      <Container>
        <Header as="h1">SellPhones™</Header>
        <Grid>
          {splitEvery(3, this.state.data).map((row, index) => (
            <Grid.Row columns={3} key={index}>
              {row.map(column => (
                <Grid.Column key={column.id}>
                  <Image
                    src={column.image}
                    onError={i => (i.target.src = require("./404.png"))}
                    style={{ width: "400px", height: "auto" }}
                  />
                  <Header as="h2">
                    {column.name}
                    <Header.Subheader>
                      {parseInt(column.price).toLocaleString()} MMK
                    </Header.Subheader>
                  </Header>
                  <List>
                    <List.Item>{column.dimension} inches</List.Item>
                    <List.Item>{column.memory}</List.Item>
                  </List>
                  <Button as={Link} to={`details/${column.slug}`} fluid>
                    Details
                  </Button>
                </Grid.Column>
              ))}
            </Grid.Row>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Home;
