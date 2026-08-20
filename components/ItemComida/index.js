import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estilo from './estilo';

export default function ItemComida({ item, onPress }) {
  return (
    <TouchableOpacity style={estilo.card} onPress={() => onPress && onPress(item)}>
      <Image source={item.image} style={estilo.image} />
      <View style={estilo.content}>
        <Text style={estilo.name}>{item.name}</Text>
        <Text style={estilo.desc} numberOfLines={2}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  )
}
