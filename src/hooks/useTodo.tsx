/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface ITodo {
  id: string;
  name: string;
  category: string;
  text: string;
  completed?: boolean;
}

interface ITodoContextData {
  todos: ITodo[];
  createTodo: (todo: ITodo) => Promise<void>;
  indexTodos: () => Promise<ITodo[]>;
  deleteTodo: (id: string) => Promise<void>;
  updateTodo: (id: string) => Promise<void>;
}

interface ITodoProviderProps {
  children: ReactNode;
}

const todoContext = createContext<ITodoContextData>({} as ITodoContextData);

export function TodoProvider({ children }: ITodoProviderProps) {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const key = '@Todo:todos';

  useEffect(() => {
    indexTodos();
  }, []);

  async function createTodo(todo: ITodo) {
    try {
      const newTodo = {
        id: todo.id,
        name: todo.name,
        category: todo.category,
        text: todo.text,
      };

      setTodos([...todos, newTodo]);

      await AsyncStorage.setItem(key, JSON.stringify([...todos, newTodo]));

      return;
    } catch (error) {
      throw new Error('Error to create todo');
    }
  }

  async function indexTodos() {
    try {
      const todos = await AsyncStorage.getItem(key);

      if (!todos) {
        return;
      }

      const parsedTodos = JSON.parse(todos);

      setTodos(parsedTodos);

      return parsedTodos;
    } catch (error) {
      throw new Error('Error to index todos');
    }
  }

  async function updateTodo(id: string) {
    const findTodo = todos.find((todo) => todo.id === id);

    if (!findTodo) {
      return;
    }

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(newTodos);

    await AsyncStorage.setItem(key, JSON.stringify(newTodos));
  }

  async function deleteTodo(id: string) {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);

    await AsyncStorage.setItem(key, JSON.stringify(newTodos));
  }

  return (
    <todoContext.Provider
      value={{
        todos,
        createTodo,
        indexTodos,
        updateTodo,
        deleteTodo,
      }}>
      {children}
    </todoContext.Provider>
  );
}

export function useTodo(): ITodoContextData {
  const context = useContext(todoContext);

  return context;
}
