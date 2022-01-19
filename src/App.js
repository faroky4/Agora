import { Component } from 'react/cjs/react.production.min';
import { BrowserRouter as Router, Route , Link, Routes } from 'react-router-dom';
import { observer } from 'mobx-react';
import './App.css'
import Market from './components/Market';

class App extends Component {
  render(){
    debugger
    return (
      <Router>
        <div>
          <Link className='link' to="/market"> Market </Link>
          
          <Route exact path="/market" render={()=>
            <Market/>} />
        </div>
      </Router>
      
    );
  }
}

export default observer(App);
