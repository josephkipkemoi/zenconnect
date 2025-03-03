import "./chatBox.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"

const ChatBox = () => {
    let [message, setMessage] = useState({
        messageItem: '',
        messageCounter: 0
    })
    let [counter, setCounter] = useState(0)
    let [completedTyping, setCompletedTyping] = useState(false)
    const [outGoingMessage, setOutgoingMessage] = useState([])

    const chatHistory = "Hello, Welcome, ZenConnect is a digital platform dedicated to fostering mental wellness through accessible resources, professional support, and a compassionate community. Our goal is to break the stigma around mental health and provide a safe space where individuals can seek help, learn, and grow."

    let [displayResponse, setDisplayResponse] = useState("")

    const [outBound1, setOutBound1] = useState('')
    
    const handleMessage = (e) => {
       setMessage((prev) => ({...prev, messageItem: e.target.value, messageCounter: counter}))
    }

    const postMessage = async () => {
        sessionStorage.setItem(`out-bound-${counter}`, JSON.stringify(message))

        setCounter(prev => prev+=1)
        const msg = sessionStorage.getItem(`out-bound-${counter}`)
        setOutgoingMessage(prev => prev.concat(msg))


        // try {
        //     const res = await axios.get("http://localhost:5000/api/chatbot", {
        //         message: message.messageItem
        //     })
        //     console.log(res)
        // } catch (error) {
        //     console.error(error)
        // }
    
    }

    const displayTypingMessage = (chat) => {
        setCompletedTyping(false)
        
        let i = 0
        const interValid = setInterval(() => {
            setDisplayResponse(chat.slice(0, i))

            i++;
        
            if (i > chat.length) {
              clearInterval(interValid)
              setCompletedTyping(true)
              sessionStorage.setItem("typing_1_complete", true)
            }            
        },30)

        return () => clearInterval(interValid)
    }

    const fetchOutBoundMessages = () => {
        const msg = sessionStorage.getItem("out-bound-0")
        setOutBound1(msg)
    }

    useEffect(() => {
        const typing1 = sessionStorage.getItem("typing_1_complete")
        if(!!typing1 === false) {
            displayTypingMessage(chatHistory)
        }
        fetchOutBoundMessages()
    }, [counter])
    return (
        <div className="container chat-box-container d-flex flex-column justify-content-between bg-none rounded-4">
            <div className="d-flex flex-column justify-content-start align-items-start chat-box-child">
                {!!displayResponse &&
                    <div className="d-flex p-3 align-items-start rounded-5">
                      <div>
                          <FontAwesomeIcon size="xl" className="bg-warning p-2 m-3 rounded-5 text-light text-right" icon={faBrain}/>
                      </div>
                     
                      <div className="bg-light p-2 rounded-4 m-1 shadow">
                          <p className="p-3">
                              {displayResponse}
                              {!completedTyping &&
                               <svg
                                  viewBox="8 4 8 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="cursor"
                              >
                                  <rect x="10" y="6" width="4" height="12" fill="#fff" />
                              </svg>
                              }                           
                          </p>
                      </div>
                    </div>
                }
                {outBound1 && <OutBoundComponent message={outBound1}/> }
                {outBound1 &&  <InBoundComponent/> }
            </div>
            <div className="row m-3 align-items-center mx-auto w-75">
                <div className="col-sm-8">
                    <FloatingLabel className="w-100 text-secondary" controlId="floatingTextarea2" label="How are you feeling today?">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            className="bg-light text-dark"
                            onChange={handleMessage}
                        />
                    </FloatingLabel>
                </div>
                <div className="col-sm-3 m-2">
                    <Button onClick={postMessage} variant="success" size="md" className="shadow-sm fw-bold rounded-5">
                        <FontAwesomeIcon icon={faBrain} className="text-light"/>
                        <span className="m-1 text-light">Get Help</span> 
                    </Button>  
                </div>
            </div>
        </div>
    )
}

const OutBoundComponent = ({ message }) => {
    const { messageItem } = JSON.parse(message)
    return (
        <div className="d-flex justify-content-end w-100">    
            <div>           
              <div className="d-flex w-100 ">
                    <div className="bg-secondary shadow text-white p-3 rounded-4 m-1">
                        <span className="d-block">{messageItem}</span>
                    </div>
                    <FontAwesomeIcon size="xl" className="bg-secondary p-2 m-3 rounded-5 text-light" icon={faUserCircle}/>
                </div>
            </div>
        </div>
    )
}

const InBoundComponent = () => {
    let [displayResponse, setDisplayResponse] = useState("")
    let [completedTyping, setCompletedTyping] = useState(false)

    const chatHistory = `
Work-related stress is common, but managing it effectively can improve both your mental health and productivity. Here are some practical strategies to help:

1. Prioritize and Organize Tasks

Break down your workload into manageable tasks and prioritize them based on urgency. Use to-do lists, planners, or productivity apps to stay organized.

2. Set Boundaries

Establish clear boundaries between work and personal life. Avoid checking emails or taking work calls outside your working hours to ensure proper rest.

3. Take Regular Breaks

Short breaks can improve focus and reduce stress. Try the Pomodoro technique—work for 25-50 minutes, then take a 5-10 minute break.

4. Practice Stress-Relief Techniques

Deep breathing, meditation, and mindfulness exercises can help calm your mind. Even a few minutes of meditation during the day can reduce stress levels.

5. Maintain a Healthy Lifestyle

Exercise regularly, eat a balanced diet, and get enough sleep. Physical activity helps release endorphins, which naturally reduce stress.

6. Communicate and Seek Support

Talk to your manager or colleagues about workload issues. If stress becomes overwhelming, consider speaking with a mental health professional.

7. Create a Comfortable Workspace

An ergonomic chair, good lighting, and a clutter-free environment can enhance focus and reduce physical strain, contributing to lower stress levels.

8. Learn to Say No

Don’t overcommit to tasks that exceed your capacity. Setting realistic expectations helps prevent burnout.

By applying these strategies, you can reduce stress, increase efficiency, and maintain a healthier work-life balance.    `

    const sendMessage = async () => {
        const msg = JSON.parse(sessionStorage.getItem("out-bound-0"))
        console.log(msg)
        try {
            const res = await axios.post("http://localhost:5000/api/chatbot", {
                message: msg
            })
        } catch (error) {
            console.error(error)
        }
    }

    const displayTypingMessage = async (chat) => {
        const msg = JSON.parse(sessionStorage.getItem("out-bound-0"))
        console.log(msg)
        try {
            const res = await axios.post("http://localhost:5000/api/chatbot", {
                message: msg
            })
        } catch (error) {
            console.error(error)
        }        setCompletedTyping(false)
        
        let i = 0
        const interValid = setInterval(() => {
            setDisplayResponse(chat.slice(0, i))

            i++;
        
            if (i > chat.length) {
              clearInterval(interValid)
              setCompletedTyping(true)
              sessionStorage.setItem("typing_1_complete", true)
            }            
        },30)

        return () => clearInterval(interValid)
    }

    useEffect(() => {
        displayTypingMessage(chatHistory)
    }, [])
    return (
        <div className="d-flex p-3 align-items-start rounded-5">
            <div>
                <FontAwesomeIcon size="xl" className="bg-warning p-2 m-3 rounded-5 text-light text-right" icon={faBrain}/>
            </div>
            <div className="bg-light p-2 rounded-4 m-1 shadow">
                <p className="p-3">
                    {displayResponse}
                    {!completedTyping &&
                    <svg
                        viewBox="8 4 8 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor"
                    >
                        <rect x="10" y="6" width="4" height="12" fill="#fff" />
                    </svg>
                    }                           
                </p>
            </div>
        </div>
    )
}

export default ChatBox