import { Card, Container } from "react-bootstrap";

const ContactUsComponent = () => {
  return (
    <Container>
      <Card className="border-0">
        <Card.Header>
          <h2>Contact Us</h2>
          

          <div class="container mt-5">
            <h2 class="text-center mb-4">Contact Us</h2>

            <div class="card p-4">
              <form id="multiStepForm">
                <div class="step active" id="step1">
                  <h4>Step 1: Personal Details</h4>
                  <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <input type="text" class="form-control" required />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email Address</label>
                    <input type="email" class="form-control" required />
                  </div>
                  <button type="button" class="btn btn-primary next-step">
                    Next
                  </button>
                </div>

                <div class="step" id="step2">
                  <h4>Step 2: Message Details</h4>
                  <div class="mb-3">
                    <label class="form-label">Subject</label>
                    <input type="text" class="form-control" required />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Your Message</label>
                    <textarea class="form-control" rows="4" required></textarea>
                  </div>
                  <button type="button" class="btn btn-secondary prev-step">
                    Back
                  </button>
                  <button type="button" class="btn btn-primary next-step">
                    Next
                  </button>
                </div>

                <div class="step" id="step3">
                  <h4>Step 3: Confirmation</h4>
                  <p>Review your details and submit your message.</p>
                  <button type="button" class="btn btn-secondary prev-step">
                    Back
                  </button>
                  <button type="submit" class="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </Card.Header>
        <Card.Body></Card.Body>
      </Card>
    </Container>
  );
};

export default ContactUsComponent;
