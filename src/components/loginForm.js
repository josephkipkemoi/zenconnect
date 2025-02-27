import { useState } from "react"
import { Container, Form } from "react-bootstrap"

const LogInFormComponent = () => {
    let [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    })

    const {email, password, rememberMe} = formData

    const handleChange = (e) => setFormData(() => ({[e.target.name]: e.target.value}))

    const loginUser = () => {
        console.log(formData)
    }

    return (
        <Container>
            <div className="w-50 mx-auto">
                <h3>Login</h3>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onChange={handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onChange={handleChange} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={loginUser}>Submit</button>
                </div>
        </Container>
    )
}

export default LogInFormComponent