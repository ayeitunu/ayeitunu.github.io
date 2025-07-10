document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const nascimento = document.getElementById("nascimento").value;

    const vogaisMap = { A: 1, E: 5, I: 9, O: 6, U: 3 };
    const letrasMap = {
      A: 1, J: 1, S: 1,
      B: 2, K: 2, T: 2,
      C: 3, L: 3, U: 3,
      D: 4, M: 4, V: 4,
      E: 5, N: 5, W: 5,
      F: 6, O: 6, X: 6,
      G: 7, P: 7, Y: 7,
      H: 8, Q: 8, Z: 8,
      I: 9, R: 9
    };

    let somaAlma = 0;
    let somaPersonalidade = 0;

    for (let letra of nome) {
      if (letrasMap[letra]) {
        if (vogaisMap[letra]) {
          somaAlma += vogaisMap[letra];
        } else {
          somaPersonalidade += letrasMap[letra];
        }
      }
    }

    let somaDestino = 0;
    if (nascimento) {
      const digitos = nascimento.replace(/-/g, "");
      for (let char of digitos) {
        somaDestino += parseInt(char);
      }
    }

    function reduzir(numero) {
      while (![11, 22].includes(numero) && numero > 9) {
        numero = numero.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
      }
      return numero;
    }

    const numeroAlma = reduzir(somaAlma);
    const numeroPersonalidade = reduzir(somaPersonalidade);
    const numeroDestino = reduzir(somaDestino);

    const resultado = document.getElementById("resultado");

    function significadoAlma(numero) {
      const significados = {
        1: "Você tem uma alma independente e criativa. Busca liderança e expressão pessoal.",
        2: "Você tem uma alma sensível, que valoriza relações afetivas e harmonia.",
        3: "Sua alma é comunicativa e expressiva. Você sente necessidade de se conectar com alegria e arte.",
        4: "Você tem uma alma prática e confiável. Busca segurança e realizações sólidas.",
        5: "Sua alma deseja liberdade, aventura e experiências variadas. Detesta rotinas.",
        6: "Você tem uma alma amorosa e protetora. Sente-se bem cuidando e construindo laços afetivos.",
        7: "Sua alma é espiritual, introspectiva e reflexiva. Valoriza o silêncio e a sabedoria interior.",
        8: "Você tem uma alma ambiciosa, que busca sucesso, reconhecimento e poder pessoal.",
        9: "Sua alma é generosa, compassiva e altruísta. Sente-se chamada a ajudar o mundo.",
        11: "Você tem uma alma iluminada, com forte intuição e missão espiritual inspiradora.",
        22: "Sua alma é construtora de grandes ideias, com potencial de impactar muitas vidas."
      };
      return significados[numero];
    }

    function significadoDestino(numero) {
  const significados = {
    1: "Você veio ao mundo para liderar, inovar e confiar na sua independência. Seu caminho é o da iniciativa, coragem e pioneirismo.",
    2: "Seu destino é o da harmonia, cooperação e diplomacia. Você prospera em parcerias e tem o dom de unir pessoas e promover a paz.",
    3: "Seu caminho é o da comunicação e da alegria. Veio para se expressar com criatividade, leveza e entusiasmo — através da arte, da fala ou do riso.",
    4: "Você tem um destino voltado à construção, organização e estabilidade. Seu aprendizado está na paciência, disciplina e firmeza.",
    5: "Você veio para viver a liberdade, explorar, mudar e inspirar os outros com sua adaptabilidade. Seu caminho envolve viagens, experiências e versatilidade.",
    6: "Seu destino está ligado à responsabilidade, ao amor familiar e ao cuidado com os outros. Você tem alma de conselheira, curadora e pacificadora.",
    7: "Seu caminho é o da introspecção, da busca por sabedoria e profundidade. Você veio para estudar, meditar e entender os mistérios da vida.",
    8: "Você tem um destino de realização material, liderança e influência. Veio aprender sobre poder pessoal, ética e sucesso financeiro com equilíbrio.",
    9: "Seu destino é o da generosidade, compaixão e serviço à humanidade. Você veio para curar, ensinar e transformar o mundo com amor universal.",
    11: "Você tem um destino elevado, de inspiração espiritual e sensibilidade profunda. Veio iluminar caminhos e servir como guia para os outros.",
    22: "Seu destino é grandioso: construir algo duradouro que beneficie muitas pessoas. Você é uma arquiteta de ideias práticas com impacto espiritual."
  };
  return significados[numero];
}

function significadoPersonalidade(numero) {
  const significados = {
    1: "Você transmite uma imagem de liderança, iniciativa e autoconfiança. É visto como alguém direto, independente e competitivo.",
    2: "Você é percebida como diplomática, gentil e atenciosa. Inspira confiança por sua escuta e seu jeito conciliador.",
    3: "Sua personalidade social é alegre, comunicativa e espontânea. Atrai pessoas com seu carisma e criatividade.",
    4: "Você é séria, responsável e organizada. É vista como alguém confiável, firme e metódica.",
    5: "Você é vista como versátil, energética e curiosa. Passa uma imagem livre, ousada e cheia de movimento.",
    6: "As pessoas te percebem como acolhedora, amorosa e protetora. É alguém que inspira harmonia e afeto.",
    7: "Você transmite introspecção, reserva e inteligência. É percebida como alguém mais fechado, misterioso e analítico.",
    8: "Você passa uma imagem forte, confiante e determinada. Inspira respeito e autoridade natural.",
    9: "Sua presença é vista como empática, generosa e humanitária. É percebida como alguém nobre, sensível e universalista.",
    11: "Você é vista como alguém inspiradora, sensível e com presença magnética. Atrai atenção pelo olhar profundo e espiritual.",
    22: "Sua imagem é de alguém forte e com grande capacidade de realização. Passa força interior e autoridade com sabedoria."
  };
  return significados[numero];
}


    if (nome.trim() === "" || nascimento.trim() === "") {
      resultado.innerText = "Por favor, preencha todos os campos.";
    } else {
      resultado.innerHTML = `
        <strong>Número da Alma:</strong> ${numeroAlma}</strong><br><br>
        <small>${significadoAlma(numeroAlma)}</small><br><br>
        <strong>Número do Destino:</strong> ${numeroDestino}<br><br>
        <small>${significadoDestino(numeroDestino)}</small><br><br>
        <strong>Número da Personalidade:</strong> ${numeroPersonalidade}<br><br>
        <small>${significadoPersonalidade(numeroPersonalidade)}</small>
      `;
     document.getElementById("resultado").scrollIntoView({ behavior: "smooth" });
    }
  });
});
