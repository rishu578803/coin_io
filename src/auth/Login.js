import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Checkbox,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
  Grid,
} from "@mui/material";

import axios from "axios";
import logo from "../images/logo2.png";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation function (min 6 characters, at least 1 number)
  const validatePassword = (password) => {
    return password.length >= 6 && /\d/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    // Check if all fields are filled
    const newErrors = {
      email: !validateEmail(email),
      password: !validatePassword(password),
    };

    setErrors(newErrors);

    // If no errors, submit the form
    const hasErrors = Object.values(newErrors).some((error) => error);
    console.log("hasErrors,", hasErrors);
    if (!hasErrors) {
      console.log("Form Data Submitted:", formData);
      const payload = {
        username: formData.email,
        password: formData.password,
      };

      // axios
      //   .post("https://dummyjson.com/auth/login", payload, {
      //     headers: { "Content-Type": "application/json" },
      //     credentials: "include",
      //   })
      //   .then((response) => {
      //     console.log("response", response);
      //     if (response.status === 200) {
      //       alert("Successfully logged");
      // navigate('/');
      //     } else {
      //       alert("something went wrong");
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      console.log("payload", payload);
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "emilys",
          password: "emilyspass",
          // expiresInMins: 30,
        }),
        // credentials: 'include' // Include cookies (e.g., accessToken) in the request
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("response data", data);
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            console.log(data);
            navigate("/");
          } else {
            alert("Invalid credentials");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("All field are mandatory");
      console.log("Please correct the errors.");
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-7">
          <div className="d-flex justify-content-center">
            <img src={logo} className="auth_logo m-0 auto" />
          </div>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& > :not(style)": { m: 2 },
              p: 3,
              borderRadius: 1,
              boxShadow: 1,
              backgroundColor: "white",
              mt: 2,
            }} // Adds padding and a shadow
          >

            <h2 className="text-center ">Login</h2>
            

            <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
              {/* <InputLabel htmlFor="email">Email</InputLabel> */}
              <TextField
                id="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Checkbox
                        checked
                        sx={{
                          color: "green",
                          "&.Mui-checked": {
                            color: "green",
                          },
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              {errors.email && (
                <FormHelperText>Please enter your email address</FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth variant="standard">
              {/* <InputLabel htmlFor="password">Password</InputLabel> */}
              <TextField
                id="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Checkbox
                        checked
                        sx={{
                          color: "green",
                          "&.Mui-checked": {
                            color: "green",
                          },
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              {errors.password && (
                <FormHelperText>Please enter your password</FormHelperText>
              )}
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}>
              Login
            </Button>
            <Box>
              <Grid container spacing={2}>
                <Grid item>
                  <p>
                    If you don't have an account{" "}
                    <Link to="/signup" sx={{ color: "blue" }}>
                      click here
                    </Link>{" "}
                    to create a new account
                  </p>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
