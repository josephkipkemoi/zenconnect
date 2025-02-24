import { Container } from "react-bootstrap"
import HeaderComponent from "../components/header"
import FooterComponent from "../components/footer"
import AboutUsComponent from "../components/aboutUs"

const AboutUs = () => {
    return (
        <Container>
            <HeaderComponent/>
            <AboutUsComponent/>
            <FooterComponent/>
        </Container>
    )
}

export default AboutUs