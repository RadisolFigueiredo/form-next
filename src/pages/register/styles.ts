import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const BoxColumns = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FirstColumn = styled.div`
  width: 60%;
  border: 2px solid #2a2a2a;
  margin: 77px 36px 77px 100px;
  border-radius: 8px;
`;

export const BoxRegister = styled.div`
  margin: 0 77px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 25px;
  line-height: 130%;
  color: #ffffff;
  text-align: center;
  margin-bottom: 8px;
  margin-top: 54px;
`;

export const SubTitle = styled(Title)`
  font-weight: 300;
  font-size: 14px;
  color: #e7e7e7;
`;

export const BoxForm = styled.div`
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface InputProps {
  height?: string;
  textarea?: string;
  error?: boolean;
  selected?: boolean;
}

export const Input = styled.input<InputProps>`
  padding: 9px 16px;
  background: #202020;
  border: 1px solid;
  border-color: ${({ error }) => (error ? '#FA4D56' : '#414141')};
  border-radius: 8px;
  color: #888888;
  height: ${({ height }) => (height ? height : '56px')};
  font-size: 14px;
`;

export const Select = styled.select<InputProps>`
  background: #202020;
  border: 1px solid red;
  border-color: ${({ error }) => (error ? '#FA4D56' : '#414141')};
  border-radius: 8px;
  color: #888888;
  height: 56px;
  font-size: 14px;
  width: 100%;
  padding:  0 16px;

  option {
    padding: 16px;
    background: #202020;
    height: 300px;
  }
`;

export const Span = styled.span`
  margin: 5px 0 16px 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  display: flex;
  align-items: center;
  color: #fa4d56;
`;

export const InputCheckbox = styled(Input).attrs({
  type: 'checkbox',
})`
  width: 16px;
  accent-color: #00f2b1;
`;

interface ButtonProps {
  enabled: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  height: 56px;
  margin-bottom: 25px;
  background: ${({ enabled }) => (enabled ? '#00F2B1' : '#2a2a2a')};
  border-radius: 8px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: ${({ enabled }) => (enabled ? '#000000' : '#888888')};
`;

export const BoxCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
`;

export const BoxCheckboxWithError = styled(BoxCheckbox)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 87px;
`;

export const ReceiveNotification = styled.p`
  margin-left: 10px;
  padding-top: 20px;
  font-weight: 300;
  font-size: 14px;
  line-height: 130%;
  color: #e7e7e7;
`;

export const SecondColumn = styled.div`
  width: 40%;
  height: 100%;
  margin: 77px 0 0 36px;
`;

export const BoxImage = styled.div`
  padding-top: 77px;
`;

export const BoxText = styled.div`
  width: 353px;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  top: 45%;
  left: 70%;
  background-color: transparent;
`;

export const TitleSecondColumn = styled.p`
  font-weight: 700;
  font-size: 45px;
  line-height: 130%;
  display: flex;
  align-items: center;
  color: #ffffff;
  background-color: transparent;
`;

export const lineDivisor = styled.div`
  width: 43px;
  height: 11px;
  background: #00f2b1;
  border-radius: 20px;
  margin: 16px 0;
`;

export const SubTitleSecondColumn = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 130%;
  display: flex;
  align-items: center;
  color: #ffffff;
  background-color: transparent;
`;
