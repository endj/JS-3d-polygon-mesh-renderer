import Polygon from "../graphics/polygon"
import Vertex from "../graphics/vertex"
import { WorldObject } from "../graphics/world"

export default class Cube implements WorldObject {
    readonly cubePolygons: Polygon[]
    readonly vertices: Vertex[]
    readonly position: Vertex
    constructor(position: Vertex, radius: number) {
        this.position = position
        this.vertices = this.createVertices(position, radius)
        this.cubePolygons = this.generateFaces()
    }

    /*
        Using right-hand rule, since Y increases as we go down, X increases as we go right, Z increases as it moves away
        from camera. 

            Z

            ^
           /
          /
         /
        o ---->     X
        |
        |
        v

        Y

        */

    private createVertices(pos: Vertex, radius: number): Vertex[] {
        const v: Vertex[] = [
            new Vertex(pos.x - radius, pos.y - radius, pos.z - radius), // a
            new Vertex(pos.x - radius, pos.y + radius, pos.z - radius), // c
            new Vertex(pos.x + radius, pos.y - radius, pos.z - radius), // b
            new Vertex(pos.x + radius, pos.y + radius, pos.z - radius), // d

            new Vertex(pos.x - radius, pos.y - radius, pos.z + radius), // e
            new Vertex(pos.x - radius, pos.y + radius, pos.z + radius), // g
            new Vertex(pos.x + radius, pos.y - radius, pos.z + radius), // f
            new Vertex(pos.x + radius, pos.y + radius, pos.z + radius)  // h
        ]
        return v;
    }

    private generateFaces(): Polygon[] {
        const v = this.vertices;
        const polygons: Polygon[] = [
            new Polygon([v[FRONT_TOP_LEFT], v[FRONT_TOP_RIGHT], v[FRONT_BOT_RIGHT], v[FRONT_BOT_LEFT]]), // Front
            new Polygon([v[FRONT_TOP_LEFT], v[BACK_TOP_LEFT], v[BACK_TOP_RIGHT], v[FRONT_TOP_RIGHT]]), // Top
            new Polygon([v[BACK_TOP_LEFT], v[BACK_TOP_RIGHT], v[BACK_BOT_RIGHT], v[BACK_BOT_LEFT]]), // Back
            new Polygon([v[BACK_BOT_LEFT], v[BACK_BOT_RIGHT], v[FRONT_BOT_RIGHT], v[FRONT_BOT_LEFT]]), // Bottom
            new Polygon([v[FRONT_TOP_LEFT], v[BACK_TOP_LEFT], v[BACK_BOT_LEFT], v[FRONT_BOT_LEFT]]), // Left
            new Polygon([v[FRONT_TOP_RIGHT], v[BACK_TOP_RIGHT], v[BACK_BOT_RIGHT], v[FRONT_BOT_RIGHT]]), // Right
        ]
        return polygons;
    }

    moveX(amount: number) {
        this.vertices.forEach(v => v.x += amount)
        this.position.x += amount
    }
    moveY(amount: number) {
        this.vertices.forEach(v => v.y += amount)
        this.position.y += amount
    }
    moveZ(amount: number) {
        this.vertices.forEach(v => v.z += amount)
        this.position.z += amount
    }

    polygons(): Polygon[] {
        return this.cubePolygons;
    }
    /*
           e-------f
          /|      /|
         / |     / |
        a--|----b  |
        |  g----|--h
        | /     | /
        c-------d
        */
}
const FRONT_TOP_LEFT = 0
const FRONT_TOP_RIGHT = 2
const FRONT_BOT_LEFT = 1
const FRONT_BOT_RIGHT = 3

const BACK_TOP_LEFT = 4
const BACK_TOP_RIGHT = 6
const BACK_BOT_LEFT = 5
const BACK_BOT_RIGHT = 7

