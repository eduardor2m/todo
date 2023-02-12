import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 130px;
  background-color: #4a3780;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 24px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const View = styled.View`
  width: 40px;
  height: 40px;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`;
