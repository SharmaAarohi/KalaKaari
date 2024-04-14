import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Updated import statement
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCatergory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_jewellery.png';
import women_banner from './Components/Assets/banner_clothing.png';
import kid_banner from './Components/Assets/banner_utensils.png';

function App() {
  useEffect(() => {
    // Check if Hive Keychain is available
    if (window.hive_keychain) {
      // Keychain is available, initialize it
      window.hive_keychain.initialize();
    } else {
      // Keychain is not installed, handle accordingly
      console.error("Hive Keychain is not installed.");
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Shop} /> {/* Use exact for the root path */}
          <Route path='/jewellery' component={() => <ShopCategory banner={men_banner} category="men" />} />
          <Route path='/clothing' component={() => <ShopCategory banner={women_banner} category="women" />} />
          <Route path='/utensils' component={() => <ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product/:productId" component={Product} /> {/* Simplified nested route */}
          <Route path='/cart' component={Cart} />
          <Route path='/login' component={LoginSignup} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
