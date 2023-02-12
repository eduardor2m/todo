import {
  Container,
  EmptyList,
  ItemSeparator,
  ListTodos,
  ListTodosComplets,
  Title,
  WrapperEmptyList,
  WrapperTitle,
} from './styles';
import { Header } from '../../components/Header';
import { Todo } from '../../components/Todo';

export const Home = ({ navigation }: any) => {
  return (
    <Container>
      <Header navigation={navigation} />
      <ListTodos
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Todo />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        ListEmptyComponent={() => (
          <WrapperEmptyList>
            <EmptyList>Nenhuma tarefa encontrada</EmptyList>
          </WrapperEmptyList>
        )}
      />
      <WrapperTitle>
        <Title>Completas</Title>
      </WrapperTitle>
      <ListTodosComplets
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Todo />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        ListEmptyComponent={() => (
          <WrapperEmptyList>
            <EmptyList>Nenhuma tarefa encontrada</EmptyList>
          </WrapperEmptyList>
        )}
      />
    </Container>
  );
};
