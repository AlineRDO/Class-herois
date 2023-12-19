var heroi = [
    { nome: "Homem-Aranha", xp: 800 },
    { nome: "Superman", xp: 1500 },
    { nome: "Mulher-Maravilha", xp: 5000 },
  ];
  
  function classificarHeroi(nome, xp) {
    var rank;
  
    switch (true) {
      case xp <= 1000:
        rank = "Ferro";
        break;
      case xp <= 2000:
        rank = "Bronze";
        break;
      case xp <= 5000:
        rank = "Prata";
        break;
      case xp <= 8000:
        rank = "Platina";
        break;
      case xp <= 9000:
        rank = "Ascendente";
        break;
      case xp <= 10000:
        rank = "Imortal";
        break;
      default:
        rank = "Radiante";
    }
  
    console.log(`O herói ${nome} está no rank de ${rank}`);
  }
  
  for (var i = 0; i < heroi.length; i++) {
    var heroiAtual = heroi[i];
    classificarHeroi(heroiAtual.nome, heroiAtual.xp);
  }
  