import "./App.css";
import "./globals.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoute from "./route";

// 3️⃣ Router singleton created
const router = createBrowserRouter([{ path: "*", Component: RootRoute }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
