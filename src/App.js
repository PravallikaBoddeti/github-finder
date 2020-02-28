import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/alert';
import About from './components/pages/About';
import User from './components/users/User';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  // async componentDidMount(){
  //   this.setState({loading: true});

  //   const res = await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ users:res.data, loading:false});
  // }

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='GitHub Finder' icon='fab fa-github' />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login'component={User}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
