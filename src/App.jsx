import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, generatingAnswer]);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;
    
    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion(""); // Clear input immediately after sending
    
    // Add user question to chat history
    setChatHistory(prev => [...prev, { type: 'question', content: currentQuestion }]);
    
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const aiResponse = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
      setChatHistory(prev => [...prev, { type: 'answer', content: aiResponse }]);
      setAnswer(aiResponse);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }
    setGeneratingAnswer(false);
  }

  return (
    <div className="container">
      <header className="header">
        <a href="https://github.com/Vishesh-Pandey/chat-ai" target="_blank" rel="noopener noreferrer">
          <h1>Chat AI</h1>
        </a>
      </header>

      <div className="chat-container" ref={chatContainerRef}>
        {chatHistory.length === 0 ? (
          <div className="chat-empty">
            <div>
              <h2>Welcome to Chat AI! 👋</h2>
              <p>I'm here to help you with anything you'd like to know. You can ask me about:</p>
              <div>
                <p>💡 General knowledge</p>
                <p>🔧 Technical questions</p>
                <p>📝 Writing assistance</p>
                <p>🤔 Problem solving</p>
              </div>
              <p>Just type your question below and press Enter or click Send!</p>
            </div>
          </div>
        ) : (
          <div className="chat-history">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`chat-message ${chat.type}`}>
                <ReactMarkdown>{chat.content}</ReactMarkdown>
              </div>
            ))}
          </div>
        )}
        {generatingAnswer && (
          <div className="pulsing">
            Thinking...
          </div>
        )}
      </div>

      <form onSubmit={generateAnswer} className="input-container">
        <textarea
          required
          className="textarea"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything..."
          rows="2"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              generateAnswer(e);
            }
          }}
        ></textarea>
        <button
          type="submit"
          className={`button ${generatingAnswer ? 'disabled' : ''}`}
          disabled={generatingAnswer}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
