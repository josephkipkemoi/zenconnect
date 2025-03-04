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

    const chatHistory = "Hello, Welcome, ZenConnect is a digital platform dedicated to fostering mental wellness through accessible resources, professional support, and a compassionate community. Our goal is to break the stigma around mental health and provide a safe space where individuals can seek help, learn, and grow."

    let [displayResponse, setDisplayResponse] = useState("")

    // Outbound message 1
    const [outBound1, setOutBound1] = useState('')
    const [outBound2, setOutBound2] = useState('')
    
    // inbound message 1
    const [inbound1, setInbound1] = useState("")

    const handleMessage = (e) => {
       setMessage((prev) => ({...prev, messageItem: e.target.value, messageCounter: counter}))
    }

    const postMessage = async () => {
        sessionStorage.setItem(`out-bound-${counter}`, JSON.stringify(message))
        setCounter(prev => prev+=1)

        const { messageItem } = JSON.parse(sessionStorage.getItem("out-bound-0"))
        const ageGroup = sessionStorage.getItem("age-group")
        const preffLang = sessionStorage.getItem("preff-lang")

        try {
            const res = await axios.get(`http://localhost:5000/api/chatbot?message=${messageItem}&age_group=${ageGroup}&preff_lang=${preffLang}`)
            if(res.status === 200) {
                setInbound1(res.data.message)
            }
        } catch (error) {
            console.error(error)
        }     
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
        const msg2 = sessionStorage.getItem("out-bound-1")
        setOutBound2(msg2)
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
                {outBound1 && inbound1 && <InBoundComponent message={inbound1}/> }
                {outBound2 && <OutBound2Component message={outBound2}/>}
                {outBound2 &&  <InBound2Component/> }

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
const OutBound2Component = ({ message }) => {
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
const InBoundComponent = ({ message }) => {
    let [displayResponse, setDisplayResponse] = useState("")
    let [completedTyping, setCompletedTyping] = useState(false)

    const displayTypingMessage = async (chat) => {
        const msg = JSON.parse(sessionStorage.getItem("out-bound-0"))
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

    useEffect(() => {
        displayTypingMessage(message)
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
const InBound2Component = () => {
    let [displayResponse, setDisplayResponse] = useState("")
    let [completedTyping, setCompletedTyping] = useState(false)

    const chatHistory = `
Burnout can creep in when you're overwhelmed, stressed, or overworked for long periods. To avoid it, try these strategies:

1. Prioritize Self-Care
Take care of your body and mind. Get enough sleep, eat well, stay hydrated, and exercise regularly. Engage in activities that relax you, such as meditation, reading, or listening to music.

2. Set Boundaries
Learn to say no to excessive work and set clear limits on your availability. Avoid taking on more than you can handle, and ensure you have time to recharge.

3. Manage Your Time Wisely
Use productivity tools like ClickUp, Trello, or Notion to organize tasks. Break large projects into smaller, manageable tasks and avoid multitasking, which can reduce efficiency and increase stress.

4. Take Breaks
Working continuously without breaks leads to exhaustion. Follow techniques like the Pomodoro Technique—work for 25 minutes, then take a 5-minute break. Step away from screens, stretch, or take deep breaths.

5. Engage in Activities You Enjoy
Pursue hobbies outside of work or studies. Whether it's painting, coding for fun, or playing sports, engaging in non-work activities boosts creativity and reduces stress.

6. Seek Support
Talk to friends, family, or a mentor about your challenges. If stress becomes overwhelming, consider professional counseling or therapy.

7. Maintain Work-Life Balance
Avoid letting work consume your personal life. Set specific work hours and unplug from work emails or messages after hours.

8. Adjust Your Mindset
Perfectionism can contribute to burnout. Accept that mistakes happen and focus on progress rather than perfection.

By incorporating these strategies, you can stay productive while maintaining your mental well-being.`

    const sendMessage = async () => {
        const msg = JSON.parse(sessionStorage.getItem("out-bound-0"))
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