import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <ItemImageBox>
        <Image
          style={{ width: 80, height: 80 }}
          source={{
            uri:
              'https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x',
          }}
        />
        <ItemDetailBox>
          <ItemDetailBoxText>{title.desc}</ItemDetailBoxText>
          <ItemDetailBoxPrice>{title.title}</ItemDetailBoxPrice>
        </ItemDetailBox>
        <DeleteButton>
          <Icon name="delete-forever" size={23} color={colors.primary} />
        </DeleteButton>
      </ItemImageBox>
      <ItemSubTotalBox>
        <ItemSubTotalAmountBox>
          <IncreaseButton>
            <Icon
              name="remove-circle-outline"
              size={23}
              color={colors.primary}
            />
          </IncreaseButton>
          <ItemSubTotalBoxAmount>3</ItemSubTotalBoxAmount>
          <DecreaseButton>
            <Icon name="add-circle-outline" size={23} color={colors.primary} />
          </DecreaseButton>
        </ItemSubTotalAmountBox>
        <ItemSubTotalBoxPrice>R$ 539,70</ItemSubTotalBoxPrice>
      </ItemSubTotalBox>
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
        <ItemTotalBox>
          <ItemTotalBoxText>TOTAL</ItemTotalBoxText>
          <ItemTotalBoxPrice>R$ 1619,10</ItemTotalBoxPrice>
        </ItemTotalBox>
        <OrderButton>
          <OrderButtonText>FINALIZAR PEDIDO</OrderButtonText>
        </OrderButton>
      </ItemBox>
    </Container>
  );
}
