import MessageTitle from '~/components/MessageTitle';
import Carousel from '~/components/Carousel';

export default function Action(intent) {
  let payload = {};
  switch (intent) {
    case 'welcome':
      payload = [
        {
          name: MessageTitle,
          payload: [
            'Olá, eu sou o seu Assistente Virtual Bemol e estou pronto para te atender !😉',
            'Que tal uma das opções abaixo, hein? 😉',
          ],
        },
      ];
      return payload;
    case 'carousel':
      payload = [
        {
          name: Carousel,
          payload: {
            card: {
              messageitle: 'Segue as informações para o processo',
              image: {
                source:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgYllltn5LVxLSGsYOyrVvNHjp9kFOmuRnuF6MRj6qHaEksZOu',
                title: 'Grêmio',
              },
              title: 'Grêmio vai ganhar qual título em 2020 ?',
              menus: ['Brasileirão', 'Brasil', 'Copa America'],
            },
          },
        },
      ];
      return payload;
    default:
      break;
  }
}
