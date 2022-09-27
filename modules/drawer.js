export const zeichneKoordinatenSystem = ({ ctx, center, WIDTH, HEIGHT }) => {
  ctx.translate(0.5, 0.5); // https://stackoverflow.com/questions/13879322/drawing-a-1px-thick-line-in-canvas-creates-a-2px-thick-line
  
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000';
  
  ctx.moveTo(10, center.y);
  ctx.lineTo(WIDTH - 20, center.y);
  ctx.moveTo(center.x, 10);
  ctx.lineTo(center.x, HEIGHT - 20);
  
  ctx.stroke();
}

export const clear = ({ ctx, HEIGHT, WIDTH }) => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
};
