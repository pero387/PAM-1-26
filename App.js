import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TOTAL_RODADAS = 5;
const PONTUACAO_MAXIMA = TOTAL_RODADAS * 100;

let rodadaAtual = 1;
let pontuacaoTotal = 0;
let numeroSorteado = null;

const formulario = document.getElementById("formulario-jogo");
const campoNumero = document.getElementById("numero-escolhido");
const botaoSortear = document.getElementById("botao-sortear");
const botaoReiniciar = document.getElementById("botao-reiniciar");
const rodada = document.getElementById("rodada");
const visorNumero = document.getElementById("numero-sorteado");
const ultimoNumero = document.getElementById("ultimo-numero");
const pontosRodada = document.getElementById("pontos-rodada");
const total = document.getElementById("pontuacao-total");
const mensagemValidacao = document.getElementById("mensagem-validacao");
const mensagemResultado = document.getElementById("mensagem-resultado");
const resultadoFinal = document.getElementById("resultado-final");
const pontuacaoFinal = document.getElementById("pontuacao-final");
const mensagemFinal = document.getElementById("mensagem-final");
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
    borderColor: '#13b0c5',
    backgroundColor: '#13b0c5',
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

      <View style={estilo.boxNumero}>
        <Text style={estilo.numero}>
          {numeroSorteado}
        </Text>
      </View>

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