import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  useEffect(() => {
    document.body.dataset.theme = "dark";
  });

  return (
    <>
      <AppNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
