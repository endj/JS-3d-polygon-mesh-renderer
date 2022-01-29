class Camera {
    constructor(position = new Vertex(0, 0, 0)) {
        this.position = position;
        this.directionVector = new Vertex(0, 0, 1);
        this.upVector = new Vertex(0, 1, 0);
        this.screenDistance = 1000;
        this.rightVector = Matrix3.crossProduct(this.directionVector, this.upVector);
    }
}
class Matrix3 {
    static rotationX(angle) {
        var a = Math.cos(angle);
        var b = Math.sin(angle);
        return [
            [1.0, 0.0, 0.0],
            [0.0, a, -b],
            [0.0, b, a],
        ];
    }
    static rotationY(angle) {
        var a = Math.cos(angle);
        var b = Math.sin(angle);
        return [
            [a, 0.0, b],
            [0.0, 1.0, 0.0],
            [-b, 0.0, a],
        ];
    }
    static rotationZ(angle) {
        var a = Math.cos(angle);
        var b = Math.sin(angle);
        return [
            [a, -b, 0.0],
            [b, a, 0.0],
            [0.0, 0.0, 1.0]
        ];
    }
    static transformVec(vertice, matrix) {
        const x = vertice.x * matrix[0][0] + vertice.y * matrix[0][1] + vertice.z * matrix[0][2];
        const y = vertice.x * matrix[1][0] + vertice.y * matrix[1][1] + vertice.z * matrix[1][2];
        const z = vertice.x * matrix[2][0] + vertice.y * matrix[2][1] + vertice.z * matrix[2][2];
        vertice.x = x;
        vertice.y = y;
        vertice.z = z;
    }
    static crossProduct(a, b) {
        const x = a.y * b.z - a.z * b.y;
        const y = a.z * b.x - a.x * b.z;
        const z = a.x * b.y - a.y * b.x;
        return new Vertex(x, y, z);
    }
    static dotProduct(a, b) {
        let sum = 0;
        sum += a.x * b.x;
        sum += a.y * b.y;
        sum += a.z * b.z;
        return sum;
    }
}
class Vertex {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
class Polygon {
    constructor(vertices) {
        this.count = vertices.length;
        this.vertices = vertices;
    }
}
class Cube {
    constructor(position, radius) {
        this.position = position;
        this.vertices = this.createVertices(position, radius);
        this.faces = this.generateFaces();
    }
    createVertices(pos, radius) {
        const v = [
            new Vertex(pos.x - radius, pos.y - radius, pos.z - radius),
            new Vertex(pos.x - radius, pos.y + radius, pos.z - radius),
            new Vertex(pos.x + radius, pos.y - radius, pos.z - radius),
            new Vertex(pos.x + radius, pos.y + radius, pos.z - radius),
            new Vertex(pos.x - radius, pos.y - radius, pos.z + radius),
            new Vertex(pos.x - radius, pos.y + radius, pos.z + radius),
            new Vertex(pos.x + radius, pos.y - radius, pos.z + radius),
            new Vertex(pos.x + radius, pos.y + radius, pos.z + radius)
        ];
        return v;
    }
    generateFaces() {
        const v = this.vertices;
        const polygons = [
            new Polygon([v[FRONT_TOP_LEFT], v[FRONT_TOP_RIGHT], v[FRONT_BOT_RIGHT], v[FRONT_BOT_LEFT]]),
            new Polygon([v[FRONT_TOP_LEFT], v[BACK_TOP_LEFT], v[BACK_TOP_RIGHT], v[FRONT_TOP_RIGHT]]),
            new Polygon([v[BACK_TOP_LEFT], v[BACK_TOP_RIGHT], v[BACK_BOT_RIGHT], v[BACK_BOT_LEFT]]),
            new Polygon([v[BACK_BOT_LEFT], v[BACK_BOT_RIGHT], v[FRONT_BOT_RIGHT], v[FRONT_BOT_LEFT]]),
            new Polygon([v[FRONT_TOP_LEFT], v[BACK_TOP_LEFT], v[BACK_BOT_LEFT], v[FRONT_BOT_LEFT]]),
            new Polygon([v[FRONT_TOP_RIGHT], v[BACK_TOP_RIGHT], v[BACK_BOT_RIGHT], v[FRONT_BOT_RIGHT]]),
        ];
        return polygons;
    }
    moveX(amount) {
        this.vertices.forEach(v => v.x += amount);
        this.position.x += amount;
    }
    moveY(amount) {
        this.vertices.forEach(v => v.y += amount);
        this.position.y += amount;
    }
    moveZ(amount) {
        this.vertices.forEach(v => v.z += amount);
        this.position.z += amount;
    }
}
const FRONT_TOP_LEFT = 0;
const FRONT_TOP_RIGHT = 2;
const FRONT_BOT_LEFT = 1;
const FRONT_BOT_RIGHT = 3;
const BACK_TOP_LEFT = 4;
const BACK_TOP_RIGHT = 6;
const BACK_BOT_LEFT = 5;
const BACK_BOT_RIGHT = 7;
class Canvas {
    constructor(config) {
        var _a;
        this.canvas = document.createElement("canvas");
        this.canvas.width = config.width;
        this.canvas.height = config.height;
        this.width = config.width;
        this.height = config.height;
        const canvasContext = this.canvas.getContext("2d", { alpha: false });
        if (canvasContext === null)
            throw "Initialization exception";
        this.context = canvasContext;
        this.context.translate(config.width / 2, config.height / 2);
        this.context.fillStyle = "black";
        this.context.strokeStyle = "#03A062";
        (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(this.canvas);
    }
    clearScreen() {
        this.context.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    }
    drawPolygon(polygon) {
        this.context.beginPath();
        this.context.moveTo(polygon.vertices[0].x, polygon.vertices[0].y);
        for (let i = 1; i < polygon.vertices.length; i++)
            this.context.lineTo(polygon.vertices[i].x, polygon.vertices[i].y);
        this.context.closePath();
        this.context.stroke();
    }
    drawCube(cube) {
        for (let i = 0; i < cube.faces.length; i++)
            this.drawPolygon(cube.faces[i]);
    }
}
const canvas = new Canvas({ width: window.innerWidth, height: window.innerHeight });
const camera = new Camera(new Vertex(-950, -650, -10));
const transform = (cube, matrix) => {
    for (let i = 0; i < cube.vertices.length; i++) {
        const vertice = cube.vertices[i];
        Matrix3.transformVec(vertice, matrix);
    }
};
const diff = 200;
const originCube = new Cube({ x: 0, y: 0, z: 0 }, 2);
const cubes = [];
for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
        for (let z = 0; z < 10; z++) {
            cubes.push(new Cube({ x: -2000 + x * diff, y: -2000 + y * diff, z: z * diff + 150 }, 25));
        }
    }
}
const moveCubes = (n = 100) => {
    cubes.forEach(cube => cube.moveZ(n));
};
const drawOrigin = () => {
    canvas.context.strokeRect(0, 0, 2, 2);
    canvas.context.strokeText("(0,0,0)", 5, 0);
};
const drawCameraPosition = () => {
    canvas.context.strokeText(`Camera position (${camera.position.x}, ${camera.position.y}, ${camera.position.z})`, canvas.width / 2 - 200, canvas.height / 2 - 200);
};
const tick = () => {
    canvas.clearScreen();
    drawCameraPosition();
    draw();
    drawCube(originCube);
    window.requestAnimationFrame(tick);
};
const project = (v) => {
    const distanceVector = new Vertex(v.x - camera.position.x, v.y - camera.position.y, v.z - camera.position.z);
    let screenToObjectDistance = Matrix3.dotProduct(distanceVector, camera.directionVector);
    if (screenToObjectDistance <= 0)
        return null;
    let scaleFactor = camera.screenDistance / screenToObjectDistance;
    let posX = scaleFactor * Matrix3.dotProduct(distanceVector, camera.rightVector);
    let posY = scaleFactor * Matrix3.dotProduct(distanceVector, camera.upVector);
    return [posX, posY];
};
const rotateCubes = (transformMatrix) => cubes.forEach(c => transform(c, transformMatrix));
const draw = () => {
    for (let cube of cubes) {
        drawCube(cube);
    }
};
const drawCube = (cube) => {
    if (cube.position.z < camera.position.z)
        return;
    canvas.context.beginPath();
    for (let polygons of cube.faces) {
        let res = project(polygons.vertices[0]);
        if (res) {
            let [x, y] = res;
            canvas.context.moveTo(x, y);
        }
        for (let i = 1; i < polygons.vertices.length; i++) {
            let res = project(polygons.vertices[i]);
            if (res) {
                let [x, y] = res;
                canvas.context.lineTo(x, y);
            }
        }
        canvas.context.closePath();
    }
    canvas.context.stroke();
};
document.addEventListener("keydown", e => {
    if (e.key === "w")
        camera.position.y -= 100;
    if (e.key === "s")
        camera.position.y += 100;
    if (e.key === "a")
        camera.position.x += 100;
    if (e.key === "d")
        camera.position.x -= 100;
});
tick();
