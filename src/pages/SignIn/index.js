import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/chatbot.svg';

import { Container } from './styles';

export default function Login() {
  return (
    <Container>
      <img src={logo} alt="Chatbot" />

      <Form>
        <Input name="email" type="email" placeholder="Informe seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <hr />

        <button type="submit">Entrar</button>

        <Link to="/forgot_password">Esqueceu a senha</Link>
      </Form>
    </Container>
  );
}
