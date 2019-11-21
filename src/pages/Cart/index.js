import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  List,
  ItemBox,
  ItemBoxImage,
  ItemBoxText,
  ItemText,
  ItemPrice,
  ItemBoxSubTotal,
  ItemBoxSubTotalAmount,
  ItemBoxSubTotalPrice,
  ItemBoxTotal,
  ItemBoxTotalText,
  ItemBoxTotalPrice,
  OrderButton,
  OrderButtonText,
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
    <>
      <ItemBoxImage>
        <Image
          style={{ width: 80, height: 80 }}
          source={{
            uri:
              'https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x',
          }}
        />
        <ItemBoxText>
          <ItemText>{title.desc}</ItemText>
          <ItemPrice>{title.title}</ItemPrice>
        </ItemBoxText>
      </ItemBoxImage>
      <ItemBoxSubTotal>
        <ItemBoxSubTotalAmount>3</ItemBoxSubTotalAmount>
        <ItemBoxSubTotalPrice>R$ 539,70</ItemBoxSubTotalPrice>
      </ItemBoxSubTotal>
    </>
  );
}

export default function Cart() {
  return (
    <Container>
      <ItemBox>
        <List
          data={DATA}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={item => item.id}
        />
        <ItemBoxTotal>
          <ItemBoxTotalText>TOTAL</ItemBoxTotalText>
          <ItemBoxTotalPrice>R$ 1619,10</ItemBoxTotalPrice>
        </ItemBoxTotal>
        <OrderButton>
          <OrderButtonText>FINALIZAR PEDIDO</OrderButtonText>
        </OrderButton>
      </ItemBox>
    </Container>
  );
}
