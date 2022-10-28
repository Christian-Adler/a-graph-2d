export const zeichne = ({ ctx /*, center, WIDTH, HEIGHT */ }) => {
  const move = (x, y) => {
    ctx.moveTo(x, y);
  }
  const line = (x, y) => {
    ctx.lineTo(x, y);
  }
  
  ctx.beginPath();
  
  ctx.lineWidth = 3; // Dicke
  ctx.strokeStyle = '#00e1ff'; // Farbe
  
  
  move(10, 500);// Bewege nach
  line(1000, 500); // zeichne Linie nach x,y
  
  move(500, 0);
  line(500, 800);
  
  move(50, 60);
  line(600, 600);
  
  move(10, 250);
  line(500, 200);
  
  
  // ctx.lineTo(100, 150);
  //
  // ctx.moveTo(200, 50);
  // ctx.lineTo(200, 150);
  
  move(600, 100);
  line(700, 100);
  line(700, 200);
  line(600, 200);
  line(600, 100);
  ctx.stroke();
  
  ctx.beginPath();
  
  ctx.lineWidth = 3; // Dicke
  ctx.strokeStyle = '#e100ff'; // Farbe
  
  move(650, 150);
  line(650, 300);
  line(800, 300);
  line(800, 150);
  line(650, 150);
  ctx.stroke();
  
  ctx.beginPath();
  
  ctx.lineWidth = 1; // Dicke
  ctx.strokeStyle = '#00ff00'; // Farbe;
  move(700, 200);
  line(1000, 200);
  line(1000, 400);
  line(700, 400);
  line(700, 200);
  
  // Schleife
  move(100, 900);
  for (let i = 0; i < 20; i++) {
    line(120 + i * 20, 900 - i * i * 1.1);
  }
  
  ctx.stroke();
  
  
  // Würfel
  ctx.beginPath();
  ctx.lineWidth = 3; // Dicke
  ctx.strokeStyle = '#ff0000'; // Farbe;
  
  move(800, 700);
  line(900, 700);
  line(900, 800);
  line(800, 800);
  line(800, 700);
  
  line(850, 650);
  move(900, 700);
  line(950, 650);
  move(900, 800);
  line(950, 750);
  line(950, 650);
  line(850, 650);
  
  
  ctx.stroke();
  
  // ctx.fillStyle = '#ff0000';
  // move(100, 100);
  // line(200, 100);
  // line(100, 200);
  // ctx.fill();
  // ctx.stroke();
};
