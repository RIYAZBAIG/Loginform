import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,Alert
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

import { Registerschema } from "../Validation/yupValidation";
// import  Axios  from "axios";
import axios from "axios";

export const Registration = () => {
  const [msg,setMsg] = useState("")
  const navigate=useNavigate()
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmpassword: "",
  };
  const { values, handleSubmit, errors, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: Registerschema,
    onSubmit: async (values) => {
      const result=await axios.post("http://localhost:2525/aduser", values);
      setMsg(result.data);

    },
  });
   useEffect(()=>{
    if(msg!==""){
      setTimeout(()=>{
       Navigate("/")
      },3000)
    }
   })
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Card
          sx={{
            marginLeft: "37%",
            marginTop: "10px",
            width: "400px",
            bgcolor: "lightyellow",
            boxShadow: "10px 10px grey",
          }}
        >
          <CardContent align="center">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h4">Employee Registration Form</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="text"
                  label="Enter Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {<p>{errors.name}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="email"
                  label="Enter Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {<p>{errors.email}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="number"
                  label="Enter Phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                {<p>{errors.phone}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="text"
                  label="Enter User Name"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
                {<p>{errors.username}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="password"
                  label="Enter Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {<p>{errors.password}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="password"
                  label="Confirm Password"
                  name="confirmpassword"
                  value={values.confirmpassword}
                  onChange={handleChange}
                />
                {<p>{errors.confirmpassword}</p>}
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Register
                </Button>
              </Grid>
              <Grid item xs ={12} >
                msg ! =="" 

              </Grid>
              <Grid item xs={12}>
                <p>
                  Already have an account? <a href="">Go to Login</a>
                </p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  );
};








