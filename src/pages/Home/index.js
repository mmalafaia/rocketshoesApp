import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount || 0;

      return sumAmount;
    }, {}),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

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
            <CartButton
              onPress={() => dispatch(CartActions.addToCartRequest(item.id))}
            >
              <CartIconView>
                <Icon name="add-shopping-cart" size={19} color={colors.light} />
                <CartIconText>{amount[item.id] || 0}</CartIconText>
              </CartIconView>
              <CartButtonText>ADICIONAR</CartButtonText>
            </CartButton>
          </ItemBox>
        )}
      />
    </Container>
  );
}
