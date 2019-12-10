import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdSend } from 'react-icons/md';

import MessageTitle from '../../components/MessageTitle';
import QuickReplay from '~/components/QuickReplay';
import Carousel from '~/components/Carousel';

import {
  Container,
  Content,
  Card,
  FooterMessage,
  Send,
  Menu,
  ImageContent,
} from './styles';
import MessageResponse from '~/components/MessageResponse';
import MenuReplay from '~/components/MenuReplay';
import CardInfo from '~/components/CardInfo';

export default function Main() {
  return (
    <Container>
      <MessageTitle
        messages={[
          'Aguarde um momento enquanto eu consulto...',
          'Tudo certo, vi aqui que você já pode solicitar suas férias e tem direito a 30 dias, vamos lá',
          'Então vamos lá marcar suas férias ?',
        ]}
      />
      <MessageResponse message="Olá mundo" />
      <QuickReplay
        messages={['Deseja vender 10 dias de férias ?']}
        replies={['Não', 'Sim']}
      />
      <MenuReplay
        infos={['Valor Bruto: R$ 5.000,00', 'Valor Bruto: R$ 5.000,00']}
        replies={['Não', 'Sim']}
      />

      <CardInfo
        images={[
          {
            source:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgYllltn5LVxLSGsYOyrVvNHjp9kFOmuRnuF6MRj6qHaEksZOu',
            title: 'Grêmio o melhor',
          },
          {
            source:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgYllltn5LVxLSGsYOyrVvNHjp9kFOmuRnuF6MRj6qHaEksZOu',
            title: 'Grêmio o melhor',
          },
        ]}
        messages={[
          'Nome: Gildo Gomes de Araujo asda as as asas asasas assasas as as as asasasas asasasa ',
          'Saldo: R$ 1000,00',
        ]}
      />

      <Carousel
        cards={[
          {
            image: {
              source:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgYllltn5LVxLSGsYOyrVvNHjp9kFOmuRnuF6MRj6qHaEksZOu',
              title: 'Grêmio',
            },
            title: 'Grêmio vai ganhar qual título em 2020 ?',
            menus: ['Brasileirão', 'Brasil', 'Copa America'],
          },
          {
            image: {
              source:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgYllltn5LVxLSGsYOyrVvNHjp9kFOmuRnuF6MRj6qHaEksZOu',
              title: 'Grêmio',
            },
            title: 'Grêmio vai ganhar qual título em 2020 ?',
            menus: ['Brasileirão', 'Brasil', 'Copa America'],
          },
          {
            image: {
              source:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgYllltn5LVxLSGsYOyrVvNHjp9kFOmuRnuF6MRj6qHaEksZOu',
              title: 'Grêmio',
            },
            title: 'Grêmio vai ganhar qual título em 2020 ?',
            menus: ['Brasileirão', 'Brasil', 'Copa America'],
          },
        ]}
      />
      <FooterMessage>
        <Form>
          <Input name="message" placeholder="Aa" />

          <Send>
            <MdSend size="20" color="#333" />
          </Send>
        </Form>
      </FooterMessage>
    </Container>
  );
}
