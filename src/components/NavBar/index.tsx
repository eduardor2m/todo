import Ionions from '@expo/vector-icons/Ionicons';

import { Button, Container, Content, Title, View } from './styles';

interface NavBarProps {
  navigation: any;
}

export const NavBar = ({ navigation }: NavBarProps) => {
  return (
    <Container>
      <Content>
        <Button
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Ionions name="ios-arrow-back" size={24} color="#4A3780" />
        </Button>
        <Title>Criar</Title>
        <View />
      </Content>
    </Container>
  );
};
