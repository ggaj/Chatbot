import styled from 'styled-components';
import { darken } from 'polished';

export const MessageInput = styled.div`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    background: #fff;
  }
  display: flex;
  flex-direction: row-reverse;

  span {
    margin: 10px 10px;
    padding: 10px 20px;
    border-radius: 20px;
    background: #444;
    color: #fff;
  }
`;

export const Container = styled.div`
  height: 100%;
  background: #fff;
  max-width: 980px;
  margin: 0 auto;
  padding: 0px 20px;
`;

export const Content = styled.div`
  height: calc(100% - 170px);
  display: flex;
`;

export const Card = styled.div`
  margin: 0 2px;
`;

export const FooterMessage = styled.div`
  height: 60px;
  background: #fafafa;

  form {
    display: flex;

    input {
      margin: 10px;
      height: 40px;
      border: none;
      padding: 0 15px;
      border-radius: 20px;
      flex: 1;
    }
  }
`;

export const Send = styled.button`
  border: none;
  margin: 10px 15px 0 5px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: none;
  transition: background 0.3s;

  &:hover {
    background: ${darken(0.07, '#fafafa')};
  }
`;

export const ImageContent = styled.div`
  img {
    display: block;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 100px;
    width: 200px;
  }
`;

export const Menu = styled.div`
  background: #fafafa;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 200px;
  padding: 15px;

  .title {
    padding: 0px 0 10px 0;
    font-weight: bold;
    font-size: 14px;
  }

  .buttons-menu {
    display: flex;
    flex-direction: column;

    .button-menu {
      background: #fff;
      width: 100%;
      padding: 5px 0;
      margin: 2px 0;
      border-radius: 4px;
      border: none;
    }
  }
`;
