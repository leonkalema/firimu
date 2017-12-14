import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
          
		    <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand"><img src={require("./logo-2.png")}/></Link>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                  <Link to="/" className="navbar-brand">Home</Link>
                </li>
	
                <li>
                  <Link to="/dashboard" className="navbar-brand">Uploadinga Movie</Link>
                </li>
	
	              <li>
                  <Link to="/katemba" className="navbar-brand">Katemba</Link>
                </li>
                <li>
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <span>
                      
                      </span>}
                </li>
              </ul>
            </div>
          </nav>

          </div>  
        );
    }
}

export default Navigation;
 






