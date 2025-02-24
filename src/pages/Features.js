import { Button, Card, Container } from "react-bootstrap"
import FooterComponent from "../components/footer"
import HeaderComponent from "../components/header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone"
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons"

const Features = () => {
    return (
        <Container>
            <HeaderComponent/>
            <div className="d-sm-flex justify-content-center">
                <Card className="bg-success text-white m-1">
                    <Card.Body className="d-flex flex-column justify-content-between">
                        <Card.Title>
                            Youth
                        </Card.Title>
                        <Card.Img alt="youth-poster"></Card.Img>
                        <Card.Text>
                            We offer guidance to youth free of charge
                        </Card.Text>
                        <Card.Footer>
                            <Button className="shadow d-flex align-items-center" variant="secondary">
                                <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                                Get Assistance
                            </Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className="bg-success text-white m-1">
                    <Card.Body className="d-flex flex-column justify-content-between">
                        <Card.Title>
                            Gender-based violence survivors
                        </Card.Title>
                        <Card.Img alt="youth-poster"></Card.Img>
                        <Card.Text>
                            We offer guidance to youth free of charge
                        </Card.Text>
                        <Card.Footer>
                            <Button className="shadow d-flex align-items-center" variant="secondary">
                                <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                                Get Assistance
                            </Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className="bg-success text-white m-1">
                    <Card.Body className="d-flex flex-column justify-content-between">
                        <Card.Title>
                            Low-income earners
                        </Card.Title>
                        <Card.Img alt="youth-poster"></Card.Img>
                        <Card.Text>
                            We offer guidance to youth free of charge
                        </Card.Text>
                        <Card.Footer>
                            <Button className="shadow d-flex align-items-center" variant="secondary">
                                <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                                Get Assistance
                            </Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className="bg-success text-white m-1">
                    <Card.Body className="d-flex flex-column justify-content-between">
                        <Card.Title>
                           Rural & Marginalized Communities
                        </Card.Title>
                        <Card.Img alt="youth-poster"></Card.Img>
                        <Card.Text>
                            We offer guidance to youth free of charge
                        </Card.Text>
                        <Card.Footer>
                            <Button className="shadow d-flex align-items-center" variant="secondary">
                                <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                                Get Assistance
                            </Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className="bg-success text-white m-1">
                    <Card.Body className="d-flex flex-column justify-content-between">
                        <Card.Title>
                           Free Peer Support
                        </Card.Title>
                        <Card.Img alt="youth-poster"></Card.Img>
                        <Card.Text>
                            We offer guidance to youth free of charge
                        </Card.Text>
                        <Card.Footer>
                            <Button className="shadow d-flex align-items-center" variant="secondary">
                                <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                                Get Assistance
                            </Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
            <FooterComponent/>
        </Container>
    )
}

export default Features