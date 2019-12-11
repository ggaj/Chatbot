import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function MessageResponse({ payload }) {
  return (
    <Container>
      <span>{payload}</span>
    </Container>
  );
}

MessageResponse.propTypes = {
  payload: PropTypes.string.isRequired,
};
