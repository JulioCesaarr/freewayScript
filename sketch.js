function setup() {
  createCanvas(500, 400);
  trilha.loop();  
}

function draw() {
  background(imgEstrada);
  desenhaAtor();
  desenhaCarro()
  movimentaCarro();
  movimentaAtor();
  VoltaPosICarro();
  verificaColisao();
  exibePontos();
  marcaPontos();
}