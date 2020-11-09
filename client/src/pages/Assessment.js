import React, {useContext, useState, useMemo} from 'react'
import { AuthContext } from "../context/auth";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHILD_FORM } from "../Mutations";
import Sidebar2 from '../components/Sidebar2'
import TextField from '@material-ui/core/TextField';
import Personal from '../components/assessment/Personal'
import Education from '../components/assessment/Education';
import Development from '../components/assessment/Development';
import Illness from '../components/assessment/Illness';
import Family from  '../components/assessment/Family';
import NWRSR from '../components/assessment/NWRSR'



export default function Assessment() {

    //passed as prop later
    const { user } = useContext(AuthContext);

    const { loading, error, data } = useQuery(GET_CHILD_FORM, {
        variables: { userId: user.id },
        });

    if (loading) {
    console.log("loading");
    } else {
    console.log("got data", data);
    }

    const [gender, setGender] = useState("")
    const [name, setName] = useState("")
    const [broSis, setBroSis] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [impaired, setImpaired] = useState("")
    const [primaryLanguage, setPrimaryLanguage] = useState("")
    const [education, setEducation] = useState("")
    const [history, setHistory] = useState("")
    const [problem, setProblem] = useState("")
    const [impairment, setImpairment] = useState("")
    const [schoolLanguage, setSchoolLanguage] = useState("")
    const [reason, setReason] = useState("")
    const [improvement, setImprovement] = useState("")
    const [awareness, setAwareness] = useState("")
    const [institute, setInstitute] = useState("")
    const [treatment, setTreatment] = useState("")
    const [teacherFeedback, setTeacherFeedback] = useState("")
    const [teacherFeedback1, setTeacherFeedback1] = useState("")
    const [walkingAge, setWalkingAge] = useState("")
    const [speakingAge, setSpeakingAge] = useState("")
    const [speakingAgeSentence, setSpeakingAgeSentence] = useState("")
    const [developmentProblem, setDevelopmentProblem] = useState("")
    const [developmentProblem1, setDevelopmentProblem1] = useState("")
    const [muscleProblem, setMuscleProblem] = useState("")
    const [muscleProblem1, setMuscleProblem1] = useState("")
    const [illnessAtBirth, setIllnessAtBirth] = useState("")
    const [illnessAtBirth1, setIllnessAtBirth1] = useState("")
    const [illness, setIllness] = useState("")
    const [illness1, setIllness1] = useState("")
    const [surgery, setSurgery] = useState("")
    const [surgery1, setSurgery1] = useState("")
    const [medication, setMedication] = useState("")
    const [medication1, setMedication1] = useState("")
    const [familyHistory, setFamilyHistory] = useState("")
    const [familyMember, setFamilyMember] = useState("")
    
    const [step, setStep] = useState(1);
    const [perFeedback, setPerFeedback] = useState("");
    const [eduFeedback, setEduFeedback] = useState("");
    const [devFeedback, setDevFeedback] = useState("");
    const [illFeedback, setIllFeedback] = useState("");
    const [famFeedback, setFamFeedback] = useState("");
    const [nwrFeedback, setNwrFeedback] = useState("");
    const [ovrFeedback, setOvrFeedback] = useState("");


    useMemo(() => {
        if (!error && !loading) {
          setGender(data.getChildForm.gender);
          setName(data.getChildForm.name);
          setBroSis(data.getChildForm.broSis);
          setDateOfBirth(data.getChildForm.dateOfBirth);
          setImpaired(data.getChildForm.impaired);
          setImpairment(data.getChildForm.impairment);
          setPrimaryLanguage(data.getChildForm.primaryLanguage);
          setSchoolLanguage(data.getChildForm.schoolLanguage);
          setEducation(data.getChildForm.education);
          setHistory(data.getChildForm.history);
          setProblem(data.getChildForm.problem);
          setReason(data.getChildForm.reason);
          setImprovement(data.getChildForm.improvement);
          setAwareness(data.getChildForm.awareness);
          setInstitute(data.getChildForm.institute);
          setTreatment(data.getChildForm.treatment);
          setTeacherFeedback(data.getChildForm.teacherFeedback);
          setTeacherFeedback1(data.getChildForm.teacherFeedback1);
          setWalkingAge(data.getChildForm.walkingAge);
          setSpeakingAge(data.getChildForm.speakingAge);
          setSpeakingAgeSentence(data.getChildForm.speakingAgeSentence);
          setDevelopmentProblem(data.getChildForm.developmentProblem);
          setDevelopmentProblem1(data.getChildForm.developmentProblem1);
          setMuscleProblem(data.getChildForm.muscleProblem);
          setMuscleProblem1(data.getChildForm.muscleProblem1);
          setIllnessAtBirth(data.getChildForm.illnessAtBirth);
          setIllnessAtBirth1(data.getChildForm.illnessAtBirth1);
          setIllness(data.getChildForm.illness);
          setIllness1(data.getChildForm.illness1);
          setSurgery(data.getChildForm.surgery);
          setSurgery1(data.getChildForm.surgery1);
          setMedication(data.getChildForm.medication);
          setMedication1(data.getChildForm.medication1);
          setFamilyHistory(data.getChildForm.familyHistory);
          setFamilyMember(data.getChildForm.familyMember);
        }
      }, [data, error, loading]);

    const onClick = () => {
        setStep(step+1)
    }
    const onChange = (e) => {
        setPerFeedback(e.target.value);
    }

    const onChange1 = (e) => {
        setEduFeedback(e.target.value);
    }

    const onChange2 = (e) => {
        setDevFeedback(e.target.value);
    }

    const onChange3 = (e) => {
        setIllFeedback(e.target.value);
    }

    const onChange4 = (e) => {
        setFamFeedback(e.target.value);
    }

    const onChange5 = (e) => {
        setNwrFeedback(e.target.value);
    }

    const onChange6 = (e) => {
        setOvrFeedback(e.target.value);
    }
    console.log()
    console.log(step)

    switch(step){
        case 1:
            return (
                <div className="container">
                    <div style={{position:"absolute", top:"20%", width:"10%"}}>
                        <Sidebar2 step={step}/>
                    </div>
                    <div style={{position:"absolute", top:"20%", left:"30%"}}>
                        <Personal 
                            name = {name}
                            gender={gender} 
                            dateOfBirth= {dateOfBirth}
                            broSis = {broSis}
                            impaired = {impaired}
                            impairment = {impairment}
                            primaryLanguage = {primaryLanguage}
                            schoolLanguage = {schoolLanguage}
                            problem = {problem}
                            reason = {reason}
                            improvement ={improvement}
                            awareness={awareness} 
                        />
                        </div>
                        <div style={{position:"absolute", top:"45%", left:"30%"}}>
                            <TextField
                                id="perFeedback"
                                onChange = {onChange}
                                label="제언사항"
                                multiline
                                rows={4}
                                variant="outlined"
                                style={{width:"400px"}}
                                value = {perFeedback}
                            />
                        </div>
                        <button style={{position:"absolute", top:"65%", left:"40%"}}
                        onClick={onClick}>
                            Continue
                        </button>
                </div>
                
            )
        case 2: 
            return(
                <div className="container">
                    <div style={{position:"absolute", top:"20%", width:"10%"}}>
                        <Sidebar2 step={step}/>
                    </div>
                    <div style={{position:"absolute", top:"20%", left:"30%"}}>
                        <Education 
                            education = {education}
                            institute = {institute}
                            history = {history}
                            treatment = {treatment}
                            teacherFeedback = {teacherFeedback}
                            teacherFeedback1 = {teacherFeedback1}
                        />
                        </div>
                        <div style={{position:"absolute", top:"45%", left:"30%"}}>
                            <TextField
                                id="eduFeedback"
                                onChange = {onChange1}
                                label="제언사항"
                                multiline
                                rows={4}
                                variant="outlined"
                                style={{width:"400px"}}
                                value = {eduFeedback}
                            />
                        </div>
                        <button style={{position:"absolute", top:"65%", left:"40%"}}
                        onClick={onClick}>
                            Continue
                        </button>
                </div>
            )
        
        case 3: 
            return(
                <div className="container">
                    <div style={{position:"absolute", top:"20%", width:"10%"}}>
                        <Sidebar2 step={step}/>
                    </div>
                    <div style={{position:"absolute", top:"20%", left:"30%"}}>
                        <Development 
                            walkingAge = {walkingAge}
                            speakingAge = {speakingAge}
                            speakingAgeSentence = {speakingAgeSentence}
                            developmentProblem = {developmentProblem}
                            developmentProblem1 = {developmentProblem1}
                            muscleProblem = {muscleProblem}
                            muscleProblem1 = {muscleProblem1}
                        />
                        </div>
                        <div style={{position:"absolute", top:"45%", left:"30%"}}>
                            <TextField
                                id="devFeedback"
                                onChange = {onChange2}
                                label="제언사항"
                                multiline
                                rows={4}
                                variant="outlined"
                                style={{width:"400px"}}
                                value = {devFeedback}
                            />
                        </div>
                        <button style={{position:"absolute", top:"65%", left:"40%"}}
                        onClick={onClick}>
                            Continue
                        </button>
                </div>
            )

        case 4: 
            return (
                <div className="container">
                    <div style={{position:"absolute", top:"20%", width:"10%"}}>
                        <Sidebar2 step={step}/>
                    </div>
                    <div style={{position:"absolute", top:"20%", left:"30%"}}>
                        <Illness 
                            illnessAtBirth = {illnessAtBirth}
                            illnessAtBirth1 = {illnessAtBirth1}
                            illness = {illness}
                            illness1 = {illness1}
                            surgery = {surgery}
                            surgery1 = {surgery1}
                            medication = {medication}
                            medication1 = {medication1}
                        />
                        </div>
                        <div style={{position:"absolute", top:"45%", left:"30%"}}>
                            <TextField
                                id="illFeedback"
                                onChange = {onChange3}
                                label="제언사항"
                                multiline
                                rows={4}
                                variant="outlined"
                                style={{width:"400px"}}
                                value = {illFeedback}
                            />
                        </div>
                        <button style={{position:"absolute", top:"65%", left:"40%"}}
                        onClick={onClick}>
                            Continue
                        </button>
                </div>
            ) 

        case 5: 
            return (
                <div className="container">
                    <div style={{position:"absolute", top:"20%", width:"10%"}}>
                        <Sidebar2 step={step}/>
                    </div>
                    <div style={{position:"absolute", top:"20%", left:"30%"}}>
                        <Family 
                            familyHistory = {familyHistory}
                            familyMember = {familyMember}
                        />
                        </div>
                        <div style={{position:"absolute", top:"45%", left:"30%"}}>
                            <TextField
                                id="famFeedback"
                                onChange = {onChange4}
                                label="제언사항"
                                multiline
                                rows={4}
                                variant="outlined"
                                style={{width:"400px"}}
                                value = {famFeedback}
                            />
                        </div>
                        <button style={{position:"absolute", top:"65%", left:"40%"}}
                        onClick={onClick}>
                            Continue
                        </button>
                </div>
            )

        case 6: 
            return(
                <div className="container">
                    <div style={{position:"absolute", top:"20%", width:"10%"}}>
                        <Sidebar2 step={step}/>
                    </div>
                    <div style={{position:"absolute", top:"20%", left:"30%"}}>
                        <NWRSR 
                            
                        />
                        </div>
                        <div style={{position:"absolute", top:"45%", left:"30%"}}>
                            <TextField
                                id="nwrFeedback"
                                onChange = {onChange5}
                                label="제언사항"
                                multiline
                                rows={4}
                                variant="outlined"
                                style={{width:"400px"}}
                                value = {nwrFeedback}
                            />
                        </div>
                        <button style={{position:"absolute", top:"65%", left:"40%"}}
                        onClick={onClick}>
                            Continue
                        </button>
                </div>
            )

            case 7: 
                return(
                    <div className="container">
                        <div style={{position:"absolute", top:"20%", width:"10%"}}>
                            <Sidebar2 step={step}/>
                        </div>
                        
                        <div style={{position:"absolute", top:"45%", left:"30%"}}>
                            <TextField
                                id="ovrFeedback"
                                onChange = {onChange6}
                                label="제언사항"
                                multiline
                                rows={4}
                                variant="outlined"
                                style={{width:"400px"}}
                                value = {ovrFeedback}
                            />
                            </div>
                            <button style={{position:"absolute", top:"65%", left:"40%"}}
                            onClick={onClick}>
                                Submit
                            </button>
                    </div>
                )

        default: 
            return(
                <div style={{position:"absolute", top:'50%', left:'50%'}}>
                    평가완료
                </div>
                
            )

    }
        

}


