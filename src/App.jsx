import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./theme/globals.scss";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
