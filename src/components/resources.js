import { Card, Container, InputGroup } from "react-bootstrap"

const ResourcesComponent = () => {
    return (
        <Container>
            <Card>
                <Card.Header className="d-sm-flex justify-content-between">
                    <h3>Find Free Resources</h3>
                    <input type="search" placeholder="search..." className="form-input p-2" />
                </Card.Header>
                <Card.Body>

                </Card.Body>
            </Card>
        </Container>
    )
}

export default ResourcesComponent