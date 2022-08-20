import Matrix3 from "./matrix";
import Polygon from "./polygon";
import Vertex from "./vertex";

export default class World {
    worldObjects: WorldObject[]
    constructor() {
        this.worldObjects = []
    }

    add(object: WorldObject) {
        this.worldObjects.push(object);
    }

    rotateWorld(rotationMatrix: number[][]): void {
        this.forEachVertice(v => Matrix3.transformVec(v, rotationMatrix));
    }

    moveWorldX(by: number): void {
        this.forEachVertice(v => v.x += by);
    }

    moveWorldY(by: number): void {
        this.forEachVertice(v => v.y += by);
    }

    moveWorldZ(by: number): void {
        this.forEachVertice(v => v.z += by);
    }

    moveObjectX(by: number, object: WorldObject): void {
        object.polygons().forEach(p => p.vertices.forEach(v => v.x-=by))
    }
    moveObjectY(by: number, object: WorldObject): void {
        object.polygons().forEach(p => p.vertices.forEach(v => v.y-=by))
    }
    moveObjectZ(by: number, object: WorldObject): void {
        object.polygons().forEach(p => p.vertices.forEach(v => v.z-=by))
    }


    private forEachVertice(fn: (v: Vertex) => void) {
        for (let i = 0; i < this.worldObjects.length; i++) {
            const object: WorldObject = this.worldObjects[i];
            const polygons: Polygon[] = object.polygons();
            for (let p = 0; p < polygons.length; p++) {
                const pol: Polygon = polygons[p];
                for (let v = 0; v < pol.vertices.length; v++) {
                    fn(pol.vertices[v])
                }
            }
        }
    }
}


export interface WorldObject {
    polygons(): Polygon[]
}