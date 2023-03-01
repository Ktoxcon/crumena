import { DarkMode, LightMode, Wallet } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Link as UILink,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useColorMode } from "../../../hooks/use-color-mode/use-color-mode";

export function MainNavbar({ isLandingPage }) {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  const sectionSx = {
    paddingX: theme.spacing(6),
    cursor: "pointer",
    color: "inherit",
    fontWeight: "bold",
    display: {
      xs: "none",
      md: "block",
    },
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Wallet />
          <Link
            variant="h6"
            sx={{
              color: theme.palette.common.white,
              textDecoration: "none",
              fontWeight: theme.typography.fontWeightBold,
              cursor: "pointer",
              paddingX: theme.spacing(0.5),
            }}
            href="/"
          >
            Crumena
          </Link>

          {isLandingPage && (
            <>
              <Typography>
                <UILink sx={sectionSx} underline="hover">
                  Product
                </UILink>
              </Typography>
              <Typography>
                <UILink sx={sectionSx} underline="hover">
                  Features
                </UILink>
              </Typography>
              <Typography>
                <UILink sx={sectionSx} underline="hover">
                  About Us
                </UILink>
              </Typography>
            </>
          )}
          <Box sx={{ flexGrow: 1 }} />
          {isLandingPage && (
            <Button
              href="/auth"
              variant="outlined"
              size="medium"
              color="inherit"
              sx={{
                textTransform: "none",
                fontWeight: theme.typography.fontWeightBold,
                marginX: theme.spacing(1),
              }}
            >
              Get Started
            </Button>
          )}
          <IconButton
            sx={{
              color: theme.palette.common.white,
            }}
            onClick={() => toggleColorMode()}
          >
            {colorMode === "light" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
