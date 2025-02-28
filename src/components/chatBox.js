import "./chatBox.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain } from "@fortawesome/free-solid-svg-icons"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"

const ChatBox = () => {
    const [outGoingMessage, setOutgoingMessage] = useState("")

    const handleMessage = (e) => {
        sessionStorage.setItem("out-going",e.target.value)
    }

    const fetchMessage = () => {
        const msg = sessionStorage.getItem("out-going")
        setOutgoingMessage(msg)
    }

    return (
        <div className="container chat-box-container d-flex flex-column justify-content-between bg-none rounded-4">
            <div className="d-flex flex-column justify-content-start align-items-start chat-box-child">
                <div className="d-flex p-3 align-items-start rounded-5">
                    <div>
                        <FontAwesomeIcon size="xl" className="bg-warning p-2 m-3 rounded-5 text-light text-right" icon={faBrain}/>
                    </div>
                    <div className="bg-light p-2 rounded-4 m-1 shadow">
                        <p className="p-3">Hello, Welcome, ZenConnect is a digital platform dedicated to fostering mental wellness through accessible resources, professional support, and a compassionate community. Our goal is to break the stigma around mental health and provide a safe space where individuals can seek help, learn, and grow.</p>
                    </div>
                </div>
                <div className="w-100">
                    {!!outGoingMessage && 
                    <div className="d-flex chat-user">
                        <div className="bg-secondary shadow text-white p-2 rounded-4 m-1">
                            <p className="p-3">{outGoingMessage}</p>
                        </div>
                        <FontAwesomeIcon size="xl" className="bg-secondary p-2 m-3 rounded-5 text-light" icon={faFaceSmile}/>
                    </div>}                   
                </div>
            </div>
            <div className="row m-3 align-items-center mx-auto w-75">
                <div className="col-9">
                    <FloatingLabel className="w-100 text-secondary" controlId="floatingTextarea2" label="How are you feeling today?">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            className="bg-light text-dark"
                            onChange={handleMessage}
                        />
                    </FloatingLabel>
                </div>
                <div className="col-3">
                    <Button onClick={fetchMessage} variant="success" size="md" className="shadow-sm fw-bold rounded-5">
                        <FontAwesomeIcon icon={faBrain} className="text-light"/>
                        <span className="m-1 text-light">Get Help</span> 
                    </Button>  
                </div>
            </div>
        </div>
    )
}

export default ChatBox