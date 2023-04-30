//variaveis ator
let yAtor = 366;
let xAtor = 40; 
let pontos = 0;

function desenhaAtor(){
    image(Ator, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 5;
    } 
    if(keyIsDown(DOWN_ARROW)){
      yAtor += 5;
      atorSaiuDaTela();
    }
}

function verificaColisao(){
  for(let i = 0; i < carros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, AlturaCarro, xAtor, yAtor, 15);
    if(colisao){
      voltaPosIAtor();
      perdePontos();
      colisaoSom.play();
    }
  }
}

function voltaPosIAtor(){
  yAtor = 366;
}

function exibePontos(){
  fill(color(124,252,0))
  textAlign(CENTER);
  textSize(25)
  text(pontos, 55, 27)
}

function marcaPontos(){
  if(yAtor < 15){
    pontos += 1;
    voltaPosIAtor();
    pontoSom.play();
  }
}

function perdePontos(){
  if(pontos > 0){
    pontos -= 1;
  } else {
    pontos = 0;
  }
}

function atorSaiuDaTela(){
  if (yAtor > 366){
    voltaPosIAtor();
  }
}