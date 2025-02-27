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
        <Modal show={active}>
            <Modal.Header className="d-flex justify-content-center">
                <h1 >Quick One!</h1>
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
        <div>
                <p><em>Please state your age-group to get personalized help.</em></p>
                <div className="d-flex align-content-center">
                    <Form.Check id="age-group-1" onChange={handleCheck}  value="13-19" className="m-2"></Form.Check>
                    <Form.Label htmlFor="age-group-1" className="m-2">13-19</Form.Label>
                </div>
                <div className="d-flex align-content-center">
                    <Form.Check id="age-group-2" onChange={handleCheck}  value="20-35" className="m-2"></Form.Check>
                    <Form.Label htmlFor="age-group-2" className="m-2">20-35</Form.Label>
                </div>
                <div className="d-flex align-content-center">
                    <Form.Check id="age-group-3" onChange={handleCheck}  value="36-60" className="m-2"></Form.Check>
                    <Form.Label htmlFor="age-group-3" className="m-2">36-60</Form.Label>
                </div>
                <div className="d-flex align-content-center">
                    <Form.Check id="age-group-4" onChange={handleCheck}  value="61+" className="m-2"></Form.Check>
                    <Form.Label htmlFor="age-group-4" className="m-2">61+</Form.Label>
                </div>
        </div>
    )
}

const StepTwoComponent = ({ setActive }) => {
    const submitForm = () => {
        sessionStorage.setItem("visited_user", true)
        setActive(false)
    }

    const handleCheck = (e) => {
        sessionStorage.setItem("preff-lang",e.target.value)
    }

    return (
        <div>
            <p><em>Please choose preferred language</em></p>
                <div className="d-flex align-content-center">
                    <Form.Check onChange={handleCheck} value="english" id="lang-group-1" className="m-2"></Form.Check>
                    <Form.Label htmlFor="lang-group-1" className="m-2">English</Form.Label>
                </div>
                <div className="d-flex align-content-center">
                    <Form.Check onChange={handleCheck} value="kiswahili" id="lang-group-2" className="m-2"></Form.Check>
                    <Form.Label htmlFor="lang-group-2" className="m-2">Kiswahili</Form.Label>
                </div>
                <Button variant="primary" onClick={submitForm} >Submit</Button>
        </div>
    )
}

export default KycComponent