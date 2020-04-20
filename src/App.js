import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from  './pages/homepage/homepage.component';
import Shop_Page from './pages/shop/shop-page.component';



function App() {
  return (
    <div >
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={Shop_Page}/>

    </div>
  );
}

export default App;
