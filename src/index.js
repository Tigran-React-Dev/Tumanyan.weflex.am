import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SliderProvider } from './Components/Providers/SliderProvider';
import {ProductProvider} from "./Components/Providers/ProductMenu";

import "./i18n"
import "swiper/swiper.scss"
import store from "./Components/redux/Store";
import { Provider } from 'react-redux';

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={true}>
      <Provider store={store}>
    <SliderProvider>
       <ProductProvider>
           <App />
        </ProductProvider>
       </SliderProvider>
    </Provider>
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

