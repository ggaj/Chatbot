import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function MessageTitle({ messages = [] }) {
  return (
    <Container>
      {messages.map(message => (
        <div>
          <span>{message}</span>
        </div>
      ))}
    </Container>
  );
}

MessageTitle.propTypes = {
  messages: PropTypes.element.isRequired,
};
