import { createRoutesFromElements, Route } from "react-router-dom";
import { MainLayout } from "../layout/main-layout";
import { Home } from "../pages";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/app" element={<MainLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  </>
);
