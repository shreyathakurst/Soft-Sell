"use client"

import { useState, useRef, useEffect } from "react"

const ChatWidget = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm SoftSell's virtual assistant. How can I help you today?",
      sender: "bot",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    }

    setMessages([...messages, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input.toLowerCase())
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          text: botResponse,
          sender: "bot",
        },
      ])
      setIsTyping(false)
    }, 1000)
  }

  const getBotResponse = (userInput) => {
    // Simple hardcoded responses
    if (userInput.includes("sell") && userInput.includes("license")) {
      return "To sell your license, start by filling out our contact form with details about your software. Our team will provide a valuation within 24 hours."
    } else if (userInput.includes("payment") || userInput.includes("paid")) {
      return "We offer multiple payment methods including bank transfer, PayPal, and cryptocurrency. Once you accept our offer, payment is typically processed within 3 business days."
    } else if (userInput.includes("valuation") || userInput.includes("worth")) {
      return "Our valuation process considers factors like software type, license duration, market demand, and current retail price. We pride ourselves on offering competitive rates."
    } else if (userInput.includes("process") || userInput.includes("how")) {
      return "Our process is simple: 1) Submit your license details through our form, 2) Receive a valuation within 24 hours, 3) Accept our offer and get paid. Check out the 'How It Works' section for more details."
    } else if (userInput.includes("hello") || userInput.includes("hi")) {
      return "Hello! How can I assist you with selling your software licenses today?"
    } else {
      return "I'm not sure I understand. Could you rephrase your question? You can ask about selling licenses, our valuation process, payment methods, or how our service works."
    }
  }

  // Example questions for the user
  const exampleQuestions = [
    "How do I sell my license?",
    "What payment methods do you accept?",
    "How is the valuation determined?",
    "How long does the process take?",
  ]

  const handleExampleClick = (question) => {
    setInput(question)
  }

  return (
    <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 flex flex-col max-h-[500px]">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="font-bold">SoftSell Assistant</h3>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto max-h-80">
        {messages.map((message) => (
          <div key={message.id} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
            <div
              className={`inline-block p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="text-left mb-4">
            <div className="inline-block p-3 rounded-lg bg-gray-200 dark:bg-gray-700">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t dark:border-gray-700">
        <div className="mb-2">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {exampleQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(question)}
                className="text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full px-2 py-1 text-gray-700 dark:text-gray-300"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatWidget
