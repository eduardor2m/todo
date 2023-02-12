import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 90px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 7.5px;
`;

export const WrapperIcon = styled.View`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #dbecf6;
  align-items: center;
  justify-content: center;
`;

export const WrapperText = styled.View`
  width: 60%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 14px;
  text-align: justify;
`;

export const WrapperButton = styled.View`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
