import { createRoutesFromElements, Route } from "react-router-dom";
import { AppLayout } from "../layout/app-layout";
import { AuthLayout } from "../layout/auth-layout";
import { Home } from "../pages";
import { Dashboard } from "../pages/dashboard";
import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sign-up";

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="/auth" element={<AuthLayout />}>
      <Route index element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
    </Route>
    <Route path="/app" element={<AppLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  </>
);
