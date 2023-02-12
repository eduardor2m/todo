import { StatusBar } from 'expo-status-bar';

import { TodoProvider } from './src/hooks/useTodo';
import Router from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <TodoProvider>
        <Router />
      </TodoProvider>
    </>
  );
}
