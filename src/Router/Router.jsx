import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Layout/Error/ErrorPage";
import Home from "../Layout/Home/Home/Home";
import Login from "../Layout/Register/Login";
import SignUp from "../Layout/Register/SignUp";
import AllToy from "../Layout/Page/AllToy/AllToy";
import Blogs from "../Layout/Page/Blogs/Blogs";
import MyToys from "../Layout/Page/MyToys/MyToys";
import AddToys from "../Layout/Page/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import SingleToy from "../Layout/Page/AllToy/SingleToy/SingleToy";
import Update from "../Layout/Page/MyToys/Update";
import DocumentTitle from "react-document-title";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: (
          <DocumentTitle title="LEGOEL | Home">
            <Home></Home>
          </DocumentTitle>
        ),
      },
      {
        path: "login",
        element: (
          <DocumentTitle title="LEGOEL | Login">
            <Login></Login>
          </DocumentTitle>
        ),
      },
      {
        path: "signup",
        element: (
          <DocumentTitle title="LEGOEL | Sign Up">
            <SignUp></SignUp>
          </DocumentTitle>
        ),
      },
      {
        path: "alltoys",
        element: (
          <DocumentTitle title="LEGOEL | All Toys">
            <AllToy></AllToy>
          </DocumentTitle>
        ),
      },
      {
        path: "blog",
        element: (
          <DocumentTitle title="LEGOEL | Blog">
            <Blogs></Blogs>
          </DocumentTitle>
        ),
      },
      {
        path: "mytoys",
        element: (
          <DocumentTitle title="LEGOEL | My Toys">
            <PrivateRoute>
              <MyToys></MyToys>
            </PrivateRoute>
          </DocumentTitle>
        ),
      },
      {
        path: "singletoy/:id",
        element: (
          <DocumentTitle title="LEGOEL | Toy Details">
            <PrivateRoute>
              <SingleToy></SingleToy>
            </PrivateRoute>
          </DocumentTitle>
        ),
      },
      {
        path: "update/:id",
        element: (
          <DocumentTitle title="LEGOEL | Update">
            <PrivateRoute>
              <Update></Update>
            </PrivateRoute>
          </DocumentTitle>
        ),
      },
      {
        path: "addatoy",
        element: (
          <DocumentTitle title="LEGOEL | Add Toy">
            <PrivateRoute>
              <AddToys></AddToys>
            </PrivateRoute>
          </DocumentTitle>
        ),
      },
    ],
  },
]);

export default router;
