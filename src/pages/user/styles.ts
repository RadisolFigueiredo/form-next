import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #2a2a2a;
  position: absolute;
  border-radius: 8px;
  background-color: rgba(29, 29, 29, 0.5);
`;

export const Avatar = styled.div`
  height: 78px;
  width: 78px;
  background-color: #47e0ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-bottom: 40px;
`;

export const InitialLetters = styled.p`
  background-color: #47e0ff;
  color: #000000;
  font-size: 25px;
  font-weight: 500px;
  line-height: 32.5px;
  position: absolute;
`;

export const Title = styled.h1`
  background-color: transparent;
  color: #ffffff;
  font-size: 45px;
  font-weight: 700px;
  line-height: 58.5px;
`;

export const Birth = styled.p`
  background-color: transparent;
  color: #ffffff;
  font-size: 18px;
  font-weight: 300px;
  line-height: 23.4px;
`;
