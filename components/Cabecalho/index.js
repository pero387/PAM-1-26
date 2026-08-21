import React from 'react';
import { View, Text } from 'react-native';

export default function Cabecalho({ title }) {
  return (
    <View style={{ backgroundColor: '#69949e', paddingTop: 10, paddingBottom: 10, alignItems: 'center' }}>
      <Text style={{ color: '#cacca8', fontSize: 24, fontWeight: '50' }}>{title}</Text>
    </View>
  )
}
 