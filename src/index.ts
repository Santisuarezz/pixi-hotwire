import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Loader.shared.add({URL: "./clampy.png", name: "clampy" })
Loader.shared.add({URL: "./dino.webp", name: "mi dino" })


const clampy: Sprite = Sprite.from("./dino.webp");

console.log("bienvenidos!", clampy.width, clampy.height); 

// clampy.anchor.set(0);

clampy.x = 0
clampy.y = 0

app.stage.addChild(clampy);