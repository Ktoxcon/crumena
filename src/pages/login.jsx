import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
      <h1>Login Page</h1>
      <br />
      <Link to="/app/dashboard">Go To App</Link>
    </>
  );
}
