import { Entypo } from '@expo/vector-icons';

import { Button, Container, Content, Title, WrapperButton, WrapperTitle } from './styles';

interface HeaderProps {
  navigation: any;
}

export const Header = ({ navigation }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <WrapperButton>
          <Button
            onPress={() => {
              navigation.navigate('Create');
            }}>
            <Entypo name="add-to-list" size={20} color="#4A3780" />
          </Button>
        </WrapperButton>
        <WrapperTitle>
          <Title>Minha Lista</Title>
        </WrapperTitle>
      </Content>
    </Container>
  );
};
