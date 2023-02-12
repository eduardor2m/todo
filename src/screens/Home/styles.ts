import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #e5e9ed;
`;

export const ListTodos = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 32,
  },
})`
  width: 100%;
  height: 430px;
  padding: 0 24px;
  margin-top: -32px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  width: 96px;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 10px;
  margin-left: -15px;
`;

export const ItemSeparator = styled.View`
  width: 100%;
  margin-top: -15px;
  height: 1px;
  background-color: #e5e9ed;
`;

export const WrapperEmptyList = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const EmptyList = styled.Text`
  color: #4a3780;
  font-size: 16px;
  line-height: 24px;
`;

export const WrapperTitle = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-top: 32px;
  padding: 0 24px;
`;

export const Title = styled.Text`
  color: #4a3780;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`;

export const ListTodosComplets = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 32,
  },
})`
  width: 100%;
  height: 530px;
  padding: 0 24px;
  margin-top: 32px;
`;
