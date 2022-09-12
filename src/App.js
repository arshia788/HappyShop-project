import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// components
import Navbar from './Navbar';
import Landing from './Landing';
import DetailProducts from './components/DetailProducts';
import ShopAll from './components/ShopAll';
import Footer from './Footer';

// context
import ItemProductProvider from './context/ItemProductProvider';
import ItemContextProvider from './context/ItemContextProvider';



const App = () => {
  return (
    <div>

      <Navbar />

      <ItemProductProvider>
        <ItemContextProvider>

        
        <Switch>
          <Route path='/happyshop/shop' component={ShopAll}/>
          <Route path='/happyshop/:id' component={DetailProducts}/>
          <Route path='/happyshop' component={Landing}/>
          <Redirect to='/happyshop'/>
        </Switch>
        
        </ItemContextProvider>
      </ItemProductProvider>
      <Footer />
      

    </div>
  );
};

export default App;