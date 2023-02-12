import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

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

export const Todo = () => {
  const [check, setCheck] = useState(false);

  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  return (
    <Container>
      <Content>
        <WrapperIcon>
          <Icon>
            <Ionicons name="ios-logo-react" size={24} color="#194A66" />
          </Icon>
        </WrapperIcon>
        <WrapperText>
          <Text>{text.substring(0, 80)}</Text>
        </WrapperText>
        <WrapperButton>
          <Button
            onPress={() => {
              setCheck(!check);
            }}>
            {check ? (
              <MaterialCommunityIcons name="checkbox-marked" size={24} color="#4A3780" />
            ) : (
              <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="#4A3780" />
            )}
          </Button>
        </WrapperButton>
      </Content>
    </Container>
  );
};
