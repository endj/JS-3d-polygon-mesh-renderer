import Camera from "./camera";
import Matrix3 from "./matrix";
import Vertex from "./vertex";

export default class Projection {


    static project(v: Vertex, camera: Camera): [x: number, y: number] | null {
        const distanceVector = new Vertex(v.x - camera.position.x, v.y - camera.position.y, v.z - camera.position.z)
        let screenToObjectDistance = Matrix3.dotProduct(distanceVector, camera.directionVector)
        if (screenToObjectDistance <= 0)
            return null
        let scaleFactor = camera.screenDistance / screenToObjectDistance
        let posX = scaleFactor * Matrix3.dotProduct(distanceVector, camera.rightVector)
        let posY = scaleFactor * Matrix3.dotProduct(distanceVector, camera.upVector)
        return [posX, posY]
    }

}