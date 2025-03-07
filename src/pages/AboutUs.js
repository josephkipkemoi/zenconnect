import { Container } from "react-bootstrap"
import HeaderComponent from "../components/header"
import FooterComponent from "../components/footer"
import AboutUsComponent from "../components/aboutUs"

const AboutUs = () => {
    return (
        <div>
            <HeaderComponent/>
            <AboutUsComponent/>
            <FooterComponent/>
        </div>
    )
}

export default AboutUs