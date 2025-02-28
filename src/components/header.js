import { faBook, faHome, faKitMedical, faMap, faPeopleGroup, faSignHanging, faSquarePhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const HeaderComponent = () => {
    return (
        <header>
            <nav className="d-sm-flex align-items-center justify-content-center m-3 w-100">
                <Navbar expand="lg" className="bg-body-tertiary">
                        <Navbar.Brand href="/">
                                <h1 className="m-2 header">
                                    ZenConnect
                                </h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link d-flex align-items-center">
                                <FontAwesomeIcon className="m-1" icon={faHome} />
                                Home
                            </Link>                           
                            <Link to="/about-us" className="nav-link w-100 d-flex align-items-center">
                                <FontAwesomeIcon className="m-1" icon={faMap} />
                                <span>About</span>
                            </Link>
                            <Link to="/features" className="d-flex align-items-center nav-link">
                                <FontAwesomeIcon className="m-1" icon={faSignHanging} />
                                Features
                            </Link>
                            <Link to="/therapists" className="nav-link d-flex align-items-center">
                                <FontAwesomeIcon className="m-1" icon={faKitMedical} />
                                Therapists
                             </Link>                         
                            <Link to="/resources" className="d-flex align-items-center nav-link">
                                <FontAwesomeIcon className="m-1" icon={faBook} />
                                Resources
                            </Link>
                            <Link to="/community" className="d-flex align-items-center nav-link">
                                <FontAwesomeIcon className="m-1" icon={faPeopleGroup} />
                                Community
                            </Link>
                            <Link to="/contact-us" className="d-flex w-100 align-items-center nav-link">
                                <FontAwesomeIcon className="m-1" icon={faSquarePhone} />
                                Contact
                            </Link>
                        </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </nav>
            <Container className="d-flex justify-content-end mb-3">
                <Link className="text-right nav-link btn m-1" to="/login">Login</Link>
                <Link className="text-right nav-link btn m-1" to="/register">Register</Link>
            </Container>
        </header>
    )
}

export default HeaderComponent