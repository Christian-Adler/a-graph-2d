import {state} from "./state.js";

export const clear = ({ ctx, HEIGHT, WIDTH }) => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
};
export const drawBorder = ({ ctx, HEIGHT, WIDTH }) => {
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = '5';
  ctx.strokeRect(0, 0, WIDTH, HEIGHT);
};

export const zeichneKoordinatenSystem = ({ ctx, center, WIDTH, HEIGHT }) => {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000';
  
  ctx.moveTo(10, center.y);
  ctx.lineTo(WIDTH - 20, center.y);
  ctx.moveTo(center.x, 10);
  ctx.lineTo(center.x, HEIGHT - 20);
  
  ctx.stroke();
};

export const drawLine = ({ ctx }) => {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#0f0';
  
  ctx.moveTo(100, 0);
  ctx.lineTo(state.x, 200);
  
  ctx.stroke();
  
};
