import { AccountBalanceWallet } from "@mui/icons-material";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

export function SignUp() {
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    confirmation: "",
  });

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const { value, name: inputName } = event.target;

    setPassword((prevPasswordData) => {
      return {
        ...prevPasswordData,
        [inputName]: value,
      };
    });
  };

  const passwordHasCorrectLenght = () => {
    return password.value.length >= 8;
  };

  const passwordAndConfirmationMatch = () => {
    return password.value === password.confirmation;
  };

  const isValidPassword = () => {
    return (
      passwordHasCorrectLenght() && passwordAndConfirmationMatch()
    );
  };

  const handleSignUpClick = () => {
    //@TODO IMPLEMENT SIGN-UP LOGIC
  };

  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
            marginTop: "2rem",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Stack>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <AccountBalanceWallet
                  sx={{
                    padding: theme.spacing(2),
                    background: theme.palette.grey[300],
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  padding: theme.spacing(2),
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">
                  Welcome To Crumena!
                </Typography>
              </Box>
              <Box>
                <TextField
                  id="user-email"
                  label="Email"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                />
              </Box>
              <Box py={3}>
                <TextField
                  name="value"
                  id="user-password"
                  type="password"
                  label="Password"
                  fullWidth
                  value={password.value}
                  onChange={handlePasswordChange}
                  helperText={
                    "Password should have at least 8 characters"
                  }
                />
              </Box>
              <Box>
                <TextField
                  name="confirmation"
                  id="password-confirmation"
                  type="password"
                  label="Password Confirmation"
                  fullWidth
                  value={password.confirmation}
                  onChange={handlePasswordChange}
                  error={!passwordAndConfirmationMatch()}
                  helperText={
                    !passwordAndConfirmationMatch() &&
                    "Password and Confirmation Should Match"
                  }
                />
              </Box>
              <Box py={2}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleSignUpClick}
                  disabled={!isValidPassword()}
                >
                  Sign Up
                </Button>
                <Button
                  href="/auth"
                  variant="text"
                  fullWidth
                  sx={{ marginTop: theme.spacing(2) }}
                >
                  Sign In
                </Button>
              </Box>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
