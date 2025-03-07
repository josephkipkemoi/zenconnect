import { Accordion, Card, Container, InputGroup } from "react-bootstrap"

const ResourcesComponent = () => {
    return (
        <Container className="resources-page">
        
            <Card className="border-0 shadow rounded-5">        
                <Card.Header className="border-0 p-4 m-3 shadow bg-info text-white rounded-5" >
                    <h2 className="fw-bold">Free Resources</h2>
                </Card.Header>       
                <Card.Body>
                    <Accordion defaultActiveKey="0" className="p-2">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h5 className="fw-bold">Depression</h5>                                
                            </Accordion.Header>
                            <Accordion.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <h5 className="text-dark mb-2 mt-2 fw-bold">Video Resource</h5>
                                    <h6 className="mt-2 mb-3">
                                        Dealing with Depression & Anxiety: How Kris Collins Coped & Cultivated Self Love | MedCircle
                                    </h6>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/aonzRWQC-nU">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                    <h5 className="text-dark fw-bold">PDF Resource</h5>
                                    <h6 className="mt-2 mb-3">Dealing with Depression</h6>
                                     <a href="https://www.kognitiv.no/wp-content/uploads/2014/11/Depresjon-ungdom.pdf" target="_blank">Click Here to Download PDF</a>
                                </div>                           
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h5 className="fw-bold">Anxiety Disorders</h5>                               
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                <h5 className="text-dark mb-2 mt-2 fw-bold">Video Resource</h5>
                                <h6 className="mt-2 mb-3">How to cope with anxiety | Olivia Remes | TEDxUHasselt</h6>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/WWloIAQpMcQ">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                <h5 className="text-dark fw-bold">PDF Resource</h5>
                                <h6 className="mt-2 mb-3">Dealing With Anxiety Disorders</h6>
                                     <a href="https://assets.ctfassets.net/f7tuyt85vtoa/1GggIvSjfDgryLAuBaPLh8/cfe62181e8f6111b4af9c09a6b69c284/Anxiety_Disorders_-_Dealing_with_Anxiety_Disorders__part_3_.pdf" target="_blank">Click Here to Download</a>
                                </div>  
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <h5 className="fw-bold">Substance Use Disorders</h5>                                
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                <h5 className="text-dark mb-2 mt-2 fw-bold">Video Resource</h5>
                                <h6 className="mt-2 mb-3">
                                    The Hill Country Podcast: Community Collaboration in Tackling Substance Use Disorder
                                </h6>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/c6oLdqYhw30">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                <h5 className="text-dark fw-bold">PDF Resource</h5>
                                <h6 className="mt-2 mb-3">Approaches to Treatment of Substance Abuse</h6>
                                     <a href="https://www.who.int/docs/default-source/substance-use/who-psa-93-10.pdf" target="_blank">Click Here to Download</a>
                                </div> 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <h5 className="fw-bold">Suicide & Self-Harm</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <h5 className="text-dark mb-2 mt-2 fw-bold">Video Resource</h5>
                                    <h6 className="mt-2 mb-3">Reducing the risk of self-harm and suicide - Professor Keith Hawton (Science with Sanjula Episode 3)</h6>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/_Q2iqLeeomU">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                    <h5 className="text-dark fw-bold">PDF Resource</h5>
                                    <h6 className="mt-2 mb-3">Tackling Suicide & Self-Harm</h6>
                                     <a href="https://iris.who.int/bitstream/handle/10665/333478/WHOEMMNH224E-eng.pdf" target="_blank">Click Here to Download</a>
                                </div> 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                <h5 className="fw-bold">Post-Traumatic Stress Disorder (PTSD)</h5>                               
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                <h5 className="text-dark mb-2 mt-2 fw-bold">Video Resource</h5>
                                <h6 className="mt-2 mb-3">Understanding and Overcoming Trauma - Dr. Gregory Jantz</h6>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/W5i4hPeB4uM">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                <h5 className="text-dark fw-bold">PDF Resource</h5>
                                <h6 className="mt-2 mb-3">PTSD Recovery Program - Treatment Manual</h6>
                                     <a href="https://www.mirecc.va.gov/docs/visn6/PTSD_Recovery_Group-Client_Manual_3rd_edition.pdf" target="_blank">Click Here to Download</a>
                                </div> 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                <h5 className="fw-bold"> Bipolar Disorder & Schizophrenia</h5>                             
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <h5 className="text-dark mb-2 mt-2 fw-bold">Video Resource</h5>
                                    <h6 className="mt-2 mb-3">The Science & Treatment of Bipolar Disorder | Huberman Lab Podcast #82</h6>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/m_OazsImOiI">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                    <h5 className="text-dark fw-bold">PDF Resource</h5>
                                    <h6 className="mt-2 mb-3">National Clinical Guidelines for Management of Common Mental Disorders</h6>
                                     <a href="https://mental.health.go.ke/download/national-clinical-guidelines-for-management-of-common-mental-disorders/" target="_blank">Click Here to Download</a>
                                </div> 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>
                            <h5 className="fw-bold">Academic & Work-Related Stress</h5>                             
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                <h5 className="text-dark mb-2 mt-2 fw-bold">Video Resource</h5>
                                <h6 className="mt-2 mb-3">Workplace Mental Health - all you need to know (for now) | Tom Oxley | TEDxNorwichED</h6>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/G0XUimJbz44">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                <h5 className="text-dark fw-bold">PDF Resource</h5>
                                <h6 className="mt-2 mb-3">Work organization and stress</h6>
                                     <a href="https://iris.who.int/bitstream/handle/10665/42625/9241590475.pdf" target="_blank">Click Here to Download</a>
                                </div> 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ResourcesComponent