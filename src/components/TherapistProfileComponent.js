import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card, Container, Modal } from "react-bootstrap"
import therapistData from "../data/therapists.json"
import { useState } from "react"
import axios from "axios"

const API_URL = process.env.REACT_APP_BACKEND_URL

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
        <Card className="border-0 shadow rounded-5">
        <Card.Body>
            <Card.Title className="m-3">{gbv_title}</Card.Title>
        </Card.Body>
        <div className="d-sm-flex">
            {gbv_data.map((data, key) => {
                    const { therapist_name, image_url, description } = data
                    return (
                        <div key={key} className="therapist-profile d-sm-flex">                      
                                <Card className="m-3 border-0 shadow rounded-5">
                                    <Card.Body className="d-flex flex-column justify-content-between">
                                        <div className="d-flex justify-content-center rounded-5">
                                            <img className="rounded-5 text-center img-fluid" src={image_url} alt="doctor"/>
                                        </div>
                                        <Card.Title>
                                            {therapist_name}
                                            <hr/>
                                        </Card.Title>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                        <Button onClick={handleAppointment} variant="primary" className="d-flex justify-content-center rounded-4 shadow-sm">
                                            <FontAwesomeIcon className="m-1" icon={faCalendarCheck}/>
                                            <span >Book Appointment</span>
                                        </Button>
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
                        <div key={key} className="therapist-profile d-sm-flex">                      
                        <Card className="m-3 border-0 shadow rounded-5">
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div className="d-flex justify-content-center">
                                    <img className="rounded-5 text-center" src={image_url} alt="doctor"/>
                                </div>
                                <Card.Title>
                                    {therapist_name}
                                    <hr/>
                                </Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Button onClick={handleAppointment} variant="primary" className="d-flex justify-content-center rounded-4 shadow-sm">
                                    <FontAwesomeIcon className="m-1" icon={faCalendarCheck}/>
                                    <span >Book Appointment</span>
                                </Button>
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
                        <div key={key} className="therapist-profile d-sm-flex">                      
                                <Card className="m-3 border-0 shadow rounded-5">
                                    <Card.Body className="d-flex flex-column justify-content-between">
                                        <div className="d-flex justify-content-center">
                                            <img className="rounded-5 text-center" src={image_url} alt="doctor"/>
                                        </div>
                                        <Card.Title>
                                            {therapist_name}
                                            <hr/>
                                        </Card.Title>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                        <Button onClick={handleAppointment} variant="primary" className="d-flex justify-content-center rounded-4 shadow-sm">
                                            <FontAwesomeIcon className="m-1" icon={faCalendarCheck}/>
                                            <span >Book Appointment</span>
                                        </Button>
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
    const [errs, setErrs] = useState([])
    const [formData, setFormData] = useState({
        full_name: "",
        phone_number: "",
        date_available: ""
    })

    const { full_name, phone_number, date_available } = formData

    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${API_URL}/api/bookTherapy?full_name=${full_name}&phone_number=${phone_number}&date_availeble=${date_available}`)
            if(res.status === 200) {
                alert("A therapist will reach out to you as soon as possible")
                setOpenModal(false)
            }
        } catch (error) {
            const { message, status } = error.toJSON()
            if(status === 400) {
                error.response.data.errors?.map(el => setErrs([el.msg]))
                return
            }
            setErrs([message])
        }
    }

    const handleChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClose = () => setOpenModal(false)

    return (
        <Modal show={openModal}>
            <Modal.Body>
                <Modal.Header>Please fill form to book an appointment</Modal.Header>
                <Modal.Body>
                    {errs.length > 0 && errs.map((val, key) => <span className="d-block alert alert-danger mt-3 mb-3" key={key} >{val}</span>)}
                    <div className="mb-3"> 
                        <label htmlFor="full_name" className="mb-3">Full name: </label>
                        <input id="full_name" name="full_name" onChange={handleChange} className="form-control" placeholder="Please enter your full name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone_number" className="mb-3">Phone number: </label>
                        <input id="phone_number" name="phone_number" onChange={handleChange} className="form-control" placeholder="Please enter your phone number" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="mb-3">Date available: </label>
                        <input id="date" onChange={handleChange} name="date_available" className="form-control" type="date" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button variant="dark" className="w-100 m-2 text-center" onClick={handleClose}>
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