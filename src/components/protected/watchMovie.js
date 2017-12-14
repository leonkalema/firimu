import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class watchMovie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="container-fluid">
        <h1>Large Grid</h1>
        <p>The following example will result in a 25%/75% split on small devices, a 50%/50% split on medium devices, and a 33%/66% split on large devices. On extra small devices, it will automatically stack (100%).</p>
        <p>Resize the browser window to see the effect.</p>
        <div className="row">
			 <div className="col-sm-9 col-md-6 col-lg-8" style={{backgroundColor: 'pink'}}>
           <h4>{this.props.location.state.name}</h4>
          	<iframe src={"https://openload.co/embed/"+this.props.location.state.id+"/"} scrolling="no" frameborder="0" style={{marginLeft: '2%'}}width="600" height="430" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
          </div>
          <div className="col-sm-3 col-md-6 col-lg-4" style={{backgroundColor: 'yellow'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
         
        </div>
      </div>
		
        );
    }
}

export default watchMovie;
