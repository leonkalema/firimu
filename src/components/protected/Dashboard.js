import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';


class Dashboard extends React.Component {
    constructor() {
    super();
    this.state = {
      buttonDisable: 'disabled',
      buttonValue: 'Submit',
      errorClass: '',
      errorValue: '',
      category: '',
      title: '',
      category: '',
      fileValue: '',
      folder: '',
      cFolder:'',
      file1:''
    };
  }
  
    enableSubmit = (e) => {
    
        if(e.target.value !== '')
        {
            this.setState({
                buttonDisable: ''
              })
        }
        else
        {
            this.setState({
                buttonDisable: 'disabled'
              })
        }
    }
    
    handleSubmit = () => {
        
        this.setState({
            buttonDisable: 'disabled',
            buttonValue: 'Submitting.....',
            cFolder: document.getElementById("category").value,
            file1: document.getElementById("file").files[0],
            errorClass: 'alert alert-warning',
            errorValue: 'Uploading File, please do not close this window.',
        //    file: document.getElementById("file").files[0],
         //   cFolder: document.getElementById("category").value
        })
        
        
        if(document.getElementById("file").value === '')
        {
            this.setState({
                    buttonDisable: '',
                    buttonValue: 'Submit',
                    errorClass: 'alert alert-danger',
                    errorValue: 'Please upload a video file'
                });
                return;
        }

        
        if(document.getElementById("file").files[0].type !== 'video/mp4' &&
            document.getElementById("file").files[0].type !== 'video/x-flv' &&
            document.getElementById("file").files[0].type !== 'video/x-msvideo' &&
            document.getElementById("file").files[0].type !== 'application/x-troff-msvideo' &&
            document.getElementById("file").files[0].type !== 'video/avi' &&
            document.getElementById("file").files[0].type !== 'video/msvideo' &&
            document.getElementById("file").files[0].type !== 'video/mpeg' &&
            document.getElementById("file").files[0].type !== 'video/quicktime' &&
            document.getElementById("file").files[0].type !== 'video/3gpp' &&
            document.getElementById("file").files[0].type !== 'video/MP2T' &&
            document.getElementById("file").files[0].type !== 'video/x-ms-wmv' &&
            document.getElementById("file").files[0].type !== 'video/x-mpeg' &&
            document.getElementById("file").files[0].type !== 'video/x-matroska' &&
            document.getElementById("file").files[0].type !== 'video/x-matroska-3d')
            {
                this.setState({
                    buttonDisable: '',
                    buttonValue: 'Submit',
                    errorClass: 'alert alert-danger',
                    errorValue: 'Please upload a video file'
                });
                return;
            }
        
        
        axios.post('https://api.openload.co/1/file/ul?login=f6dd2f2d3981418f&key=u8Rphwnk&folder=' + document.getElementById("category").value)
        .then(res => {
            console.log(res)
            if(res.data.status != 200)
            {
                this.setState({
                  buttonDisable: '',
                  buttonValue: 'Submit',
                  errorClass: 'alert alert-danger',
                  errorValue: res.data.msg
                });
            }
            else
            {
                const data = new FormData();
                //data.append('folder', document.getElementById("category").value); // you can append anyone.
                data.append('file1', document.getElementById("file").files[0]);
                console.log(data);
                const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
                axios.post(res.data.result.url,data, config)
                .then((jsonResult) => {
                  this.setState({
                      buttonDisable: '',
                      buttonValue: 'Submit',
                      errorClass: 'alert alert-success',
                      errorValue: 'Successfully Submitted'
                    });
                })
                .catch(function() {
                    this.setState({
                      buttonDisable: '',
                      buttonValue: 'Submit',
                      errorClass: 'alert alert-danger',
                      errorValue: 'Something went wrong'
                    });
                });
            }
        }).catch(error => {
            this.setState({
            buttonDisable: '',
            buttonValue: 'Submit',
            errorClass: 'alert alert-danger',
            errorValue: 'Something went wrong'
        });
    });
}


componentDidMount(){
        
     axios.get('https://api.openload.co/1/file/listfolder?login=f6dd2f2d3981418f&key=u8Rphwnk')
        // axios.post('https://api.openload.co/1/remotedl/add?login=f6dd2f2d3981418f&key=u8Rphwnk&url=https://1fiafqj.oloadcdn.net/uls/9RSFoiH4yqNLNfWN&folder=1828583')
        .then(res => {
                
                let array = res.data.result.folders;
                    
                this.setState({
                    folder: array
                  })

            }).catch(error => {
                console.log(error)
        });
        
    }
    
    

    
    render() {
        console.log(this.state.folder);
        if(!this.state.folder) return false //renders nothing when no details available
      return <form className="top-margin" encType="multipart/form-data">
              <div className={this.state.errorClass}>{this.state.errorValue}</div>
                <div className="form-group col-xs-12 s">
                    <input type="file" id="file" className="form-control" />
                    
                </div>
                <div className="form-group col-xs-12 top-margin">
                        <select className="form-control" id="category" onChange={this.enableSubmit}>
                            <option value="">Select Category</option>
                            {
                                this.state.folder.map((piece,index) => {
                                    if(this.state.folder[index].name != '.subtitles' && this.state.folder[index].name != '.videothumb')
                                    {
                                        return <option key={index} value={this.state.folder[index].id} >{this.state.folder[index].name}</option>
                                    }
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group col-xs-12">
                        <input type="text" className="form-control" placeholder="Title" value={this.state.title}/>
                    </div>
                    <div className="form-group col-xs-12">
                        <button type="button" className="pull-left btn btn-success" onClick={this.handleSubmit} disabled={this.state.buttonDisable}>{this.state.buttonValue}</button>
                    </div>
                </form>;
		
    }
}

export default Dashboard;