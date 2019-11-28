import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import colors from '../../styles/colors';

import {
  Container,
  List,
  ItemBox,
  ItemImageBox,
  ItemDetailBox,
  DeleteButton,
  ItemDetailBoxText,
  ItemDetailBoxPrice,
  ItemSubTotalBox,
  ItemSubTotalAmountBox,
  IncreaseButton,
  DecreaseButton,
  ItemSubTotalBoxAmount,
  ItemSubTotalBoxPrice,
  ItemTotalBox,
  ItemTotalBoxText,
  ItemTotalBoxPrice,
  OrderButton,
  OrderButtonText,
} from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0),
    ),
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })),
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ItemBox>
        <List
          data={cart}
          renderItem={({ item }) => (
            <>
              <ItemImageBox>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={{
                    uri: item.image,
                  }}
                />
                <ItemDetailBox>
                  <ItemDetailBoxText>{item.title}</ItemDetailBoxText>
                  <ItemDetailBoxPrice>{item.priceFormatted}</ItemDetailBoxPrice>
                </ItemDetailBox>
                <DeleteButton
                  onPress={() => dispatch(CartActions.removeFromCart(item.id))}
                >
                  <Icon
                    name="delete-forever"
                    size={23}
                    color={colors.primary}
                  />
                </DeleteButton>
              </ItemImageBox>
              <ItemSubTotalBox>
                <ItemSubTotalAmountBox>
                  <DecreaseButton onPress={() => decrement(item)}>
                    <Icon
                      name="remove-circle-outline"
                      size={23}
                      color={colors.primary}
                    />
                  </DecreaseButton>
                  <ItemSubTotalBoxAmount>{item.amount}</ItemSubTotalBoxAmount>
                  <IncreaseButton onPress={() => increment(item)}>
                    <Icon
                      name="add-circle-outline"
                      size={23}
                      color={colors.primary}
                    />
                  </IncreaseButton>
                </ItemSubTotalAmountBox>
                <ItemSubTotalBoxPrice>{item.subtotal}</ItemSubTotalBoxPrice>
              </ItemSubTotalBox>
            </>
          )}
          keyExtractor={item => String(item.id)}
        />
        <ItemTotalBox>
          <ItemTotalBoxText>TOTAL</ItemTotalBoxText>
          <ItemTotalBoxPrice>{total}</ItemTotalBoxPrice>
        </ItemTotalBox>
        <OrderButton>
          <OrderButtonText>FINALIZAR PEDIDO</OrderButtonText>
        </OrderButton>
      </ItemBox>
    </Container>
  );
}
