/* eslint-disable no-unused-expressions */
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
import { useTodo } from '../../hooks/useTodo';

export const Home = ({ navigation }: any) => {
  const { todos } = useTodo();

  const todosComplets = todos.filter((todo) => todo.completed);
  const todosIncomplets = todos.filter((todo) => !todo.completed);

  return (
    <Container>
      <Header navigation={navigation} />
      <ListTodos
        data={todosIncomplets}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }: any) => (
          <Todo
            text={item.text}
            name={item.name}
            category={item.category}
            id={item.id}
            completed={false}
          />
        )}
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
        data={todosComplets}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }: any) => (
          <Todo text={item.text} name={item.name} category={item.category} id={item.id} completed />
        )}
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
