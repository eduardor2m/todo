import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';

import {
  ButtonCategory,
  Container,
  InputDescription,
  InputTitle,
  Title,
  WrapperButtonsCategory,
  WrapperForm,
} from './styles';
import { NavBar } from '../../components/NavBar';

export const Create = ({ navigation }: any) => {
  return (
    <Container>
      <NavBar navigation={navigation} />
      <WrapperForm>
        <Title>Titulo da task</Title>
        <InputTitle placeholder="Digite o titulo da task" />
        <Title>Categoria</Title>
        <WrapperButtonsCategory>
          <ButtonCategory
            style={{
              backgroundColor: '#DBECF6',
            }}>
            <FontAwesome name="file-text-o" size={24} color="#194A66" />
          </ButtonCategory>
          <ButtonCategory
            style={{
              backgroundColor: '#FEF5D3',
            }}>
            <Feather name="calendar" size={24} color="#403100" />
          </ButtonCategory>
          <ButtonCategory
            style={{
              backgroundColor: '#E7E2F3',
            }}>
            <AntDesign name="Trophy" size={24} color="#4A3780" />
          </ButtonCategory>
        </WrapperButtonsCategory>
        <Title>Descrição</Title>
        <InputDescription placeholder="Digite a descrição da task" />
      </WrapperForm>
    </Container>
  );
};
