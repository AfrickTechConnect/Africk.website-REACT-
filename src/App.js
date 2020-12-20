import React, { useState } from 'react';
import './styles/App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/Nav/NavBar';
import Backdrop from './components/Backdrop/Backdrop';
import DrawerNav from './components/DrawerNav/DrawerNav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ContactUs } from './components/ContactUs';
import Footer from './components/LandingPageComponents/Footer';

function App() {

  const [isDrawerOpen, setDrawerState] = useState(false);

  const openCloseDrawer = () => {
    setDrawerState( prevState => !prevState)
  }
  return (
  <BrowserRouter>
    <div style={{height: '100%' }}>
    
      <NavBar openCloseDrawer={openCloseDrawer}/>
      {isDrawerOpen && <DrawerNav closeDrawer={openCloseDrawer} /> }
      {isDrawerOpen && <Backdrop /> }

      <div className="route-container">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/contact' component={ContactUs} />
        </Switch>

      </div>

      <Footer />

    </div>
  </BrowserRouter>
  );
}

export default App;
