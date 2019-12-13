import React from 'react';
import typing from '~/assets/typing.gif';

import { Type } from './styles';

export default function Typing() {
  // return <GifPlayer gif={typing} />;
  return <Type src={typing} alt="typing" />;
}
