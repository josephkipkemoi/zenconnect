import { Accordion, Card, Container, InputGroup } from "react-bootstrap"

const ResourcesComponent = () => {
    return (
        <Container>
            <Card>
                <Card.Header className="d-sm-flex justify-content-between">
                    <h3>Find Free Resources</h3>
                    <input type="search" placeholder="search..." className="form-input p-2" />
                </Card.Header>
                <Card.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Depression</Accordion.Header>
                            <Accordion.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <h3 className="text-decoration-underline">Video Resource</h3>
                                    <h5>Dealing with Depression & Anxiety: How Kris Collins Coped & Cultivated Self Love | MedCircle</h5>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/aonzRWQC-nU">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                    <h3 className="text-decoration-underline">PDF Resource</h3>
                                    <h5>Dealing with Depression</h5>
                                     <a href="https://www.kognitiv.no/wp-content/uploads/2014/11/Depresjon-ungdom.pdf" target="_blank">Click Here to Download</a>
                                </div>                           
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Anxiety Disorders</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <h3 className="text-decoration-underline">Video Resource</h3>
                                    <h5>How to cope with anxiety | Olivia Remes | TEDxUHasselt</h5>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/WWloIAQpMcQ">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                    <h3 className="text-decoration-underline">PDF Resource</h3>
                                    <h5>Dealing With Anxiety Disorders</h5>
                                     <a href="https://assets.ctfassets.net/f7tuyt85vtoa/1GggIvSjfDgryLAuBaPLh8/cfe62181e8f6111b4af9c09a6b69c284/Anxiety_Disorders_-_Dealing_with_Anxiety_Disorders__part_3_.pdf" target="_blank">Click Here to Download</a>
                                </div>  
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Substance Use Disorders</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <h3 className="text-decoration-underline">Video Resource</h3>
                                    <h5>The Hill Country Podcast: Community Collaboration in Tackling Substance Use Disorder</h5>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/c6oLdqYhw30">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                    <h3 className="text-decoration-underline">PDF Resource</h3>
                                    <h5>Approaches to Treatment of Substance Abuse</h5>
                                     <a href="https://www.who.int/docs/default-source/substance-use/who-psa-93-10.pdf" target="_blank">Click Here to Download</a>
                                </div> 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Suicide & Self-Harm</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <h3 className="text-decoration-underline">Video Resource</h3>
                                    <h5>Reducing the risk of self-harm and suicide - Professor Keith Hawton (Science with Sanjula Episode 3)</h5>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/_Q2iqLeeomU">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                    <h3 className="text-decoration-underline">PDF Resource</h3>
                                    <h5>Tackling Suicide & Self-Harm</h5>
                                     <a href="https://iris.who.int/bitstream/handle/10665/333478/WHOEMMNH224E-eng.pdf" target="_blank">Click Here to Download</a>
                                </div> 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Post-Traumatic Stress Disorder (PTSD)</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <h3 className="text-decoration-underline">Video Resource</h3>
                                    <h5>Understanding and Overcoming Trauma - Dr. Gregory Jantz</h5>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/W5i4hPeB4uM">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                    <h3 className="text-decoration-underline">PDF Resource</h3>
                                    <h5>PTSD Recovery Program - Treatment Manual</h5>
                                     <a href="https://www.mirecc.va.gov/docs/visn6/PTSD_Recovery_Group-Client_Manual_3rd_edition.pdf" target="_blank">Click Here to Download</a>
                                </div> 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Bipolar Disorder & Schizophrenia</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <h3 className="text-decoration-underline">Video Resource</h3>
                                    <h5>The Science & Treatment of Bipolar Disorder | Huberman Lab Podcast #82</h5>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/m_OazsImOiI">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                    <h3 className="text-decoration-underline">PDF Resource</h3>
                                    <h5>National Clinical Guidelines for Management of Common Mental Disorders</h5>
                                     <a href="https://mental.health.go.ke/download/national-clinical-guidelines-for-management-of-common-mental-disorders/" target="_blank">Click Here to Download</a>
                                </div> 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Academic & Work-Related Stress</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <h3 className="text-decoration-underline">Video Resource</h3>
                                    <h5>Workplace Mental Health - all you need to know (for now) | Tom Oxley | TEDxNorwichED</h5>
                                    <iframe width="420" height="315" frameborder="0" allowfullscreen ng-show="showvideo"
                                        src="https://youtube.com/embed/G0XUimJbz44">
                                    </iframe>
                                </div>     
                                <div className="mt-3">
                                    <h3 className="text-decoration-underline">PDF Resource</h3>
                                    <h5>Work organization and stress</h5>
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