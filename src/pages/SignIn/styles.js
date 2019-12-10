import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  html,
  body,
  #root {
    height: 100%;
    background: #eee;
  }

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;

  img {
    margin-bottom: 10px;
    height: 90px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90%;

    input {
      text-align: center;
      outline: 0;
      background: rgba(0, 0, 0, 0.3);
      border: none;
      border-radius: 4px;
      height: 38px;
      padding: 0 4px;
      margin: 0 0 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.3);
      margin: 0px 0 10px;
    }

    button {
      height: 38px;
      background: #36005e;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.04, '#36005e')};
      }
    }

    a {
      color: #333;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.7;
      transition: opacity 0.2s;
      text-align: center;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
