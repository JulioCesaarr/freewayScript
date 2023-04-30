//variaveis carros
let yCarros = [44, 100, 154, 210, 270, 318];
let xCarros = [600, 600, 600, 600, 600, 600]
let velocidadesCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let larguraCarro = 50;
let AlturaCarro = 30;

function desenhaCarro(){
  for(let i = 0; i < carros.length; i++){
    image(carros[i], xCarros[i], yCarros[i], larguraCarro, AlturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < carros.length; i++){
    xCarros[i] -= velocidadesCarros[i];
  }
  
}
  
function VoltaPosICarro(){
  for(let i = 0; i < carros.length; i++)
    if(PassouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
}

function PassouTodaTela(xCarro){
  return xCarro < -50
}