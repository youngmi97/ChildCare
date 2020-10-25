import axios from 'axios'; 
import React,{Component} from 'react'; 
import Modal from './Modal.js'
import Audio from './Audio.js'

  
class NWR extends Component { 
   
    state = { 
  
      // Initially, no file is selected 
      nwrFile: null
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
     
      // Update the state 
      this.setState({ nwrFile: event.target.files[0] }); 
     
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "myFile", 
        this.state.nwrFile, 
        this.state.nwrFile.name 
      ); 
     
      // Details of the uploaded file 
      console.log(this.state.nwrFile); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("api/uploadfile", formData); 
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
     
      if (this.state.nwrFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.nwrFile.name}</p> 
            <p>File Type: {this.state.nwrFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.nwrFile.lastModifiedDate.toDateString()} 
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
        <div>
          <div style={{marginBottom:"30px"}}>
              <h3 style={{display:"inline-block"}}>영상촬영방법</h3>
              <Modal />
          </div>
          <div style={{margin:"30px 0px"}}>
            <p>비단어 따라말하기 영상을 촬영하여 업로드 해 주세요.<br/>
              아래에 제공된 음성파일들을 아이에게 들려주시고 따라말하게 해주시고<br/>
              아동의 정면 얼굴이 나오도록 촬영해 주세요. <br/>
              상단의 샘플 영상을 참고해주세요. 
            </p>
          </div>
        
            <Audio />

          <div style={{margin:"30px 0px"}}> 
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
  
  export default NWR;

  const btnStyle = {
    margin: "80px 20px",
    color: "#6C2DC7",
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "#6C2DC7",
    fontSize: "13px",
    padding: "8px 13px",
  };