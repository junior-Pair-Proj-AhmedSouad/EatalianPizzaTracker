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
      errMessage: "",
    };
  }
  login() {
    console.log(this.state.errMessage);
    axios
      .post("http://localhost:3001/api/auth/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res, "res");
        localStorage.setItem("user", res.data);
        this.props.changeView("Admin");
      })
      .catch((e) => {
        console.log(e.response);
        this.setState({ errMessage: e.response.data.message });
      });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Container sx={{ py: 8 }} maxWidth="md">
          <CssBaseline />
          <Box
            style={{
              // backgroundImage: `url(${"https://www.pizzarettes.nl/wp-content/uploads/2013/09/pizza-background.png"})`,
              backgroundRepeat: "no-repeat",
            }}
            className="border p-5 rounded"
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
                  this.login();
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
          {/* <login sx={{ mt: 5 }} /> */}
        </Container>
      </ThemeProvider>
    );
  }
}
export default SignIn;
