import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const Forgotpassword = () => {
  return (
    <React.Fragment>
      <Card
        sx={{
          width: "300px",
          marginLeft: "37%",
          marginTop: "10px",
          bgcolor: "lightyellow",
        }}
      >
        <CardContent align="center">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4">Reset Password</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" type="email" label="Enter Email" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                type="text"
                label="Enter User Name"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="secondary">
                Reset Password
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
