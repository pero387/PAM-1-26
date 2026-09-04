import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TOTAL_RODADAS = 5;
const PONTUACAO_MAXIMA = TOTAL_RODADAS * 100;

let rodadaAtual = 1;
let pontuacaoTotal = 0;
let numeroSorteado = null;


const estilo = StyleSheet.create({
  boxTitulo: {
    height: 80,
    backgroundColor: '#1f4f66',
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: 'center',
  },

  tituloCabecalho: {
    color: '#0fd478',
    fontWeight: '700',
    fontSize: 20,
  },

  subtitulo: {
    color: '#fff',
  },

  tela: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxNumero: {
    borderColor: '#92d0d8',
    backgroundColor: '#9cc9cf',
    borderWidth: 5,
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  tituloTexto: {
    fontSize: 14,
    marginVertical: 30,
    paddingHorizontal: 20,
    textAlign: 'center',
  },

  numero: {
    fontSize: 80,
    color: '#271212',
  },

  boxBotao: {
    width: 200,
  },
});

const Titulo = () => {
  return (
    <View style={estilo.boxTitulo}>
      <Text style={estilo.tituloCabecalho}>
        Sorteio DevMedia
      </Text>

      <Text style={estilo.subtitulo}>
        Hora de ver quem é o vencedor
      </Text>
    </View>
  );
};
const NumeroEscolhido = ({ numero }) => {
  return (
    <View style={estilo.boxNumero}>
      <Text style={estilo.numero}>
        {numero}
      </Text>
    </View>
  );
};

const TelaInicial = () => {
  const [numeroSorteado, setNumeroSorteado] = useState(0);

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100 + 1);

    setNumeroSorteado(novoNumero);
  };

  return (
    <View style={estilo.tela}>

      <Text style={estilo.tituloTexto}>
        Toque no botão e veja quem é o vencedor de 1 à 100
      </Text>

      <NumeroEscolhido numero={numeroSorteado} />

      <View style={estilo.boxBotao}>
        <Button
          title="Sortear"
          onPress={gerarNumero}
          color="#1f4f66"
        />

      </View>

    </View>
  );
};

const App = () => {
  return (
    <View>
      <Titulo />
      <TelaInicial />
    </View>
  );
};

export default App;