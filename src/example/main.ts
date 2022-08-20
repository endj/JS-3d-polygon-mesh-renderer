import Cube from "./cube";
import Teapot from "./teapot"
import Canvas from "../graphics/canvas"
import Vertex from "../graphics/vertex";
import Camera from "../graphics/camera";
import World from "../graphics/world";
import Controller from "../controlls/controller";
import Renderer from "../graphics/renderer";
import Matrix3 from "../graphics/matrix";

const generateRandomCubes = (): Cube[] => {
    const cubes = []
    const diff = 400
    for (let x = -10; x < 10; x++) {
        for (let y = -10; y < 10; y++) {
            for (let z = -10; z < 10; z++) {
                cubes.push(new Cube({ x: 0 + x * diff, y: 0 + y * diff, z: z * diff + 150 }, 25))
            }
        }
    }
    return cubes;
}



const cubes: Cube[] = generateRandomCubes();

const teapots: Teapot[] = [];
let i = 10;
while(i-->0) {
    teapots.push(new Teapot())
}


const canvas = new Canvas({ width: window.innerWidth, height: window.innerHeight })
const camera = new Camera(new Vertex(0, 0, -100))

const world = new World();
cubes.forEach(cube => world.add(cube))
teapots.forEach(t => {
    world.moveWorldZ(100)
    world.add(t)
})

const controller = new Controller(camera, world)
controller.setup();

const renderer = new Renderer(canvas, world, camera);

const tick = (): void => {
    renderer.drawFrame()
    world.rotateWorld(Matrix3.rotationX(0.01))
  //  world.rotateWorld(Matrix3.rotationZ(0.01))
    window.requestAnimationFrame(tick)
}
tick()

