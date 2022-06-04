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

class Mainlogged extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      theme: createTheme(),
      view: "Main",
      current: [],
    };
  }

  componentDidMount() {
    return axios.get("http://localhost:3001/api/pizza").then((res) => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
  }

  render() {
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
                Eatalian Pizza Tracker
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
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {this.state.data.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      onClick={() => this.props.onePizza(card)}
                      component="img"
                      image={card.photo}
                      height="140"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <p
                        className="text-primary bold fs-4"
                        onClick={() => this.props.onePizza(card)}
                      >
                        {card.name}
                      </p>
                      <Typography>
                        {card.description} only for {card.price} $ !
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <button
                        onClick={() => this.props.onePizza(card)}
                        className={"btn btn-primary btn-sm"}
                      >
                        <i className="fas" /> Rate
                      </button>
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
export default Mainlogged;
