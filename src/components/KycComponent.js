import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

const KycComponent = () => {
    let [active, setActive] = useState(true)

    const submitForm = () => {
        setActive(false)
    }
    return (
        <Modal show={active}>
            <Modal.Header className="d-flex justify-content-center">
                <h1 >Quick One!</h1>
            </Modal.Header>
            <Modal.Body>
                <p><em>Please state your age-group to get personalized help.</em></p>
                <Form>
                    <div className="d-flex align-content-center">
                        <Form.Check id="age-group-1" className="m-2"></Form.Check>
                        <Form.Label htmlFor="age-group-1" className="m-2">13-19</Form.Label>
                    </div>
                    <div className="d-flex align-content-center">
                        <Form.Check id="age-group-2" className="m-2"></Form.Check>
                        <Form.Label htmlFor="age-group-2" className="m-2">20-35</Form.Label>
                    </div>
                    <div className="d-flex align-content-center">
                        <Form.Check id="age-group-3" className="m-2"></Form.Check>
                        <Form.Label htmlFor="age-group-3" className="m-2">36-60</Form.Label>
                    </div>
                    <div className="d-flex align-content-center">
                        <Form.Check id="age-group-4" className="m-2"></Form.Check>
                        <Form.Label htmlFor="age-group-4" className="m-2">61+</Form.Label>
                    </div>
                    <p><em>Please choose preferred language</em></p>
                    <div className="d-flex align-content-center">
                        <Form.Check id="lang-group-1" className="m-2"></Form.Check>
                        <Form.Label htmlFor="lang-group-1" className="m-2">English</Form.Label>
                    </div>
                    <div className="d-flex align-content-center">
                        <Form.Check id="lang-group-2" className="m-2"></Form.Check>
                        <Form.Label htmlFor="lang-group-2" className="m-2">Kiswahili</Form.Label>
                    </div>
                    <Button variant="primary" onClick={submitForm} >Continue</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default KycComponent