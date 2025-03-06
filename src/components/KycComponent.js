import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

const KycComponent = ({ checkTime }) => {
    let [step, setStep] = useState(1)
    let [active, setActive] = useState(checkTime)

    useEffect(() => {
        const visitedUser = () => {
            const visited = sessionStorage.getItem("visited_user")
            return !!visited
        }

        if(checkTime == true && visitedUser() === false) {
            setActive(true)
            return
        }
    }, [checkTime])

    return (
        <Modal show={active} centered>
            <Modal.Header className="d-flex justify-content-center bg-info text-dark fw-bold">
                <h3>
                    Quick one!
                </h3>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {step === 1 &&  <StepOneComponent setActive={setActive} setStep={setStep} />}
                    {step === 2 &&  <StepTwoComponent setActive={setActive}/>}
                </Form>
            </Modal.Body>
        </Modal>
    )
}

const StepOneComponent = ({ setStep }) => {
    const handleCheck = (e) => {
        sessionStorage.setItem("age-group",e.target.value)
        setStep(2)
    }
    return (
        <div className="rounded-5">
                <p><em>Please state your age-group to get personalized help.</em></p>
                <div className="d-flex align-content-center">
                    <Form.Check id="age-group-1" onChange={handleCheck}  value="13-19" className="m-2"></Form.Check>
                    <Form.Label htmlFor="age-group-1" className="m-2">13-19 <small><em>(Teenager)</em></small></Form.Label>
                </div>
                <div className="d-flex align-content-center">
                    <Form.Check id="age-group-2" onChange={handleCheck}  value="20-35" className="m-2"></Form.Check>
                    <Form.Label htmlFor="age-group-2" className="m-2">20-35 <small><em>(Youth)</em></small></Form.Label>
                </div>
                <div className="d-flex align-content-center">
                    <Form.Check id="age-group-3" onChange={handleCheck}  value="36-60" className="m-2"></Form.Check>
                    <Form.Label htmlFor="age-group-3" className="m-2">36-60 <small><em>(Adult)</em></small></Form.Label>
                </div>
                <div className="d-flex align-content-center">
                    <Form.Check id="age-group-4" onChange={handleCheck}  value="61+" className="m-2"></Form.Check>
                    <Form.Label htmlFor="age-group-4" className="m-2">61+ <small><em>(Senior Citizen)</em></small></Form.Label>
                </div>
        </div>
    )
}

const StepTwoComponent = ({ setActive }) => {
    let [errs, setErrs] = useState([])

    const submitForm = () => {
        const lang = sessionStorage.getItem("preff-lang")
        if(!!lang === false) {
            setErrs(["Please pick at least one preffered language."])
            return
        }
        sessionStorage.setItem("visited_user", true)
        setActive(false)
    }

    const handleCheck = (e) => {
        sessionStorage.setItem("preff-lang",e.target.value)
    }

    return (
        <div>
            <p className="mb-3"><em>Please choose preferred language.</em></p>
            {errs.length > 0 && errs.map((val, key) => <small className="d-flex shadow-sm justify-content-center alert alert-info mb-2" key={key} >{val}</small>)}
                <select onChange={handleCheck} className="form-select rounded-5 p-3">
                    <option value="english">English</option>
                    <option value="swahili">Swahili</option>
                    <option value="kikuyu">Kikuyu</option>
                    <option value="luhya">Luhya</option>
                    <option value="kamba">Kamba</option>
                    <option value="dholuo">Luo</option>
                    <option value="maasai">Maasai</option>
                    <option value="somali">Somali</option>
                </select>
                <div className="d-flex justify-content-center mt-3">
                    <Button className="mt-2 shadow rounded-5" variant="primary" onClick={submitForm} >
                        <FontAwesomeIcon icon={faArrowAltCircleRight}  />
                        <span className="m-2">Submit</span>                    
                    </Button>
                </div>             
        </div>
    )
}

export default KycComponent