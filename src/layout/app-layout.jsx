import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AppNavbar } from "../components/ui/navbar/app-navbar";

export function AppLayout() {
  return (
    <>
      <AppNavbar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
