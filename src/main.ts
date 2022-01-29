const canvas: Canvas = new Canvas({ width: window.innerWidth, height: window.innerHeight })
const camera = new Camera(new Vertex(-950,-650,-10))


const transform = (cube: Cube, matrix: number[][]) => {
    for (let i = 0; i < cube.vertices.length; i++) {
        const vertice = cube.vertices[i];
        Matrix3.transformVec(vertice, matrix)
    }
}


const diff = 200
const originCube = new Cube({ x: 0, y: 0, z: 0 }, 2)
const cubes: Cube[] = []
for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
        for (let z = 0; z < 10; z++) {
            cubes.push(new Cube({ x: -2000 + x * diff, y: -2000 + y * diff, z: z * diff + 150 }, 25))
        }
    }
}


const moveCubes = (n = 100) => {
    cubes.forEach(cube => cube.moveZ(n))
}

const drawOrigin = () => {
    canvas.context.strokeRect(0, 0, 2, 2)
    canvas.context.strokeText("(0,0,0)", 5, 0)
}

const drawCameraPosition = () => {
    canvas.context.strokeText(`Camera position (${camera.position.x}, ${camera.position.y}, ${camera.position.z})`, canvas.width / 2 - 200, canvas.height / 2 - 200)
}

const tick = () => {
    canvas.clearScreen()
    drawCameraPosition()
    draw()
    drawCube(originCube)
    window.requestAnimationFrame(tick)
}


/**
 * @param v Some position in 3d space
 * @returns Vertex v's position projected onto the screen at some distance.
 */
const project = (v: Vertex) => {
    const distanceVector = new Vertex(v.x - camera.position.x, v.y - camera.position.y, v.z - camera.position.z)
    let screenToObjectDistance = Matrix3.dotProduct(distanceVector, camera.directionVector)
    if (screenToObjectDistance <= 0)
        return null
    let scaleFactor = camera.screenDistance / screenToObjectDistance
    let posX = scaleFactor * Matrix3.dotProduct(distanceVector, camera.rightVector)
    let posY = scaleFactor * Matrix3.dotProduct(distanceVector, camera.upVector)
    return [posX, posY]
}


/**
 * Rotates vertixes of a cube around the point (0,0,0)
 */
const rotateCubes = (transformMatrix: number[][]) => cubes.forEach(c => transform(c, transformMatrix))

const draw = () => {
    for (let cube of cubes) {
        drawCube(cube)
    }
}

const drawCube = (cube: Cube) => {
    if (cube.position.z < camera.position.z)
        return
    canvas.context.beginPath()
    for (let polygons of cube.faces) {
        let res = project(polygons.vertices[0])
        if (res) {
            let [x, y] = res
            canvas.context.moveTo(x, y)
        }
        for (let i = 1; i < polygons.vertices.length; i++) {
            let res = project(polygons.vertices[i])
            if (res) {
                let [x, y] = res
                canvas.context.lineTo(x, y)
            }
        }
        canvas.context.closePath()
    }
    canvas.context.stroke()
}

document.addEventListener("keydown", e => {
    if (e.key === "w")
        camera.position.y -= 100
    if (e.key === "s")
        camera.position.y += 100
    if (e.key === "a")
        camera.position.x += 100
    if (e.key === "d")
        camera.position.x -= 100
})

tick()