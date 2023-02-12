/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert } from 'react-native';

import {
  ButtonCategory,
  ButtonCreate,
  Container,
  InputDescription,
  InputTitle,
  TextButtonCreate,
  Title,
  WrapperButtonCreate,
  WrapperButtonsCategory,
  WrapperForm,
} from './styles';
import { NavBar } from '../../components/NavBar';
import { ITodo, useTodo } from '../../hooks/useTodo';

export const Create = ({ navigation }: any) => {
  const { createTodo } = useTodo();

  const [todo, setTodo] = useState<ITodo>({} as ITodo);

  async function handleCreateTodo() {
    try {
      const newTodo =
        todo.name && todo.category && todo.text
          ? {
              id: String(new Date().getTime()),
              name: todo.name,
              category: todo.category,
              text: todo.text,
            }
          : null;

      if (!newTodo) {
        return;
      }

      console.log(newTodo);
      await createTodo({
        id: String(new Date().getTime()),
        name: todo.name,
        category: todo.category,
        text: todo.text,
      }).then(() => {
        Alert.alert('Task criada com sucesso');
      });
    } catch (error) {
      throw new Error('Error to create todo');
    }
  }

  return (
    <Container>
      <NavBar navigation={navigation} />
      <WrapperForm>
        <Title>Titulo da task</Title>
        <InputTitle
          placeholder="Digite o titulo da task"
          onChange={(e) => {
            setTodo({
              ...todo,
              name: e.nativeEvent.text,
            });
          }}
        />
        <Title>Categoria</Title>
        <WrapperButtonsCategory>
          <ButtonCategory
            style={{
              backgroundColor: '#DBECF6',
              opacity: todo.category === 'task' ? 1 : 0.5,
            }}
            onPress={() => {
              setTodo({
                ...todo,
                category: 'task',
              });
            }}>
            <FontAwesome name="file-text-o" size={24} color="#194A66" />
          </ButtonCategory>
          <ButtonCategory
            onPress={() => {
              setTodo({
                ...todo,
                category: 'time',
              });
            }}
            style={{
              backgroundColor: '#FEF5D3',
              opacity: todo.category === 'time' ? 1 : 0.5,
            }}>
            <Feather name="calendar" size={24} color="#403100" />
          </ButtonCategory>
          <ButtonCategory
            onPress={() => {
              setTodo({
                ...todo,
                category: 'goal',
              });
            }}
            style={{
              backgroundColor: '#E7E2F3',
              opacity: todo.category === 'goal' ? 1 : 0.5,
            }}>
            <AntDesign name="Trophy" size={24} color="#4A3780" />
          </ButtonCategory>
        </WrapperButtonsCategory>
        <Title>Descrição</Title>
        <InputDescription
          placeholder="Digite a descrição da task"
          onChange={(e) => {
            setTodo({
              ...todo,
              text: e.nativeEvent.text,
            });
          }}
        />
      </WrapperForm>
      <WrapperButtonCreate>
        <ButtonCreate onPress={() => handleCreateTodo()}>
          <TextButtonCreate>Criar</TextButtonCreate>
        </ButtonCreate>
      </WrapperButtonCreate>
    </Container>
  );
};
