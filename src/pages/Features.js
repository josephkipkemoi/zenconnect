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
        <Row>
          <Col md={4} className="mb-4">
            <Card className="bg-success text-white m-1" style={{ height: "400px" }}>
              <Card.Img
                src="https://media.istockphoto.com/id/1474791776/photo/multi-racial-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?s=612x612&w=0&k=20&c=IWQXEQBGY2uyyVleF5i57YOYnK6JbecDslY-4MQIyXI="
                alt="youth-poster"
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>Youth</Card.Title>
                  <Card.Text>
                    We offer guidance to youth free of charge
                  </Card.Text>
                </div>
                <div className="mt-auto">
                  <Button className="shadow d-flex align-items-center" variant="secondary" style={{ width: "100%" }}>
                    <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                    Get Assistance
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="bg-success text-white m-1" style={{ height: "400px" }}>
              <Card.Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQP3VoM_YCmgZ5lEVcTmatOD9X6J3CQopteg&s"
                alt="youth-poster"
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>Gender-based violence survivors</Card.Title>
                  <Card.Text>
                    Guidance on gender-based violence
                  </Card.Text>
                </div>
                <div className="mt-auto">
                  <Button className="shadow d-flex align-items-center" variant="secondary" style={{ width: "100%" }}>
                    <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                    Get Assistance
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="bg-success text-white m-1" style={{ height: "400px" }}>
              <Card.Img
                src="https://nvpc.org.sg/wp-content/uploads/2020/11/low-income-cover.png"
                alt="youth-poster"
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>Low-income earners</Card.Title>
                  <Card.Text>
                    We offer financial assistance to low-income earners
                  </Card.Text>
                </div>
                <div className="mt-auto">
                  <Button className="shadow d-flex align-items-center" variant="secondary" style={{ width: "100%" }}>
                    <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                    Get Assistance
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="bg-success text-white m-1" style={{ height: "400px" }}>
              <Card.Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtFGa3Rxzptsf9quIQ99Q3eNYeWezHhzHAQ&s"
                alt="youth-poster"
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>Rural & Marginalized Communities</Card.Title>
                  <Card.Text>
                   Support to rural and marginalized communities
                  </Card.Text>
                </div>
                <div className="mt-auto">
                  <Button className="shadow d-flex align-items-center" variant="secondary" style={{ width: "100%" }}>
                    <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                    Get Assistance
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="bg-success text-white m-1" style={{ height: "400px" }}>
              <Card.Img
                    src="data:image/jpeg;base64,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"
                alt="youth-poster"
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>Free Peer Support</Card.Title>
                  <Card.Text>
                    We offer free peer support to those in need
                  </Card.Text>
                </div>
                <div className="mt-auto">
                  <Button className="shadow d-flex align-items-center" variant="secondary" style={{ width: "100%" }}>
                    <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                    Get Assistance
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="bg-success text-white m-1" style={{ height: "400px" }}>
              <Card.Img
                src="https://www.iesalc.unesco.org/sites/default/files/styles/paragraph_medium_desktop/public/2024-11/MicrosoftTeams-image-2-660x400.png.jpg?itok=VWGQtDqg"
                alt="youth-poster"
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>Mental Health Support</Card.Title>
                  <Card.Text>
                    We offer mental health support to those in need
                  </Card.Text>
                </div>
                <div className="mt-auto">
                  <Button className="shadow d-flex align-items-center" variant="secondary" style={{ width: "100%" }}>
                    <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                    Get Assistance
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="bg-success text-white m-1" style={{ height: "400px" }}>
              <Card.Img
                src="https://media.istockphoto.com/id/1441979374/photo/medical-team-meeting.jpg?s=612x612&w=0&k=20&c=2DM74ZVh8bv4hS5lbTKTnbozb9pR6-QeIk5zf2SFdoo="
                alt="youth-poster"
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>Education and Training</Card.Title>
                  <Card.Text>
                    We offer education and training to those in need
                  </Card.Text>
                </div>
                <div className="mt-auto">
                  <Button className="shadow d-flex align-items-center" variant="secondary" style={{ width: "100%" }}>
                    <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                    Get Assistance
                  </Button>
                </div>
 </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="bg-success text-white m-1" style={{ height: "400px" }}>
              <Card.Img
                src="https://media.istockphoto.com/id/506351726/photo/recruiter-advertising-for-job-vacancies-searching-candidates-to-hire.jpg?s=612x612&w=0&k=20&c=JNtjXENGX7igzXRDCaifzEcRox2FCUPzF0hptTK3dRw="
                alt="youth-poster"
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>Employment Opportunities</Card.Title>
                  <Card.Text>
                    We offer employment opportunities to those in need
                  </Card.Text>
                </div>
                <div className="mt-auto">
                  <Button className="shadow d-flex align-items-center" variant="secondary" style={{ width: "100%" }}>
                    <FontAwesomeIcon icon={faHeartCirclePlus} className="m-1" />
                    Get Assistance
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
            <FooterComponent/>
        </Container>
    )
}

export default Features
