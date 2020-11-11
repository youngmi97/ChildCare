import axios from 'axios'; 
import React,{Component} from 'react'; 
import Modal from './Modal.js'
import Audio from './AudioFiles/Audio.js'

  
class SR extends Component { 
   
    state = { 
  
      // Initially, no file is selected 
      srFile: null
    }; 

    url = {
      url1: "/SR/0(연습1)아기가 울어요.mp3",
      url2: '/SR/0(연습2)머리를 빗어요.mp3',
      url3: '/SR/1.그림을 연필로 그려요.mp3',
      url4: '/SR/2.동생이 그림책을 봐요.mp3',
      url5: '/SR/3.엄마가 치마를 입어요.mp3',
      url6: '/SR/4.엄마가 청소를 하고 걸레를 빨아요.mp3',
      url7: '/SR/5.아빠가 힘들어서 하품을 크게 해요.mp3',
      url8: '/SR/6.동생이 추우면 엄마가 이불을 줘요.mp3',
      url9: '/SR/7.동생이 작은 칫솔로 이빨을 닦아요.mp3',
      url10: '/SR/8.아빠가 동생한테 맛있는 빵을 줘요.mp3',
      url11: '/SR/9.친구가 밖에서 그네를 재밌게 타요.mp3',
      url12: '/SR/10.아빠가 청소를 하는 엄마를 불러요.mp3',
      url13: '/SR/11.동생은 주사를 맞는 것을 싫어해요.mp3',
      url14: '/SR/12.아빠가 창문을 세게 닫으라고 해요.mp3',
    }
     
    // On file select (from the pop up) 
    onFileChange = event => { 
     
      // Update the state 
      this.setState({ srFile: event.target.files[0] }); 
     
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "myFile", 
        this.state.srFile, 
        this.state.srFile.name 
      ); 
     
      // Details of the uploaded file 
      console.log(this.state.srFile); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("api/uploadfile", formData); 
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
     
      if (this.state.srFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.srFile.name}</p> 
            <p>File Type: {this.state.srFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.srFile.lastModifiedDate.toDateString()} 
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
          </div>
          <div style={{margin:"30px 0px"}}>
            <p>문장 따라말하기 영상을 촬영하여 업로드 해 주세요.<br/>
              아래에 제공된 음성파일들을 아이에게 들려주시고 따라말하게 해주시고<br/>
              아동의 정면 얼굴이 나오도록 촬영해 주세요. <br/>
            </p>
          </div>

          <div style={{position:'relative', left:'30%'}}>
          <div style={{display:"flex"}}> 
            <Audio url={this.url.url1}/>
            <Audio url={this.url.url2}/>
          </div>
          <div style={{display:"flex"}}>
            <Audio url={this.url.url3}/>
            <Audio url={this.url.url4}/>
            <Audio url={this.url.url5}/>
            <Audio url={this.url.url6}/>
            <Audio url={this.url.url7}/>
            <Audio url={this.url.url8}/>
            
          </div>
          <div style={{display:"flex"}}>
            <Audio url={this.url.url9}/>
            <Audio url={this.url.url10}/>
            <Audio url={this.url.url11}/>
            <Audio url={this.url.url12}/>
            <Audio url={this.url.url13}/>
            <Audio url={this.url.url14}/>
          </div>
          </div>

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
  
  export default SR;

  const btnStyle = {
    margin: "80px 20px",
    color: "#6C2DC7",
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "#6C2DC7",
    fontSize: "13px",
    padding: "8px 13px",
  };