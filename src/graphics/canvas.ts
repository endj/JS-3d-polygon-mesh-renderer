import Polygon from "./polygon"

type Config = {
    width: number,
    height: number
}

export default class Canvas {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    width: number
    height: number

    constructor(config: Config) {
        this.canvas = document.createElement("canvas")
        this.canvas.width = config.width
        this.canvas.height = config.height
        this.width = config.width
        this.height = config.height


        const canvasContext: null | CanvasRenderingContext2D = this.canvas.getContext("2d", { alpha: false })
        if (canvasContext === null)
            throw "Initialization exception"
        this.context = canvasContext
        this.context.translate(config.width / 2, config.height / 2)
        this.context.fillStyle = "black"
        this.context.strokeStyle = "#03A062"
        document.querySelector("body")?.appendChild(this.canvas)
    }

    clearScreen(): void {
        this.context.fillRect(- this.canvas.width / 2, - this.canvas.height / 2, this.canvas.width, this.canvas.height)
    }

    drawPolygon(polygon: Polygon): void {
        this.context.beginPath()
        this.context.moveTo(polygon.vertices[0].x, polygon.vertices[0].y)
        for (let i = 1; i < polygon.vertices.length; i++)
            this.context.lineTo(polygon.vertices[i].x, polygon.vertices[i].y)
        this.context.closePath()
        this.context.stroke()
    }



}



