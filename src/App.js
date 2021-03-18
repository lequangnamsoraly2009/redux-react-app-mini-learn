import productApi from "api/productApi";
import SignInAuth from "features/Auth/pages/SignIn/index";
import firebase from "firebase";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import("./features/Photo")); // Bắt buộc phải có Suspense

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);

function App() {
  const { productList, setProductList } = useState([]);

  // useEffect(() => {
  //   const fetchProductList = async () => {
  //     // Khi gọi API cần phải có try catch để nó bắt cái lỗi trong bất đồng bộ
  //     try {
  //       // Thiết lập params để filter và get trang theo params để hiển thị danh sách products
  //       const params = {
  //         _page: 1,
  //         _limit: 10,
  //       };
  //       const response = await productApi.getAll(params);
  //       // console.log(response);
  //       setProductList(response.data);
  //     } catch (error) {
  //       console.log("Failed to fetch products list:", error);
  //     }
  //   }; // Hàm này có nhiệm vụ là đi fetch cái ProductList

  //   fetchProductList();
  // },[setProductList]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };

    fetchProductList();
  },[setProductList]);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          // user logs out handle something here
          console.log("User is not login");
          return;
        }
        console.log("Logged in user:", user.displayName);
        const token = await user.getIdToken();
        console.log("Token : ", token);
      });

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  // console.log(SignInAuth);

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignInAuth} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
