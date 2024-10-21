
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  InputAdornment,
  Checkbox,
  FormControl,
  FormHelperText,
  Button,
} from "@mui/material";
import logo from "../images/logo2.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
const token =  localStorage.getItem('accessToken');
  // useEffect(() => {
  //   if (token) {
  //     navigate("/");
     
  //   }
  // }, []);


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation function (min 6 characters, at least 1 number)
  const validatePassword = (password) => {
    return password.length >= 6 && /\d/.test(password);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName,lastName, email, password } = formData;

    // Validate the inputs
    const newErrors = {
      firstName: !firstName,
      lastName: !lastName,
      email: !validateEmail(email),
      password: !validatePassword(password),
    };

    setErrors(newErrors);

    // If no errors, submit the form
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      console.log("Form Data Submitted:", formData);

      axios
        .post("https://dummyjson.com/users/add", formData, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            alert("Successfully Registered");
            navigate("/login");
          } else {
            alert("something went wrong");
          }
        })
        .catch((error) => {
          console.log(error);
        });
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
            <img src={logo} className="auth_logo m-0 auto" alt="Logo" />
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
            }}>
            {/* First Name */}

            <h2 className="text-center ">Sign up</h2>
            <FormControl
              fullWidth
              variant="standard"
              sx={{ mb: 2 }}
              error={errors.firstName}>
              <TextField
                id="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Checkbox
                        checked
                        sx={{
                          color: "green",
                          "&.Mui-checked": { color: "green" },
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              {errors.firstName && (
                <FormHelperText>Please enter your first name</FormHelperText>
              )}
            </FormControl>

            {/* Last Name */}
            <FormControl
              fullWidth
              variant="standard"
              sx={{ mb: 2 }}
              error={errors.lastName}>
              <TextField
                id="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Checkbox
                        checked
                        sx={{
                          color: "green",
                          "&.Mui-checked": { color: "green" },
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              {errors.lastName && (
                <FormHelperText>Please enter your last name</FormHelperText>
              )}
            </FormControl>

            {/* Email */}
            <FormControl
              fullWidth
              variant="standard"
              sx={{ mb: 2 }}
              error={errors.email}>
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
                          "&.Mui-checked": { color: "green" },
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              {errors.email && (
                <FormHelperText>
                  Please enter a valid email address
                </FormHelperText>
              )}
            </FormControl>

            {/* Password */}
            <FormControl fullWidth variant="standard" error={errors.password}>
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
                          "&.Mui-checked": { color: "green" },
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              {errors.password && (
                <FormHelperText>
                  Password must be at least 6 characters and contain a number
                </FormHelperText>
              )}
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}>
              Submit
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Signup;
