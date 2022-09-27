import {clear, zeichneKoordinatenSystem} from "./modules/drawer.js";

const main = () => {
  const canvas = document.getElementById("drawArea");
  const ctx = canvas.getContext("2d");
  
  const WIDTH = 800;
  const HEIGHT = 800;
  
  const drawItem = { ctx, WIDTH, HEIGHT, center: { x: WIDTH / 2, y: HEIGHT / 2 } };
  
  
  clear(drawItem);
  zeichneKoordinatenSystem(drawItem);
};

main();
