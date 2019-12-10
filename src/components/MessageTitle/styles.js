import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px 0px;
  div {
    display: flex;

    span {
      background: #fafafa;
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
