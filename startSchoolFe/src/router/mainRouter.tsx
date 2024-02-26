import { createBrowserRouter } from "react-router-dom";
const AuthLayout = React.lazy(() => import("../components/layout/AuthLayout"));
const Register = React.lazy(() => import("../pages/page/auth/Register"));
const SignIn = React.lazy(() => import("../pages/page/auth/SignIn"));
const RegisterCard = React.lazy(
  () => import("../pages/page/auth/RegisterCard")
);
const SecondStep = React.lazy(() => import("../pages/home/start/SecondStep"));
const ThirdScreen = React.lazy(() => import("../pages/home/start/ThirdStep"));
const LoadingScreen = React.lazy(
  () => import("../components/static/LoadingScreen")
);
const MainSchoolPage = React.lazy(() => import("../mainPage/MainSchoolPage"));
const SwitchLogin = React.lazy(() => import("../pages/page/auth/SwitchLogin"));
const StudentLogin = React.lazy(
  () => import("../pages/page/auth/StudentLogin")
);
const LandingLayout = React.lazy(() => import("../LandingPage1/LandingLayout"));
const ABetter = React.lazy(() => import("../LandingPage1/Homescreen/ABetter"));
const Contact = React.lazy(() => import("../LandingPage1/Contact"));
const About = React.lazy(() => import("../LandingPage1/About"));
const StartUsing = React.lazy(
  () => import("../LandingPage1/Homescreen/StartUsing")
);
const LandingScreen = React.lazy(
  () => import("../LandingPage1/Homescreen/HomeScreen")
);
import React from "react";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
      {
        index: true,
        path: "/features",
        element: <ABetter />,
      },
      {
        index: true,
        path: "/contact",
        element: <Contact />,
      },
      {
        index: true,
        path: "/about",
        element: <About />,
      },
      {
        index: true,
        path: "/service",
        element: <StartUsing />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        index: true,
        path: "login",
        element: <SignIn />,
      },
      {
        index: true,
        path: "switch-login",
        element: <SwitchLogin />,
      },
      {
        index: true,
        path: "student-login",
        element: <StudentLogin />,
      },
      {
        index: true,
        path: "api/verify-user/:token",
        element: <SignIn />,
      },
      {
        index: true,
        path: "register-message",
        element: <RegisterCard />,
      },
    ],
  },

  {
    path: "/step-two-data",
    element: <ThirdScreen />,
  },

  {
    path: "/step-third-data",
    element: <SecondStep />,
  },

  {
    path: "*",
    element: <LoadingScreen />,
  },
  {
    path: "/:schoolName",
    element: <MainSchoolPage />,
  },

  // {
  //   path: "/",
  //   element: <LandingPageScreen />,
  // },
]);
