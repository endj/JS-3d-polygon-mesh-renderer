import Vertex from "./vertex"

export default class Polygon {
    count: number
    vertices: Vertex[]

    constructor(vertices: Vertex[]) {
        this.count = vertices.length
        this.vertices = vertices
    }

}