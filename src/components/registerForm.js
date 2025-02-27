import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

const RegisterComponent = () => {
    return (
        <section className="vh-100 bg-light d-flex align-items-center">
            <Container>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <Card className="shadow-lg border-0 rounded-3">
                            <Card.Body className="p-4 p-md-5">
                                <h3 className="mb-4">Registration Form</h3>
                                <Form>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <Form.Group className="form-floating">
                                                <Form.Control type="text" id="firstName" placeholder="First Name" />
                                                <Form.Label htmlFor="firstName">First Name</Form.Label>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <Form.Group className="form-floating">
                                                <Form.Control type="text" id="lastName" placeholder="Last Name" />
                                                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <Form.Group className="form-floating">
                                                <Form.Control type="date" id="birthdayDate" placeholder="Birthday" />
                                                <Form.Label htmlFor="birthdayDate">Birthday</Form.Label>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <h6 className="mb-2">Gender:</h6>
                                            <Form.Check inline type="radio" name="gender" id="femaleGender" label="Female" />
                                            <Form.Check inline type="radio" name="gender" id="maleGender" label="Male" />
                                            <Form.Check inline type="radio" name="gender" id="otherGender" label="Other" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <Form.Group className="form-floating">
                                                <Form.Control type="email" id="emailAddress" placeholder="Email" />
                                                <Form.Label htmlFor="emailAddress">Email</Form.Label>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <Form.Group className="form-floating">
                                                <Form.Control type="tel" id="phoneNumber" placeholder="Phone Number" />
                                                <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <Form.Group className="mb-4">
                                        <Form.Label htmlFor="subjectSelect">Choose option</Form.Label>
                                        <Form.Select id="subjectSelect">
                                            <option value="" disabled selected>Choose option</option>
                                            <option value="1">Subject 1</option>
                                            <option value="2">Subject 2</option>
                                            <option value="3">Subject 3</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <div className="mt-4 pt-2 text-center">
                                        <Button type="submit" variant="primary" size="lg">Submit</Button>
                                    </div>

                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default RegisterComponent;
