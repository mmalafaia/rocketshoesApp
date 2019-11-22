import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import colors from '../../styles/colors';

import {
  Container,
  List,
  ItemBox,
  ProductBox,
  ItemText,
  ItemPrice,
  CartButton,
  CartButtonText,
  CartIconView,
  CartIconText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          data={products}
          horizontal
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ItemBox>
              <ProductBox>
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{
                    uri: `${item.image}`,
                  }}
                />
                <ItemText>{item.title}</ItemText>
                <ItemPrice>{item.priceFormatted}</ItemPrice>
              </ProductBox>
              <CartButton onPress={() => this.handleAddProduct(item.id)}>
                <CartIconView>
                  <Icon
                    name="add-shopping-cart"
                    size={19}
                    color={colors.light}
                  />
                  <CartIconText>0</CartIconText>
                </CartIconView>
                <CartButtonText>ADICIONAR</CartButtonText>
              </CartButton>
            </ItemBox>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount || 0;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
