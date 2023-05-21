import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/shared/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import MyToys from "../pages/MyToys/MyToys";
import ToyUpdate from "../pages/ToyUpdate/ToyUpdate";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/toys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://toy-village-server.vercel.app/toys"),
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-village-server.vercel.app/toyDetails/${params.id}`,
            {
              method: "GET",
              headers: {
                authorization: `Bearer ${localStorage.getItem("toyUserToken")}`,
              },
            }
          ),
      },
      {
        path: "/toyUpdate/:id",
        element: (
          <PrivateRoute>
            <ToyUpdate></ToyUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-village-server.vercel.app/toyDetails/${params.id}`,
            {
              method: "GET",
              headers: {
                authorization: `Bearer ${localStorage.getItem("toyUserToken")}`,
              },
            }
          ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
