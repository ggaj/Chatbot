import React from 'react';
import PropTypes from 'prop-types';

import { Container, MessageTitle, Replies } from './styles';

export default function QuickReplay({ messages = [], replies = [] }) {
  return (
    <Container>
      {messages.length > 0 ? (
        <>
          <MessageTitle>
            {messages.map(message => (
              <div>
                <span>{message}</span>
              </div>
            ))}
          </MessageTitle>
          <Replies>
            {replies.map(replay => (
              <div>
                <button type="button">{replay}</button>
              </div>
            ))}
          </Replies>
        </>
      ) : (
        <Replies>
          {replies.map(replay => (
            <div>
              <button type="button">{replay}</button>
            </div>
          ))}
        </Replies>
      )}
    </Container>
  );
}

MessageTitle.propTypes = {
  message: PropTypes.element.isRequired,
};
