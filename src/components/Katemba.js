import React, { Component } from 'react';
import axios from 'axios';
import GoogleAd from './protected/GoogleAd';
import RapidAPI from 'rapidapi-connect';
import 'bootstrap/dist/css/bootstrap.css';

const style = {
  marginTop: '15px',
  marginBottom: '20px'
};

export default class Katemba extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		loaded: false,
  		files: [],
  		captcha_url: [],
  		folders: [],
  		searchTerm: '',
  		tempFiles: []
  	}
  }
  componentWillMount() {
  	let files = [];
      const rapid = new RapidAPI("default-application_595245eae4b058a9cb03885f", "700d35ff-99ec-4b4f-9b68-a4c61ee74789");


      rapid.call('Openload', 'showFoldersContent', {
          'login': 'f6dd2f2d3981418f',
          'key': 'u8Rphwnk',
          'folderId': '4624380',
      }).on('success', res => {
  	// axios.get('https://rapidapi.com/package/Openload/functions/showFoldersContent?login=f6dd2f2d3981418f&key=u8Rphwnk')
        // axios.post('https://api.openload.co/1/file/getsplash?login={login}&key={key}&file={file}')
          console.log(res);
          console.log(filesArray);
            let filesArray = res.result.files;
			let foldersArray = res.result.folders;
            var {files, folders, tempFiles} = this.state;
			for (var i = 0; i < foldersArray.length; i++) {
				folders.push(foldersArray[i]);
			}
		    
		    for (var i = 0; i <filesArray.length; i++) {
		    	files.push({name: filesArray[i].name, id: filesArray[i].linkextid, folderid: filesArray[i].folderid});
		    	tempFiles.push({name: filesArray[i].name, id: filesArray[i].linkextid, folderid: filesArray[i].folderid});
		    }
		    this.setState({files,folders, loaded:true});

            }).on('error', error => {
                console.log(error)
        });
     
  }

  search(e){
	let value = e.target.value.toLowerCase();
	if (value!='') {
		let arr = this.state.files.filter((d)=>{
        if(d['name'].toLowerCase().indexOf(value) != -1){
          return true
        }
		})
		this.setState({
		files:arr
		})
	} else {
		var tempFiles = this.state.tempFiles;
		this.setState({
			files: tempFiles 
		});
	}
  }
  render () {
    return !this.state.loaded ? <h2>lindako kattono nyo...</h2> : ( 
    <div>
      <input type="text" onChange={(e)=>this.search(e)} className="form-control" placeholder="Search here"/>
      <br />
		
      {
      		this.state.files.reverse().map((item,j )=>
      		<div key={j} >
      	
			<div className="col-sm-6 col-md-4"  >
			    <div className="thumbnail">
			      	<img src={require("./placeholder.png")} onClick={()=>this.props.history.push({pathname: '/movie',state: {id: item.id,name: item.name} }) }/>
				    <div className="caption">
				        <h3>{item.name}</h3>
				        <p>Shared by:  Coming Soon</p>
				        <p><a onClick={()=>this.props.history.push({pathname: '/movie',state: {id: item.id,name: item.name} }) } className="btn btn-default" role="button">Watch</a> <a href="#" className="btn btn-default" role="button">Download</a></p>
				    </div>
			    </div>
		  	</div>
	</div>
			)
      	}
		
      	</div>
      
    )
  }
}
function searchStringInArray (str, strArray) {
    for (var j=0; j<strArray.length; j++) {
        if (strArray[j].name.match(str)) return j;
    }
    return -1;
}