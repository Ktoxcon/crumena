import { AccountBalanceWallet } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
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
    const { value, name } = event.target;
    setPassword((prevPasswordData) => {
      return {
        ...prevPasswordData,
        [name]: value,
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
      <Container
        maxWidth={false}
        sx={{
          height: "100vh",
          background:
            "linear-gradient(90deg, rgba(161,196,253,1) 0%, rgba(194,233,251,1) 100%)",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: theme.spacing(6),
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
                      padding: theme.spacing(1),
                      background: theme.palette.grey[300],
                      borderRadius: "50%",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    padding: theme.spacing(4),
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
                      "Password should contain at least 8 characters"
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
                      "Password and confirmation doesn't match"
                    }
                  />
                </Box>
                <Box py={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSignUpClick}
                    disabled={!isValidPassword()}
                  >
                    Sign Up
                  </Button>
                  <Button
                    href="/sign-in"
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
      </Container>
    </>
  );
}
