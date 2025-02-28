import { Button, Card, Container } from "react-bootstrap"

const CommunityComponent = () => {
    return (
        <Container>
            <Card >
                <Card.Body>
                    <Card.Header>
                        <h4>Get support from online community</h4>
                        <h5>Ask a question in public anonymously</h5>
                    </Card.Header>
                    <Card.Text>
                        <div className="row">
                            <div className="col-9 d-flex flex-column p-3">
                                <textarea className="form-control m-2 p-3" placeholder="Type message here..."/>
                                <div className="m-2">
                                    <Button>
                                        Send Message
                                    </Button>
                                </div>                         
                            </div> 
                            <div className="col-3 p-3">
                                <p className="fw-bold">Step 1: Draft your question</p>
                                <p>The community is here to help you with specific mental problems</p>
                                <p>Summarize your problem</p>
                                <Card.Header>
                                    More helpful links
                                </Card.Header>  
                            </div>
                        </div>
                                
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default CommunityComponent