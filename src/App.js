import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// components
import Navbar from './Navbar';
import Landing from './Landing';
import DetailProducts from './components/DetailProducts';
import PhonesLanding from './components/PhonesLanding';
import Footer from './Footer';

// context
import ItemContextProvider from './context/ItemContextProvider';



const App = () => {
  return (
    <div>

      <Navbar />

      <ItemContextProvider>
        
        <Switch>
          <Route path='/happyshop/phones' component={PhonesLanding}/>
          <Route path='/happyshop/:id' component={DetailProducts}/>
          <Route path='/happyshop' component={Landing}/>
          <Redirect to='/happyshop'/>
        </Switch>
        
      </ItemContextProvider>
      <Footer />
      

    </div>
  );
};

export default App;