/**
    https://en.wikipedia.org/wiki/Rotation_matrix

 */
class Matrix3 {

    static rotationX(angle: number): number[][] {
        var a = Math.cos(angle)
        var b = Math.sin(angle)
        return [
            [1.0, 0.0, 0.0],
            [0.0, a, -b],
            [0.0, b, a],
        ]
    }


    static rotationY(angle: number): number[][] {
        var a = Math.cos(angle)
        var b = Math.sin(angle)
        return [
            [a, 0.0, b],
            [0.0, 1.0, 0.0],
            [-b, 0.0, a],
        ]
    }

    static rotationZ(angle: number): number[][] {
        var a = Math.cos(angle)
        var b = Math.sin(angle)
        return [
            [a, -b, 0.0],
            [b, a, 0.0],
            [0.0, 0.0, 1.0]
        ]
    }

    static transformVec(vertice: Vertex, matrix: number[][]) {
        const x = vertice.x * matrix[0][0] + vertice.y * matrix[0][1] + vertice.z * matrix[0][2]
        const y = vertice.x * matrix[1][0] + vertice.y * matrix[1][1] + vertice.z * matrix[1][2]
        const z = vertice.x * matrix[2][0] + vertice.y * matrix[2][1] + vertice.z * matrix[2][2]
        vertice.x = x
        vertice.y = y
        vertice.z = z
    }

    static crossProduct(a: Vertex, b: Vertex) {
        const x = a.y * b.z - a.z * b.y
        const y = a.z * b.x - a.x * b.z
        const z = a.x * b.y - a.y * b.x
        return new Vertex(x, y, z)
    }

    static dotProduct(a: Vertex, b: Vertex) {
        let sum = 0
        sum += a.x * b.x
        sum += a.y * b.y
        sum += a.z * b.z
        return sum
    }
}