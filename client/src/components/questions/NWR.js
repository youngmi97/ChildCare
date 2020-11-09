import axios from 'axios'; 
import React,{Component} from 'react'; 
import Audio from './AudioFiles/Audio.js'

  
class NWR extends Component { 
   
    state = { 
      // Initially, no file is selected 
      nwrFile: null
    }; 
    
    url = {
      url1: "/NWR/0(연습1)따무.mp3",
      url2: '/NWR/0(연습2)뿌커디.mp3',
      url3: '/NWR/1.누베.mp3',
      url4: '/NWR/2.조나.mp3',
      url5: '/NWR/3.퍼틱.mp3',
      url6: '/NWR/4.까다굳.mp3',
      url7: '/NWR/5.모단기.mp3',
      url8: '/NWR/6.니아토.mp3',
      url9: '/NWR/7.토보가인.mp3',
      url10: '/NWR/8.푸가태지.mp3',
      url11: '/NWR/9.드반거노.mp3',
      url12: '/NWR/10.조매누버리.mp3',
      url13: '/NWR/11.레빌애티머.mp3',
      url14: '/NWR/12.바즘다거니.mp3',
      url15: '/NWR/13.로밉띠르저니.mp3',
      url16:'/NWR/14.보마데낭까두.mp3',
      url17:'/NWR/15.미기돋아캐바.mp3'
    }
    
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
          </div>
          <div style={{margin:"30px 0px"}}>
            <p>비단어 따라말하기 영상을 촬영하여 업로드 해 주세요.<br/>
              아래에 제공된 음성파일들을 아이에게 들려주시고 따라말하게 해주시고<br/>
              아동의 정면 얼굴이 나오도록 촬영해 주세요. <br/>
            </p>
          </div>
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
            <Audio url={this.url.url9}/>
            <Audio url={this.url.url10}/>
          </div>
          <div style={{display:"flex"}}>
            <Audio url={this.url.url11}/>
            <Audio url={this.url.url12}/>
            <Audio url={this.url.url13}/>
            <Audio url={this.url.url14}/>
            <Audio url={this.url.url15}/>
            <Audio url={this.url.url16}/>
            <Audio url={this.url.url17}/>
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