import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import CommentsList from "./components/CommentsList/CommentsList";
import SingleComment from "./components/SingleComment/SingleComment";
import SinglePost from "./components/SinglePost/SinglePost";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/profile/:id", element: <Profile /> },
  { path: "/comments", element: <CommentsList /> },
  { path: "/comments/:id", element: <SingleComment /> },
  {
    path: "/comments/:id/:postId",
    element: <SinglePost />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
