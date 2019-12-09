import styled from 'styled-components';

export const Container = styled.div``;

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
        background: #fafafa;
      }
    }
  }
`;
