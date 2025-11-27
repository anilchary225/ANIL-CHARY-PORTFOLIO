import React, { useEffect, useRef, useState } from 'react';
import './ChatBot.css';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';


function ChatBot() {
	const isInitialized = useRef(false);

	useEffect(() => {
		if (!isInitialized.current) {
			createChat({
				webhookUrl: 'http://localhost:5678/webhook/57ab7423-42bf-4588-b576-c784a34158ce/chat',
				target: '#n8n-chat',
				mode: 'window',
				chatInputKey: 'chatInput',
				chatSessionKey: 'sessionId',
				loadPreviousSession: true,
				showWelcomeScreen: false,
				defaultLanguage: 'en',
				initialMessages: [
					'Hello there! 🤖',
					"I\'m Ani, your friendly portfolio assistant. Ask me anything about Anil's skills, experience, or projects!",
				],
				i18n: {
					en: {
						title: '👋 Hello from Ani!',
						subtitle: "I'm here to help you learn more about Anil's journey ✨",
						getStarted: 'Start Chat',
						inputPlaceholder: 'Ask me anything...',
					},
				},
				enableStreaming: false,
			});
			isInitialized.current = true;
		}


	}, []);



	return (
		<>
		
		</>
	);
}

export default ChatBot;