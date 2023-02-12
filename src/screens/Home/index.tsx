/* eslint-disable no-unused-expressions */
import { Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
  ButtonDelete,
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
  const { todos, deleteTodo } = useTodo();

  const todosComplets = todos.filter((todo) => todo.completed);
  const todosIncomplets = todos.filter((todo) => !todo.completed);

  return (
    <Container>
      <Header navigation={navigation} />
      <ListTodos
        data={todosIncomplets}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }: any) => (
          <Swipeable
            renderRightActions={() => (
              <ButtonDelete onPress={() => deleteTodo(item.id)}>
                <Feather name="trash" size={24} color="#fff" />
              </ButtonDelete>
            )}>
            <Todo
              text={item.text}
              name={item.name}
              category={item.category}
              id={item.id}
              completed={false}
            />
          </Swipeable>
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
          <Swipeable
            renderRightActions={() => (
              <ButtonDelete onPress={() => deleteTodo(item.id)}>
                <Feather name="trash" size={24} color="#fff" />
              </ButtonDelete>
            )}>
            <Todo
              text={item.text}
              name={item.name}
              category={item.category}
              id={item.id}
              completed
            />
          </Swipeable>
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
