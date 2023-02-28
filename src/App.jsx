import { RouterProvider } from "react-router-dom";
import { ColorModeProvider } from "./context/color-mode/color-mode-provider";
import "./index.css";
import { router } from "./routes/router";

function App() {
  return (
    <ColorModeProvider>
      <RouterProvider router={router} />
    </ColorModeProvider>
  );
}

export default App;
