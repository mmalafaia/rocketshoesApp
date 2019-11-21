import React, { Component } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

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

const DATA = [
  {
    id: '01',
    desc: 'Tênis de Caminhada Leve Confortável com descrição muito grande',
    title: 'R$ 129,90',
  },
  {
    id: '02',
    desc: 'Tênis de Caminhada Leve Confortável',
    title: 'R$ 89,90',
  },
  {
    id: '03',
    desc: 'Tênis foda',
    title: 'R$ 249,90',
  },
  {
    id: '04',
    desc: 'Tênis foda',
    title: 'R$ 249,90',
  },
  {
    id: '05',
    desc: 'Tênis foda',
    title: 'R$ 299,90',
  },
];

function Item({ product }) {
  return (
    <ItemBox>
      <ProductBox>
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: `${product.image}`,
          }}
        />
        <ItemText>{product.title}</ItemText>
        <ItemPrice>{product.priceFormatted}</ItemPrice>
      </ProductBox>
      <CartButton>
        <CartIconView>
          <Icon name="add-shopping-cart" size={19} color={colors.light} />
          <CartIconText>1</CartIconText>
        </CartIconView>
        <CartButtonText>ADICIONAR</CartButtonText>
      </CartButton>
    </ItemBox>
  );
}

export default class Main extends Component {
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

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          data={products}
          renderItem={({ item }) => <Item product={item} />}
          keyExtractor={item => String(item.id)}
          horizontal
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Rocketshoes',
};
