import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Landing Page</h1>
      <Link to="login">Login</Link>
    </>
  );
}
