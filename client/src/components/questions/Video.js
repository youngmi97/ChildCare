import axios from 'axios'; 
import React,{Component} from 'react'; 
import Modal from './Modal.js'

  
class Video extends Component { 
   
    state = { 
  
      // Initially, no file is selected 
      videoFile: null
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
     
      // Update the state 
      this.setState({ videoFile: event.target.files[0] }); 
     
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "myFile", 
        this.state.videoFile, 
        this.state.videoFile.name 
      ); 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("api/uploadfile", formData); 
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
     
      if (this.state.videoFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.videoFile.name}</p> 
            <p>File Type: {this.state.videoFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.videoFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose before Pressing the Upload button</h4> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
     
      return ( 
        <div style ={{fontSize:'16px'}}>
          <div style={{marginBottom:"30px"}}>
              <h3 style={{display:"inline-block"}}>영상촬영방법</h3>
              <Modal />
          </div>
          <div style={{margin:"30px 0px"}}>
            <p>아동과 5분간 상호작용 영상을 촬영하여 업로드 해 주세요.<br/>
              소꿉놀이, 의사놀이, 블록놀이 등의 장난감을 활용한 놀이 영상<br/>
              성인과 아동의 1:1 영상으로, 두사람이 화면에 모두 나오게 촬영해주세요.<br />
              상단의 샘플 영상을 참고해주세요. 
            </p>
          </div>
          <div> 
              <h3> 
                영상을 업로드 하세요. 
              </h3> 
              <div> 
                  <input type="file" onChange={this.onFileChange} /> 
              </div> 
              {this.fileData()} 

              <button style={btnStyle} onClick={this.props.onBack}>
              Back
              </button>
              <button style={btnStyle} onClick={this.props.onContinue}>
              Continue
              </button>
            
          </div> 
        </div>
        

      ); 
    } 
  } 
  
  export default Video; 
  const btnStyle = {
    margin: "80px 20px",
    color: "#6C2DC7",
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "#6C2DC7",
    fontSize: "13px",
    padding: "8px 13px",
  };