import { Container, Nav, Navbar } from "react-bootstrap"

const HeaderComponent = () => {
    return (
        <header>
            <nav className="d-sm-flex align-items-center justify-content-center m-3">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                        <h1 className="m-2">ZenConnect</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <Nav.Link href="#link">Features</Nav.Link>
                            <Nav.Link href="#link">Therapists</Nav.Link>
                            <Nav.Link href="#link">Resources</Nav.Link>
                            <Nav.Link href="#link">Community</Nav.Link>
                            <Nav.Link href="#link">Contact Us</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </header>
    )
}

export default HeaderComponent