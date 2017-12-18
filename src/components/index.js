import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Dashboard from './protected/Dashboard'
import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'
import WatchMovie from './protected/watchMovie';
import Katemba from './Katemba';
import Dmca from './Dmca';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function MovieRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}


export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Lindako katono nyo .....</h1> : (
      <BrowserRouter>
        <div>
      
<Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
   <img src={require("./logo-2.png")} />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
	   <NavDropdown eventKey="4" title="Categories" id="nav-dropdown">
          <MenuItem eventKey="4.1"> <Link to="/katemba" className="navbar-brand">Katemba</Link></MenuItem>
		  <MenuItem eventKey="4.1"> <Link to="/katemba" className="navbar-brand">Omugere / Action</Link></MenuItem>
		  <MenuItem eventKey="4.1"> <Link to="/katemba" className="navbar-brand">Omukwano</Link></MenuItem>
		  <MenuItem eventKey="4.1"> <Link to="/katemba" className="navbar-brand">Obukanga / Horror</Link></MenuItem>
		  <MenuItem eventKey="4.1"> <Link to="/katemba" className="navbar-brand">Kina-Uganda</Link></MenuItem>
         
          
        </NavDropdown>	
	
	
        </Nav>
      <Nav pullRight>
		<Link to="/" className="navbar-brand"> <span className="glyphicon glyphicon-home" /> Watch  </Link>
		<Link to="/dashboard" className="navbar-brand"><span className="glyphicon glyphicon-cloud-upload" /> Upload </Link>
	 <Link to="/dmca" className="navbar-brand">DMCA</Link>
<li>
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                        <Link to="/register" className="navbar-brand">Register</Link>
                      </span>}
                </li>
       
      </Nav>
    </Navbar.Collapse>
  </Navbar>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                 <Route path="/katemba" component={Katemba}/>
                 <Route path='/dmca' component={Dmca} />
                 <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                 <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                 <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
                 <MovieRoute authed={this.state.authed} path='/movie' component={WatchMovie} />
                 <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
