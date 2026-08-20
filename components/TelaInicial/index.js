import React from 'react';
import { View, StatusBar } from 'react-native';
import Cabecalho from '../Cabecalho';
import ListaComidas from '../ListaComidas';

export default function TelaInicial() {
  return (
    <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
      <StatusBar barStyle="light-content" backgroundColor="#ff6b6b" />
      <Cabecalho title="Comidas do Dia" />
      <ListaComidas />
    </View>
  )
}
