import React from 'react';
import { connect } from 'react-redux';

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

function Header({ cartSize }) {
  return (
    <Wrapper>
      <Container>
        <LogoButton onPress={() => NavigationService.navigate('Home')}>
          <Logo />
        </LogoButton>
        <BasketContainer onPress={() => NavigationService.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
