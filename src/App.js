import React from 'react';
import Header from './Header';
import Menu from './menu';
import Body from './Body';
import Footer from './Footer';
import Center from './center';
import Full from './full';
import Left from './Left';
import Right from './right';
import './main.css';



function App() {
  return (
    <div className="App">
      <Header>
        <Menu/>
      </Header>
      <Body>
        <Center/>
        <Full>
          <Left/> 
          <Right/>
        </Full>
        
      </Body>
      <Footer/>
    </div>
  );
}

export default App;
