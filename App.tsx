import { StatusBar } from 'expo-status-bar';

import Router from './src/routes';
import { Create } from './src/screens/Create';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <Router />
      <StatusBar style="light" />
    </>
  );
}
