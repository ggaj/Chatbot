import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  overflow-x: auto;
  div {
    display: inline-flex;
    border: 1px solid #eee;
    border-radius: 6px;
    padding: 3px;

    img {
      max-height: 120px;
      height: 100%;

      & + img {
        margin-left: 4px;
        border-left: 1px solid #eee;
        padding-left: 4px;
      }
    }
  }
`;

export const Info = styled.div`
  div {
    display: inline-flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 8px 10px;
    background: #eee;
    margin-top: 2px;

    span {
      line-height: 1.5em;
    }
  }
`;
