import React from 'react';

import { Container, Image, Info } from './styles';

export default function CardInfo({ images = [], messages = [] }) {
  return (
    <Container>
      <Image>
        <div>
          {images.map(image => (
            <img src={image.source} alt={image.title} />
          ))}
        </div>
      </Image>
      <Info>
        <div>
          {messages.map(message => (
            <span>{message}</span>
          ))}
        </div>
      </Info>
    </Container>
  );
}
