import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import AnshPP from "../images/ansh_pp.png"
import JosephPP from "../images/joseph_pp.png"
import EshaPP from "../images/esha_pp.png"
import NatashaPP from "../images/natasha_pp.png"
import SalehPP from "../images/saleh_pp.png"
import JanetPP from "../images/janet_pp.png"

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
                   <b>ZenConnect</b>  was created to bring clarity to digital communication.
                    In a world of distractions, we envisioned a more mindful way to connect.
                    Our platform simplifies interactions while promoting balance and purpose.
                    More than just a tool, it’s a movement toward digital harmony.
                    We’re redefining how technology enhances, rather than disrupts, life and mental health awareness.
                </p>
                <hr className="text-info mt-4 mb-4"/>
                <h5 className="fw-bold mb-3">Meet the Team</h5>
                <div className="row justify-content-center">
                    <Card className="col-sm-3 m-2 shadow border-0 p-2">
                        <Card.Body>
                            <img src={EshaPP} alt="esha_patel" className="img-fluid rounded shadow-sm"/>
                            <h6 className="fw-bold mt-3">Esha Patel</h6>
                            <p>Team Leader</p>
                            <p>
                                Esha Patel is a graduate with a Diploma in Computer Science and a Full-Stack Developer
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
                            <img src={NatashaPP} alt="natasha_karanja" className="img-fluid rounded shadow-sm"/>
                            <h6 className="fw-bold mt-3">Natasha Karanja</h6>
                            <p>Deputy Team Leader</p>
                            <p>
                                A passionate full-stack developer student with a strong drive for creativity and innovation. Training in both front-end and back-end technologies, always eager to learn, solve complex problems, and build user-friendly, efficient, and visually appealing applications.
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
                            <img src={JosephPP} alt="joseph_kipkemoi" className="img-fluid rounded shadow-sm"/>
                            <h6 className="fw-bold mt-3">Joseph Kipkemoi</h6>
                            <p>Software Developer</p>
                            <p>
                               Joseph is a Software Developer who has specialized in Javascript, PHP and Go
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
                            <img src={AnshPP} alt="ansh_patel" className="img-fluid rounded shadow-sm"/>
                            <h6 className="fw-bold mt-3">Ansh Patel</h6>
                            <p>Technical Engineer</p>
                            <p>
                                Ansh is technical engineer who combines expert problem-solving skills with in-depth technical knowledge to design, implement, and maintain innovative solutions. 
                            </p>
                        </Card.Body>
                        <Card.Footer className="border-0 d-flex">
                            <a 
                            target="_blank"
                            href=" https://www.linkedin.com/in/ansh-patel-245513337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  
                            className="btn btn-dark m-1"
                            >
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a target="_blank" href="https://github.com/Patel-anshj1022" className="btn btn-dark m-1">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
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
                            <img src={SalehPP} alt="saleh_hassan" className="img-fluid rounded shadow-sm"/>
                            <h6 className="fw-bold mt-3">Saleh Hassan</h6>
                            <p>Project Manager</p>
                            <p>
                               Saleh is the Project Manager...
                            </p>
                        </Card.Body>
                        <Card.Footer className="border-0 d-flex">
                            <a target="_blank" href="https://www.linkedin.com/in/saleh-nasser-429513337" className="m-1 btn btn-dark">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a target="_blank" href="https://github.com/M-Saleh-N" className="m-1 btn btn-dark">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
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
                            <img src={JanetPP} alt="janet_rose" className="img-fluid rounded shadow-sm"/>
                            <h6 className="fw-bold mt-3">Janet Rose</h6>
                            <p>Head of Marketing</p>
                            <p>
                               Janet is the head of Marketing and a Front End Software Developer
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