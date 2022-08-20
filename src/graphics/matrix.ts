import Vertex from "./vertex"

/**
    https://en.wikipedia.org/wiki/Rotation_matrix

 */
export default class Matrix3 {

    static rotationX(angle: number): number[][] {
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)
        return [
            [1.0, 0.0, 0.0],
            [0.0, cos, -sin],
            [0.0, sin, cos],
        ]
    }


    static rotationY(angle: number): number[][] {
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)
        return [
            [cos, 0.0, sin],
            [0.0, 1.0, 0.0],
            [-sin, 0.0, cos],
        ]
    }

    static rotationZ(angle: number): number[][] {
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)
        return [
            [cos, -sin, 0.0],
            [sin, cos, 0.0],
            [0.0, 0.0, 1.0]
        ]
    }

    static transformVec(vertice: Vertex, matrix: number[][]): void {
        const x = vertice.x * matrix[0][0] + vertice.y * matrix[0][1] + vertice.z * matrix[0][2]
        const y = vertice.x * matrix[1][0] + vertice.y * matrix[1][1] + vertice.z * matrix[1][2]
        const z = vertice.x * matrix[2][0] + vertice.y * matrix[2][1] + vertice.z * matrix[2][2]
        vertice.x = x
        vertice.y = y
        vertice.z = z
    }

    static crossProduct(a: Vertex, b: Vertex): Vertex {
        const x = a.y * b.z - a.z * b.y
        const y = a.z * b.x - a.x * b.z
        const z = a.x * b.y - a.y * b.x
        return new Vertex(x, y, z)
    }

    static dotProduct(a: Vertex, b: Vertex): number {
        return a.x * b.x + a.y * b.y + a.z * b.z
    }
}