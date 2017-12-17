import React, { Component } from 'react';
import AddFile from './AddFile'; 
import ListMovies from './ListMovies';



class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
			
          <AddFile />
			<ListMovies />
		
	 </div>  
        );
    }
}

export default Dashboard;
 






