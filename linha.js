[cite_start]const opcoes = document.querySelectorAll('.opcao'); [cite: 1]
[cite_start]const respostas = {}; [cite: 1]

[cite_start]
[cite_start]opcoes.forEach(opcao => { [cite: 3]
  [cite_start]opcao.addEventListener('click', () => { [cite: 4]
    [cite_start]const grupo = opcao.dataset.group; [cite: 5]
    [cite_start]const valor = opcao.dataset.value; [cite: 6]

    [cite_start]
    [cite_start]document.querySelectorAll(`.opcao[data-group="${grupo}"]`).forEach(o => { [cite: 8]
      [cite_start]o.classList.remove('selecionada'); [cite: 10]
    });
    
    [cite_start]
    [cite_start]opcao.classList.add('selecionada'); [cite: 12]
    [cite_start]respostas[grupo] = valor; [cite: 13]
  });
});

[cite_start]
[cite_start]document.getElementById('verResultado').addEventListener('click', () => { [cite: 17]
  [cite_start]const grupos = ['desafios', 'palavra', 'ambiente', 'ajudar']; [cite: 17]
  [cite_start]const todasRespondidas = grupos.every(g => respostas[g]); [cite: 18]

  [cite_start]if (!todasRespondidas) { [cite: 19]
    [cite_start]document.getElementById("texto Resultado").textContent = "Por favor, responda todas as perguntas."; [cite: 20, 21]
    [cite_start]document.getElementById("modal Resultado").style.display = "block"; [cite: 23]
    [cite_start]return; [cite: 24]
  }

  [cite_start]const contagem = { a: 0, b: 0, c: 0, d: 0 }; [cite: 25]
  [cite_start]for (let g of grupos) { [cite: 26]
    [cite_start]contagem[respostas[g]]++; [cite: 28]
  }

  [cite_start]const dominante = Object.keys(contagem).reduce((a, b) => [cite: 29]
    [cite_start]contagem[a] >= contagem[b] ? a : b [cite: 31]
  );

  [cite_start]let mensagem = ""; [cite: 32]
  [cite_start]if (dominante === "a") mensagem = "Exus: você é livre, movido pela paixão e intensidade."; [cite: 33]
  [cite_start]if (dominante === "b") mensagem = "Pretos-velhos: você é sábio, paciente e empático."; [cite: 34]
  [cite_start]if (dominante === "c") mensagem = "Caboclos: você é forte e independente."; [cite: 35]
  [cite_start]if (dominante === "d") mensagem = "Erês: você é alegre, criativo e imaginativo."; [cite: 36]

  [cite_start]document.getElementById("texto Resultado").textContent = mensagem; [cite: 37]
  [cite_start]document.getElementById("modal Resultado").style.display = "block"; [cite: 38]
});

[cite_start]
[cite_start]document.addEventListener('click', function (e) { [cite: 40]
  [cite_start]if (e.target.classList.contains('fechar')) { [cite: 41]
    [cite_start]document.getElementById("modal Resultado").style.display = "none"; [cite: 42]
  }
});
