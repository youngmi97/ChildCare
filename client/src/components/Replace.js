import React from 'react'

export default function Replace() {
    const [step, setStep] = useState(0);
    const [gender, setGender] = useState("");
    const [name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [primaryLanguage, setPrimaryLanguage] = useState("");
    const [schoolLanguage, setSchoolLanguage] = useState("");
    const [education, setEducation] = useState("");
    const [history,setHistory] = useState("");
    const [problem, setProblem] = useState("");
    const [broSis, setbroSis] = useState("");
    const [impairment, setImpairment]= useState("");
    const [impaired, setImpaired] = useState("");
    const [improvement, setImprovement] = useState("");
    const [awareness, setAwareness] = useState("");
    const [reason, setReason] = useState("");
    const [institute, setInstitute] = useState("");
    const [treatment, setTreatment] = useState("");
    const [teacherFeedback, setTeacherFeedback] = useState("");
    const [teacherFeedback1, setTeacherFeedback1] = useState("");
    const [walkingAge, setWalkingAge] = useState("");
    const [speakingAge, setSpeakingAge] = useState("");
    const [speakingAgeSentence, setSpeakingAgeSentence] = useState("");
    const [developmentProblem, setDevelopmentProblem] = useState("");
    const [developmentProblem1, setDevelopmentProblem1] = useState("");
    const [muscleProblem, setMuscleProblem] = useState("");
    const [muscleProblem1, setMuscleProblem1] = useState("");
    const [illnessAtBirth, setIllnessAtBirth] = useState("");
    const [illnessAtBirth1, setIllnessAtBirth1] = useState("");
    const [illness, setIllness] = useState("");
    const [illness1, setIllness1] = useState("");
    const [surgery, setSurgery] = useState("");
    const [surgery1, setSurgery1] = useState("");
    const [medication, setMedication] = useState("");
    const [medication1, setMedication1] = useState("");
    const [familyHistory, setFamilyHistory] = useState("");
    const [familyMember, setFamilyMember] = useState("");

    onStart = (e) => {
        e.preventDefault();
        this.nextStep();
      };
    
    onSubmit = (e) => {
        // Mutation To DB should happen here
    };

    onChange = (e) => this.setState({ [e.target.id]: e.target.value });

    nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1,
        });
      };
    
    prevStep = () => {
        const { step } = this.state;
        this.setState({
        step: step - 1,
        });
    };

    switch ({step}) {
      case 0:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: "6", padding: "40px" }}>
              <button onClick={this.onStart} style={startButton}>
                Start
              </button>
            </div>
            <div style={{ flex: "6" }}></div>
          </div>
        );

      case 1:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: "2" }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: "8", margin: "0 160px" }}>
              <Personal
                personal={this.state}
                onChange={this.onChange}
                onContinue={this.onContinue}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: "2" }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: "8", margin: "30px 160px" }}>
              <Education
                personal={this.state}
                onChange={this.onChange}
                onContinue={this.onContinue}
                onBack={this.onBack}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: 8, margin: "30px 160px" }}>
              <Development
                personal={this.state}
                onChange={this.onChange}
                onContinue={this.onContinue}
                onBack={this.onBack}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: 8, margin: "30px 160px" }}>
              <Illness
                personal={this.state}
                onChange={this.onChange}
                onContinue={this.onContinue}
                onBack={this.onBack}
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: 8, margin: "30px 160px" }}>
              <Family
                personal={this.state}
                onChange={this.onChange}
                onContinue={this.onContinue}
                onChange={this.onChange}
                onBack={this.onBack}
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: 8, margin: "30px 160px" }}>
              <Video
                onChange={this.onChange}
                onContinue={this.onContinue}
                onBack={this.onBack}
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: 8, margin: "30px 160px" }}>
              <NWR onContinue={this.onContinue} onBack={this.onBack} />
            </div>
          </div>
        );

      case 8:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            <div style={{ flex: 8, margin: "30px 160px" }}>
              <SR onContinue={this.onContinue} onBack={this.onBack} />
            </div>
          </div>
        );
      case 9:
        return (
          <div className="container" style={myStyle}>
            <div style={{ flex: 2 }}>
              <Sidebar step={this.state.step} />
            </div>
            {/* <div style={{ flex: "8", margin: "30px 160px" }}>
              <p>제출하시겠습니까?</p>
              <button onClick={this.onSubmit} style={startButton}>
                Submit
              </button>
            </div> */}

            <div style={{ flex: "8", margin: "30px 160px" }}>
              <p>제출하시겠습니까?</p>
              <Mutation
                mutation={SUBMIT_CHILD_FORM}
                variables={{
                  userId: user.id || "",
                  gender: {gender} || "",
                  name: {name} || "",
                  email: this.state.email || "",
                  dateOfBirth: {dateOfBirth} || "",
                  primaryLanguage: {primaryLanguage} || "",
                  education: {education} || "",
                  history: {history} || "",
                  problem: {problem} || "",
                  broSis: {broSis} || "",
                  impaired: {impaired} || "",
                  impairment: {impairment} || "",
                  schoolLanguage: {schoolLanguage} || "",
                  reason: {reason} || "",
                  improvement: {improvement} || "",
                  awareness: {awareness} || "",
                  institute: {institute} || "",
                  treatment: {treatment} || "",
                  teacherFeedback: {teacherFeedback} || "",
                  teacherFeedback1: {teacherFeedback1} || "",
                  walkingAge: {walkingAge} || "",
                  speakingAge: {speakingAge} || "",
                  speakingAgeSentence: {speakingAgeSentence} || "",
                  developmentProblem: {developmentProblem} || "",
                  developmentProblem1: {developmentProblem1} || "",
                  muscleProblem: {muscleProblem} || "",
                  muscleProblem1: {muscleProblem1} || "",
                  illnessAtBirth: {illnessAtBirth} || "",
                  illnessAtBirth1: {illnessAtBirth1} || "",
                  illness: {illness} || "",
                  illness1: {illness1} || "",
                  surgery: {surgery} || "",
                  surgery1: {surgery1} || "",
                  medication: {medication} || "",
                  medication1: {medication1} || "",
                  familyHistory: {familyHistory} || "",
                  familyMember: {familyMember} || "",
                }}
                update={(cache, { data: { submitChildForm } }) => {
                  // mutation is successful
                  console.log("submitChildForm updated");
                }}
                onError={(error) => console.log("mutation error", error)}
              >
                {(submitChildForm) => (
                  <button onClick={submitChildForm} style={startButton}>
                    Submit
                  </button>
                )}
              </Mutation>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <p style={{ padding: "50px" }}>
              제출되었습니다. 평가 결과를 기다려주세요.
            </p>
          </div>
        );
    
    }
}
