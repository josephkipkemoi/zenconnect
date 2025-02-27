import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card, Container, Modal } from "react-bootstrap"
import therapistData from "../data/therapists.json"
import { useState } from "react"

const TherapistProfileComponent = () => {
    let [openModal, setOpenModal] = useState(false)

    const { 
        gbv_therapists: {gbv_title, gbv_data}, 
        marriage_therapists: {marriage_title, marriage_data}, 
        youth_therapists: {youth_title, youth_data} 
    } = therapistData

    const handleAppointment = () => {
        setOpenModal(true)
    }

    return (
        <Container>
        <Card>
        <Card.Body>
            <Card.Title className="m-3">{gbv_title}</Card.Title>
        </Card.Body>
        <div className="d-sm-flex">
            {gbv_data.map((data, key) => {
                    const { therapist_name, image_url, description } = data
                    return (
                        <div key={key} className="d-sm-flex">                      
                                <Card className="m-3 shadow-sm">
                                    <Card.Body>
                                        <div className="d-flex justify-content-center">
                                            <img className="rounded-5 text-center" src={image_url} alt="doctor"/>
                                        </div>
                                        <Card.Title>{therapist_name}</Card.Title>
                                        <hr/>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                        <Card.Footer>
                                            <Button onClick={handleAppointment} variant="primary" className="d-flex align-items-center m-2">
                                                <FontAwesomeIcon className="m-1" icon={faCalendarCheck}/>
                                                Book Appointment
                                            </Button>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                        </div>
                    )
                })}
        </div>
        <Card.Body>
            <Card.Title className="m-3">{marriage_title}</Card.Title>
        </Card.Body>
        <div className="d-sm-flex">
            {marriage_data.map((data, key) => {
                    const { therapist_name, image_url, description } = data
                    return (
                        <div key={key} className="d-sm-flex">                      
                                <Card className="m-3 shadow-sm">
                                    <Card.Body>
                                        <div className="d-flex justify-content-center">
                                            <img className="rounded-5 text-center" src={image_url} alt="doctor"/>
                                        </div>
                                        <Card.Title>{therapist_name}</Card.Title>
                                        <hr/>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                        <Card.Footer>
                                            <Button onClick={handleAppointment} variant="primary" className="d-flex align-items-center m-2">
                                                <FontAwesomeIcon className="m-1" icon={faCalendarCheck}/>
                                                Book Appointment
                                            </Button>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                        </div>
                    )
                })}
        </div>
        <Card.Body>
            <Card.Title className="m-3">{youth_title}</Card.Title>
        </Card.Body>
        <div className="d-sm-flex">
            {youth_data.map((data, key) => {
                    const { therapist_name, image_url, description } = data
                    return (
                        <div key={key} className="d-sm-flex">                      
                                <Card className="m-3 shadow-sm">
                                    <Card.Body>
                                        <div className="d-flex justify-content-center">
                                            <img className="rounded-5 text-center" src={image_url} alt="doctor"/>
                                        </div>
                                        <Card.Title>{therapist_name}</Card.Title>
                                        <hr/>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                        <Card.Footer>
                                            <Button variant="primary" onClick={handleAppointment} className="d-flex align-items-center m-2">
                                                <FontAwesomeIcon className="m-1" icon={faCalendarCheck}/>
                                                Book Appointment
                                            </Button>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                        </div>
                    )
                })}
        </div>
        </Card>
        <ModalContainer openModal={openModal} setOpenModal={setOpenModal}/>
        </Container>
    )
}

const ModalContainer = ({ openModal, setOpenModal }) => {

    const handleSubmit = () => {
        alert("A therapist will reach out to you as soon as possible")
        setOpenModal(false)
    }

    return (
        <Modal show={openModal}>
            <Modal.Body>
                <Modal.Header>Please fill form to book an appointment</Modal.Header>
                <Modal.Body>
                    <div className="mb-3"> 
                        <label htmlFor="full_name" className="mb-3">Full name: </label>
                        <input id="full_name" className="form-control" placeholder="Please enter your full name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone_number" className="mb-3">Phone number: </label>
                        <input id="phone_number" className="form-control" placeholder="Please enter your phone number" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="mb-3">Date available: </label>
                        <input id="date" className="form-control" type="date" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button variant="dark" className="w-100 m-2 text-center" onClick={handleSubmit}>
                            Close
                        </Button>  
                        <Button className="w-100 m-2 text-center" onClick={handleSubmit}>
                            Submit
                        </Button>                       
                    </div>                            
                </Modal.Body>
            </Modal.Body>
        </Modal>
    )
}



export default TherapistProfileComponent