import React from 'react';
import { View, ScrollView } from 'react-native';
import ItemComida from '../ItemComida';
import estilo from './estilo';

export default function ListaComida() {
  const comidas = [
    { nome: 'Hambúrguer', descricao: 'Hambúrguer de carne bovina com queijo', preco: 15.99, image: require('../../assets/hamburguer.jpg') },
    { nome: 'Pizza', descricao: 'Pizza de pepperoni', preco: 25.99 , image: require('../../assets/pizza.jpg')},
    { nome: 'Salada', descricao: 'Salada de alface e tomate', preco: 12.99 , image: require('../../assets/salada.jpg')},
    { nome: 'Sushi', descricao: 'Sushi de salmão', preco: 30.99 , image: require('../../assets/sushi.jpg')},
    { nome: 'Sorvete', descricao: 'Sorvete de chocolate', preco: 8.99 , image: require('../../imagens/')},
    { nome: 'Cachorro-quente', descricao: 'Cachorro-quente com salsicha e molho', preco: 10.99 , image: require('../../imagens/cachorro-quente-tradicional-2.jpg')},
  ];
  return (
    <View style={estilo.container}>
      {/* <Titulo /> */}

      <ScrollView style={estilo.lista}>
        {comidas.map((comida, index) => (
          <ItemComida
            key={index}
            nome={comida.nome}
            descricao={comida.descricao}
            preco={comida.preco}
          />
        ))}
      </ScrollView>
    </View>
  )
}
