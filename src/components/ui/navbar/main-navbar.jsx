import { DarkMode, LightMode, Wallet } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Link,
  Toolbar,
  useTheme,
} from "@mui/material";
import { useColorMode } from "../../../hooks/use-color-mode/use-color-mode";

export function MainNavbar({ isLandingPage }) {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();

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
              flexGrow: "1",
              paddingX: theme.spacing(0.5),
            }}
            href="/"
          >
            Crumena
          </Link>

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
