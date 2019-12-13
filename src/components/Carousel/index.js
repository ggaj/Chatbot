import React from 'react';

import { Container, MessageTitle, Card, ImageContent, Menu } from './styles';

export default function Carousel({ payload = [] }) {
  return (
    <Container>
      <MessageTitle>
        {payload.messages.map((message, index) => (
          <div key={String(index)}>
            <span>{message}</span>
          </div>
        ))}
      </MessageTitle>
      <Card>
        {payload.cards.map((card, index) => (
          <div key={String(index)}>
            <ImageContent>
              <img
                className="img-first"
                src={card.image.source}
                alt={card.image.alt}
              />
            </ImageContent>
            <Menu>
              <div className="title">{card.title}</div>
              <div className="buttons-menu">
                {card.menus.map((menu, index) => (
                  <button
                    className="button-menu"
                    type="submit"
                    key={String(index)}
                  >
                    {menu}
                  </button>
                ))}
              </div>
            </Menu>
          </div>
        ))}
      </Card>
    </Container>
  );
}
