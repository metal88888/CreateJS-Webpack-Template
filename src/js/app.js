import * as createjs from 'EaselJS';
import { Tween, Ticker, Ease } from 'TweenJS';

const stage = new createjs.Stage('myCanvas');

// circle
let circle = new createjs.Shape();
circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
circle.x = 100;
circle.y = 100;
stage.addChild(circle);
stage.update();

Tween.get(circle, { loop: true })
  .to({ x: 400 }, 1000*2, Ease.getPowInOut(4))
  .to({ alpha: 0, y: 175 }, 500, Ease.getPowInOut(2))
  .to({ alpha: 0, y: 225 }, 100)
  .to({ alpha: 1, y: 200 }, 500, Ease.getPowInOut(2))
  .wait(500)
  .to({ x: 100 }, 800, Ease.getPowInOut(2))
  .to({ alpha: 0 }, 800, Ease.getPowInOut(2));

Ticker.setFPS(60);
Ticker.addEventListener("tick", stage);
