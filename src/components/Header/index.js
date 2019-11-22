import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../services/navigation';

import {
  Wrapper,
  Container,
  LogoButton,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <LogoButton onPress={() => NavigationService.navigate('Home')}>
          <Logo />
        </LogoButton>
        <BasketContainer onPress={() => NavigationService.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>0</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
