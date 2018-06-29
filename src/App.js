import React, { Component } from 'react';

import './App.css';
import {Route,Router,Switch} from 'react-router-dom';
import Layout from './components/layout'
import Header from './components/header'
import Thankyou from './components/thankyou'
import history from './components/history'
import Footer from './components/footer'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Router history={history}>
              <Switch>
                  <Route path='/' component={Layout} exact/>
                  <Route path='/thankyou/:id' component={Thankyou} exact/>
              </Switch>
          </Router>
      <Footer/>
      </div>
    );
  }
}

export default App;
