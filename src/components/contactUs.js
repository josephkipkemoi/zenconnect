import axios from "axios";
import { useState } from "react"
import { Button, Card, Container, Modal } from "react-bootstrap"

const API_URL = process.env.REACT_APP_BACKEND_URL

const ContactUsComponent = () => {
  let [errs, setErrs] = useState([])

  const [successModal, setSuccessModal] = useState(false)

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    subject: '',
    message: ''
  })

  const { full_name, email, subject, message } = formData

  const handleChange = (e) => setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))

  const handleMessage = async () => {
    try {
        const res = await axios.post(`${API_URL}/api/contact-us?full_name=${full_name}&email=${email}&subject=${subject}&message=${message}`)
        if (res.status === 200) {
          setSuccessModal(true)
        }
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
      <Card className="border-0">
        <Card.Header>
          <h2>Contact Us</h2>
          <div class="container mt-5">
            <h2 class="text-center mb-4">Contact Us</h2>
            <div class="card p-4">
              {errs.length > 0 && errs.map((val, key) => <span className="d-block alert alert-danger mt-3 mb-3" key={key} >{val}</span>)}
                <div class="step active" id="step1">
                  <h4>Details</h4>
                  <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <input type="text" name="full_name" onChange={handleChange} class="form-control p-2" required />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email Address</label>
                    <input type="email" name="email" onChange={handleChange} class="form-control p-2" required />
                  </div>
                </div>
                <div class="step" id="step2">
                  <h4>Message Details</h4>
                  <div class="mb-3">
                    <label class="form-label">Subject</label>
                    <input type="text" name="subject" onChange={handleChange} class="form-control p-2" required />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Your Message</label>
                    <textarea class="form-control p-2" name="message" onChange={handleChange} rows="4" required></textarea>
                  </div>                
                </div>
                <div class="step" id="step3">
                  <p>Review your details and submit your message.</p>                
                  <button type="submit" class="btn btn-success" onClick={handleMessage}>
                    Submit
                  </button>
                </div>
            </div>
          </div>
        </Card.Header>
        <Card.Body></Card.Body>
      </Card>

      <SuccessModal
        successModal={successModal}
        setSuccessModal={setSuccessModal}
      />

    </Container>
  );
};

const SuccessModal = ({ successModal, setSuccessModal }) => {

  const handleModal = () => {
    setSuccessModal(false)
  }

  return (
    <Modal show={successModal}>
        <Modal.Body>
            <Modal.Header>Sent</Modal.Header>
            <p>One of our representatives will reach out to you as soon as possible</p>
            <Modal.Footer>
                <Button onClick={handleModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal.Body>
    </Modal>
  )
}

export default ContactUsComponent;
