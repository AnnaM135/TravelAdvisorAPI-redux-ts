import { useRoutes } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { SomePage } from "./pages/SomePage";

export function Router() {
  let element = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        { path: "/", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        { path: "home", element: <HomePage /> },
        { path: "about", element: <SomePage /> },
      ],
    },
  ]);

  return element;
}
