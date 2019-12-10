import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px 0px;
  max-width: 280px;
  width: 100%;
`;
export const InfoReplay = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-bottom: none;
  background: #fafafa;
  padding: 6px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;

  div {
    padding: 1px 0;
  }
`;
export const Replies = styled.div`
  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    button {
      border: none;
      border-bottom: 1px solid #eee;
      border-left: 1px solid #eee;
      border-right: 1px solid #eee;
      background: #fff;
      height: 30px;

      &:hover {
        background: #fafafa;
      }
    }

    &:first-child {
      button {
        border-top: 1px solid #eee;
      }
    }

    &:last-child {
      button {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
      }
    }
  }
`;
