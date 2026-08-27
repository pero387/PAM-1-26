import React from 'react';
import { View, ScrollView } from 'react-native';
import ItemComida from '../ItemComida';
import estilo from './estilo';

const imagens = {
  hamburguer: require('../../imagens/hamburguer-saboroso-com-refeicao-de-fast-food-de-batatas-fritas_124507-10939.avif'),
  pizza: require('../../imagens/pizza.webp'),
  salada: require('../../imagens/iguaria-salada-alface-pepino.jpg'),
  sushi: require('../../imagens/sushi.jpg'),
  sorvete: require('../../imagens/sorv.webp'),
  cachorroQuente: require('../../imagens/cachorro-quente-tradicional-2.jpg'),
};

export default function ListaComida() {
  const comidas = [
    { nome: 'Hambúrguer', descricao: 'Hambúrguer de carne bovina com queijo', preco: 15.99, imagem: imagens.hamburguer },
    { nome: 'Pizza', descricao: 'Pizza de pepperoni', preco: 25.99, imagem: imagens.pizza },
    { nome: 'Salada', descricao: 'Salada de alface e tomate', preco: 12.99, imagem: imagens.salada },
    { nome: 'Sushi', descricao: 'Sushi de salmão', preco: 30.99, imagem: imagens.sushi },
    { nome: 'Sorvete', descricao: 'Sorvete de chocolate', preco: 8.99, imagem: imagens.sorvete },
    { nome: 'Cachorro-quente', descricao: 'Cachorro-quente com salsicha e molho', preco: 10.99, imagem: imagens.cachorroQuente },
  ];

  return (
    <View style={estilo.container}>
      <ScrollView style={estilo.lista}>
        {comidas.map((comida, index) => (
          <ItemComida
            key={index}
            nome={comida.nome}
            descricao={comida.descricao}
            preco={comida.preco}
            image={comida.imagem}
          />
        ))}
      </ScrollView>
    </View>
  );
}
