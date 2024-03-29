import styled from 'styled-components/native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#9b50c1'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
  padding-top: ${25 + getStatusBarHeight()}px;
  padding-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: 'Roboto';
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  padding: 0px 20px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #fff;
  border: 2px solid ${props => (props.error ? '#FF7272' : '#FFF')};
`;

export const Submit = styled.TouchableOpacity`
  background-color: #6bd4c1;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
`;

export const IconAdd = styled(IconMaterialIcons).attrs({
  name: 'add',
})`
  color: #fff;
  font-size: 22px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showsVerticalScrollindicator: false,
})`
  margin-top: 20px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#FFF',
})``;
