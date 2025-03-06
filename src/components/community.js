import { faRightToBracket, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, Container, Modal } from "react-bootstrap"
import { Link, redirect, useLocation } from "react-router-dom"

const API_URL = process.env.REACT_APP_BACKEND_URL

const CommunityComponent = () => {
    const [successMessage, setSuccessMessage] = useState("")
    const [successModalOpen, setSuccessModalOpen] = useState(false)

    const [categories,] = useState([
        "Depression", 
        "Anxiety Disorders", 
        "Substance Use Disorders",
        "Suicide & Self-Harm",
        "Post-Traumatic Stress Disorder (PTSD)",
        "Bipolar Disorder & Schizophrenia",
        "Academic & Work-Related Stress",
        "Other"
    ])

    let [formData, setFormData] = useState({
        category: '',
        message: ''
    })

    const {category, message} = formData

    const postMessage = async () => {
   
        window.location.href = (`community/discussions?message=${message}`)
        try {
            const res = await axios.post(`${API_URL}/api/community?category=${category}&message=${message}`)
            if(res.status === 200) {
                setSuccessMessage(res.data.message)
                setSuccessModalOpen(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))

    const handleLang = (e) => {
        sessionStorage.setItem("preff-lang", e.target.value)
    }

    return (
        <Container>
            <Card className="border-0  community-chat">
                <Card.Header className="p-3 bg-success text-white">
                    <h4>Get support from online community</h4>
                </Card.Header>
                <Card.Body>                  
                    <Card.Text>
                        <div className="row">
                            <div className="col-sm-9 d-flex flex-column p-3">                                
                                <div>
                                    <label className="d-block mb-3">
                                        Please fill form to post question.  
                                        <small>(This will help those battling similar conditions get quick assistance)</small>
                                    </label>
                                    <div className="d-sm-flex justify-content-between">
                                        <div className="w-100 m-1">
                                            <label className="mb-2">Choose one:</label>
                                            <select name="category" onChange={handleChange} className="p-3 d-block form-select bg-light border-0 w-100 rounded">
                                                {categories?.map((val, key) => <option key={key} value={val}>{val}</option>)}
                                            </select>
                                        </div>
                                        <div className="w-100 m-1">
                                            <label className="mb-2">Swtich language:</label>
                                            <select name="category" onChange={handleLang} className="p-3 d-block form-select bg-light border-0 w-100 rounded">
                                                <option value="english">English</option>
                                                <option value="swahili">Swahili</option>
                                                <option value="kikuyu">Kikuyu</option>
                                                <option value="luhya">Luhya</option>
                                                <option value="kamba">Kamba</option>
                                                <option value="luo">Luo</option>
                                                <option value="maasai">Maasai</option>
                                                <option value="somali">Somali</option>
                                            </select>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="community_chat_id mb-5 d-block">Type your message below:</label>
                                    <textarea name="message" id="community_chat_id" onChange={handleChange} className="form-control m-2 p-3 mt-3" placeholder="Type message here..."/>
                                </div>
                                <div className="m-2">
                                    <Button className="m-2 shadow" onClick={postMessage}>
                                        <FontAwesomeIcon icon={faRightToBracket} />
                                       <span className="m-2">Post Question</span> 
                                    </Button>
                                </div>  
                                <hr className="text-secondary" />      
                                <CommunityPostsComponent stateChanged={successModalOpen}/>  
                                             
                            </div> 
                            <div className="col-sm-3 p-3">
                                <p className="fw-bold">Step 1: Draft your question</p>
                                <p>The community is here to help you in your fight with mental problems.</p>
                                <p>Summarize your problem</p>
                                <p className="fw-bold">Step 2: Post your question</p>
                                <p>Post your question to get help from an amazing online community that is ready to help you in each step.</p>
                                <p className="fw-bold">Step 3: Wait as you get certified help</p>
                                <p>
                                    All questions will be responded as sooon as possible from certified practioners, if you feel you need immediate assistance, 
                                    you can <Link to="/" className="d-inline m-1 nav-link text-primary fw-bold">CLICK HERE</Link> to communicate with our ZenConnect AI Bot that is trained to give you quick assistance 
                                </p>
                                <Card.Header className="bg-success text-white fw-bold">
                                    More helpful links
                                </Card.Header>  
                                {categories?.map((val, key) => <Card.Text key={key}><Link to={`/resources`} className="nav-link text-success m-2">{val}</Link></Card.Text>)}
                                <Card.Text>

                                </Card.Text>
                            </div>
                        </div>
                                
                    </Card.Text>
                </Card.Body>
            </Card>
            <SuccessModal 
                modalOpen={successModalOpen} 
                setSuccessModalOpen={setSuccessModalOpen}
                message={successMessage}
            />
        </Container>
    )
}

const SuccessModal = ({ modalOpen, setSuccessModalOpen, message }) => {

    const handleModal = () => setSuccessModalOpen(false)

    return (
        <Modal show={modalOpen} centered>
            <Modal.Header className="bg-success text-white">
                Recieved
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>              
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={handleModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const CommunityPostsComponent = ({ stateChanged }) => {

    let [receivedMessages, setReceivedMessages ] = useState([
        "I am having a hard time at school, I do not seem to understand anything! Please help me.",
        "My husband always beats me all the time, what can I do?",
        "I am addicted to substance use, how can I overcome my addiction?",
        "Looking for work has taken a toll on me, I have searched for any kind of job for the past one year all in vain, I am trained Accountant by profession, I feel like killing myself"
    ])

    const fetCommunityPosts = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/community/posts`)
            if(res.status === 200) {
                setReceivedMessages(res.data.posts)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetCommunityPosts()
    }, [stateChanged])
    return (
        <div>
            <h5 className="fw-bold mb-3 mt-3">Previous Q&A</h5>
            <div>
                <ul>
                    {receivedMessages?.map((val,key) => {
                        const { category, message, _id } = val
                        return (
                            <li key={key}>
                                <Link to={`discussions?message=${message}`} className="nav-link text-decoration-underline text-primary fw-bold">
                                  {category}:{message}
                                </Link>
                            </li>
                        )
                    })}                                       
                </ul>
            </div>
        </div>
    )
}

export default CommunityComponent