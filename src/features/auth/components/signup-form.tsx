import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, InputAdornment, TextField, IconButton, Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
//import { useAuth } from "../hooks/useAuth";
//import { LoginRequest } from "../model/login-request";
import LoginIcon from "@mui/icons-material/Login";
import makeStyles from "@mui/styles/makeStyles";

/* Form schema */
const validationSchema = yup.object({
  userName: yup.string().required("User Name is required"),
  password: yup
    .string()
    /* .min(8, 'Password should be of minimum 8 characters length') */
    .required("Password is required"),
});
const useStyles = makeStyles({
  boxStyle:{ display: "flex",
  flexDirection: "column",
  alignItems: "left",
  width: '50%',
  '@media (max-width: 600px)': {
    width: "80%",
 
}}
})
export const SignupForm = () => {
  /* component states */
  const [showPassword, setShowPassword] = useState<boolean>(false);

  /* hooks */
  // const { submitLoginRequest } = useAuth();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema,
    onSubmit: (data) => {
      //   const request: LoginRequest = {
      //     ...data,
      //     clientInfo: window.navigator.userAgent,
      //   };
      //   submitLoginRequest(request);
    },
  });

  /* Event handlers */
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const classes = useStyles();
  return (
 
    <Box
      className={classes.boxStyle}
    >
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginTop: "1rem" }}>
          <TextField

            size="medium"
            id="userName"
            name="userName"
            label="User Name"
            fullWidth
            autoComplete="off"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
        </div>

        <div style={{ marginTop: "0.7rem" }}>
          <TextField
            fullWidth
            id="password"
            autoComplete="off"
            name="password"
            size="medium"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <Button

            size="medium"
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disableElevation
            startIcon={<LoginIcon />}
          >
            SIGN UP
          </Button>
        </div>
      </form>
 


      <Box
        sx={{
          width: "50%",
          height: "3px",
          backgroundColor: "#D9D9D9",
          borderRadius: "50px",
          margin: "10px auto 15px auto",
          display: "block",
          // alignContent: 'center'
        }}
      />
      <Typography sx={{ margin: "10px auto 15px auto" }} variant="body2">
      Already have an account?
      </Typography>
      <Button
        size="medium"
        color="primary"
        variant="outlined"
        type="submit"
        disableElevation
        sx={{ margin: "10px auto 15px auto" }}
      >
        SIGN IN NOW
      </Button>
    </Box>

  );
};
