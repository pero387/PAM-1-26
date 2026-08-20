import React from 'react';
import { View, FlatList, Alert } from 'react-native';
import ItemComida from '../ItemComida';

// Lista de exemplo com 15 comidas
const DATA = [
  { id: '1', name: 'Pizza Margherita', description: 'Massa fina, molho de tomate, mussarela e manjericão fresco.', image: require('../../assets/pizza.png') },
  { id: '2', name: 'Sushi Variado', description: 'Seleção de nigiri e maki com peixe fresco e arroz temperado.', image: require('../../assets/sushi.png') },
  { id: '3', name: 'Salada Caesar', description: 'Alface crocante, croutons, parmesão ralado e molho Caesar.', image: require('../../assets/salada.png') },
  { id: '4', name: 'Hambúrguer Gourmet', description: 'Pão brioche, carne suculenta, queijo cheddar e cebola caramelizada.', image: require('../../assets/hamburguer.png') },
  { id: '5', name: 'Lasanha de Carne', description: 'Camadas de massa, molho bolonhesa e queijo gratinado.', image: require('../../assets/pizza.png') },
  { id: '6', name: 'Tacos Mexicanos', description: 'Tortillas com carne temperada, pico de gallo e guacamole.', image: require('../../assets/hamburguer.png') },
  { id: '7', name: 'Camarão ao Alho', description: 'Camarões salteados no alho com ervas e azeite.', image: require('../../assets/sushi.png') },
  { id: '8', name: 'Risoto de Funghi', description: 'Arroz cremoso com cogumelos e parmesão.', image: require('../../assets/pizza.png') },
  { id: '9', name: 'Crepe Doce', description: 'Crepe fino recheado com Nutella e morangos.', image: require('../../assets/salada.png') },
  { id: '10', name: 'Feijoada', description: 'Clássico brasileiro com feijão preto, carnes e farofa.', image: require('../../assets/hamburguer.png') },
  { id: '11', name: 'Moqueca Baiana', description: 'Peixe cozido com leite de coco, dendê e coentro.', image: require('../../assets/sushi.png') },
  { id: '12', name: 'Poke Bowl', description: 'Tigela com peixe cru, arroz, legumes e molho especial.', image: require('../../assets/salada.png') },
  { id: '13', name: 'Bruschetta', description: 'Pão tostado com tomate, manjericão e azeite.', image: require('../../assets/pizza.png') },
  { id: '14', name: 'Coxinha', description: 'Salgadinho frito recheado de frango desfiado e catupiry.', image: require('../../assets/hamburguer.png') },
  { id: '15', name: 'Pudim de Leite', description: 'Sobremesa cremosa com calda de caramelo.', image: require('../../assets/salada.png') }
];

export default function ListaComidas(){
  function handlePress(item){
    Alert.alert(item.name, item.description);
  }

  return (
    <View style={{flex:1}}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ItemComida item={item} onPress={handlePress} />}
        contentContainerStyle={{paddingVertical: 12}}
      />
    </View>
  )
}
