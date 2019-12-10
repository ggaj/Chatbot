import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdSend } from 'react-icons/md';

import { Container, Content, FooterMessage, Send } from './styles';
import MessageResponse from '~/components/MessageResponse';

export default function Main() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessage = () => {
    setMessages([newMessage]);
    setNewMessage('');
  };

  useEffect(() => {}, [messages]);

  return (
    <Container>
      <Content>
        {messages.map(message => (
          <MessageResponse key={message} message={message} />
        ))}
      </Content>
      <FooterMessage>
        <Form onSubmit={handleMessage}>
          <Input
            name="message"
            placeholder="Aa"
            onChange={e => setNewMessage(e.target.value)}
          />

          <Send type="submit">
            <MdSend size="20" color="#333" />
          </Send>
        </Form>
      </FooterMessage>
    </Container>
  );
}
