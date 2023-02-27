import { AccountCircle } from "@mui/icons-material";
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

export function SignIn() {
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSignInClick = () => {
    //@TODO IMPLEMENT SIGN-IN LOGIC
    //@TODO IMPLEMENT SIGN-IN LOGIC
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
                  <AccountCircle
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
                  <Typography variant="h6">Welcome Back!</Typography>
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
                <Box py={2}>
                  <TextField
                    id="user-password"
                    type="password"
                    label="Password"
                    fullWidth
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Box>
                <Box py={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSignInClick}
                  >
                    Sign In
                  </Button>
                  <Button
                    href="/sign-up"
                    variant="text"
                    fullWidth
                    sx={{ marginTop: theme.spacing(2) }}
                  >
                    Sign Up
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
