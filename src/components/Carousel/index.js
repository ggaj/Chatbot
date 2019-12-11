import React from 'react';

import { Container, Card, ImageContent, Menu } from './styles';

export default function Carousel({ payload = [] }) {
  return (
    <Container>
      {payload.map(card => (
        <Card>
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
              {card.menus.map(menu => (
                <button className="button-menu" type="submit">
                  {menu}
                </button>
              ))}
            </div>
          </Menu>
        </Card>
      ))}
    </Container>
  );
}
