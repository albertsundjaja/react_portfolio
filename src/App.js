import React from 'react';
import Main from './containers/Main'
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
        <Main />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
