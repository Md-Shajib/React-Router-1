import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home/Home';
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Posts from './Posts/Posts';
import PostDetails from './Posts/PostDetails/PostDetails';
import Users from './Users/Users';
import UserDetails from './Users/UserDetails';
import ErrorPage from './Home/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/contact",
        element: <div>Hello from contact</div>
      },
      {
        path: "/posts",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: "/posts/:id",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <PostDetails></PostDetails>
      },
      {
        path: "/users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "/users/:id",
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails></UserDetails>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
