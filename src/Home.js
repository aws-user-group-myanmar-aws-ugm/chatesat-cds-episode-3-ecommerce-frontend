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
        <Grid>
          {splitEvery(3, this.state.data).map((row, index) => (
            <Grid.Row columns={3} key={index}>
              {row.map(column => (
                <Grid.Column key={column.id}>
                  <Image src={column.image} />
                  <Header as="h2">
                    {column.name}
                    <Header.Subheader>
                      {column.price.toLocaleString()}
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
