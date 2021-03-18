import React, { Suspense, useEffect, useState} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import './App.scss';
import productApi from 'api/productApi';


const Photo = React.lazy(() => import('./features/Photo')); // Bắt buộc phải có Suspense



function App() {
  const {productList,setProductList} = useState([]);

  useEffect(()=>{
    const fetchProductList = async()=>{
      // Khi gọi API cần phải có try catch để nó bắt cái lỗi trong bất đồng bộ
      try {
        // Thiết lập params để filter và get trang theo params để hiển thị danh sách products
        const params = {
          _page: 1, 
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch products list:',error);
      }
    } // Hàm này có nhiệm vụ là đi fetch cái ProductList
    
    fetchProductList();
  },[]);

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header/>

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            {/* <Route path="/sign-in" component={SignIn} /> */}
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
