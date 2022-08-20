import Camera from "../graphics/camera";
import Matrix3 from "../graphics/matrix";
import World from "../graphics/world";

export default class Controller {
    camera: Camera;
    world: World;
    constructor(camera: Camera, world: World) {
        this.camera = camera;
        this.world = world;
    }

    setup(): void {
        document.addEventListener("keydown", e => {
            console.log(e.key)
            if (e.key === "w")
                this.world.moveWorldZ(-100)
            if (e.key === "s")
                this.world.moveWorldZ(100)
            if (e.key === "a")
                this.world.moveWorldX(-100)
            if (e.key === "d")
                this.world.moveWorldX(100)
            if (e.key === "4")
                this.world.rotateWorld(Matrix3.rotationY(-0.01))
            if (e.key === "6")
                this.world.rotateWorld(Matrix3.rotationY(+0.01))
            if (e.key === "8")
                this.world.rotateWorld(Matrix3.rotationX(-0.01))
            if (e.key === "2")
                this.world.rotateWorld(Matrix3.rotationX(0.01))
        })
    }
}