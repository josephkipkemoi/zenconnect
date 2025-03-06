import "./chatBox.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"

import URL_PORT from "../lib/port"

const ChatBox = () => {
    let [message, setMessage] = useState({
        messageItem: '',
        messageCounter: 0
    })
    let [counter, setCounter] = useState(0)
    let [completedTyping, setCompletedTyping] = useState(false)

    const chatHistory = "Hello, Welcome, ZenConnect is a digital platform dedicated to fostering mental wellness through accessible resources, professional support, and a compassionate community. Our goal is to break the stigma around mental health and provide a safe space where individuals can seek help, learn, and grow."

    let [displayResponse, setDisplayResponse] = useState("")

    // Outbound messages 
    const [outBound1, setOutBound1] = useState('')
    const [outBound2, setOutBound2] = useState('')
    const [outBound3, setOutBound3] = useState('')
    const [outBound4, setOutBound4] = useState('')
    const [outBound5, setOutBound5] = useState('')

    // inbound messages
    const [inbound1, setInbound1] = useState("")
    const [inbound2, setInbound2] = useState("")
    const [inbound3, setInbound3] = useState("")
    const [inbound4, setInbound4] = useState("")
    const [inbound5, setInbound5] = useState("")


    const handleMessage = (e) => {
       setMessage((prev) => ({...prev, messageItem: e.target.value, messageCounter: counter}))
    }

    const postMessage = async () => {
        sessionStorage.setItem(`out-bound-${counter}`, JSON.stringify(message))
        setCounter(prev => prev+=1)

        const ageGroup = sessionStorage.getItem("age-group")
        const preffLang = sessionStorage.getItem("preff-lang")

        setMessage((prev) =>({...prev, messageItem: ""}))

        const { messageItem } = JSON.parse(sessionStorage.getItem(`out-bound-${counter}`))
        switch(counter) {
            case 0:
                try {
                        const res = await axios.get(`${URL_PORT}/api/chatbot?message=${messageItem}&age_group=${ageGroup}&preff_lang=${preffLang}`)
                        if(res.status === 200) {
                            setInbound1(res.data.message)
                        }          
                    } catch (error) {
                        console.error(error)
                    }   
                break
            case 1:
                try {
                        const res = await axios.get(`${URL_PORT}/api/chatbot?message=${messageItem}&age_group=${ageGroup}&preff_lang=${preffLang}`)
                        if(res.status === 200) {
                            setInbound2(res.data.message)
                        }          
                    } catch (error) {
                        console.error(error)
                    }   
                break 
            case 2:
                try {
                    const res = await axios.get(`${URL_PORT}/api/chatbot?message=${messageItem}&age_group=${ageGroup}&preff_lang=${preffLang}`)
                    if(res.status === 200) {
                        setInbound3(res.data.message)
                    }          
                } catch (error) {
                    console.error(error)
                }   
                break 
            case 3:
                try {
                    const res = await axios.get(`${URL_PORT}/api/chatbot?message=${messageItem}&age_group=${ageGroup}&preff_lang=${preffLang}`)
                    if(res.status === 200) {
                        setInbound4(res.data.message)
                    }          
                } catch (error) {
                    console.error(error)
                }   
                break 
            case 4:
                try {
                    const res = await axios.get(`${URL_PORT}/api/chatbot?message=${messageItem}&age_group=${ageGroup}&preff_lang=${preffLang}`)
                    if(res.status === 200) {
                        setInbound5(res.data.message)
                    }          
                } catch (error) {
                    console.error(error)
                }   
                break 
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
        const msg3 = sessionStorage.getItem("out-bound-2")
        setOutBound3(msg3)
        const msg4 = sessionStorage.getItem("out-bound-3")
        setOutBound4(msg4)
        const msg5 = sessionStorage.getItem("out-bound-5")
        setOutBound5(msg5)
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
          
            <div className="d-flex flex-column justify-content-start align-items-start chat-box-child w-100">
            <LanguageComponent/>

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
                {outBound2 && inbound2 && <InBound2Component message={inbound2}/> }

                {outBound3 && <OutBound3Component message={outBound3}/>}
                {outBound3 && inbound3 && <InBound3Component message={inbound3}/> }

                {outBound4 && <OutBound4Component message={outBound4}/>}
                {outBound4 && inbound4 && <InBound4Component message={inbound4}/> }

                {outBound5 && <OutBound5Component message={outBound5}/>}
                {outBound5 && inbound5 && <InBound5Component message={inbound5}/> }


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
                            value={message.messageItem}
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

const LanguageComponent = () => {

    const handleCheck = (e) => {
       sessionStorage.setItem("preff-lang",e.target.value)
    }
  
    return (
      <div className="container language-component">
        <div className=''>
            <label><small>Switch language:</small></label>
              <select onChange={handleCheck} className="form-select">
                  <option value="english">English</option>
                  <option value="swahili">Swahili</option>
                  <option value="kikuyu">Kikuyu</option>
                  <option value="luhya">Luhya</option>
                  <option value="kamba">Kamba</option>
                  <option value="dholuo">Luo</option>
                  <option value="maasai">Maasai</option>
                  <option value="somali">Somali</option>
            </select>
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
const OutBound3Component = ({ message }) => {
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
const OutBound4Component = ({ message }) => {
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
const OutBound5Component = ({ message }) => {
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
const InBound2Component = ({ message }) => {
    let [displayResponse, setDisplayResponse] = useState("")
    let [completedTyping, setCompletedTyping] = useState(false)

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
const InBound3Component = ({ message }) => {
    let [displayResponse, setDisplayResponse] = useState("")
    let [completedTyping, setCompletedTyping] = useState(false)

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
const InBound4Component = ({ message }) => {
    let [displayResponse, setDisplayResponse] = useState("")
    let [completedTyping, setCompletedTyping] = useState(false)

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
const InBound5Component = ({ message }) => {
    let [displayResponse, setDisplayResponse] = useState("")
    let [completedTyping, setCompletedTyping] = useState(false)

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

export default ChatBox