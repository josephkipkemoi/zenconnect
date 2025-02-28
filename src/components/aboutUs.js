import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const AboutUsComponent = () => {
    return (
        <Card className="border-0 shadow about-us-page">
            <Card.Header className="bg-success text-white p-3 shadow-sm border-0">
                <h2>About Us</h2>
            </Card.Header>
            <Card.Body className="p-4">
                <h5 className="fw-bold mb-3">What is ZenConnect?</h5>
                <p>
                    <b>ZenConnect</b> is a digital platform dedicated to fostering mental wellness through accessible resources,
                    professional support, and a compassionate community. Our goal is to break the stigma around mental health
                    and provide a safe space where individuals can seek help, learn, and grow.
                </p>
                <hr className="text-info mt-4 mb-4"/>
                <div className="row">
                    <div className="col-sm-6">
                        <h5 className="fw-bold mb-3">Our Mission</h5>
                        <p>
                            To empower individuals on their mental health journey by providing reliable support,
                            expert resources, and a judgment-free community that prioritizes well-being.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <h5 className="fw-bold mb-3">Our Vision</h5>
                        <p>
                            A world where mental health is prioritized, understood,
                            and supported—where everyone has access to the tools they need to live a balanced and fulfilling life.
                        </p>
                    </div>
                </div>
                <hr className="text-info mt-4 mb-4"/>
                <h5 className="fw-bold mb-3">Core Values</h5>
                <ul>
                    <li><b>Compassion</b> – We foster a judgment-free and empathetic community.</li>
                    <li><b>Accessibility</b> – We believe mental health support should be available to all.</li>
                    <li><b>Confidentiality</b> – We ensure a safe and secure platform for users.</li>
                    <li><b>Innovation</b> – Leveraging technology to create effective mental health solutions.</li>
                    <li><b>Empowerment</b> – Encouraging self-growth and mental resilience.</li>
                </ul>
                <hr className="text-info mt-4 mb-4"/>
                <h5 className="fw-bold mb-3">Our Story</h5>
                <p>
                    (Share the journey behind ZenConnect—why it was created, personal experiences,
                    or market needs that inspired its development.)
                </p>
                <hr className="text-info mt-4 mb-4"/>
                <h5 className="fw-bold mb-3">Meet the Team</h5>
                <div className="row justify-content-center">
                    <Card className="col-sm-3 m-2 shadow border-0 p-2">
                        <Card.Body>
                            <img src="" alt="esha_patel" className="img-fluid"/>
                            <h6 className="fw-bold">Esha Patel</h6>
                            <p>Team Leader</p>
                            <p>
                                Esha Patel is a graduate with a Diploma in Computer Science
                            </p>                        
                        </Card.Body>
                        <Card.Footer className="border-0 d-flex">
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Button>
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faGithub} />
                            </Button>
                        </Card.Footer>
                    </Card>
                    <Card className="col-sm-3 m-2 shadow border-0 p-2">
                        <Card.Body>
                            <img src="" alt="natasha_karanja" className="img-fluid"/>
                            <h6 className="fw-bold">Natasha Karanja</h6>
                            <p>Deputy Team Leader</p>
                            <p>
                                Natasha is a Full-Stack Developer with great passion in creating web applications
                            </p>
                        </Card.Body>
                        <Card.Footer className="border-0 d-flex">
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Button>
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faGithub} />
                            </Button>
                        </Card.Footer>
                    </Card>
                    <Card className="col-sm-3 m-2 shadow border-0 p-2">
                        <Card.Body>
                            <img src="" alt="joseph_kipkemoi" className="img-fluid"/>
                            <h6 className="fw-bold">Joseph Kipkemoi</h6>
                            <p>Software Developer</p>
                            <p>
                               Joseph is a Software Developer who likes to code 24/7
                            </p>
                        </Card.Body>
                        <Card.Footer className="border-0 d-flex">
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Button>
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faGithub} />
                            </Button>
                        </Card.Footer>
                    </Card>
                    <Card className="col-sm-3 m-2 shadow border-0 p-2">
                        <Card.Body>
                            <img src="" alt="ansh_patel" className="img-fluid"/>
                            <h6 className="fw-bold">Ansh Patel</h6>
                            <p>Technical Engineer</p>
                            <p>
                               Ansh is a Technical Engineer...
                            </p>
                        </Card.Body>
                        <Card.Footer className="border-0 d-flex">
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Button>
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faGithub} />
                            </Button>
                        </Card.Footer>
                    </Card>
                    <Card className="col-sm-3 m-2 shadow border-0 p-2">
                        <Card.Body>
                            <img src="" alt="tilak_patel" className="img-fluid"/>
                            <h6 className="fw-bold">Tilak Patel</h6>
                            <p>Business Analyst</p>
                            <p>
                               Tilak is a Business Analyst...
                            </p>
                        </Card.Body>
                        <Card.Footer className="border-0 d-flex">
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Button>
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faGithub} />
                            </Button>
                        </Card.Footer>
                    </Card>
                    <Card className="col-sm-3 m-2 shadow border-0 p-2">
                        <Card.Body>
                            <img src="" alt="saleh_hassan" className="img-fluid"/>
                            <h6 className="fw-bold">Saleh Hassan</h6>
                            <p>Project Manager</p>
                            <p>
                               Saleh is the Project Manager...
                            </p>
                        </Card.Body>
                        <Card.Footer className="border-0 d-flex">
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Button>
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faGithub} />
                            </Button>
                        </Card.Footer>
                    </Card>
                    <Card className="col-sm-3 m-2 shadow border-0 p-2">
                        <Card.Body>
                            <img src="" alt="akshay_shah" className="img-fluid"/>
                            <h6 className="fw-bold">Akshay Shah</h6>
                            <p>UI/UX Designer</p>
                            <p>
                               Akshay is a UI/UX Designer...
                            </p>
                        </Card.Body>
                        <Card.Footer className="border-0 d-flex">
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Button>
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faGithub} />
                            </Button>
                        </Card.Footer>
                    </Card>
                    <Card className="col-sm-3 m-2 shadow border-0 p-2">
                        <Card.Body>
                            <img src="" alt="janet_rose" className="img-fluid"/>
                            <h6 className="fw-bold">Janet Rose</h6>
                            <p>Head of Marketing</p>
                            <p>
                               Janet is the head of Marketing...
                            </p>
                        </Card.Body>
                        <Card.Footer className="border-0 d-flex">
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Button>
                            <Button variant="dark" className="m-1">
                                <FontAwesomeIcon icon={faGithub} />
                            </Button>
                        </Card.Footer>
                    </Card>
                </div>
                <hr className="text-info mt-4 mb-4"/>
                <h5 className="fw-bold mb-3">What We Offer</h5>
                <ul>
                    <li><b>Therapist Directory</b>– Connect with licensed mental health professionals.</li>
                    <li><b>Self-Help Resources</b> – Articles, guided meditations, and mental health exercises.</li>
                    <li><b>Community Support</b> – Forums and support groups for shared experiences.</li>
                    <li><b>Mood Tracking</b>– Personalized tools to track emotional well-being.</li>
                    <li><b>Live Sessions & Webinars</b> – Expert-led discussions on mental wellness topics.</li>
                </ul>
                <hr className="text-info mt-4 mb-4"/>
                <h5 className="fw-bold mb-3">Testimonials & Success Stories</h5>
                <p>
                    Share real stories from users who have benefited from ZenConnect.
                </p>
                <hr className="text-info mt-4 mb-4"/>
                <h5 className="fw-bold mb-3">Contact us to get involved in:</h5>
                <ul>
                    <li>Volunteer opportunities.</li>
                    <li>Mental health advocacy programs.</li>
                    <li>Partnerships and collaborations.</li>
                </ul>
                <Link className="nav-link text-primary fw-bold mb-4" to="/contact-us">Contact Us</Link>
            </Card.Body>
        </Card>
    )
}

export default AboutUsComponent