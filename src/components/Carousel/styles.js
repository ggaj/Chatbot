import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
`;

export const MessageTitle = styled.div`
  margin-top: 15px;
  div {
    display: flex;

    span {
      background: #eee;
      padding: 8px 8px;
      border-radius: 5px;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      margin-bottom: 4px;
    }

    &:first-child {
      span {
        border-top-left-radius: 15px;
      }
    }

    &:last-child {
      span {
        border-bottom-left-radius: 15px;
      }
    }
`;

export const Card = styled.div`
  padding: 0px 2px;
  display: flex;
  overflow-x: auto;

  div {
    margin-left: 2px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eee;
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
      border: none;
      width: 100%;
      padding: 5px 0;
      margin: 3px 0;
      border-radius: 4px;
      box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.2);

      &:hover {
        background: ${lighten(0.05, '#eee')};
      }
    }
  }
`;
