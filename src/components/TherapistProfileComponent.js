import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card, Container } from "react-bootstrap"
import therapistData from "../data/therapists.json"

const TherapistProfileComponent = () => {
    const { 
        gbv_therapists: {gbv_title, gbv_data}, 
        marriage_therapists: {marriage_title, marriage_data}, 
        youth_therapists: {youth_title, youth_data} 
    } = therapistData
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
                                            <Button variant="primary" className="d-flex align-items-center m-2">
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
                                            <Button variant="primary" className="d-flex align-items-center m-2">
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
                                            <Button variant="primary" className="d-flex align-items-center m-2">
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
        </Container>
    )
}

export default TherapistProfileComponent