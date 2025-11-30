import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText, X, Send, Sparkles, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Message } from '../types';
import { sendMessageStream } from '../services/geminiService';
import { GenerateContentResponse } from '@google/genai';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hi! I'm Ging's AI assistant. Ask me anything about her research, teaching, or background.",
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Placeholder message for AI response
    const aiMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: aiMessageId,
      role: 'model',
      text: '',
      timestamp: Date.now(),
      isStreaming: true
    }]);

    try {
      if (!process.env.API_KEY) {
         // Fallback if no API key is present in env (Development mode safety)
         setMessages(prev => prev.map(msg => 
            msg.id === aiMessageId 
            ? { ...msg, text: "I'm sorry, I can't connect to the AI service right now (API Key missing). Please try contacting Ging via email.", isStreaming: false } 
            : msg
         ));
         setIsLoading(false);
         return;
      }

      const stream = await sendMessageStream(userMessage.text);
      
      let fullText = '';
      
      for await (const chunk of stream) {
         const c = chunk as GenerateContentResponse;
         const text = c.text;
         if (text) {
            fullText += text;
            setMessages(prev => prev.map(msg => 
               msg.id === aiMessageId 
               ? { ...msg, text: fullText } 
               : msg
            ));
         }
      }

      setMessages(prev => prev.map(msg => 
        msg.id === aiMessageId ? { ...msg, isStreaming: false } : msg
      ));

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessageId 
        ? { ...msg, text: "I apologize, but I encountered an error. Please try again later.", isStreaming: false } 
        : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="bg-academic-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-academic-800 transition-all flex items-center gap-2 group"
            >
              <Sparkles size={20} className="group-hover:animate-pulse" />
              <span className="font-medium pr-1">Ask AI</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
          >
            {/* Header */}
            <div className="bg-academic-700 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Sparkles size={18} />
                <h3 className="font-medium">Research Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-academic-600 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-academic-600 text-white rounded-tr-none'
                        : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none'
                    }`}
                  >
                     {msg.role === 'model' ? (
                        <div className="prose prose-sm prose-slate max-w-none">
                           <ReactMarkdown>{msg.text}</ReactMarkdown>
                           {msg.isStreaming && <span className="inline-block w-1.5 h-4 bg-academic-400 ml-1 animate-pulse align-middle"></span>}
                        </div>
                     ) : (
                        msg.text
                     )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about my research..."
                  disabled={isLoading}
                  className="w-full bg-slate-100 text-slate-900 placeholder-slate-500 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-academic-400 focus:bg-white transition-all text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-2 p-2 bg-academic-600 text-white rounded-full hover:bg-academic-700 disabled:opacity-50 disabled:hover:bg-academic-600 transition-colors"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-[10px] text-slate-400">Powered by Gemini. AI can make mistakes.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Assistant;