import { createRoutesFromElements, Route } from "react-router-dom";
import { MainLayout } from "../layout/main-layout";
import { Home } from "../pages";
import { Dashboard } from "../pages/dashboard";
import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sign-up";

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/app" element={<MainLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  </>
);
