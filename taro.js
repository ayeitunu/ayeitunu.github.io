document.addEventListener("DOMContentLoaded", function () {
  function embaralharCartas() {
    const container = document.getElementById("cartas-container");
    const cartas = Array.from(container.children);
    const embaralhadas = cartas.sort(() => Math.random() - 0.5);

    container.innerHTML = "";
    embaralhadas.forEach(carta => container.appendChild(carta));
  }

  embaralharCartas();

  const cartas = document.querySelectorAll(".carta-conteudo");

  cartas.forEach((carta) => {
    carta.addEventListener("click", function () {

      
      if (document.querySelector(".carta-conteudo.virada")) return;

      this.classList.add("virada");
      this.parentElement.classList.add("destaque");

      const nome = this.dataset.nome;
      const significado = obterSignificado(nome);

     
      document.getElementById("resultado").innerHTML = `
        <br><br><center><p><h2>${nome}</h2></p></center>
        <p>${significado}</p>
      `;

      
      document.getElementById("resultado").scrollIntoView({ behavior: "smooth" });

      
      document.getElementById("outraCarta").style.display = "inline-block";
    });
  });

  
  function obterSignificado(nome) {
    const significados = {
      "O Louco": "Dê o primeiro passo...",
      "O Mundo": "Celebre suas conquistas...",
      "A Sacerdotisa": "Em vez de agir, ouça...",
      "A Imperatriz": "Cuide de si com carinho...",
      "O Imperador": "Seja firme, mas justo...",
      "O Hierofante": "Ouça a sabedoria de quem veio antes...",
      "Os Enamorados": "Escolha com verdade...",
      "O Carro": "Mantenha as rédeas firmes...",
      "A Força": "Seja gentil, mas não ceda...",
      "O Eremita": "Afaste-se do barulho externo...",
      "A Justiça": "Seja honesta consigo...",
      "A Roda da Fortuna": "Aceite a impermanência...",
      "O Enforcado": "Solte o controle...",
      "A Morte": "Não resista ao encerramento...",
      "A Temperança": "Evite excessos...",
      "O Diabo": "Observe seus vícios...",
      "A Torre": "Não segure o que está ruindo...",
      "O Julgamento": "Não fuja de suas verdades..."
    };

  document.getElementById("outraCarta").addEventListener("click", () => {
    document.querySelectorAll(".carta-conteudo").forEach(carta => {
      carta.classList.remove("virada");
      carta.parentElement.classList.remove("destaque");
    });

    document.getElementById("resultado").innerHTML = "";
    document.getElementById("outraCarta").style.display = "none";
    
    embaralharCartas();
  });
});

