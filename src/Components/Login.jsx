import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { validation } from "../Validation/LoginValidation";

export const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // console.log("====> content", e);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validation(values);
    setErrors(validation(values));
  };
  // console.log(errors, "====>");
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Card
          sx={{
            width: "300px",
            marginLeft: "37%",
            marginTop: "10px",
            bgcolor: "lightyellow",
            boxShadow: "5px 5px grey",
          }}
        >
          <CardContent align="center">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h4">Employee Login</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  variant="outlined"
                  type="text"
                  label="Enter User Name"
                  onChange={handleChange}
                />
                {errors && <p style={{ color: "red" }}> {errors.username}</p>}
                {/* {errors ? <p>{errors.username}</p> : ""} */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  variant="outlined"
                  type="password"
                  label="Enter Password"
                  onChange={handleChange}
                />
                {errors && (
                  <p style={{ color: "orange" }}> {errors.password}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="success">
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <p>
                  Dont have an account <a href="">Register Here</a>
                </p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  );
};
