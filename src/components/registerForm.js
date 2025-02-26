import React from "react";
import { Container, Card } from "react-bootstrap";
import "./registerForm.css";



const RegisterComponent = () => {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Register</Card.Title>
                    <div className="container">
                        <div className="title">Registration Form</div>
                        <form action="#">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input type="text" placeholder="Enter your full name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">User Name</span>
                                    <input type="text" placeholder="Enter your user name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input type="number" placeholder="Enter your phone number" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="email" placeholder="Enter your email" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input type="password" placeholder="Enter your password" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Confirm Password</span>
                                    <input type="password" placeholder="Enter your password again" required />
                                </div>
                            </div>

                            <div className="gender-details">
                                <span className="gender-title">Gender</span>
                                <div className="category">
                                    <label htmlFor="dot-1">
                                        <input type="radio" name="gender" id="dot-1" />
                                        <span className="dot one"></span>
                                        <span className="gender">Female</span>
                                    </label>

                                    <label htmlFor="dot-2">
                                        <input type="radio" name="gender" id="dot-2" />
                                        <span className="dot two"></span>
                                        <span className="gender">Male</span>
                                    </label>

                                    <label htmlFor="dot-3">
                                        <input type="radio" name="gender" id="dot-3" />
                                        <span className="dot three"></span>
                                        <span className="gender">Other</span>
                                    </label>
                                </div>
                            </div>

                            <div className="button">
                                <input type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RegisterComponent;
