import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 40px;
  background: ${colors.dark};
`;

export const ItemBox = styled.View`
  flex: 1;
  padding: 10px;
  background: ${colors.light};
  margin-right: 15px;
  width: 220px;
  height: 358px;
  border-radius: 4px;
`;

export const ItemText = styled.Text`
  font-size: 16px;
`;

export const ItemPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const CartButton = styled(RectButton)`
  flex-direction: row;

  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 200px;
`;

export const CartIconView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 42px;
`;

export const CartIconText = styled.Text`
  font-size: 14px;
  color: ${colors.light};
  margin-left: 5px;
`;

export const CartButtonText = styled.Text`
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.light};
  text-transform: uppercase;
  justify-content: center;
`;
