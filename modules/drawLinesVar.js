export const zeichneVar = ({ ctx /*, center, WIDTH, HEIGHT */ }) => {
  const move = (x, y) => {
    ctx.moveTo(x, y);
  }
  const line = (x, y) => {
    ctx.lineTo(x, y);
  }
  
  
  // Würfel
  ctx.beginPath();
  ctx.lineWidth = 3; // Dicke
  ctx.strokeStyle = '#ff0000'; // Farbe;

// hier Würfel Seitenlänge 150
  let seitenlaenge = 147;
  let xStart = 50;
  let yStart = 250;
  
  let halbeSeite = seitenlaenge / 2;
  
  move(xStart, yStart);
  line(xStart + seitenlaenge, yStart);
  line(xStart + seitenlaenge, yStart + seitenlaenge);
  line(xStart, yStart + seitenlaenge);
  line(xStart, yStart);
  
  line(xStart + halbeSeite, yStart - halbeSeite);
  line(xStart + halbeSeite + seitenlaenge, yStart - halbeSeite);
  line(xStart + halbeSeite + seitenlaenge, yStart - halbeSeite + seitenlaenge);
  line(xStart + seitenlaenge, yStart - halbeSeite + seitenlaenge + halbeSeite);
  move(xStart + seitenlaenge, yStart);
  line(xStart + seitenlaenge + halbeSeite, yStart - halbeSeite);
  ctx.stroke();
  
  
};
