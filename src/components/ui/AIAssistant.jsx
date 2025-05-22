import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm Duke, your digital assistant. How can I help with your construction or development needs today?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Quick action buttons
  const quickActions = [
    { text: "Meet Our Team", query: "Tell me about your team" },
    { text: "Services", query: "What services do you offer?" },
    { text: "Get Quote", query: "How can I get a project quote?" },
    { text: "Contact", query: "How can I contact your team?" },
  ];

  // Personality traits to make responses more human-like
  const personalityTraits = {
    enthusiasmPhrases: [
      "I'm excited to share that",
      "Great question!",
      "I'd be happy to explain",
      "That's something we're passionate about",
      "Absolutely!",
    ],
    transitionPhrases: [
      "By the way,",
      "Also,",
      "I should mention that",
      "It's worth noting that",
      "Interestingly,",
    ],
    closingPhrases: [
      "Can I help with anything else?",
      "Anything else you'd like to know?",
      "Do you have any other questions?",
      "Is there anything specific you'd like more details about?",
      "Would you like me to elaborate on any particular aspect?",
    ],
  };

  // Add human-like touches to responses
  const humanizeResponse = (response) => {
    // 50% chance to add enthusiasm
    if (Math.random() > 0.5) {
      const enthusiasm =
        personalityTraits.enthusiasmPhrases[
          Math.floor(Math.random() * personalityTraits.enthusiasmPhrases.length)
        ];
      response = `${enthusiasm} ${response
        .charAt(0)
        .toLowerCase()}${response.slice(1)}`;
    }

    // 30% chance to add a closing question
    if (Math.random() > 0.7) {
      const closing =
        personalityTraits.closingPhrases[
          Math.floor(Math.random() * personalityTraits.closingPhrases.length)
        ];
      response = `${response} ${closing}`;
    }

    return response;
  };

  // Sample responses based on construction/development topics
  const getAIResponse = (question) => {
    // Check if we should reference chat history for more context
    const shouldReferenceHistory =
      chatHistory.length > 2 && Math.random() > 0.7;

    const responses = [
      {
        keywords: ["team", "staff", "expert", "who works", "members"],
        response:
          "Our team at Duke Developers includes diverse experts led by Joseph G. Dukuly (Head of Operations), with Francis Duahn (Energy Specialist), Peter Gao (Global Trade Strategist), Wiron Ruzindana (Lead Software Engineer), and Moses P. Dukuly (Chief Civil Engineer). Each brings specialized knowledge in construction, software development, and sustainable solutions to deliver comprehensive services for our clients.",
      },
      {
        keywords: ["joseph", "dukuly", "head", "operation"],
        response:
          "Joseph G. Dukuly leads Duke Developers as Head of Operations. He brings extensive experience in both public and private sectors, focusing on delivering innovative and sustainable construction solutions that empower communities. His leadership ensures our projects meet the highest standards of quality and sustainability.",
      },
      {
        keywords: ["francis", "duahn", "energy"],
        response:
          "Francis Duahn is our Energy Sector Specialist with significant expertise in clean and sustainable energy solutions. Previously with Kwado Energy, he led initiatives expanding access to bioethanol fuel for cooking. At Duke Developers, Francis drives energy sustainability initiatives and ensures our projects have minimal environmental impact while maximizing efficiency.",
      },
      {
        keywords: ["peter", "gao", "global", "trade", "strategist"],
        response:
          "Peter Gao serves as our Global Trade Strategist, bringing extensive expertise in smart metering, transformers, and international business. He develops and executes global trade strategies for Duke Developers, fostering growth and international partnerships that help us deliver cutting-edge construction and development solutions worldwide.",
      },
      {
        keywords: ["wiron", "ruzindana", "software", "engineer"],
        response:
          "Wiron Ruzindana is our Lead Software Engineer with over 10 years of experience in development and organizational growth. He focuses on delivering impactful digital solutions that enhance our construction projects, including custom software for project management, client communication, and efficiency optimization.",
      },
      {
        keywords: ["moses", "dukuly", "civil", "engineer"],
        response:
          "Moses P. Dukuly serves as our Chief Civil Engineer with a proven track record of delivering complex infrastructure projects. His expertise in project planning, execution, and sustainable development ensures that our construction work meets the highest engineering standards while remaining environmentally responsible.",
      },
      {
        keywords: ["services", "offer", "provide"],
        response:
          "Duke Developers offers comprehensive services including construction management, general contracting, renovation, and development consulting across residential, commercial, and industrial projects. We also provide specialized IT solutions, renewable energy integration, and property management services. Our team can handle projects of any scale with a focus on sustainability and innovation.",
      },
      {
        keywords: ["cost", "price", "quote", "estimate", "budget"],
        response:
          "Project costs vary based on scope, materials, and requirements. We provide detailed, transparent estimates through our free consultation process. Our team will visit your site, understand your goals, and develop a comprehensive quote with clear breakdowns of all costs involved. We're committed to delivering value while staying within your budget.",
      },
      {
        keywords: [
          "timeline",
          "how long",
          "duration",
          "finish",
          "complete",
          "schedule",
        ],
        response:
          "Project timelines depend on scope and complexity. Residential renovations typically take 2-8 weeks, commercial fit-outs 1-3 months, and larger developments 6-18 months. We create detailed timelines during consultation, use advanced project management tools to track progress, and provide regular updates throughout your project to ensure on-time delivery.",
      },
      {
        keywords: ["materials", "sustainable", "eco", "green", "environment"],
        response:
          "We prioritize high-quality, sustainable materials from trusted suppliers. Our team is experienced with LEED certification requirements and eco-friendly building practices. We help clients select materials that balance quality, aesthetics, budget, and environmental impact, with options for recycled content, low VOC products, and energy-efficient components.",
      },
      {
        keywords: ["contact", "reach", "talk", "call", "email", "phone"],
        response:
          "You can reach our team at info@dukedevelopersinc.com or call +358413114800. Our office is open Monday-Friday, 8am-6pm. Our Liberia office can be reached at +231 886 877 284. We're also available through our website contact form, where you can schedule a consultation or request a callback at your convenience.",
      },
      {
        keywords: [
          "projects",
          "portfolio",
          "past",
          "previous",
          "examples",
          "work",
        ],
        response:
          "Duke Developers has completed numerous successful projects including the Westside Office Complex, Riverfront Residences, and Central Medical Plaza. Our portfolio spans residential developments, commercial buildings, healthcare facilities, and sustainable energy installations. Each project demonstrates our commitment to quality, innovation, and client satisfaction.",
      },
      {
        keywords: [
          "permits",
          "approval",
          "regulations",
          "code",
          "legal",
          "compliance",
        ],
        response:
          "Our team handles all necessary permits and ensures compliance with local building codes and regulations. We have established relationships with local authorities and understand the approval processes for different project types across various jurisdictions. This expertise minimizes delays and ensures your project progresses smoothly through regulatory requirements.",
      },
      {
        keywords: ["warranty", "guarantee", "quality", "assurance"],
        response:
          "Duke Developers stands behind our work with comprehensive warranties, including a 1-year workmanship warranty on all projects and coordination of manufacturer warranties on materials and systems. Our quality control process includes regular inspections, third-party testing where appropriate, and a thorough completion checklist to ensure your project is built to last.",
      },
      {
        keywords: ["software", "it", "technology", "digital", "app"],
        response:
          "Our IT division provides custom software solutions to support construction and property management. We develop project management systems, client portals, building automation integrations, and digital twins of constructed facilities. These technologies improve efficiency, enhance communication, and provide long-term value beyond the construction phase.",
      },
      {
        keywords: ["energy", "solar", "renewable", "power", "electricity"],
        response:
          "Duke Developers specializes in renewable energy integration, particularly solar installations for both residential and commercial properties. We design and implement energy systems that reduce operating costs and environmental impact. Our team can assess your property's energy needs and develop custom solutions that maximize efficiency and sustainability.",
      },
      {
        keywords: ["renovation", "remodel", "update", "upgrade"],
        response:
          "Our renovation services transform existing spaces for improved functionality, energy efficiency, and aesthetic appeal. Whether you're updating a historic property, converting a commercial space, or modernizing a residential interior, our team brings creative solutions that respect the building's character while incorporating contemporary features and sustainable practices.",
      },
    ];

    // Default response if no keywords match
    let responseText =
      "That's a great question. Our team would be happy to discuss this in detail. Would you like to contact a Duke Developers representative directly for more personalized assistance?";

    // Check for keyword matches
    const lowercaseQuestion = question.toLowerCase();
    for (const item of responses) {
      if (
        item.keywords.some((keyword) => lowercaseQuestion.includes(keyword))
      ) {
        responseText = item.response;
        break;
      }
    }

    // Add reference to previous conversation if appropriate
    if (shouldReferenceHistory && chatHistory.length > 0) {
      const randomPreviousTopic =
        chatHistory[Math.floor(Math.random() * chatHistory.length)];
      const transition =
        personalityTraits.transitionPhrases[
          Math.floor(Math.random() * personalityTraits.transitionPhrases.length)
        ];
      responseText = `${responseText} ${transition} I noticed we discussed ${randomPreviousTopic} earlier. I hope that information was helpful.`;
    }

    return humanizeResponse(responseText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    sendMessage(input);
  };

  const sendMessage = (text) => {
    // Extract potential topic from message for chat history
    const potentialTopics = [
      "team",
      "services",
      "cost",
      "materials",
      "projects",
      "timeline",
      "contact",
      "energy",
      "renovation",
    ];

    const matchedTopic = potentialTopics.find((topic) =>
      text.toLowerCase().includes(topic)
    );

    if (matchedTopic && !chatHistory.includes(matchedTopic)) {
      setChatHistory([...chatHistory, matchedTopic]);
    }

    // Add user message
    const userMessage = { text, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking and typing with variable response time
    const thinkingTime = 1000 + Math.random() * 1500; // Between 1-2.5 seconds
    setTimeout(() => {
      const aiResponse = getAIResponse(text);
      setMessages((prev) => [...prev, { text: aiResponse, sender: "ai" }]);
      setIsTyping(false);
    }, thinkingTime);
  };

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="AI Assistant"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-medium">Duke Assistant</h3>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "mb-3 max-w-[80%] rounded-lg p-3 animate-in fade-in",
                    message.sender === "user"
                      ? "ml-auto bg-blue-500 text-white"
                      : "bg-white text-gray-800 shadow-sm"
                  )}
                >
                  {message.text}
                </div>
              ))}

              {/* Quick action buttons - only show after initial greeting */}
              {messages.length === 1 && !isTyping && (
                <div className="my-3 space-y-2">
                  <div className="text-xs text-gray-500 mb-2">
                    Ask me about:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => (
                      <motion.button
                        key={index}
                        className="text-sm bg-white border border-gray-200 rounded-lg p-2 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => sendMessage(action.query)}
                      >
                        {action.text}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {isTyping && (
                <div className="bg-white text-gray-800 max-w-[80%] rounded-lg p-3 shadow-sm mb-3">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-gray-200 bg-white"
            >
              <div className="flex rounded-lg border overflow-hidden">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our services..."
                  className="flex-1 px-4 py-2 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className={cn(
                    "px-4 bg-blue-600 text-white",
                    !input.trim() || isTyping
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-700"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
