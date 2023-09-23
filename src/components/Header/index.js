import React from 'react';
import { Text } from 'react-native';
import { Container, Title } from './styles'

function Header(){
  return(
    <Container>
      <Title>
        Dev
        <Text style={{fontStyle: 'italic', color: '#E52246'}}>Post</Text>
      </Title>
    </Container>
  )
}

export default Header;