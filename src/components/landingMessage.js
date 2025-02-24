import { Button, Card, FloatingLabel, Form } from "react-bootstrap"

const LandingMessageComponent = () => {
    return(
        <Card className="m-4 bg-light border-0 text-center">
            <Card.Body>
            <Card.Title>Mental Health</Card.Title>
                Your mental health is our main concern
                <hr/>
                <FloatingLabel controlId="floatingTextarea2" label="How are you feeling today?">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Button variant="primary" size="lg" className="m-2">
                    Get Help
                </Button>
            </Card.Body>
        </Card>
    )
}

const LandingSupportComponent = () => {
    return (
        <div className="d-sm-flex justify-content-center m-2">
            <Card className="m-1 border-1">
                <Card.Body className="shadow-sm bg-secondary text-white">
                    <Card.Title className="text-center">
                         Therapy Sessions       
                    </Card.Title>
                    <Card.Body>Some message on Therapy sessions</Card.Body>
                </Card.Body>
            </Card>
            <Card className="m-1 border-1 bg-primary text-white">
                <Card.Body className="shadow-sm">
                    <Card.Title className="text-center">Mood Tracking</Card.Title>
                    <Card.Body>Some message on mood tracking</Card.Body>
                </Card.Body>
            </Card>
            <Card className="m-1 border-1 bg-success text-white">
                <Card.Body className="shadow-sm">
                    <Card.Title className="text-center">Mood Support</Card.Title>
                    <Card.Body>Some message on mood support</Card.Body>
                </Card.Body>
            </Card>
        </div>
    )
}

export {
    LandingMessageComponent,
    LandingSupportComponent
}