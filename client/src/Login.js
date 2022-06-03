import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      theme: createTheme(),
    };
  }
  AddUser() {
    axios
      .post("http://localhost:3001/api/user/", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => console.log(res));
  }

  render() {
    console.log(this.state);
    return (
      <ThemeProvider theme={this.state.theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            style={{
              backgroundImage: `url(${"https://www.pizzarettes.nl/wp-content/uploads/2013/09/pizza-background.png"})`,
              backgroundRepeat: "no-repeat",
              width: "900px",
              height: "650px",
            }}
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "blue" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    style={{ color: "blue", borderBlockColor: "blue" }}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First & last name"
                    autoFocus
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Remember me."
                  />
                </Grid>
              </Grid>
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  this.AddUser();
                  this.setState({ name: "", email: "", password: "" });
                  this.props.changeView("Admin");
                }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Go back to guest view? Click here!
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <login sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    );
  }
}
export default SignIn;
