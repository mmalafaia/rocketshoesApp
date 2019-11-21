import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

function Item({ title }) {
  return (
    <ItemBox>
      <ProductBox>
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri:
              'https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x',
          }}
        />
        <ItemText>{title.desc}</ItemText>
        <ItemPrice>{title.title}</ItemPrice>
      </ProductBox>
      <CartButton>
        <CartIconView>
          <Icon name="add-shopping-cart" size={19} color={colors.light} />
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
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={item => item.id}
        horizontal
      />
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Rocketshoes',
};
