import { faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import { faCross, faHeartCrack } from "@fortawesome/free-solid-svg-icons"
import { faBrain } from "@fortawesome/free-solid-svg-icons/faBrain"
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons/faHeartCirclePlus"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card } from "react-bootstrap"

import "./landingMessage.css"

const LandingSupportComponent = () => {
    return (
        <div className="d-md-flex justify-content-center mt-5 mb-5  bg-none p-5 m-4 rounded-5 shadow" >
            <Card className="border-0 rounded-5 landing-message-card shadow m-2">
                <Card.Body>
                    <Card.Title className="text-center">
                        <div>
                            <FontAwesomeIcon className="m-3" size="2xl" icon={faHeartCirclePlus} />
                        </div>
                         <h5 className="mt-2 fw-bold">Therapy Sessions </h5>      
                    </Card.Title>
                    <hr className="text-info" />
                    <Card.Body>
                        <p>Using Machine Learning, we have therapist matching systems set to pair you with the most qualified therapists</p>
                    </Card.Body>
                </Card.Body>
            </Card>
            <Card className="border-0 rounded-5 landing-message-card shadow m-2">
                <Card.Body >
                    <Card.Title className="text-center">
                        <div>
                            <FontAwesomeIcon className="m-3" size="2xl" icon={faHeartCrack} />
                        </div>
                        <h5 className="mt-2">Mood Tracking</h5>
                        <hr className="text-info" />
                    </Card.Title>
                    <Card.Body>
                        <p>Using Machine Learning, we have therapist matching systems set to pair you with the most qualified therapists</p>
                    </Card.Body>
                </Card.Body>
            </Card>
            <Card className="border-0 rounded-5 landing-message-card shadow m-2">
                <Card.Body>
                    <Card.Title className="text-center">
                        <div className="svg-icon">
                            <FontAwesomeIcon className="m-3" size="2xl" icon={faCross} />
                        </div>
                        <h5 className="mt-2">Mood Support</h5>
                    </Card.Title>
                    <hr className="text-info" />
                    <Card.Body>
                        <p>Using Machine Learning, we have therapist matching systems set to pair you with the most qualified therapists</p>
                    </Card.Body>
                </Card.Body>
            </Card>
            <Card className="border-0 rounded-5 landing-message-card shadow m-2">
                <Card.Body>
                    <Card.Title className="text-center">
                        <div className="svg-icon">
                            <FontAwesomeIcon className="m-3" size="2xl" icon={faBrain} />
                        </div>
                        <h5 className="mt-2">AI Driven Free Peer Support</h5>
                    </Card.Title>
                    <hr className="text-info" />
                    <Card.Body>
                        <p>Using Machine Learning, we have therapist matching systems set to pair you with the most qualified therapists</p>
                    </Card.Body>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LandingSupportComponent
