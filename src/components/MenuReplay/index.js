import React from 'react';

import { Container, InfoReplay, Replies } from './styles';

export default function MenuReplay({ infos = [], replies = [] }) {
  return (
    <Container>
      {infos.length > 0 && (
        <InfoReplay>
          {infos.map(info => (
            <div>{info}</div>
          ))}
        </InfoReplay>
      )}
      <Replies>
        {replies.map(replay => (
          <div>
            <button type="button">{replay}</button>
          </div>
        ))}
      </Replies>
    </Container>
  );
}
