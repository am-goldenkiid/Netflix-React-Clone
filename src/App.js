import React from 'react';
import Home from './Pages/Home';
import Banner from './Pages/Banner'
import Nav from './Pages/Nav'
import Footer from './Pages/Footer';
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
