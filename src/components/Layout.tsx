import styled from 'styled-components';

export const Main = styled.div`
  height: calc(100vh - 60px);
  background-color: #F4F6F8;
  padding: 1rem 10rem;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`

export const LeftPane = styled.div`
  width: 20vw;
  height: 20vh;
  max-height: 200px;
  display: flex;
`

export const RightPane = styled.div`
  flex-grow: 1;
`