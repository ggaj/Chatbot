import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdSend } from 'react-icons/md';

import { Container, Content, FooterMessage, Send } from './styles';
import MessageResponse from '~/components/MessageResponse';
import MessageTitle from '~/components/MessageTitle';
import Actions from '~/controller/Chat';

export default function Main() {
  const [components, setComponents] = useState([]);
  const [data, setData] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [intent, setIntent] = useState('');

  const handleMessage = () => {
    const payload = {
      name: MessageResponse,
      payload: newMessage,
    };
    setComponents([...components, payload]);
    setNewMessage('');
    setIntent(newMessage.intent || 'carousel');
    setData([...data, payload]);
  };

  useEffect(() => {
    async function handleActions() {
      if (data.length > 0) {
        const payloads = await Actions(intent);
        console.log(payloads);
        payloads.map(payload => setComponents([...components, payload]));
      }
    }
    handleActions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Container>
      <Content>
        {components.map((component, index) => (
          <component.name key={String(index)} payload={component.payload} />
        ))}
      </Content>
      <FooterMessage>
        <Form onSubmit={handleMessage}>
          <Input
            name="message"
            value={newMessage}
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
