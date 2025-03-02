import axios from "axios"
import { useState } from "react"
import { Container, Form } from "react-bootstrap"

const LogInFormComponent = () => {
    let [errs, setErrs] = useState([])

    let [formData, setFormData] = useState({
        number: '',
        password: '',
        rememberMe: false
    })

    let {number, password, rememberMe} = formData

    const handleChange = (e) => setFormData((prev) => ({...prev,[e.target.name]: e.target.value}))

    const loginUser = async () => {
        let no = number.split("")
        no[0] = "254"
        let phone_number = no.join("")
        try {
            const res = await axios.post("http://localhost:5000/api/users/login", {
                phone_number,
                password,
                rememberMe
            })
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
            <div className="w-50 mx-auto">
                <div className="mb-4">
                <h3>Login</h3>
                </div>
                {errs.length > 0 && errs.map((val, key) => <span className="d-block alert alert-danger mt-3 mb-3" key={key} >{val}</span>)}
                    <div class="mb-3 mt-3">
                        <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                        <input onChange={handleChange} type="number" name="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onChange={handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" name="rememberMe" for="exampleCheck1">Remember Me</label>
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={loginUser}>Submit</button>
                </div>
        </Container>
    )
}

export default LogInFormComponent