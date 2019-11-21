import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 60px;
  background: ${colors.dark};
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const ItemBox = styled.View`
  flex: 1;
  padding: 15px;
  border-radius: 4px;
  background: ${colors.light};
`;

export const ItemBoxImage = styled.View`
  flex-direction: row;
`;

export const ItemBoxText = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`;

export const ItemText = styled.Text`
  font-size: 14px;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ItemBoxSubTotal = styled.View`
  flex-direction: row;
  height: 40px;
  background: ${colors.lightGray};
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
`;

export const ItemBoxSubTotalAmount = styled.TextInput`
  font-size: 14px;
  margin-left: 35px;
  padding: 0;
  width: 51px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #fff;
  text-align: center;
  justify-content: center;
`;

export const ItemBoxSubTotalPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding-right: 10px;
`;

export const ItemBoxTotal = styled.View`
  padding: 10px;
  align-items: center;
`;

export const ItemBoxTotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.darkGray};
`;

export const ItemBoxTotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
export const OrderButton = styled(RectButton)`
  flex-direction: row;
  align-self: stretch;
  border-radius: 4px;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  height: 42px;
`;

export const OrderButtonText = styled.Text`
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.light};
  text-transform: uppercase;
  justify-content: center;
  text-align: center;
`;
