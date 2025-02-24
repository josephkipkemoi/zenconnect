import { faHireAHelper } from "@fortawesome/free-brands-svg-icons"
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import { faCross } from "@fortawesome/free-solid-svg-icons"
import { faBrain } from "@fortawesome/free-solid-svg-icons/faBrain"
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons/faHeartCirclePlus"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card, FloatingLabel, Form } from "react-bootstrap"

const LandingMessageComponent = () => {
    return(
        <Card className="m-4 border-0 text-center card-box shadow">
            <Card.Body className="bg-light rounded">
            <Card.Title>Mental Health</Card.Title>
                Your mental health is our main concern
                <hr/>
                <FloatingLabel controlId="floatingTextarea2" label="How are you feeling today?">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Button variant="primary" size="md" className="m-2 shadow-sm">
                    <FontAwesomeIcon icon={faBrain} className="text-light"/>
                    <span className="m-1">Get Help</span> 
                </Button>
            </Card.Body>
        </Card>
    )
}

const LandingSupportComponent = () => {
    return (
        <div className="d-sm-flex justify-content-center m-2">
            <Card className="m-2 border-0">
                <Card.Body className="shadow-sm bg-secondary text-white">
                    <Card.Title className="text-center">
                        <div>
                            <FontAwesomeIcon className="m-3" size="xl" icon={faHeartCirclePlus} />
                        </div>
                         <span>Therapy Sessions </span>      
                    </Card.Title>
                    <Card.Body>Some message on Therapy sessions</Card.Body>
                </Card.Body>
            </Card>
            <Card className="m-2 border-0 bg-primary text-white">
                <Card.Body className="shadow-sm">
                    <Card.Title className="text-center">
                        <div>
                            <FontAwesomeIcon className="m-3" size="xl" icon={faFaceSmile} />
                        </div>
                        <span>Mood Tracking</span>
                    </Card.Title>
                    <Card.Body>Some message on mood tracking</Card.Body>
                </Card.Body>
            </Card>
            <Card className="m-2 border-0 bg-success text-white">
                <Card.Body className="shadow-sm">
                    <Card.Title className="text-center">
                        <div className="svg-icon">
                            <FontAwesomeIcon className="m-3" size="xl" icon={faCross} />
                        </div>
                        <span>Mood Support</span>
                    </Card.Title>
                    <Card.Body>Some message on mood support</Card.Body>
                </Card.Body>
            </Card>
        </div>
    )
}

export {
    LandingMessageComponent,
    LandingSupportComponent
}