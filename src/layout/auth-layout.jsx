import { Container, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { MainNavbar } from "../components/ui/navbar/main-navbar";

export function AuthLayout() {
  const theme = useTheme();

  return (
    <>
      <MainNavbar />
      <main>
        <Container
          maxWidth={false}
          sx={{
            height: "100vh",
            overflowY: "scroll",
            background:
              "linear-gradient(90deg, rgba(161,196,253,1) 0%, rgba(194,233,251,1) 100%)",
          }}
        >
          <Outlet />
        </Container>
      </main>
    </>
  );
}
