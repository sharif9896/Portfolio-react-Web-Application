import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Css/index.css";
import "./Css/Slide.css";
import App from "./Routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import About from "./Routes/About.jsx";
import Contact from "./Routes/Contact.jsx";
import Projects from "./Routes/Projects.jsx";
import Experience from "./Routes/Experience.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path:"/",element:<Home />},
      {path:"/AboutMe",element: <About/>},
      {path:"/ContactMe",element: <Contact/>},
      {path:"/Projects",element: <Projects/>},
      {path:"/Experience",element: <Experience/>},
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
