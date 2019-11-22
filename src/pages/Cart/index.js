import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }
  function Item({ product }) {
    return (
      <>
        <ItemImageBox>
          <Image
            style={{ width: 80, height: 80 }}
            source={{
              uri: product.image,
            }}
          />
          <ItemDetailBox>
            <ItemDetailBoxText>{product.title}</ItemDetailBoxText>
            <ItemDetailBoxPrice>{product.priceFormatted}</ItemDetailBoxPrice>
          </ItemDetailBox>
          <DeleteButton onPress={() => removeFromCart(product.id)}>
            <Icon name="delete-forever" size={23} color={colors.primary} />
          </DeleteButton>
        </ItemImageBox>
        <ItemSubTotalBox>
          <ItemSubTotalAmountBox>
            <DecreaseButton onPress={() => decrement(product)}>
              <Icon
                name="remove-circle-outline"
                size={23}
                color={colors.primary}
              />
            </DecreaseButton>
            <ItemSubTotalBoxAmount>{product.amount}</ItemSubTotalBoxAmount>
            <IncreaseButton onPress={() => increment(product)}>
              <Icon
                name="add-circle-outline"
                size={23}
                color={colors.primary}
              />
            </IncreaseButton>
          </ItemSubTotalAmountBox>
          <ItemSubTotalBoxPrice>{product.subtotal}</ItemSubTotalBoxPrice>
        </ItemSubTotalBox>
      </>
    );
  }

  return (
    <Container>
      <ItemBox>
        <List
          data={cart}
          renderItem={({ item }) => <Item product={item} />}
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
const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0),
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
