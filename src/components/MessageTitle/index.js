import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function MessageTitle({ payload = [] }) {
  return (
    <Container>
      {payload.map((message, index) => (
        <div key={String(index)}>
          <span>{message}</span>
        </div>
      ))}
    </Container>
  );
}

MessageTitle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  payload: PropTypes.array.isRequired,
};
