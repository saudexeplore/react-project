import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Aboutus from "./component/Aboutus";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Restaurentmenu from "./component/RestaurentMenu";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStrore from "./utils/appStore";
import UserContext from "./utils/UserContext";

const SwigyMart = lazy(() => import("./component/SwigyMart"));

const Applayout = () => {
  const [userName, setuserName] = useState();
  useEffect(() => {
    const data = {
      name: "Saud Khan",
    };
    setuserName(data.name);
  }, []);

  return (
    <Provider store={appStrore}>
      <UserContext.Provider value={{ loggedinUser: userName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about-us",
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/swiggyMart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <SwigyMart />
          </Suspense>
        ),
      },
      {
        path: "/restaurent/:resId",
        element: <Restaurentmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
