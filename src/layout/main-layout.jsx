import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/ui/navbar/navbar";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Container
          sx={{
            padding: "2rem 1rem",
          }}
        >
          <Outlet />
        </Container>
      </main>
    </>
  );
}
