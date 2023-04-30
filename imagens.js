let imgEstrada;
let Ator;
let carro1;
let carro2;
let carro3; 
let carros;

let colisaoSom;
let pontoSom;
let trilha;

function preload(){
    imgEstrada = loadImage('./images/estrada.png');
    Ator = loadImage('./images/ator-1.png');
    carro1 = loadImage('./images/carro-1.png');
    carro2 = loadImage('./images/carro-2.png');
    carro3 = loadImage('./images/carro-3.png');
    carros = [carro1, carro2, carro3, carro1, carro2, carro3];
  
    colisaoSom = loadSound('./Sounds/colidiu.mp3');
    pontoSom = loadSound('./Sounds/pontos.wav');
    trilha = loadSound('./Sounds/trilha.mp3');
  }