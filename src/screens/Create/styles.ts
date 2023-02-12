import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #e5e9ed;
`;

export const WrapperForm = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: 32px;
`;

export const Title = styled.Text`
  color: #4a3780;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  margin-top: 20px;
`;

export const InputTitle = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 16px;

  padding: 0 16px;
`;

export const WrapperButtonsCategory = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonCategory = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const InputDescription = styled.TextInput`
  width: 100%;
  height: 230px;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 16px;
  padding: 16px;
`;

export const WrapperButtonCreate = styled.View`
  width: 100%;
  padding: 0 24px;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonCreate = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  background-color: #4a3780;
  align-items: center;
  justify-content: center;
`;

export const TextButtonCreate = styled.Text`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;
