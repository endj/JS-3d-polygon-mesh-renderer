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
    const randOffset = () => Math.random() * diff;
    for (let x = -10; x < 10; x++) {
        for (let y = -10; y < 10; y++) {
            for (let z = -10; z < 10; z++) {
                cubes.push(new Cube({ x: 100 + x * randOffset(), y: 100 + y * randOffset(), z: z * randOffset() }, 25))
            }
        }
    }
    return cubes;
}

//const cubes: Cube[] = generateRandomCubes();
const teapots: Teapot[] = [];
let i = 31;
while (i-- > 0) {
    teapots.push(new Teapot())
}

const canvas = new Canvas({ width: window.innerWidth, height: window.innerHeight })
const camera = new Camera(new Vertex(0, 0, 0))

const world = new World();
teapots.forEach(t => {
    world.moveObjectZ(1000, t)
    world.rotateWorld(Matrix3.rotationX(0.2))
    world.add(t)
})
world.rotateWorld(Matrix3.rotationY(1))
world.moveWorldZ(2000)

const controller = new Controller(world)
controller.setup();
const renderer = new Renderer(canvas, world, camera);

const tick = (): void => {
    renderer.drawFrame()
    world.rotateWorld(Matrix3.rotationZ(0.01))
    window.requestAnimationFrame(tick)
}
tick()

