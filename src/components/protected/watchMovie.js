import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class watchMovie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="container-fluid">
        <h1>Big Huge Announcement</h1>
        <p>Osobola / You can tell a friend, relative to upload for you files that you can watch later. Click the upload button. </p>
        <p>After they upload you can search for the file by name. Watch enjoy and share. </p>
        <div className="row">
			 <div className="col-sm-9 col-md-6 col-lg-8">
           <h4>{this.props.location.state.name}</h4>
          	<iframe src={"https://openload.co/embed/"+this.props.location.state.id+"/"} scrolling="no" frameborder="0" style={{marginLeft: '2%'}}width="600" height="430" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
          </div>
          <div className="col-sm-3 col-md-6 col-lg-4">
            Langaa wano 
          </div>
         
        </div>
      </div>
		
        );
    }
}

export default watchMovie;
