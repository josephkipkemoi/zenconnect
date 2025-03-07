import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Container } from "react-bootstrap"
import { useSearchParams } from "react-router-dom"

const API_URL = process.env.REACT_APP_BACKEND_URL

const DiscussionsComponent = () => {
    const [searchParams,] = useSearchParams()
    const message = searchParams.get("message")
    let [completedTyping, setCompletedTyping] = useState(false)
    const [discussionMessage, setDiscussionMessage] = useState("")
    let [displayResponse, setDisplayResponse] = useState("")

    const displayTypingMessage = (chat) => {
        setCompletedTyping(false)
        
        let i = 0
        const interValid = setInterval(() => {
            setDisplayResponse(chat.slice(0, i))

            i++;
        
            if (i > chat.length) {
              clearInterval(interValid)
              setCompletedTyping(true)
              sessionStorage.setItem("typing_1_discussions", true)
            }            
        },30)

        return () => clearInterval(interValid)
    }

    const fetchDiscussions = async (msg) => {
        const ageGroup = sessionStorage.getItem("age-group")
        const preffLang = sessionStorage.getItem("preff-lang")
        try {
            const res = await axios.get(`${API_URL}/api/chatbot?message=${msg}&age_group=${ageGroup}&preff_lang=${preffLang}`)
            if(res.status === 200) {
                setDiscussionMessage(res.data.message)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if(!!discussionMessage) {
            displayTypingMessage(discussionMessage)
        }
        fetchDiscussions(message)
    }, [message, !!discussionMessage])
    return (
        <Container className="discussions-page">
            <Card className="rounded-5 border-0 shadow">
                <Card.Header className="p-3 bg-info rounded-5 shadow m-3 border-0 text-white">
                    <h2 className="fw-bold m-1">Discussions</h2>
                </Card.Header>
                <Card.Body>
                    <h5 className="mt-1">{message}</h5>
                    <hr className="text-info" />
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
                </Card.Body>
            </Card>
        </Container>
    )
}

export default DiscussionsComponent