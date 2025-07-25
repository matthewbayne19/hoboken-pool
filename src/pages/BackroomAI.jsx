import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo_dark from '../assets/logo_dark.png';
import '../styles/Homepage.css';
import '../styles/Map.css';
import '../styles/BarCard.css';
import '../styles/BackroomAI.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  //Avatar,
} from '@chatscope/chat-ui-kit-react';

const BOT_AVATAR = logo_dark;
const BOT_NAME = 'Backroom AI';

const SYSTEM_MESSAGE = "Welcome to Backroom AI! Ask for a bar crawl plan or amenities. General questions are restricted.";

const BackroomAI = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      message: SYSTEM_MESSAGE,
      sentTime: 'just now',
      sender: BOT_NAME,
      direction: 'incoming',
      position: 'single',
      avatar: BOT_AVATAR,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef();

  const handleSend = async (userMessage) => {
    if (!userMessage.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        message: userMessage,
        sentTime: 'just now',
        sender: 'You',
        direction: 'outgoing',
        position: 'single',
      },
    ]);
    setIsTyping(true);
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          message: "I'm here to help you plan your night! (This is a placeholder response.)",
          sentTime: 'just now',
          sender: BOT_NAME,
          direction: 'incoming',
          position: 'single',
          avatar: BOT_AVATAR,
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <main className="backroomai-root">
      <img src={logo_dark} alt="Logo" className="backroomai-logo" />
      <button
        className="map-back-btn backroomai-back-btn"
        onClick={() => navigate('/')}
        aria-label="Back to home"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 10L13.5 16L19.5 22" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="backroomai-chatbox-wrapper">
        <MainContainer style={{ background: 'transparent', borderRadius: 18, boxShadow: '0 0 20px 3px #1ed76044, 0 4px 32px #0006' }}>
          <ChatContainer style={{ background: '#000', borderRadius: 18 }}>
            <MessageList
              typingIndicator={isTyping ? <TypingIndicator content="Backroom AI is typing..." /> : null}
              style={{ background: '#000', borderRadius: 18 }}
            >
              {messages.map((msg, idx) => (
                <Message
                  key={idx}
                  model={msg}
                  avatarPosition={msg.direction === 'incoming' ? 'tl' : 'tr'}
                  avatar={msg.avatar}
                  style={{
                    background: msg.direction === 'incoming' ? '#1ed760' : '#23262f',
                    color: msg.direction === 'incoming' ? '#181a20' : '#fff',
                    fontFamily: 'Oswald, Arial, sans-serif',
                    fontWeight: 700,
                  }}
                />
              ))}
            </MessageList>
            <MessageInput
              placeholder="Type your message..."
              onSend={handleSend}
              attachButton={false}
              style={{ background: '#181a20', color: '#fff', fontFamily: 'Oswald, Arial, sans-serif', fontWeight: 700, borderRadius: 0, border: 'none' }}
              ref={inputRef}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </main>
  );
};

export default BackroomAI; 