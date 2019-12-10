import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  margin: 15px 0px;
`;

export const MessageTitle = styled.div`
  div {
    display: flex;

    span {
      background: #eee;
      padding: 8px 8px;
      border-radius: 5px;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      margin-bottom: 2px;
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
  }
`;

export const Replies = styled.div`
  display: flex;

  div {
    margin: 2px 4px;

    button {
      border: none;
      box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      padding: 4px 15px;
      background: #fff;

      &:hover {
        background: ${lighten(0.05, '#eee')};
      }
    }
  }
`;
