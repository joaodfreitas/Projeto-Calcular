import React, { useState } from 'react';

const operadores = ['+', '-', '*', '/'] as const;

const gerarDesafio = () => {
  const numero1 = Math.floor(Math.random() * 100);
  const numero2 = Math.floor(Math.random() * 100) + 1; // evita divisão por 0
  const operador = operadores[Math.floor(Math.random() * operadores.length)];
  return { numero1, numero2, operador };
};

const calcularResultado = (n1: number, n2: number, op: string) => {
  switch (op) {
    case '+': return n1 + n2;
    case '-': return n1 - n2;
    case '*': return n1 * n2;
    case '/': return parseFloat((n1 / n2).toFixed(2));
    default: return 0;
  }
};

export const DesafioMatematico = () => {
  const [pontos, setPontos] = useState(0);
  const [desafio, setDesafio] = useState<{ numero1: number, numero2: number, operador: string } | null>(null);
  const [resposta, setResposta] = useState('');
  const [resultadoEsperado, setResultadoEsperado] = useState<number | null>(null);

  const sortear = () => {
    const novoDesafio = gerarDesafio();
    setDesafio(novoDesafio);
    const resultado = calcularResultado(novoDesafio.numero1, novoDesafio.numero2, novoDesafio.operador);
    setResultadoEsperado(resultado);
    setResposta('');
  };

  const validar = () => {
    const respostaUsuario = parseFloat(resposta);
    if (respostaUsuario === resultadoEsperado) {
      setPontos((prev) => prev + 1);
    }
  };

  const novoJogo = () => {
    setPontos(0);
    setDesafio(null);
    setResposta('');
    setResultadoEsperado(null);
  };

  return (
    <div style={{ color: 'white', textAlign: 'center', padding: '1rem' }}>
      <h3>Você tem {pontos} ponto{pontos !== 1 ? 's' : ''}</h3>

      <button
        onClick={sortear}
        style={{
          background: 'linear-gradient(to right, #4f46e5, #3b82f6)',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '12px',
          color: 'white',
          marginTop: '1rem',
          cursor: 'pointer',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        Sortear Desafio
      </button>

      {desafio && (
        <div style={{ marginTop: '2rem' }}>
          <p style={{ fontWeight: 'bold' }}>Quanto é:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={caixaRoxa}>{desafio.numero1}</div>
            <div style={caixaRoxa}>{desafio.operador}</div>
            <div style={caixaRoxa}>{desafio.numero2}</div>
          </div>

          <p style={{ fontWeight: 'bold' }}>Sua Resposta:</p>
          <input
            type="text"
            value={resposta}
            onChange={(e) => setResposta(e.target.value)}
            style={{
              ...caixaRoxa,
              width: '80px',
              textAlign: 'center',
              border: 'none',
              outline: 'none',
              fontSize: '1.2rem'
            }}
          />

          <div style={{ marginTop: '1.5rem' }}>
            <button
              onClick={validar}
              style={{
                backgroundColor: '#22c55e',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '10px',
                marginBottom: '1rem',
                cursor: 'pointer'
              }}
            >
              Validar
            </button>
            <br />
            <button
              onClick={novoJogo}
              style={{
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
            >
              Novo Jogo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const caixaRoxa = {
  backgroundColor: '#8b5cf6',
  padding: '10px 15px',
  borderRadius: '10px',
  fontSize: '1.2rem',
};
