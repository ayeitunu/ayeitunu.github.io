  const opcoes = document.querySelectorAll('.opcao');
    const respostas = {};

      opcoes.forEach(opcao => {
      opcao.addEventListener('click', () => {
        const grupo = opcao.dataset.group;
        const valor = opcao.dataset.value;

        document.querySelectorAll(`.opcao[data-group="${grupo}"]`).forEach(o => {
          o.classList.remove('selecionada');
        });
        opcao.classList.add('selecionada');
        respostas[grupo] = valor;
      });
    });

    document.getElementById('verResultado').addEventListener('click', () => {
      const grupos = ['sensacao', 'desejo', 'espaco', 'efeito'];
      const todasRespondidas = grupos.every(g => respostas[g]);

      if (!todasRespondidas) {
        document.getElementById('resultado').textContent = "Por favor, responda todas as perguntas.";
        return;
      }

      const contagem = { a: 0, b: 0, c: 0 };
      for (let g of grupos) {
        contagem[respostas[g]]++;
      }

      const dominante = Object.keys(contagem).reduce((a, b) => 
        contagem[a] >= contagem[b] ? a : b
      );

      let mensagem = "";
      if (dominante === "a") mensagem = "Você busca recuperar sua energia e disposição. Um banho de energização é o ideal.";
      if (dominante === "b") mensagem = "Você deseja alívio emocional e libertação de pesos. Um banho de limpeza é o ideal. ";
      if (dominante === "c") mensagem = "Você procura segurança interior e proteção espiritual. Um banho de proteção é o ideal.";

      

      document.getElementById("textoResultado").textContent = mensagem;
      document.getElementById("modalResultado").style.display = "block";

      document.querySelector(".fechar").addEventListener("click", () => {
         document.getElementById("modalResultado").style.display = "none";
});


    });
