class Camera {
    position: Vertex
    directionVector: Vertex
    upVector: Vertex
    screenDistance: number
    rightVector: Vertex
    constructor(position = new Vertex(0,0, 0)) {
        this.position = position
        // A vector that points in the z direction
        this.directionVector = new Vertex(0, 0, 1)
        // A vector that points "up" in the y direction
        this.upVector = new Vertex(0, 1, 0)
        // Used to figure out distance to the 2d "window" into 3d world
        this.screenDistance = 1000
        this.rightVector = Matrix3.crossProduct(this.directionVector, this.upVector)
    }

}