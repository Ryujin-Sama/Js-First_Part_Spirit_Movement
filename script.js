let playerState = 'idle';
const dropdown  = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
  playerState = e.target.value;
});

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


const playerimg = new Image();
playerimg.src = "./assests/shadow_dog.png";

const spriteWidth = 575;
const spriteHeight = 523;


// let frameX = 0;
// let frameY = 0;

let gameFrame = 0;
let staggeredFrame = 5;

const spriteanimation = [];
const animationState = [
  {
    name : 'idle',
    frames: 7,
  },
  {
    name : 'jump',
    frames: 7,
  },
  {
    name : 'fall',
    frames: 7,
  },
  {
    name : 'run',
    frames: 9,
  },
  {
    name : 'dizzy',
    frames: 11,
  },
  {
    name : 'sit',
    frames: 5,
  },
  {
    name : 'roll',
    frames: 7,
  },
  {
    name : 'bite',
    frames: 7,
  },
  {
    name : 'ko',
    frames: 12,
  },
  {
    name : 'getHit',
    frames: 4,
  }
];

animationState.forEach((state, index) =>{
  let frames = {
    loc: [],
  }
  for(let j = 0; j < state.frames; j++){
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({x: positionX, y: positionY});
  }
  spriteanimation[state.name] = frames;
});

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.fillRect(50,50,100,100);

  let position = Math.floor(gameFrame/staggeredFrame) % spriteanimation[playerState].loc.length;
  let frameX = spriteWidth * position;
  let frameY = spriteanimation[playerState].loc[position].y;
  ctx.drawImage(playerimg, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);


  gameFrame++;
  requestAnimationFrame(animate);
};

animate();
