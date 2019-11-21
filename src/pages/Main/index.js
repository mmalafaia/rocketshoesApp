import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';

import {
  Container,
  List,
  ItemBox,
  ItemText,
  ItemPrice,
  CartButton,
  CartButtonText,
  CartIconView,
  CartIconText,
} from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <ItemBox>
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri:
            'https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x',
        }}
      />
      <ItemText>Tênis de Caminhada Leve Confortável</ItemText>
      <ItemPrice>R$ 192,90</ItemPrice>
      <CartButton>
        <CartIconView>
          <Icon name="add-shopping-cart" size={19} color="#FFF" />
          <CartIconText>1</CartIconText>
        </CartIconView>
        <CartButtonText>Teste</CartButtonText>
      </CartButton>
    </ItemBox>
  );
}

export default function Main() {
  return (
    <Container>
      <List
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        horizontal
      />
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Rocketshoes',
};
