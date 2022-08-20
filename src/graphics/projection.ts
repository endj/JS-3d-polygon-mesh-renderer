import Camera from "./camera";
import Matrix3 from "./matrix";
import Vertex from "./vertex";

export default class Projection {
    static readonly NEAR_RENDER_CULLING = 10;
    static readonly FAR_RENDER_CULLING = 10_000;

    static project(v: Vertex, camera: Camera): [x: number, y: number] | null {
        const distanceVector = new Vertex(v.x - camera.position.x, v.y - camera.position.y, v.z - camera.position.z)
        const screenToObjectDistance = Matrix3.dotProduct(distanceVector, camera.directionVector)
        if (screenToObjectDistance <= this.NEAR_RENDER_CULLING || screenToObjectDistance >= this.FAR_RENDER_CULLING)
            return null
        const scaleFactor = camera.screenDistance / screenToObjectDistance
        const posX = scaleFactor * Matrix3.dotProduct(distanceVector, camera.rightVector)
        const posY = scaleFactor * Matrix3.dotProduct(distanceVector, camera.upVector)
        return [posX, posY]
    }

}