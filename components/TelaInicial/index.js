import React from 'react';
import { View, StatusBar } from 'react-native';
import Cabecalho from '../Cabecalho';
import ListaComidas from '../ListaComidas';

export default function TelaInicial() {
  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <StatusBar barStyle="light-content" backgroundColor="#9b7e20" />
      <Cabecalho title="Comidas do Dia" />
      
      <ListaComidas />
    </View>
  )
}
