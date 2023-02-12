import { MaterialCommunityIcons, FontAwesome, Feather, AntDesign } from '@expo/vector-icons';

import {
  Button,
  Container,
  Content,
  Icon,
  Text,
  WrapperButton,
  WrapperIcon,
  WrapperText,
} from './styles';
import { ITodo, useTodo } from '../../hooks/useTodo';

export const Todo = ({ id, text, category, name, completed }: ITodo) => {
  const { deleteTodo, updateTodo } = useTodo();

  return (
    <Container
      style={{
        backgroundColor: completed ? '#fff' : '#fff',
      }}>
      <Content>
        <WrapperIcon>
          <Icon
            style={{
              backgroundColor:
                category === 'task'
                  ? '#DBECF6'
                  : category === 'time'
                  ? '#FEF5D3'
                  : category === 'goal'
                  ? '#E7E2F3'
                  : '#fff',
              opacity: completed ? 0.5 : 1,
            }}>
            {category === 'task' ? (
              <FontAwesome name="file-text-o" size={24} color="#194A66" />
            ) : category === 'time' ? (
              <Feather name="calendar" size={24} color="#403100" />
            ) : category === 'goal' ? (
              <AntDesign name="Trophy" size={24} color="#4A3780" />
            ) : null}
          </Icon>
        </WrapperIcon>
        <WrapperText>
          <Text
            style={{
              textDecorationLine: completed ? 'line-through' : 'none',
              color: completed ? '#ccc' : '#000',
            }}>
            {text.substring(0, 80)}
          </Text>
        </WrapperText>
        <WrapperButton>
          <Button
            onLongPress={() => {
              deleteTodo(id);
            }}
            onPress={() => {
              updateTodo(id);
            }}>
            {completed ? (
              <MaterialCommunityIcons name="checkbox-marked" size={28} color="#4A3780" />
            ) : (
              <MaterialCommunityIcons name="checkbox-blank-outline" size={28} color="#4A3780" />
            )}
          </Button>
        </WrapperButton>
      </Content>
    </Container>
  );
};
