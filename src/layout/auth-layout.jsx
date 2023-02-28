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
            overflow: "hidden",
          }}
        >
          <Outlet />
        </Container>
      </main>
    </>
  );
}
