import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TOTAL_RODADAS = 5;
const PONTUACAO_MAXIMA = TOTAL_RODADAS * 100;
const NUMERO_MINIMO = 0;
const NUMERO_MAXIMO = 100;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6f7',
  },

  topo: {
    backgroundColor: '#1f4f66',
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 14,
  },

  titulo: {
    color: '#0fd478',
    fontSize: 22,
    fontWeight: '700',
  },

  subtitulo: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },

  tela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },

  texto: {
    fontSize: 16,
    color: '#1f4f66',
    fontWeight: '600',
    marginBottom: 10,
  },

  circulo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#9cc9cf',
    borderWidth: 5,
    borderColor: '#92d0d8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  numero: {
    fontSize: 60,
    color: '#271212',
    fontWeight: '700',
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#c9dfe3',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 18,
    marginBottom: 14,
  },

  mensagem: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 14,
  },

  botao: {
    width: 200,
  },
});

export default function App() {
  const [numeroEscolhido, setNumeroEscolhido] = useState('');
  const [numeroSorteado, setNumeroSorteado] = useState(0);
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [mensagem, setMensagem] = useState('Escolha um número para começar.');
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  function obterMensagemFinal(total = pontuacaoTotal) {
    if (total === PONTUACAO_MAXIMA) return 'Perfeito! Você acertou todos!';
    if (total >= 400) return 'Quase perfeito!';
    if (total >= 300) return 'Excelente!';
    if (total >= 200) return 'Muito bem!';
    if (total >= 100) return 'Bom começo!';
    return 'Continue tentando!';
  }

  const sortearNumero = () => {
    const valor = Number(numeroEscolhido);

    if (numeroEscolhido === '') {
      setMensagem('Informe um número entre 0 e 100. Tente de novo.');
      return;
    }

    const numeroValido =
      Number.isInteger(valor) &&
      valor >= NUMERO_MINIMO &&
      valor <= NUMERO_MAXIMO;

    if (!numeroValido) {
      setMensagem('Informe um número inteiro entre 0 e 100. Tente de novo.');
      return;
    }

    const numeroGerado =
      Math.floor(Math.random() * (NUMERO_MAXIMO - NUMERO_MINIMO + 1)) +
      NUMERO_MINIMO;
    const pontos = 100 - Math.abs(valor - numeroGerado);
    const novoTotal = pontuacaoTotal + pontos;

    setNumeroSorteado(numeroGerado);
    setPontuacaoTotal(novoTotal);
    setMensagem(`Você escolheu ${valor}. O sorteado foi ${numeroGerado}. Você fez ${pontos} pontos.`);

    if (rodadaAtual === TOTAL_RODADAS) {
      setJogoFinalizado(true);
      setMensagem(
        `Fim do jogo! Total: ${novoTotal}/${PONTUACAO_MAXIMA}. ${obterMensagemFinal(novoTotal)}`,
      );
      return;
    }

    setNumeroEscolhido('');
    setRodadaAtual((atual) => atual + 1);
  };

  const reiniciarJogo = () => {
    setNumeroEscolhido('');
    setNumeroSorteado(0);
    setRodadaAtual(1);
    setPontuacaoTotal(0);
    setMensagem('Escolha um número para começar.');
    setJogoFinalizado(false);
  };

  return (
    <View style={estilo.container}>
      <View style={estilo.topo}>
        <Text style={estilo.titulo}>Sorteio DevMedia</Text>
        <Text style={estilo.subtitulo}>Hora de ver quem é o vencedor</Text>
      </View>

      <View style={estilo.tela}>
        <Text style={estilo.texto}>Rodada {rodadaAtual} de {TOTAL_RODADAS}</Text>
        <Text style={estilo.texto}>Pontuação: {pontuacaoTotal}</Text>

        <View style={estilo.circulo}>
          <Text style={estilo.numero}>{numeroSorteado}</Text>
        </View>

        <TextInput
          style={estilo.input}
          value={numeroEscolhido}
          onChangeText={setNumeroEscolhido}
          keyboardType="numeric"
          placeholder="Digite um número de 0 a 100"
          editable={!jogoFinalizado}
        />

        <Text style={estilo.mensagem}>{mensagem}</Text>

        <View style={estilo.botao}>
          {!jogoFinalizado ? (
            <Button title="Sortear" onPress={sortearNumero} color="#1f4f66" />
          ) : (
            <Button title="Jogar de novo" onPress={reiniciarJogo} color="#1f4f66" />
          )}
        </View>
      </View>
    </View>
  );
}
