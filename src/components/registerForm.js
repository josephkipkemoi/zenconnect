import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import "./registration.css";
import axios from "axios";



const RegisterComponent = () => {
    let [errs, setErrs] = useState([])
    let [formData, setFormData] = useState({
        full_name: '',
        user_name: '',
        phone_number: '',
        email: '',
        password: '',
        confirm_password: '',
        gender: ''
    })

    let {full_name, user_name, phone_number, email, password, confirm_password , gender} = formData

    const handleChange = (e) => setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))

    const registerUser = async () => {
        if(password !== confirm_password) {
            setErrs(["Passwords do not match"])
            return
        }
        let no = phone_number.split("")
        no[0] = "254"
        let phone = no.join("")
        try {
            const res = await axios.post("http://localhost:5000/api/users/register", {
                full_name,
                user_name,
                phone_number: phone,
                email,
                password,
                confirm_password,
                gender
            })
            if(res.status === 200) {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("user", res.data.user)
            }
            console.log(res)
        } catch (error) {
            const { message, status } = error.toJSON()
            if(status === 400) {
                error.response.data.errors?.map(el => setErrs([el.msg]))
                return
            }
            setErrs([message])
        }
    }

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Register</Card.Title>
                    <div className="container">
                        <div className="title">Registration Form</div>
                        <div>
                            {errs.length > 0 && errs.map((val, key) => <span className="d-block alert alert-danger mt-3 mb-3" key={key} >{val}</span>)}
                        </div>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input onChange={handleChange} name="full_name" type="text" placeholder="Enter your full name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">User Name</span>
                                    <input onChange={handleChange} type="text" name="user_name" placeholder="Enter your user name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input onChange={handleChange} type="number" name="phone_number" placeholder="Enter your phone number" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input onChange={handleChange} type="email" name="email" placeholder="Enter your email" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input onChange={handleChange} type="password" name="password" placeholder="Enter your password" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Confirm Password</span>
                                    <input onChange={handleChange} type="password" name="confirm_password" placeholder="Enter your password again" required />
                                </div>
                            </div>

                            <div className="gender-details">
                                <span className="gender-title">Gender</span>
                                <div className="category">
                                    <select onChange={handleChange} name="gender">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="button">
                                <input type="submit" onClick={registerUser} value="Register!" />
                            </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RegisterComponent;
