import Camera from "./camera";
import Canvas from "./canvas";
import Polygon from "./polygon";
import Projection from "./projection";
import Vertex from "./vertex";
import World, { WorldObject } from "./world";

export default class Renderer {
    private readonly canvas: Canvas;
    private readonly world: World;
    private readonly camera: Camera;
    constructor(canvas: Canvas, world: World, camera: Camera) {
        this.canvas = canvas;
        this.world = world;
        this.camera = camera;
    }

    drawFrame() {
        this.canvas.clearScreen()
        const objects: WorldObject[] = this.world.worldObjects;
        const ctx = this.canvas.context;

        for (let i = 0; i < objects.length; i++) {
            const object: WorldObject = objects[i];

            ctx.beginPath();
            const polygons: Polygon[] = object.polygons();
            for (let polygonIndex = 0; polygonIndex < polygons.length; polygonIndex++) {
                const vertices: Vertex[] = polygons[polygonIndex].vertices;

                const res = Projection.project(vertices[0], this.camera)
                if (res) {
                    ctx.moveTo(res[0], res[1])
                }

                for (let vertice = 1; vertice < vertices.length; vertice++) {
                    const res = Projection.project(vertices[vertice], this.camera)
                    if (res) {
                        ctx.lineTo(res[0], res[1])
                    }
                }
                ctx.closePath()
            }
            ctx.stroke()
        }
    }
}