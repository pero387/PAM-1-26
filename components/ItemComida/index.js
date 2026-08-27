import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estilo from './estilo';

export default function ItemComida(props) {
  return (
    <TouchableOpacity style={estilo.card} activeOpacity={0.85}>
      <Image source={props.image} style={estilo.image} resizeMode="cover" />
      <View style={estilo.content}>
        <Text style={estilo.name}>{props.nome}</Text>
        <Text style={estilo.desc} numberOfLines={2}>{props.descricao}</Text>
        <Text style={estilo.preco}>{props.preco}</Text>
      </View>
    </TouchableOpacity>
  );
}
