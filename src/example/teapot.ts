import Matrix3 from "../graphics/matrix"
import Polygon from "../graphics/polygon"
import polygon from "../graphics/polygon"
import Vertex from "../graphics/vertex"
import { WorldObject } from "../graphics/world"

export default class Teapot implements WorldObject {
    teapotPolygons: Polygon[]

    constructor() {
        this.teapotPolygons = this.generatePolygons()
    }

    polygons(): polygon[] {
        return this.teapotPolygons;
    }

    generatePolygons(): Polygon[] {
        const scale = 10
        const vertex: Vertex[] = rawData.split("\n").map(row => {
            const [x, y, z] = row.split(" ")
            return new Vertex(scale * Number.parseFloat(x), scale * Number.parseFloat(y), scale * Number.parseFloat(z))
        })
        return [new Polygon(vertex)];
    }
}

const rawData = `1.38137 0 2.45469 
1.4 0 2.4 
1.35074 -0.375926 2.4 
1.33276 -0.370922 2.45469 
1.38426 0 2.4875 
1.33555 -0.371699 2.4875 
1.40312 0 2.49844 
1.35376 -0.376765 2.49844 
1.43241 0 2.4875 
1.38201 -0.384628 2.4875 
1.46655 0 2.45469 
1.41495 -0.393796 2.45469 
1.5 0 2.4 
1.44722 -0.402778 2.4 
1.21126 -0.711407 2.4 
1.19514 -0.701938 2.45469 
1.19764 -0.703409 2.4875 
1.21396 -0.712995 2.49844 
1.2393 -0.727875 2.4875 
1.26884 -0.745225 2.45469 
1.29778 -0.762222 2.4 
0.994 -0.994 2.4 
0.98077 -0.98077 2.45469 
0.982824 -0.982824 2.4875 
0.996219 -0.996219 2.49844 
1.01701 -1.01701 2.4875 
1.04125 -1.04125 2.45469 
1.065 -1.065 2.4 
0.711407 -1.21126 2.4 
0.701938 -1.19514 2.45469 
0.703409 -1.19764 2.4875 
0.712995 -1.21396 2.49844 
0.727875 -1.2393 2.4875 
0.745225 -1.26884 2.45469 
0.762222 -1.29778 2.4 
0.375926 -1.35074 2.4 
0.370922 -1.33276 2.45469 
0.371699 -1.33555 2.4875 
0.376765 -1.35376 2.49844 
0.384628 -1.38201 2.4875 
0.393796 -1.41495 2.45469 
0.402778 -1.44722 2.4 
0 -1.4 2.4 
0 -1.38137 2.45469 
0 -1.38426 2.4875 
0 -1.40312 2.49844 
0 -1.43241 2.4875 
0 -1.46655 2.45469 
0 -1.5 2.4 
-0.375926 -1.35074 2.4 
-0.370922 -1.33276 2.45469 
-0.371699 -1.33555 2.4875 
-0.376765 -1.35376 2.49844 
-0.384628 -1.38201 2.4875 
-0.393796 -1.41495 2.45469 
-0.402778 -1.44722 2.4 
-0.711407 -1.21126 2.4 
-0.701938 -1.19514 2.45469 
-0.703409 -1.19764 2.4875 
-0.712995 -1.21396 2.49844 
-0.727875 -1.2393 2.4875 
-0.745225 -1.26884 2.45469 
-0.762222 -1.29778 2.4 
-0.994 -0.994 2.4 
-0.98077 -0.98077 2.45469 
-0.982824 -0.982824 2.4875 
-0.996219 -0.996219 2.49844 
-1.01701 -1.01701 2.4875 
-1.04125 -1.04125 2.45469 
-1.065 -1.065 2.4 
-1.21126 -0.711407 2.4 
-1.19514 -0.701938 2.45469 
-1.19764 -0.703409 2.4875 
-1.21396 -0.712995 2.49844 
-1.2393 -0.727875 2.4875 
-1.26884 -0.745225 2.45469 
-1.29778 -0.762222 2.4 
-1.35074 -0.375926 2.4 
-1.33276 -0.370922 2.45469 
-1.33555 -0.371699 2.4875 
-1.35376 -0.376765 2.49844 
-1.38201 -0.384628 2.4875 
-1.41495 -0.393796 2.45469 
-1.44722 -0.402778 2.4 
-1.4 0 2.4 
-1.38137 0 2.45469 
-1.38426 0 2.4875 
-1.40312 0 2.49844 
-1.43241 0 2.4875 
-1.46655 0 2.45469 
-1.5 0 2.4 
-1.35074 0.375926 2.4 
-1.33276 0.370922 2.45469 
-1.33555 0.371699 2.4875 
-1.35376 0.376765 2.49844 
-1.38201 0.384628 2.4875 
-1.41495 0.393796 2.45469 
-1.44722 0.402778 2.4 
-1.21126 0.711407 2.4 
-1.19514 0.701938 2.45469 
-1.19764 0.703409 2.4875 
-1.21396 0.712995 2.49844 
-1.2393 0.727875 2.4875 
-1.26884 0.745225 2.45469 
-1.29778 0.762222 2.4 
-0.994 0.994 2.4 
-0.98077 0.98077 2.45469 
-0.982824 0.982824 2.4875 
-0.996219 0.996219 2.49844 
-1.01701 1.01701 2.4875 
-1.04125 1.04125 2.45469 
-1.065 1.065 2.4 
-0.711407 1.21126 2.4 
-0.701938 1.19514 2.45469 
-0.703409 1.19764 2.4875 
-0.712995 1.21396 2.49844 
-0.727875 1.2393 2.4875 
-0.745225 1.26884 2.45469 
-0.762222 1.29778 2.4 
-0.375926 1.35074 2.4 
-0.370922 1.33276 2.45469 
-0.371699 1.33555 2.4875 
-0.376765 1.35376 2.49844 
-0.384628 1.38201 2.4875 
-0.393796 1.41495 2.45469 
-0.402778 1.44722 2.4 
0 1.4 2.4 
0 1.38137 2.45469 
0 1.38426 2.4875 
0 1.40312 2.49844 
0 1.43241 2.4875 
0 1.46655 2.45469 
0 1.5 2.4 
0.375926 1.35074 2.4 
0.370922 1.33276 2.45469 
0.371699 1.33555 2.4875 
0.376765 1.35376 2.49844 
0.384628 1.38201 2.4875 
0.393796 1.41495 2.45469 
0.402778 1.44722 2.4 
0.711407 1.21126 2.4 
0.701938 1.19514 2.45469 
0.703409 1.19764 2.4875 
0.712995 1.21396 2.49844 
0.727875 1.2393 2.4875 
0.745225 1.26884 2.45469 
0.762222 1.29778 2.4 
0.994 0.994 2.4 
0.98077 0.98077 2.45469 
0.982824 0.982824 2.4875 
0.996219 0.996219 2.49844 
1.01701 1.01701 2.4875 
1.04125 1.04125 2.45469 
1.065 1.065 2.4 
1.21126 0.711407 2.4 
1.19514 0.701938 2.45469 
1.19764 0.703409 2.4875 
1.21396 0.712995 2.49844 
1.2393 0.727875 2.4875 
1.26884 0.745225 2.45469 
1.29778 0.762222 2.4 
1.35074 0.375926 2.4 
1.33276 0.370922 2.45469 
1.33555 0.371699 2.4875 
1.35376 0.376765 2.49844 
1.38201 0.384628 2.4875 
1.41495 0.393796 2.45469 
1.44722 0.402778 2.4 
1.62384 0 2.13785 
1.56671 -0.436032 2.13785 
1.74074 0 1.87778 
1.67949 -0.467421 1.87778 
1.84375 0 1.62187 
1.77888 -0.495081 1.62188 
1.92593 0 1.37222 
1.85816 -0.517147 1.37222 
1.98032 0 1.1309 
1.91065 -0.531754 1.1309 
2 0 0.9 
1.92963 -0.537037 0.9 
1.40492 -0.825153 2.13785 
1.50606 -0.884554 1.87778 
1.59519 -0.936898 1.62188 
1.66628 -0.978656 1.37222 
1.71335 -1.0063 1.1309 
1.73037 -1.0163 0.9 
1.15293 -1.15293 2.13785 
1.23593 -1.23593 1.87778 
1.30906 -1.30906 1.62187 
1.36741 -1.36741 1.37222 
1.40603 -1.40603 1.1309 
1.42 -1.42 0.9 
0.825153 -1.40492 2.13785 
0.884554 -1.50606 1.87778 
0.936898 -1.59519 1.62188 
0.978656 -1.66628 1.37222 
1.0063 -1.71335 1.1309 
1.0163 -1.73037 0.9 
0.436032 -1.56671 2.13785 
0.467421 -1.67949 1.87778 
0.495081 -1.77888 1.62187 
0.517147 -1.85816 1.37222 
0.531754 -1.91065 1.1309 
0.537037 -1.92963 0.9 
0 -1.62384 2.13785 
0 -1.74074 1.87778 
0 -1.84375 1.62187 
0 -1.92593 1.37222 
0 -1.98032 1.1309 
0 -2 0.9 
-0.436032 -1.56671 2.13785 
-0.467421 -1.67949 1.87778 
-0.495081 -1.77888 1.62188 
-0.517147 -1.85816 1.37222 
-0.531754 -1.91065 1.1309 
-0.537037 -1.92963 0.9 
-0.825153 -1.40492 2.13785 
-0.884554 -1.50606 1.87778 
-0.936898 -1.59519 1.62188 
-0.978656 -1.66628 1.37222 
-1.0063 -1.71335 1.1309 
-1.0163 -1.73037 0.9 
-1.15293 -1.15293 2.13785 
-1.23593 -1.23593 1.87778 
-1.30906 -1.30906 1.62187 
-1.36741 -1.36741 1.37222 
-1.40603 -1.40603 1.1309 
-1.42 -1.42 0.9 
-1.40492 -0.825153 2.13785 
-1.50606 -0.884554 1.87778 
-1.59519 -0.936898 1.62188 
-1.66628 -0.978656 1.37222 
-1.71335 -1.0063 1.1309 
-1.73037 -1.0163 0.9 
-1.56671 -0.436032 2.13785 
-1.67949 -0.467421 1.87778 
-1.77888 -0.495081 1.62187 
-1.85816 -0.517147 1.37222 
-1.91065 -0.531754 1.1309 
-1.92963 -0.537037 0.9 
-1.62384 0 2.13785 
-1.74074 0 1.87778 
-1.84375 0 1.62187 
-1.92593 0 1.37222 
-1.98032 0 1.1309 
-2 0 0.9 
-1.56671 0.436032 2.13785 
-1.67949 0.467421 1.87778 
-1.77888 0.495081 1.62188 
-1.85816 0.517147 1.37222 
-1.91065 0.531754 1.1309 
-1.92963 0.537037 0.9 
-1.40492 0.825153 2.13785 
-1.50606 0.884554 1.87778 
-1.59519 0.936898 1.62188 
-1.66628 0.978656 1.37222 
-1.71335 1.0063 1.1309 
-1.73037 1.0163 0.9 
-1.15293 1.15293 2.13785 
-1.23593 1.23593 1.87778 
-1.30906 1.30906 1.62187 
-1.36741 1.36741 1.37222 
-1.40603 1.40603 1.1309 
-1.42 1.42 0.9 
-0.825153 1.40492 2.13785 
-0.884554 1.50606 1.87778 
-0.936898 1.59519 1.62188 
-0.978656 1.66628 1.37222 
-1.0063 1.71335 1.1309 
-1.0163 1.73037 0.9 
-0.436032 1.56671 2.13785 
-0.467421 1.67949 1.87778 
-0.495081 1.77888 1.62187 
-0.517147 1.85816 1.37222 
-0.531754 1.91065 1.1309 
-0.537037 1.92963 0.9 
0 1.62384 2.13785 
0 1.74074 1.87778 
0 1.84375 1.62187 
0 1.92593 1.37222 
0 1.98032 1.1309 
0 2 0.9 
0.436032 1.56671 2.13785 
0.467421 1.67949 1.87778 
0.495081 1.77888 1.62188 
0.517147 1.85816 1.37222 
0.531754 1.91065 1.1309 
0.537037 1.92963 0.9 
0.825153 1.40492 2.13785 
0.884554 1.50606 1.87778 
0.936898 1.59519 1.62188 
0.978656 1.66628 1.37222 
1.0063 1.71335 1.1309 
1.0163 1.73037 0.9 
1.15293 1.15293 2.13785 
1.23593 1.23593 1.87778 
1.30906 1.30906 1.62187 
1.36741 1.36741 1.37222 
1.40603 1.40603 1.1309 
1.42 1.42 0.9 
1.40492 0.825153 2.13785 
1.50606 0.884554 1.87778 
1.59519 0.936898 1.62188 
1.66628 0.978656 1.37222 
1.71335 1.0063 1.1309 
1.73037 1.0163 0.9 
1.56671 0.436032 2.13785 
1.67949 0.467421 1.87778 
1.77888 0.495081 1.62187 
1.85816 0.517147 1.37222 
1.91065 0.531754 1.1309 
1.92963 0.537037 0.9 
1.96296 0 0.693403 
1.8939 -0.527092 0.693403 
1.87037 0 0.522222 
1.80456 -0.502229 0.522222 
1.75 0 0.384375 
1.68843 -0.469907 0.384375 
1.62963 0 0.277778 
1.57229 -0.437586 0.277778 
1.53704 0 0.200347 
1.48296 -0.412723 0.200347 
1.5 0 0.15 
1.44722 -0.402778 0.15 
1.69833 -0.997476 0.693403 
1.61822 -0.950425 0.522222 
1.51407 -0.889259 0.384375 
1.40993 -0.828093 0.277778 
1.32982 -0.781043 0.200347 
1.29778 -0.762222 0.15 
1.3937 -1.3937 0.693403 
1.32796 -1.32796 0.522222 
1.2425 -1.2425 0.384375 
1.15704 -1.15704 0.277778 
1.0913 -1.0913 0.200347 
1.065 -1.065 0.15 
0.997476 -1.69833 0.693403 
0.950425 -1.61822 0.522222 
0.889259 -1.51407 0.384375 
0.828093 -1.40993 0.277778 
0.781043 -1.32982 0.200347 
0.762222 -1.29778 0.15 
0.527092 -1.8939 0.693403 
0.502229 -1.80456 0.522222 
0.469907 -1.68843 0.384375 
0.437586 -1.57229 0.277778 
0.412723 -1.48296 0.200347 
0.402778 -1.44722 0.15 
0 -1.96296 0.693403 
0 -1.87037 0.522222 
0 -1.75 0.384375 
0 -1.62963 0.277778 
0 -1.53704 0.200347 
0 -1.5 0.15 
-0.527092 -1.8939 0.693403 
-0.502229 -1.80456 0.522222 
-0.469907 -1.68843 0.384375 
-0.437586 -1.57229 0.277778 
-0.412723 -1.48296 0.200347 
-0.402778 -1.44722 0.15 
-0.997476 -1.69833 0.693403 
-0.950425 -1.61822 0.522222 
-0.889259 -1.51407 0.384375 
-0.828093 -1.40993 0.277778 
-0.781043 -1.32982 0.200347 
-0.762222 -1.29778 0.15 
-1.3937 -1.3937 0.693403 
-1.32796 -1.32796 0.522222 
-1.2425 -1.2425 0.384375 
-1.15704 -1.15704 0.277778 
-1.0913 -1.0913 0.200347 
-1.065 -1.065 0.15 
-1.69833 -0.997476 0.693403 
-1.61822 -0.950425 0.522222 
-1.51407 -0.889259 0.384375 
-1.40993 -0.828093 0.277778 
-1.32982 -0.781043 0.200347 
-1.29778 -0.762222 0.15 
-1.8939 -0.527092 0.693403 
-1.80456 -0.502229 0.522222 
-1.68843 -0.469907 0.384375 
-1.57229 -0.437586 0.277778 
-1.48296 -0.412723 0.200347 
-1.44722 -0.402778 0.15 
-1.96296 0 0.693403 
-1.87037 0 0.522222 
-1.75 0 0.384375 
-1.62963 0 0.277778 
-1.53704 0 0.200347 
-1.5 0 0.15 
-1.8939 0.527092 0.693403 
-1.80456 0.502229 0.522222 
-1.68843 0.469907 0.384375 
-1.57229 0.437586 0.277778 
-1.48296 0.412723 0.200347 
-1.44722 0.402778 0.15 
-1.69833 0.997476 0.693403 
-1.61822 0.950425 0.522222 
-1.51407 0.889259 0.384375 
-1.40993 0.828093 0.277778 
-1.32982 0.781043 0.200347 
-1.29778 0.762222 0.15 
-1.3937 1.3937 0.693403 
-1.32796 1.32796 0.522222 
-1.2425 1.2425 0.384375 
-1.15704 1.15704 0.277778 
-1.0913 1.0913 0.200347 
-1.065 1.065 0.15 
-0.997476 1.69833 0.693403 
-0.950425 1.61822 0.522222 
-0.889259 1.51407 0.384375 
-0.828093 1.40993 0.277778 
-0.781043 1.32982 0.200347 
-0.762222 1.29778 0.15 
-0.527092 1.8939 0.693403 
-0.502229 1.80456 0.522222 
-0.469907 1.68843 0.384375 
-0.437586 1.57229 0.277778 
-0.412723 1.48296 0.200347 
-0.402778 1.44722 0.15 
0 1.96296 0.693403 
0 1.87037 0.522222 
0 1.75 0.384375 
0 1.62963 0.277778 
0 1.53704 0.200347 
0 1.5 0.15 
0.527092 1.8939 0.693403 
0.502229 1.80456 0.522222 
0.469907 1.68843 0.384375 
0.437586 1.57229 0.277778 
0.412723 1.48296 0.200347 
0.402778 1.44722 0.15 
0.997476 1.69833 0.693403 
0.950425 1.61822 0.522222 
0.889259 1.51407 0.384375 
0.828093 1.40993 0.277778 
0.781043 1.32982 0.200347 
0.762222 1.29778 0.15 
1.3937 1.3937 0.693403 
1.32796 1.32796 0.522222 
1.2425 1.2425 0.384375 
1.15704 1.15704 0.277778 
1.0913 1.0913 0.200347 
1.065 1.065 0.15 
1.69833 0.997476 0.693403 
1.61822 0.950425 0.522222 
1.51407 0.889259 0.384375 
1.40993 0.828093 0.277778 
1.32982 0.781043 0.200347 
1.29778 0.762222 0.15 
1.8939 0.527092 0.693403 
1.80456 0.502229 0.522222 
1.68843 0.469907 0.384375 
1.57229 0.437586 0.277778 
1.48296 0.412723 0.200347 
1.44722 0.402778 0.15 
0.605903 0 0.005903 
0 0 0 
0.584584 0.162696 0.005903 
1.02222 0 0.022222 
0.986255 0.274486 0.022222 
1.28437 0 0.046875 
1.23918 0.344878 0.046875 
1.42778 0 0.077778 
1.37754 0.383385 0.077778 
1.48785 0 0.112847 
1.4355 0.399515 0.112847 
0.524218 0.307888 0.005903 
0.884412 0.51944 0.022222 
1.11122 0.652653 0.046875 
1.23529 0.725523 0.077778 
1.28726 0.756047 0.112847 
0.430191 0.430191 0.005903 
0.725778 0.725778 0.022222 
0.911906 0.911906 0.046875 
1.01372 1.01372 0.077778 
1.05637 1.05637 0.112847 
0.307888 0.524218 0.005903 
0.51944 0.884412 0.022222 
0.652653 1.11122 0.046875 
0.725523 1.23529 0.077778 
0.756047 1.28726 0.112847 
0.162696 0.584584 0.005903 
0.274486 0.986255 0.022222 
0.344878 1.23918 0.046875 
0.383385 1.37754 0.077778 
0.399515 1.4355 0.112847 
0 0.605903 0.005903 
0 1.02222 0.022222 
0 1.28437 0.046875 
0 1.42778 0.077778 
0 1.48785 0.112847 
-0.162696 0.584584 0.005903 
-0.274486 0.986255 0.022222 
-0.344878 1.23918 0.046875 
-0.383385 1.37754 0.077778 
-0.399515 1.4355 0.112847 
-0.307888 0.524218 0.005903 
-0.51944 0.884412 0.022222 
-0.652653 1.11122 0.046875 
-0.725523 1.23529 0.077778 
-0.756047 1.28726 0.112847 
-0.430191 0.430191 0.005903 
-0.725778 0.725778 0.022222 
-0.911906 0.911906 0.046875 
-1.01372 1.01372 0.077778 
-1.05637 1.05637 0.112847 
-0.524218 0.307888 0.005903 
-0.884412 0.51944 0.022222 
-1.11122 0.652653 0.046875 
-1.23529 0.725523 0.077778 
-1.28726 0.756047 0.112847 
-0.584584 0.162696 0.005903 
-0.986255 0.274486 0.022222 
-1.23918 0.344878 0.046875 
-1.37754 0.383385 0.077778 
-1.4355 0.399515 0.112847 
-0.605903 0 0.005903 
-1.02222 0 0.022222 
-1.28437 0 0.046875 
-1.42778 0 0.077778 
-1.48785 0 0.112847 
-0.584584 -0.162696 0.005903 
-0.986255 -0.274486 0.022222 
-1.23918 -0.344878 0.046875 
-1.37754 -0.383385 0.077778 
-1.4355 -0.399515 0.112847 
-0.524218 -0.307888 0.005903 
-0.884412 -0.51944 0.022222 
-1.11122 -0.652653 0.046875 
-1.23529 -0.725523 0.077778 
-1.28726 -0.756047 0.112847 
-0.430191 -0.430191 0.005903 
-0.725778 -0.725778 0.022222 
-0.911906 -0.911906 0.046875 
-1.01372 -1.01372 0.077778 
-1.05637 -1.05637 0.112847 
-0.307888 -0.524218 0.005903 
-0.51944 -0.884412 0.022222 
-0.652653 -1.11122 0.046875 
-0.725523 -1.23529 0.077778 
-0.756047 -1.28726 0.112847 
-0.162696 -0.584584 0.005903 
-0.274486 -0.986255 0.022222 
-0.344878 -1.23918 0.046875 
-0.383385 -1.37754 0.077778 
-0.399515 -1.4355 0.112847 
0 -0.605903 0.005903 
0 -1.02222 0.022222 
0 -1.28437 0.046875 
0 -1.42778 0.077778 
0 -1.48785 0.112847 
0.162696 -0.584584 0.005903 
0.274486 -0.986255 0.022222 
0.344878 -1.23918 0.046875 
0.383385 -1.37754 0.077778 
0.399515 -1.4355 0.112847 
0.307888 -0.524218 0.005903 
0.51944 -0.884412 0.022222 
0.652653 -1.11122 0.046875 
0.725523 -1.23529 0.077778 
0.756047 -1.28726 0.112847 
0.430191 -0.430191 0.005903 
0.725778 -0.725778 0.022222 
0.911906 -0.911906 0.046875 
1.01372 -1.01372 0.077778 
1.05637 -1.05637 0.112847 
0.524218 -0.307888 0.005903 
0.884412 -0.51944 0.022222 
1.11122 -0.652653 0.046875 
1.23529 -0.725523 0.077778 
1.28726 -0.756047 0.112847 
0.584584 -0.162696 0.005903 
0.986255 -0.274486 0.022222 
1.23918 -0.344878 0.046875 
1.37754 -0.383385 0.077778 
1.4355 -0.399515 0.112847 
0.2 0 2.7 
0.171296 0 2.78542 
0.165279 -0.046045 2.78542 
0.192963 -0.053704 2.7 
0.148234 -0.087106 2.78542 
0.173037 -0.10163 2.7 
0.121672 -0.121672 2.78542 
0.142 -0.142 2.7 
0.087106 -0.148234 2.78542 
0.10163 -0.173037 2.7 
0.046045 -0.165279 2.78542 
0.053704 -0.192963 2.7 
0 -0.171296 2.78542 
0 -0.2 2.7 
-0.046045 -0.165279 2.78542 
-0.053704 -0.192963 2.7 
-0.087106 -0.148234 2.78542 
-0.10163 -0.173037 2.7 
-0.121672 -0.121672 2.78542 
-0.142 -0.142 2.7 
-0.148234 -0.087106 2.78542 
-0.173037 -0.10163 2.7 
-0.165279 -0.046045 2.78542 
-0.192963 -0.053704 2.7 
-0.171296 0 2.78542 
-0.2 0 2.7 
-0.165279 0.046045 2.78542 
-0.192963 0.053704 2.7 
-0.148234 0.087106 2.78542 
-0.173037 0.10163 2.7 
-0.121672 0.121672 2.78542 
-0.142 0.142 2.7 
-0.087106 0.148234 2.78542 
-0.10163 0.173037 2.7 
-0.046045 0.165279 2.78542 
-0.053704 0.192963 2.7 
0 0.171296 2.78542 
0 0.2 2.7 
0.046045 0.165279 2.78542 
0.053704 0.192963 2.7 
0.087106 0.148234 2.78542 
0.10163 0.173037 2.7 
0.121672 0.121672 2.78542 
0.142 0.142 2.7 
0.148234 0.087106 2.78542 
0.173037 0.10163 2.7 
0.165279 0.046045 2.78542 
0.192963 0.053704 2.7 
0.350926 0 2.63611 
0.338579 -0.09423 2.63611 
0.574074 0 2.58889 
0.553875 -0.15415 2.58889 
0.825 0 2.55 
0.795972 -0.221528 2.55 
1.05926 0 2.51111 
1.02199 -0.284431 2.51111 
1.23241 0 2.46389 
1.18904 -0.330924 2.46389 
1.3 0 2.4 
1.25426 -0.349074 2.4 
0.303616 -0.178322 2.63611 
0.49668 -0.291715 2.58889 
0.713778 -0.419222 2.55 
0.916455 -0.538261 2.51111 
1.06626 -0.626246 2.46389 
1.12474 -0.660593 2.4 
0.249157 -0.249157 2.63611 
0.407593 -0.407593 2.58889 
0.58575 -0.58575 2.55 
0.752074 -0.752074 2.51111 
0.875009 -0.875009 2.46389 
0.923 -0.923 2.4 
0.178322 -0.303616 2.63611 
0.291715 -0.49668 2.58889 
0.419222 -0.713778 2.55 
0.538261 -0.916455 2.51111 
0.626246 -1.06626 2.46389 
0.660593 -1.12474 2.4 
0.09423 -0.338579 2.63611 
0.15415 -0.553875 2.58889 
0.221528 -0.795972 2.55 
0.284431 -1.02199 2.51111 
0.330924 -1.18904 2.46389 
0.349074 -1.25426 2.4 
0 -0.350926 2.63611 
0 -0.574074 2.58889 
0 -0.825 2.55 
0 -1.05926 2.51111 
0 -1.23241 2.46389 
0 -1.3 2.4 
-0.09423 -0.338579 2.63611 
-0.15415 -0.553875 2.58889 
-0.221528 -0.795972 2.55 
-0.284431 -1.02199 2.51111 
-0.330924 -1.18904 2.46389 
-0.349074 -1.25426 2.4 
-0.178322 -0.303616 2.63611 
-0.291715 -0.49668 2.58889 
-0.419222 -0.713778 2.55 
-0.538261 -0.916455 2.51111 
-0.626246 -1.06626 2.46389 
-0.660593 -1.12474 2.4 
-0.249157 -0.249157 2.63611 
-0.407593 -0.407593 2.58889 
-0.58575 -0.58575 2.55 
-0.752074 -0.752074 2.51111 
-0.875009 -0.875009 2.46389 
-0.923 -0.923 2.4 
-0.303616 -0.178322 2.63611 
-0.49668 -0.291715 2.58889 
-0.713778 -0.419222 2.55 
-0.916455 -0.538261 2.51111 
-1.06626 -0.626246 2.46389 
-1.12474 -0.660593 2.4 
-0.338579 -0.09423 2.63611 
-0.553875 -0.15415 2.58889 
-0.795972 -0.221528 2.55 
-1.02199 -0.284431 2.51111 
-1.18904 -0.330924 2.46389 
-1.25426 -0.349074 2.4 
-0.350926 0 2.63611 
-0.574074 0 2.58889 
-0.825 0 2.55 
-1.05926 0 2.51111 
-1.23241 0 2.46389 
-1.3 0 2.4 
-0.338579 0.09423 2.63611 
-0.553875 0.15415 2.58889 
-0.795972 0.221528 2.55 
-1.02199 0.284431 2.51111 
-1.18904 0.330924 2.46389 
-1.25426 0.349074 2.4 
-0.303616 0.178322 2.63611 
-0.49668 0.291715 2.58889 
-0.713778 0.419222 2.55 
-0.916455 0.538261 2.51111 
-1.06626 0.626246 2.46389 
-1.12474 0.660593 2.4 
-0.249157 0.249157 2.63611 
-0.407593 0.407593 2.58889 
-0.58575 0.58575 2.55 
-0.752074 0.752074 2.51111 
-0.875009 0.875009 2.46389 
-0.923 0.923 2.4 
-0.178322 0.303616 2.63611 
-0.291715 0.49668 2.58889 
-0.419222 0.713778 2.55 
-0.538261 0.916455 2.51111 
-0.626246 1.06626 2.46389 
-0.660593 1.12474 2.4 
-0.09423 0.338579 2.63611 
-0.15415 0.553875 2.58889 
-0.221528 0.795972 2.55 
-0.284431 1.02199 2.51111 
-0.330924 1.18904 2.46389 
-0.349074 1.25426 2.4 
0 0.350926 2.63611 
0 0.574074 2.58889 
0 0.825 2.55 
0 1.05926 2.51111 
0 1.23241 2.46389 
0 1.3 2.4 
0.09423 0.338579 2.63611 
0.15415 0.553875 2.58889 
0.221528 0.795972 2.55 
0.284431 1.02199 2.51111 
0.330924 1.18904 2.46389 
0.349074 1.25426 2.4 
0.178322 0.303616 2.63611 
0.291715 0.49668 2.58889 
0.419222 0.713778 2.55 
0.538261 0.916455 2.51111 
0.626246 1.06626 2.46389 
0.660593 1.12474 2.4 
0.249157 0.249157 2.63611 
0.407593 0.407593 2.58889 
0.58575 0.58575 2.55 
0.752074 0.752074 2.51111 
0.875009 0.875009 2.46389 
0.923 0.923 2.4 
0.303616 0.178322 2.63611 
0.49668 0.291715 2.58889 
0.713778 0.419222 2.55 
0.916455 0.538261 2.51111 
1.06626 0.626246 2.46389 
1.12474 0.660593 2.4 
0.338579 0.09423 2.63611 
0.553875 0.15415 2.58889 
0.795972 0.221528 2.55 
1.02199 0.284431 2.51111 
1.18904 0.330924 2.46389 
1.25426 0.349074 2.4 
-1.92454 0 2.02396 
-1.6 0 2.025 
-1.59259 -0.125 2.04167 
-1.92704 -0.125 2.04055 
-2.1963 0 2.01667 
-2.20645 -0.125 2.03272 
-2.4125 0 1.99687 
-2.42824 -0.125 2.01146 
-2.57037 0 1.95833 
-2.58985 -0.125 1.97006 
-2.66713 0 1.89479 
-2.6887 -0.125 1.90181 
-2.7 0 1.8 
-2.72222 -0.125 1.8 
-1.57407 -0.2 2.08333 
-1.9333 -0.2 2.08202 
-2.23182 -0.2 2.07284 
-2.46759 -0.2 2.04792 
-2.63855 -0.2 1.99938 
-2.74263 -0.2 1.91937 
-2.77778 -0.2 1.8 
-1.55 -0.225 2.1375 
-1.94144 -0.225 2.13594 
-2.26481 -0.225 2.125 
-2.51875 -0.225 2.09531 
-2.70185 -0.225 2.0375 
-2.81273 -0.225 1.94219 
-2.85 -0.225 1.8 
-1.52593 -0.2 2.19167 
-1.94957 -0.2 2.18985 
-2.29781 -0.2 2.17716 
-2.56991 -0.2 2.14271 
-2.76516 -0.2 2.07562 
-2.88284 -0.2 1.96501 
-2.92222 -0.2 1.8 
-1.50741 -0.125 2.23333 
-1.95583 -0.125 2.23133 
-2.32318 -0.125 2.21728 
-2.60926 -0.125 2.17917 
-2.81385 -0.125 2.10494 
-2.93676 -0.125 1.98256 
-2.97778 -0.125 1.8 
-1.5 0 2.25 
-1.95833 0 2.24792 
-2.33333 0 2.23333 
-2.625 0 2.19375 
-2.83333 0 2.11667 
-2.95833 0 1.98958 
-3 0 1.8 
-1.50741 0.125 2.23333 
-1.95583 0.125 2.23133 
-2.32318 0.125 2.21728 
-2.60926 0.125 2.17917 
-2.81385 0.125 2.10494 
-2.93676 0.125 1.98256 
-2.97778 0.125 1.8 
-1.52593 0.2 2.19167 
-1.94957 0.2 2.18985 
-2.29781 0.2 2.17716 
-2.56991 0.2 2.14271 
-2.76516 0.2 2.07562 
-2.88284 0.2 1.96501 
-2.92222 0.2 1.8 
-1.55 0.225 2.1375 
-1.94144 0.225 2.13594 
-2.26481 0.225 2.125 
-2.51875 0.225 2.09531 
-2.70185 0.225 2.0375 
-2.81273 0.225 1.94219 
-2.85 0.225 1.8 
-1.57407 0.2 2.08333 
-1.9333 0.2 2.08202 
-2.23182 0.2 2.07284 
-2.46759 0.2 2.04792 
-2.63855 0.2 1.99938 
-2.74263 0.2 1.91937 
-2.77778 0.2 1.8 
-1.59259 0.125 2.04167 
-1.92704 0.125 2.04055 
-2.20645 0.125 2.03272 
-2.42824 0.125 2.01146 
-2.58985 0.125 1.97006 
-2.6887 0.125 1.90181 
-2.72222 0.125 1.8 
-2.68287 0 1.67083 
-2.70418 -0.125 1.66398 
-2.62963 0 1.51667 
-2.64829 -0.125 1.50535 
-2.5375 0 1.35 
-2.55185 -0.125 1.33576 
-2.4037 0 1.18333 
-2.41221 -0.125 1.16687 
-2.22546 0 1.02917 
-2.22668 -0.125 1.01033 
-1.99259 -0.125 0.877778 
-2.75747 -0.2 1.64684 
-2.69492 -0.2 1.47706 
-2.58773 -0.2 1.30017 
-2.43347 -0.2 1.12572 
-2.22972 -0.2 0.963227 
-1.97407 -0.2 0.822222 
-2.82674 -0.225 1.62457 
-2.75556 -0.225 1.44028 
-2.63437 -0.225 1.25391 
-2.46111 -0.225 1.07222 
-2.23368 -0.225 0.901997 
-1.95 -0.225 0.75 
-2.896 -0.2 1.60229 
-2.81619 -0.2 1.4035 
-2.68102 -0.2 1.20764 
-2.48875 -0.2 1.01872 
-2.23764 -0.2 0.840766 
-1.92593 -0.2 0.677778 
-2.94929 -0.125 1.58515 
-2.86283 -0.125 1.37521 
-2.7169 -0.125 1.17205 
-2.51001 -0.125 0.977572 
-2.24068 -0.125 0.793666 
-1.90741 -0.125 0.622222 
-2.9706 0 1.5783 
-2.88148 0 1.36389 
-2.73125 0 1.15781 
-2.51852 0 0.961111 
-2.2419 0 0.774826 
-1.9 0 0.6 
-2.94929 0.125 1.58515 
-2.86283 0.125 1.37521 
-2.7169 0.125 1.17205 
-2.51001 0.125 0.977572 
-2.24068 0.125 0.793666 
-1.90741 0.125 0.622222 
-2.896 0.2 1.60229 
-2.81619 0.2 1.4035 
-2.68102 0.2 1.20764 
-2.48875 0.2 1.01872 
-2.23764 0.2 0.840766 
-1.92593 0.2 0.677778 
-2.82674 0.225 1.62457 
-2.75556 0.225 1.44028 
-2.63437 0.225 1.25391 
-2.46111 0.225 1.07222 
-2.23368 0.225 0.901997 
-1.95 0.225 0.75 
-2.75747 0.2 1.64684 
-2.69492 0.2 1.47706 
-2.58773 0.2 1.30017 
-2.43347 0.2 1.12572 
-2.22972 0.2 0.963227 
-1.97407 0.2 0.822222 
-2.70418 0.125 1.66398 
-2.64829 0.125 1.50535 
-2.55185 0.125 1.33576 
-2.41221 0.125 1.16687 
-2.22668 0.125 1.01033 
-1.99259 0.125 0.877778 
2.0588 0 1.47639 
1.7 0 1.425 
1.7 -0.275 1.36389 
2.07238 -0.262346 1.42521 
2.27037 0 1.61111 
2.29012 -0.23071 1.57202 
2.3875 0 1.8 
2.40972 -0.189583 1.77361 
2.46296 0 2.01389 
2.48765 -0.148457 1.99928 
2.54954 0 2.22361 
2.5804 -0.116821 2.21831 
2.7 0 2.4 
2.74444 -0.104167 2.4 
1.7 -0.44 1.21111 
2.10633 -0.419753 1.29725 
2.33951 -0.369136 1.47428 
2.46528 -0.303333 1.70764 
2.54938 -0.237531 1.96276 
2.65756 -0.186914 2.20507 
2.85556 -0.166667 2.4 
1.7 -0.495 1.0125 
2.15046 -0.472222 1.1309 
2.4037 -0.415278 1.34722 
2.5375 -0.34125 1.62187 
2.62963 -0.267222 1.91528 
2.75787 -0.210278 2.18785 
3 -0.1875 2.4 
1.7 -0.44 0.813889 
2.1946 -0.419753 0.964558 
2.4679 -0.369136 1.22016 
2.60972 -0.303333 1.53611 
2.70988 -0.237531 1.8678 
2.85818 -0.186914 2.17063 
3.14444 -0.166667 2.4 
1.7 -0.275 0.661111 
2.22855 -0.262346 0.8366 
2.51728 -0.23071 1.12243 
2.66528 -0.189583 1.47014 
2.7716 -0.148457 1.83128 
2.93534 -0.116821 2.15738 
3.25556 -0.104167 2.4 
1.7 0 0.6 
2.24213 0 0.785417 
2.53704 0 1.08333 
2.6875 0 1.44375 
2.7963 0 1.81667 
2.9662 0 2.15208 
3.3 0 2.4 
1.7 0.275 0.661111 
2.22855 0.262346 0.8366 
2.51728 0.23071 1.12243 
2.66528 0.189583 1.47014 
2.7716 0.148457 1.83128 
2.93534 0.116821 2.15738 
3.25556 0.104167 2.4 
1.7 0.44 0.813889 
2.1946 0.419753 0.964558 
2.4679 0.369136 1.22016 
2.60972 0.303333 1.53611 
2.70988 0.237531 1.8678 
2.85818 0.186914 2.17063 
3.14444 0.166667 2.4 
1.7 0.495 1.0125 
2.15046 0.472222 1.1309 
2.4037 0.415278 1.34722 
2.5375 0.34125 1.62187 
2.62963 0.267222 1.91528 
2.75787 0.210278 2.18785 
3 0.1875 2.4 
1.7 0.44 1.21111 
2.10633 0.419753 1.29725 
2.33951 0.369136 1.47428 
2.46528 0.303333 1.70764 
2.54938 0.237531 1.96276 
2.65756 0.186914 2.20507 
2.85556 0.166667 2.4 
1.7 0.275 1.36389 
2.07238 0.262346 1.42521 
2.29012 0.23071 1.57202 
2.40972 0.189583 1.77361 
2.48765 0.148457 1.99928 
2.5804 0.116821 2.21831 
2.74444 0.104167 2.4 
2.74907 0 2.43125 
2.79641 -0.101032 2.43193 
2.79259 0 2.45 
2.83978 -0.092978 2.45123 
2.825 0 2.45625 
2.86968 -0.082031 2.45781 
2.84074 0 2.45 
2.88121 -0.070216 2.45154 
2.83426 0 2.43125 
2.86949 -0.059558 2.43231 
2.8 0 2.4 
2.82963 -0.052083 2.4 
2.91474 -0.161574 2.43361 
2.95775 -0.148148 2.45432 
2.98137 -0.129167 2.46172 
2.98237 -0.107407 2.4554 
2.95756 -0.085648 2.43496 
2.9037 -0.066667 2.4 
3.06858 -0.181684 2.43581 
3.11111 -0.165972 2.45833 
3.12656 -0.142969 2.4668 
3.11389 -0.115278 2.46042 
3.07205 -0.085504 2.43841 
3 -0.05625 2.4 
3.22241 -0.16142 2.438 
3.26447 -0.146914 2.46235 
3.27176 -0.125 2.47187 
3.2454 -0.097531 2.46543 
3.18654 -0.066358 2.44186 
3.0963 -0.033333 2.4 
3.34075 -0.100839 2.43969 
3.38244 -0.091435 2.46543 
3.38345 -0.076823 2.47578 
3.34657 -0.05787 2.46929 
3.27461 -0.035446 2.44451 
3.17037 -0.010417 2.4 
3.38808 0 2.44036 
3.42963 0 2.46667 
3.42813 0 2.47734 
3.38704 0 2.47083 
3.30984 0 2.44557 
3.2 0 2.4 
3.34075 0.10108 2.43969 
3.38244 0.093364 2.46543 
3.38345 0.083333 2.47578 
3.34657 0.073303 2.46929 
3.27461 0.065586 2.44451 
3.17037 0.0625 2.4 
3.22241 0.161728 2.438 
3.26447 0.149383 2.46235 
3.27176 0.133333 2.47187 
3.2454 0.117284 2.46543 
3.18654 0.104938 2.44186 
3.0963 0.1 2.4 
3.06858 0.181944 2.43581 
3.11111 0.168056 2.45833 
3.12656 0.15 2.4668 
3.11389 0.131944 2.46042 
3.07205 0.118056 2.43841 
3 0.1125 2.4 
2.91474 0.161728 2.43361 
2.95775 0.149383 2.45432 
2.98137 0.133333 2.46172 
2.98237 0.117284 2.4554 
2.95756 0.104938 2.43496 
2.9037 0.1 2.4 
2.79641 0.10108 2.43193 
2.83978 0.093364 2.45123 
2.86968 0.083333 2.45781 
2.88121 0.073303 2.45154 
2.86949 0.065586 2.43231 
2.82963 0.0625 2.4 
0.278704 0 3.12708 
0 0 3.15 
0.268946 -0.075078 3.12708 
0.362963 0 3.06667 
0.350254 -0.097771 3.06667 
0.325 0 2.98125 
0.313617 -0.087529 2.98125 
0.237037 0 2.88333 
0.228728 -0.063803 2.88333 
0.241285 -0.141931 3.12708 
0.314228 -0.184834 3.06667 
0.281352 -0.165481 2.98125 
0.20518 -0.120647 2.88333 
0.19814 -0.19814 3.12708 
0.258037 -0.258037 3.06667 
0.231031 -0.231031 2.98125 
0.168463 -0.168463 2.88333 
0.141931 -0.241285 3.12708 
0.184834 -0.314228 3.06667 
0.165481 -0.281352 2.98125 
0.120647 -0.20518 2.88333 
0.075078 -0.268946 3.12708 
0.097771 -0.350254 3.06667 
0.087529 -0.313617 2.98125 
0.063803 -0.228728 2.88333 
0 -0.278704 3.12708 
0 -0.362963 3.06667 
0 -0.325 2.98125 
0 -0.237037 2.88333 
-0.075078 -0.268946 3.12708 
-0.097771 -0.350254 3.06667 
-0.087529 -0.313617 2.98125 
-0.063803 -0.228728 2.88333 
-0.141931 -0.241285 3.12708 
-0.184834 -0.314228 3.06667 
-0.165481 -0.281352 2.98125 
-0.120647 -0.20518 2.88333 
-0.19814 -0.19814 3.12708 
-0.258037 -0.258037 3.06667 
-0.231031 -0.231031 2.98125 
-0.168463 -0.168463 2.88333 
-0.241285 -0.141931 3.12708 
-0.314228 -0.184834 3.06667 
-0.281352 -0.165481 2.98125 
-0.20518 -0.120647 2.88333 
-0.268946 -0.075078 3.12708 
-0.350254 -0.097771 3.06667 
-0.313617 -0.087529 2.98125 
-0.228728 -0.063803 2.88333 
-0.278704 0 3.12708 
-0.362963 0 3.06667 
-0.325 0 2.98125 
-0.237037 0 2.88333 
-0.268946 0.075078 3.12708 
-0.350254 0.097771 3.06667 
-0.313617 0.087529 2.98125 
-0.228728 0.063803 2.88333 
-0.241285 0.141931 3.12708 
-0.314228 0.184834 3.06667 
-0.281352 0.165481 2.98125 
-0.20518 0.120647 2.88333 
-0.19814 0.19814 3.12708 
-0.258037 0.258037 3.06667 
-0.231031 0.231031 2.98125 
-0.168463 0.168463 2.88333 
-0.141931 0.241285 3.12708 
-0.184834 0.314228 3.06667 
-0.165481 0.281352 2.98125 
-0.120647 0.20518 2.88333 
-0.075078 0.268946 3.12708 
-0.097771 0.350254 3.06667 
-0.087529 0.313617 2.98125 
-0.063803 0.228728 2.88333 
0 0.278704 3.12708 
0 0.362963 3.06667 
0 0.325 2.98125 
0 0.237037 2.88333 
0.075078 0.268946 3.12708 
0.097771 0.350254 3.06667 
0.087529 0.313617 2.98125 
0.063803 0.228728 2.88333 
0.141931 0.241285 3.12708 
0.184834 0.314228 3.06667 
0.165481 0.281352 2.98125 
0.120647 0.20518 2.88333 
0.19814 0.19814 3.12708 
0.258037 0.258037 3.06667 
0.231031 0.231031 2.98125 
0.168463 0.168463 2.88333 
0.241285 0.141931 3.12708 
0.314228 0.184834 3.06667 
0.281352 0.165481 2.98125 
0.20518 0.120647 2.88333 
0.268946 0.075078 3.12708 
0.350254 0.097771 3.06667 
0.313617 0.087529 2.98125 
0.228728 0.063803 2.88333`