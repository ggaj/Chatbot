import styled from 'styled-components';

export const Container = styled.div``;

export const Image = styled.div`
  display: inline-block;
  /* flex: 1; */
  border: 1px solid #eee;
  border-radius: 6px;
  flex: 1;

  div {
    display: flex;
    flex: 1;

    img {
      display: flex;
      padding: 4px;

      height: 100%;
      /*max-height: 210px; */
    }
  }
`;

export const Info = styled.div`
  display: inline-block;
  border-radius: 10px;
  padding: 8px 10px;
  margin-top: 3px;
  background: #fafafa;
`;
