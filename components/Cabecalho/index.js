import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default function Cabecalho({ title }) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>{title}</Text>
    </View>
  )
}
