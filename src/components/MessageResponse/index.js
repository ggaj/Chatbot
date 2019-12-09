import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function MessageResponse({ message }) {
  return (
    <Container>
      <span>{message}</span>
    </Container>
  );
}

MessageResponse.propTypes = {
  message: PropTypes.element.isRequired,
};
