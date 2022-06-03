import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

class MainAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      theme: createTheme(),
      view: "Main",
      current: [],
      name: "",
      price: 0,
      description: "",
      photo: "",
    };
  }

  componentDidMount() {
    this.dataGetter();
  }

  dataGetter() {
    axios.get("http://localhost:3001/api/pizza").then((res) => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     console.log("pizza added!");
  //   }
  // }

  deletePizza(e) {
    console.log(e);
    axios.delete(`http://localhost:3001/api/pizza/${e._id}`);
    this.dataGetter();
  }

  addPizza(e) {
    axios.post("http://localhost:3001/api/pizza", {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      photo: this.state.photo,
    });
    e.preventDefault();
    this.dataGetter();
  }

  render() {
    console.log(this.state);
    return (
      <ThemeProvider theme={this.state.theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography
              variant="h6"
              color="Black"
              noWrap
              fontFamily="Sans-Serif"
            >
              Pizza Tracker
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Pizza Tracker
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                There’s nothing cookie-cutter about Pizza Tracker. Not our
                pizzas. Not our people. And definitely not the way we live life.
                Around here, we don’t settle for anything less than food we’re
                proud to serve.
              </Typography>
            </Container>
          </Box>
          <div class="create">
            <div class="create-editor">
              <h2>Add Pizza</h2>
              <form>
                <input
                  class="create-input"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                ></input>
                <input
                  class="create-input"
                  type="text"
                  placeholder="Price"
                  onChange={(e) => this.setState({ price: e.target.value })}
                ></input>
                <input
                  class="create-input"
                  type="text"
                  placeholder="Image URL"
                  onChange={(e) => this.setState({ photo: e.target.value })}
                ></input>
                <textarea
                  class="create-body-textarea"
                  placeholder="Description"
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                ></textarea>
                <button
                  onClick={(e) => this.addPizza(e)}
                  class="create-submit-button"
                  type="submit"
                >
                  Save pizza
                </button>
              </form>
            </div>
          </div>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {this.state.data.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    style={{ color: "red" }}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      onClick={() => this.props.onePizza(card)}
                      component="img"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      image={card.photo}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        onClick={() => this.props.onePizza(card)}
                      >
                        {card.name}
                      </Typography>
                      <Typography>
                        {card.description} only for {card.price} $ !
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={() => this.props.onePizza(card)}
                      >
                        Update
                      </Button>
                      <Button
                        onClick={(e) => this.deletePizza(card)}
                        size="small"
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Enjoy your food!
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Our company will ensure only the best quality for our customers!
          </Typography>
        </Box>
        {/* End footer */}
      </ThemeProvider>
    );
  }
}
export default MainAdmin;
