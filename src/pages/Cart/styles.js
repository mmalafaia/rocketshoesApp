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

export const ItemImageBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemDetailBox = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`;

export const ItemDetailBoxText = styled.Text`
  font-size: 14px;
`;

export const ItemDetailBoxPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ItemSubTotalBox = styled.View`
  flex-direction: row;
  height: 40px;
  background: ${colors.lightGray};
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
`;

export const ItemSubTotalAmountBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const IncreaseButton = styled(RectButton)`
  border-radius: 12px;
  height: 23px;
  width: 23px;
`;

export const DecreaseButton = styled(RectButton)`
  border-radius: 12px;
  height: 23px;
  width: 23px;
`;

export const DeleteButton = styled(RectButton)`
  height: 23px;
  width: 23px;
`;

export const ItemSubTotalBoxAmount = styled.TextInput`
  font-size: 14px;
  padding: 0;
  width: 51px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #fff;
  text-align: center;
  justify-content: center;
`;

export const ItemSubTotalBoxPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding-right: 10px;
`;

export const ItemTotalBox = styled.View`
  padding: 10px;
  align-items: center;
`;

export const ItemTotalBoxText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.darkGray};
`;

export const ItemTotalBoxPrice = styled.Text`
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
