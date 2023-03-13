import { Outlet } from "react-router-dom";

export function AuthLayout() {
  useEffect(() => {
    document.body.dataset.theme = "dark";
  });

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
