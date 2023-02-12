import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 230px;
  background-color: #4a3780;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperButton = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const WrapperTitle = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  margin-top: 40px;
  font-weight: 600;
`;
