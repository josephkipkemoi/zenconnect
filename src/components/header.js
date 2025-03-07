import { faBook, faHome, faKitMedical, faMap, faPeopleGroup, faSignHanging, faSquarePhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./header.css"
import Logo from "../images/logo.png"

const HeaderComponent = () => {
    let [isAuth, setIsAuth] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setIsAuth(false)
    }

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("token")
        if(isAuthenticated) {
            setIsAuth(true)
        }
    }, [isAuth])

    return (
        <header>
            <nav>
                <Navbar expand="lg" className="bg-body-tertiary nav-bar-main shadow">
                        <Navbar.Brand  href="/">
                            <img src={Logo} alt="ZenConnect_Logo" className="img-fluid justify-content-center"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/" className="nav-link nav-link-custom d-flex align-items-center">
                                    <FontAwesomeIcon className="m-1" icon={faHome} />
                                    Home
                                </Link>                           
                                <Link to="/about-us" className="nav-link nav-link-custom d-flex align-items-center">
                                    <FontAwesomeIcon className="m-1" icon={faMap} />
                                    <span>About</span>
                                </Link>
                                <Link to="/features" className="d-flex nav-link-custom align-items-center nav-link">
                                    <FontAwesomeIcon className="m-1" icon={faSignHanging} />
                                    Features
                                </Link>
                                <Link to="/therapists" className="nav-link nav-link-custom d-flex align-items-center">
                                    <FontAwesomeIcon className="m-1" icon={faKitMedical} />
                                    Therapists
                                </Link>                         
                                <Link to="/resources" className="d-flex nav-link-custom align-items-center nav-link">
                                    <FontAwesomeIcon className="m-1" icon={faBook} />
                                    Resources
                                </Link>
                                <Link to="/community" className="d-flex nav-link-custom align-items-center nav-link">
                                    <FontAwesomeIcon className="m-1" icon={faPeopleGroup} />
                                    Community
                                </Link>
                                <Link to="/contact-us" className="d-flex nav-link-custom  align-items-center nav-link">
                                    <FontAwesomeIcon className="m-1" icon={faSquarePhone} />
                                    Contact
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </nav>
            <div className="d-flex justify-content-end m-3">
                { !isAuth ? 
                    <>    
                        <Link className="text-right nav-link btn m-1" to="/login">Login</Link>
                        <Link className="text-right nav-link btn m-1" to="/register">Register</Link>
                    </> :
                    <Button variant="dark" onClick={handleLogout}>Logout</Button>}
          
            </div>
        </header>
    )
}

export default HeaderComponent