import Matter from 'matter-js';

let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

const engine = Engine.create();

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 400,
    wireframes: false
  }
});

const boxA = Bodies.rectangle(400, 200, 80, 80);
const ballA = Bodies.circle(380, 100, 40, 10);
const ballB = Bodies.circle(460, 10, 40, 10);
const ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });

World.add(engine.world, [boxA, ballA, ballB, ground]);

Engine.run(engine);

Render.run(render);
