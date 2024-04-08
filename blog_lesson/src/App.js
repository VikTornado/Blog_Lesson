import React from "react";
import {
    createBrowserRouter, Outlet,
    RouterProvider,
} from "react-router-dom";
import Home from "./Pageg/Home";
import Register from "./Pageg/Register";
import Login from "./Pageg/Login";
import Write from "./Pageg/Write";
import Single from "./Pageg/Single";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/post/:id/",
                element: <Single/>
            },
            {
                path: "/write",
                element: <Write/>
            },
        ]
    },
    {
        path: "/register",
        element: <div><Register/></div>,
    },
    {
        path: "/login",
        element: <div><Login/></div>,
    },
    {
        path: "/write",
        element: <div><Write/></div>,
    },
    {
        path: "/single",
        element: <div><Single/></div>,
    },
]);

function App() {
    return (
        <div className={""}>
            <div className={""}>
                <RouterProvider router={router}/>
            </div>
        </div>
    );
}

export default App;
