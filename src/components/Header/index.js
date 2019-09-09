import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Logo, BasketContainer, ItemCount} from './styles';
import {TouchableOpacity} from 'react-native';

export default function Header({navigation}) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Logo />
      </TouchableOpacity>
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>{cartSize || 0}</ItemCount>
      </BasketContainer>
    </Container>
  );
}
