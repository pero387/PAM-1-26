import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estilo from './estilo';

export default function ItemComida(props) {
  return (
    <TouchableOpacity style={estilo.card}>
      <Image source={props.image} style={estilo.image} />
      <View style={estilo.content}>
        <Text style={estilo.name}>{props.nome}</Text>
        <Text style={estilo.desc}>{props.descricao}</Text>
        <Text style={estilo.desc} numberOfLines={2}>{props.preco}</Text>
      </View>
    </TouchableOpacity>
  )
}
