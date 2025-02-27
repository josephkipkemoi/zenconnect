import { Card } from "react-bootstrap"

const AboutUsComponent = () => {
    return (
        <Card>
            <Card.Header className="bg-primary text-white">
                <h2>About Us</h2>
            </Card.Header>
            <Card.Body>
            <p style={{ lineHeight: '1.6' }}>
                    ZenConnect is a digital platform dedicated to fostering mental wellness through accessible resources,
                    professional support, and a compassionate community. Our goal is to break the stigma around mental health
                    and provide a safe space where individuals can seek help, learn, and grow.
                </p>

                <h5>Our Mission</h5>
                <p>
                    To empower individuals on their mental health journey by providing reliable support,
                    expert resources, and a judgment-free community that prioritizes well-being.
                </p>

                <h5>Our Vision</h5>
                <p>
                    A world where mental health is prioritized, understood,
                    and supported—where everyone has access to the tools they need to live a balanced and fulfilling life.
                </p>

                <h5>Core Values</h5>
                <ul>
                    <li>Compassion – We foster a judgment-free and empathetic community.</li>
                    <li>Accessibility – Mental health support should be available to all.</li>
                    <li>Confidentiality – We ensure a safe and secure platform for users.</li>
                    <li>Innovation – Leveraging technology to create effective mental health solutions.</li>
                    <li>Empowerment – Encouraging self-growth and mental resilience.</li>
                </ul>

                <h5>Our Story</h5>
                <p>
                    (Share the journey behind ZenConnect—why it was created, personal experiences,
                    or market needs that inspired its development.)
                </p>

                <h5>Meet the Team</h5>
                <p>
                    Introduce the founders, mental health professionals, and key members behind ZenConnect.
                </p>

                <h5>What We Offer</h5>
                <ul>
                    <li>Therapist Directory – Connect with licensed mental health professionals.</li>
                    <li>Self-Help Resources – Articles, guided meditations, and mental health exercises.</li>
                    <li>Community Support – Forums and support groups for shared experiences.</li>
                    <li>Mood Tracking – Personalized tools to track emotional well-being.</li>
                    <li>Live Sessions & Webinars – Expert-led discussions on mental wellness topics.</li>
                </ul>

                <h5>Testimonials & Success Stories</h5>
                <p>
                    Share real stories from users who have benefited from ZenConnect.
                </p>

                <h5>Get Involved</h5>
                <ul>
                    <li>Volunteer opportunities</li>
                    <li>Mental health advocacy programs</li>
                    <li>Partnerships and collaborations</li>
                </ul>

                <h5>Contact Us</h5>
                <p>
                    Provide contact details, social media links, and customer support info.
                </p>
            </Card.Body>
        </Card>
    )
}

export default AboutUsComponent