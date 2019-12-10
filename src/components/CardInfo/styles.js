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

    img {
      max-height: 120px;
      height: 100%;
      padding: 3px;
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

    span {
      line-height: 1.5em;
    }
  }
`;
