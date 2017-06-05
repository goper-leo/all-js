import React, { Component } from 'react';
import ReactDom from 'react-dom';

//** Import components
// import Navbar from './components/Navbar';
// import Body from './components/body';
// import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
        <div>
            Hello World!

        </div>

    );
  }

}

ReactDom.render(<App />, document.getElementById('app'));
