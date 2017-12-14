import React, { Component } from 'react';

class watchMovie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
          	<h1>{this.props.location.state.name}</h1>
          	<iframe src={"https://openload.co/embed/"+this.props.location.state.id+"/"} scrolling="no" frameborder="0" style={{marginLeft: '22%'}}width="700" height="430" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
          </div>  
        );
    }
}

export default watchMovie;
